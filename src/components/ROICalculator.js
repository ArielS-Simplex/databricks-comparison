import React, { useState, useEffect } from 'react';

// Tooltip component for metric explanations
const InfoTooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="relative inline-block">
      <div 
        className="flex items-center cursor-help"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
        <span className="ml-1 text-blue-500 text-sm">ℹ️</span>
      </div>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg z-10 w-64">
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  );
};

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    dataVolumeGB: 2000,
    monthlyTransactions: 20000000, // 20M monthly transactions
    monthlyMovements: 10000000, // 10M monthly movements
    projectDurationMonths: 12,
    expectedQueryWorkload: 'medium' // light, medium, heavy
  });

  const [results, setResults] = useState({});
  const [selectedPlatform, setSelectedPlatform] = useState('databricks');
  const [showVolumeEstimator, setShowVolumeEstimator] = useState(false);
  const [volumeInputs, setVolumeInputs] = useState({
    dailyActiveUsers: 10000,
    transactionsPerUser: 50,
    dataRetentionMonths: 24,
    avgRecordSizeKB: 2
  });

  // Volume-based estimation functions
  const calculateFromVolumes = () => {
    // Calculate monthly transactions from daily users
    const monthlyTransactions = volumeInputs.dailyActiveUsers * volumeInputs.transactionsPerUser * 30;
    
    // Estimate movements as 50% of transactions (industry average for data pipelines)
    const monthlyMovements = monthlyTransactions * 0.5;
    
    // Calculate storage needed
    const dataVolumeGB = (monthlyTransactions * volumeInputs.avgRecordSizeKB * volumeInputs.dataRetentionMonths) / (1024 * 1024);
    
    // Auto-fill the main form
    setInputs(prev => ({
      ...prev,
      monthlyTransactions: Math.round(monthlyTransactions),
      monthlyMovements: Math.round(monthlyMovements),
      dataVolumeGB: Math.round(dataVolumeGB)
    }));
    
    setShowVolumeEstimator(false);
  };

  const handleVolumeInputChange = (field, value) => {
    setVolumeInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const platformConfigs = {
    databricks: {
      name: 'Databricks',
      color: 'purple',
      storageEfficiency: 0.25, // 25% more efficient storage*
      computeMultiplier: 1.3, // 30% higher compute cost (DBU-based)*
      maintenanceReduction: 0.55, // 55% less maintenance*
      performanceImprovement: 0.35, // 35% performance improvement*
      migrationComplexity: 0.9, // Higher migration effort*
      learningCurveWeeks: 10 // Steeper learning curve*
    },
    snowflake: {
      name: 'Snowflake',
      color: 'cyan',
      storageEfficiency: 0.05, // 5% more efficient*
      computeMultiplier: 1.5, // 50% higher compute cost (credit-based)*
      maintenanceReduction: 0.75, // 75% less maintenance*
      performanceImprovement: 0.20, // 20% performance improvement*
      migrationComplexity: 0.3, // Lower migration effort*
      learningCurveWeeks: 3 // Easier to learn*
    },
    fabric: {
      name: 'Microsoft Fabric',
      color: 'green',
      storageEfficiency: 0.10, // 10% more efficient*
      computeMultiplier: 1.2, // 20% higher compute cost (CU-based)*
      maintenanceReduction: 0.65, // 65% less maintenance*
      performanceImprovement: 0.15, // 15% performance improvement*
      migrationComplexity: 0.4, // Medium migration effort*
      learningCurveWeeks: 5 // Moderate learning curve*
    }
  };

  const calculateCosts = () => {
    const platform = platformConfigs[selectedPlatform];
    
    // Base storage cost
    const storageGB = inputs.dataVolumeGB;
    const storageCostPerGB = 0.023; // $0.023 per GB base*
    const storageCost = storageGB * storageCostPerGB * (1 - platform.storageEfficiency);
    
    // Compute cost based on transactions and movements*
    const transactionCost = (inputs.monthlyTransactions / 1000000) * 300; // $300 per million transactions*
    const movementCost = (inputs.monthlyMovements / 1000000) * 200; // $200 per million movements*
    const computeBaseCost = transactionCost + movementCost;
    const computeCost = computeBaseCost * platform.computeMultiplier;
    
    // Workload multiplier
    const workloadMultipliers = { light: 0.7, medium: 1.0, heavy: 1.5 };
    const workloadMultiplier = workloadMultipliers[inputs.expectedQueryWorkload] || 1.0;
    
    const totalMonthlyCost = (storageCost + computeCost) * workloadMultiplier;
    
    // Setup costs (one-time) - simplified without training costs
    const setupCost = totalMonthlyCost * platform.migrationComplexity; // Setup complexity as % of monthly cost
    const oneTimeCosts = setupCost;
    
    // Total cost over project duration
    const totalProjectCost = (totalMonthlyCost * inputs.projectDurationMonths) + oneTimeCosts;
    
    setResults({
      storageCost: storageCost,
      computeCost: computeCost,
      monthlyPlatformCost: totalMonthlyCost,
      setupCost: setupCost,
      oneTimeCosts: oneTimeCosts,
      totalProjectCost: totalProjectCost,
      platform: platform,
      workloadMultiplier: workloadMultiplier
    });
  };

  useEffect(() => {
    calculateCosts();
  }, [inputs, selectedPlatform]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD', 
      maximumFractionDigits: 0 
    }).format(amount);
  };

  const getColorClasses = (color) => ({
    bg: `bg-${color}-50`,
    border: `border-${color}-200`,
    text: `text-${color}-800`,
    button: `bg-${color}-600 hover:bg-${color}-700`
  });

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg mb-6 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">
          Cloud Platform Cost Comparison
        </h1>
        <p className="text-white/80">Compare costs across modern cloud data warehouse platforms*</p>
        <p className="text-xs text-white/60 mt-1">*Estimates based on industry pricing models and may vary by actual usage</p>
      </div>

      {/* Volume-Based Estimator */}
      <div className="mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Need to estimate your data volumes?</h3>
              <p className="text-sm text-gray-600">Calculate storage and transaction requirements from business metrics</p>
            </div>
            <button
              onClick={() => setShowVolumeEstimator(!showVolumeEstimator)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              {showVolumeEstimator ? 'Hide' : 'Estimate from Volume'}
            </button>
          </div>
          
          {showVolumeEstimator && (
            <div className="bg-white p-4 rounded border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Daily Active Users
                  </label>
                  <input
                    type="number"
                    value={volumeInputs.dailyActiveUsers}
                    onChange={(e) => handleVolumeInputChange('dailyActiveUsers', e.target.value)}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="10000"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Transactions per User/Day
                  </label>
                  <input
                    type="number"
                    value={volumeInputs.transactionsPerUser}
                    onChange={(e) => handleVolumeInputChange('transactionsPerUser', e.target.value)}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="50"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Data Retention (Months)
                  </label>
                  <input
                    type="number"
                    value={volumeInputs.dataRetentionMonths}
                    onChange={(e) => handleVolumeInputChange('dataRetentionMonths', e.target.value)}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="24"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Avg Record Size (KB)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={volumeInputs.avgRecordSizeKB}
                    onChange={(e) => handleVolumeInputChange('avgRecordSizeKB', e.target.value)}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="2.0"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-600">
                  Estimated: {(volumeInputs.dailyActiveUsers * volumeInputs.transactionsPerUser * 30 / 1000000).toFixed(1)}M transactions/month
                  , {((volumeInputs.dailyActiveUsers * volumeInputs.transactionsPerUser * 30 * volumeInputs.avgRecordSizeKB * volumeInputs.dataRetentionMonths) / (1024 * 1024)).toFixed(0)} GB storage
                </div>
                <button
                  onClick={calculateFromVolumes}
                  className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors font-medium"
                >
                  Auto-Fill Form
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Input Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Data Requirements</h2>
          
          <div className="space-y-4">
            {/* Platform Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Platform</label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(platformConfigs).map(([key, platform]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPlatform(key)}
                    className={`p-2 rounded text-sm font-medium transition-colors border ${
                      selectedPlatform === key
                        ? `${getColorClasses(platform.color).button} text-white border-transparent`
                        : 'bg-white text-gray-800 border-gray-300 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700'
                    }`}
                  >
                    {platform.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Query Workload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expected Query Workload</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'light', label: 'Light', desc: 'Basic reporting' },
                  { key: 'medium', label: 'Medium', desc: 'Regular analytics' },
                  { key: 'heavy', label: 'Heavy', desc: 'Complex queries' }
                ].map(({ key, label, desc }) => (
                  <button
                    key={key}
                    onClick={() => handleInputChange('expectedQueryWorkload', key)}
                    className={`p-2 rounded text-sm font-medium transition-colors border ${
                      inputs.expectedQueryWorkload === key
                        ? 'bg-blue-600 text-white border-transparent'
                        : 'bg-white text-gray-800 border-gray-300 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700'
                    }`}
                  >
                    <div>{label}</div>
                    <div className="text-xs opacity-75">{desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data Volume (GB)
              </label>
              <input
                type="number"
                value={inputs.dataVolumeGB}
                onChange={(e) => handleInputChange('dataVolumeGB', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="2000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Transactions
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="1000000"
                  max="100000000"
                  step="1000000"
                  value={inputs.monthlyTransactions}
                  onChange={(e) => handleInputChange('monthlyTransactions', e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1M</span>
                  <span className="font-medium text-gray-700">{(inputs.monthlyTransactions / 1000000).toFixed(0)}M</span>
                  <span>100M</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Movements
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="500000"
                  max="50000000"
                  step="500000"
                  value={inputs.monthlyMovements}
                  onChange={(e) => handleInputChange('monthlyMovements', e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0.5M</span>
                  <span className="font-medium text-gray-700">{(inputs.monthlyMovements / 1000000).toFixed(1)}M</span>
                  <span>50M</span>
                </div>
              </div>
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Duration (months)
              </label>
              <input
                type="number"
                value={inputs.projectDurationMonths}
                onChange={(e) => handleInputChange('projectDurationMonths', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="12"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          
          {/* Cost Summary */}
          <div className={`p-6 rounded-lg shadow-lg ${getColorClasses(results.platform?.color || 'blue').bg} ${getColorClasses(results.platform?.color || 'blue').border} border`}>
            <h2 className={`text-xl font-bold mb-4 ${getColorClasses(results.platform?.color || 'blue').text}`}>
              {results.platform?.name} Cost Estimate
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border">
                <div className="text-2xl font-bold text-blue-600">{formatCurrency(results.monthlyPlatformCost || 0)}</div>
                <div className="text-sm text-gray-600">Monthly platform cost</div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <div className="text-2xl font-bold text-orange-600">{formatCurrency(results.oneTimeCosts || 0)}</div>
                <div className="text-sm text-gray-600">One-time setup cost</div>
              </div>
            </div>

            <div className="mt-4 bg-white p-4 rounded border">
              <div className="text-xl font-bold text-gray-800">{formatCurrency(results.totalProjectCost || 0)}</div>
              <div className="text-sm text-gray-600">Total cost over {inputs.projectDurationMonths} months</div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Monthly Cost Breakdown*</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <InfoTooltip text="Storage cost: $0.023/GB base rate × data volume × platform efficiency factor. Each platform has different storage optimization capabilities.">
                  <span className="text-gray-700">Storage Cost</span>
                </InfoTooltip>
                <span className="font-medium">{formatCurrency(results.storageCost || 0)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b">
                <InfoTooltip text="Compute cost: (Transactions: $300/million + Movements: $200/million) × platform pricing multiplier based on their compute models (DBUs for Databricks, Credits for Snowflake, CUs for Fabric).">
                  <span className="text-gray-700">Compute Cost</span>
                </InfoTooltip>
                <span className="font-medium">{formatCurrency(results.computeCost || 0)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b bg-blue-50">
                <InfoTooltip text={`Total monthly cost including workload multiplier (${inputs.expectedQueryWorkload}: ${results.workloadMultiplier || 1}x). Light workloads cost less, heavy analytical workloads cost more.`}>
                  <span className="text-gray-700">Total Monthly Cost ({inputs.expectedQueryWorkload} workload)</span>
                </InfoTooltip>
                <span className="font-medium text-blue-600">{formatCurrency(results.monthlyPlatformCost || 0)}</span>
              </div>
            </div>
          </div>

          {/* One-time Costs */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">One-time Setup Costs</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <InfoTooltip text="Initial setup and configuration costs based on platform complexity. More complex platforms require more setup effort.">
                  <span className="text-gray-700">Setup & Configuration</span>
                </InfoTooltip>
                <span className="font-medium">{formatCurrency(results.setupCost || 0)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-t font-bold">
                <span className="text-gray-800">Total One-time Costs</span>
                <span className="text-orange-600">{formatCurrency(results.oneTimeCosts || 0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> This calculator provides comparative cost estimates for planning purposes. Actual 
          costs vary significantly based on specific usage patterns, contract negotiations, optimization strategies, 
          regional pricing, and implementation details. Always obtain official vendor quotes and conduct proof-of-concept 
          testing for accurate projections. This tool compares cloud platforms only and is not a migration ROI calculator.
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;