import React, { useState, useEffect } from 'react';
import pricingConfig from '../data/pricingConfig';

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
    dataVolumeGB: 5000, // Estimated for Nuvei volumes
    monthlyTransactions: 600000000, // 20M daily * 30 days
    monthlyMovements: 300000000, // 10M daily * 30 days
    projectDurationMonths: 12,
    expectedQueryWorkload: 'medium' // light, medium, heavy
  });

  const [results, setResults] = useState({});
  const [selectedPlatform, setSelectedPlatform] = useState('databricks');
  const [showVolumeEstimator, setShowVolumeEstimator] = useState(false);
  const [volumeInputs, setVolumeInputs] = useState({
    dailyTransactions: 20000000, // 20M daily transactions
    dataRetentionMonths: 84, // 7 years for financial compliance
    avgRecordSizeKB: 1.5
  });

  // Volume-based estimation functions
  const calculateFromVolumes = () => {
    // Use Nuvei's actual daily volumes
    const monthlyTransactions = 600000000; // 20M daily * 30
    const monthlyMovements = 300000000; // 10M daily * 30
    
    // Calculate storage needed for 7 years retention
    const dataVolumeGB = (monthlyTransactions * volumeInputs.avgRecordSizeKB * volumeInputs.dataRetentionMonths) / (1024 * 1024);
    
    // Auto-fill the main form
    setInputs(prev => ({
      ...prev,
      monthlyTransactions: monthlyTransactions,
      monthlyMovements: monthlyMovements,
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

  // Platform configurations from pricing config
  const platformConfigs = {
    databricks: {
      name: pricingConfig.platforms.databricks.name,
      color: 'purple',
      baseDBURate: pricingConfig.platforms.databricks.pricing.dbu.default,
      storageRate: pricingConfig.platforms.databricks.pricing.storage.default,
      storageEfficiency: 0.25,
      computeEfficiencyFactor: pricingConfig.platforms.databricks.pricing.compute.efficiencyFactor,
      dbusPerMillionTransactions: pricingConfig.platforms.databricks.pricing.compute.dbusPerMillionTransactions,
      dbusPerMillionMovements: pricingConfig.platforms.databricks.pricing.compute.dbusPerMillionMovements,
      sources: pricingConfig.platforms.databricks.sources
    },
    snowflake: {
      name: pricingConfig.platforms.snowflake.name,
      color: 'cyan',
      baseCreditRate: pricingConfig.platforms.snowflake.pricing.credits.default,
      storageRate: pricingConfig.platforms.snowflake.pricing.storage.default / 1000, // $23/TB converted to $/GB
      storageEfficiency: 0.05,
      computeEfficiencyFactor: pricingConfig.platforms.snowflake.pricing.compute.efficiencyFactor,
      creditsPerMillionTransactions: pricingConfig.platforms.snowflake.pricing.compute.creditsPerMillionTransactions,
      creditsPerMillionMovements: pricingConfig.platforms.snowflake.pricing.compute.creditsPerMillionMovements,
      sources: pricingConfig.platforms.snowflake.sources
    },
    fabric: {
      name: pricingConfig.platforms.fabric.name,
      color: 'green',
      baseCURate: pricingConfig.platforms.fabric.pricing.capacityUnits.default,
      storageRate: pricingConfig.platforms.fabric.pricing.storage.default,
      storageEfficiency: 0.10,
      computeEfficiencyFactor: pricingConfig.platforms.fabric.pricing.compute.efficiencyFactor,
      cusPerMillionTransactions: pricingConfig.platforms.fabric.pricing.compute.cusPerMillionTransactions,
      cusPerMillionMovements: pricingConfig.platforms.fabric.pricing.compute.cusPerMillionMovements,
      sources: pricingConfig.platforms.fabric.sources
    }
  };

  const calculateCosts = () => {
    const platform = platformConfigs[selectedPlatform];
    
    // Storage cost using platform-specific rates and efficiency
    const storageGB = inputs.dataVolumeGB;
    const storageCost = storageGB * platform.storageRate * (1 - platform.storageEfficiency);
    
    // Platform-specific compute cost calculation
    let computeCost = 0;
    
    if (selectedPlatform === 'databricks') {
      // DBU-based pricing using config values
      const transactionDBUs = (inputs.monthlyTransactions / 1000000) * platform.dbusPerMillionTransactions;
      const movementDBUs = (inputs.monthlyMovements / 1000000) * platform.dbusPerMillionMovements;
      const totalDBUs = transactionDBUs + movementDBUs;
      computeCost = totalDBUs * platform.baseDBURate * platform.computeEfficiencyFactor; // DBUs are consumption units, not hourly
    } else if (selectedPlatform === 'snowflake') {
      // Credit-based pricing - credits are consumed per query/workload, not per hour
      const transactionCredits = (inputs.monthlyTransactions / 1000000) * platform.creditsPerMillionTransactions;
      const movementCredits = (inputs.monthlyMovements / 1000000) * platform.creditsPerMillionMovements;
      const totalCredits = transactionCredits + movementCredits;
      // Snowflake credits are already monthly consumption, not hourly like DBUs/CUs
      computeCost = totalCredits * platform.baseCreditRate * platform.computeEfficiencyFactor;
    } else if (selectedPlatform === 'fabric') {
      // CU-based pricing using config values
      const transactionCUs = (inputs.monthlyTransactions / 1000000) * platform.cusPerMillionTransactions;
      const movementCUs = (inputs.monthlyMovements / 1000000) * platform.cusPerMillionMovements;
      const totalCUs = transactionCUs + movementCUs;
      computeCost = totalCUs * platform.baseCURate * platform.computeEfficiencyFactor; // CUs are consumption units, not hourly
    }
    
    // Workload multiplier from config
    const workloadMultiplier = pricingConfig.workloadMultipliers[inputs.expectedQueryWorkload]?.factor || 1.0;
    
    const totalMonthlyCost = (storageCost + computeCost) * workloadMultiplier;
    
    // Setup costs (one-time) from config
    const migrationCost = pricingConfig.additionalCosts.migration[selectedPlatform] || 50000;
    const trainingCost = pricingConfig.additionalCosts.training[selectedPlatform] || 15000;
    const oneTimeCosts = migrationCost + trainingCost;
    
    // Total cost over project duration
    const totalProjectCost = (totalMonthlyCost * inputs.projectDurationMonths) + oneTimeCosts;
    
    setResults({
      storageCost: storageCost,
      computeCost: computeCost,
      monthlyPlatformCost: totalMonthlyCost,
      migrationCost: migrationCost,
      trainingCost: trainingCost,
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
    if (field === 'expectedQueryWorkload') {
      setInputs(prev => ({
        ...prev,
        [field]: value
      }));
    } else {
      setInputs(prev => ({
        ...prev,
        [field]: parseFloat(value) || 0
      }));
    }
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
          Nuvei DWH Migration Cost Analysis
        </h1>
        <p className="text-white/80">Compare migration costs from SingleStore to cloud platforms</p>
        <p className="text-xs text-white/60 mt-1">Current: SingleStore On-Premise ($200k/year) | Target: Cloud DWH Solutions</p>
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
              <div className="bg-blue-50 p-3 rounded mb-4">
                <h4 className="font-medium text-blue-800 mb-2">Nuvei Volume Profile</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <div>• Daily Transactions: 20 million</div>
                  <div>• Daily Movements: 10 million</div>
                  <div>• Peak Multiplier: 2.5x (Black Friday)</div>
                  <div>• Data Retention: 7 years (compliance)</div>
                  <div>• Global Regions: 5 regions</div>
                  <div>• Real-time Requirements: Sub-100ms</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-600">
                  <strong>Nuvei Defaults:</strong> 600M transactions/month, 300M movements/month<br/>
                  Using: 20M daily transactions, 7-year retention, financial compliance requirements
                </div>
                <button
                  onClick={calculateFromVolumes}
                  className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors font-medium"
                >
                  Apply Nuvei Defaults
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
                  min="10000000"
                  max="1000000000"
                  step="10000000"
                  value={inputs.monthlyTransactions}
                  onChange={(e) => handleInputChange('monthlyTransactions', e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>10M</span>
                  <span className="font-medium text-gray-700">{(inputs.monthlyTransactions / 1000000).toFixed(0)}M</span>
                  <span>1000M</span>
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
                  min="5000000"
                  max="500000000"
                  step="5000000"
                  value={inputs.monthlyMovements}
                  onChange={(e) => handleInputChange('monthlyMovements', e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5M</span>
                  <span className="font-medium text-gray-700">{(inputs.monthlyMovements / 1000000).toFixed(0)}M</span>
                  <span>500M</span>
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
              <div className="mt-2 text-xs text-gray-500">
                Current SingleStore: {formatCurrency(200000)} annually
                <br />Annual projection: {formatCurrency((results.monthlyPlatformCost || 0) * 12)}
              </div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Monthly Cost Breakdown*</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <InfoTooltip text={`Storage cost: ${platformConfigs[selectedPlatform]?.storageRate || 0.023}/GB × data volume × efficiency factor (${((1-platformConfigs[selectedPlatform]?.storageEfficiency || 0)*100).toFixed(0)}% of base rate after optimization)`}>
                  <span className="text-gray-700">Storage Cost</span>
                </InfoTooltip>
                <span className="font-medium">{formatCurrency(results.storageCost || 0)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b">
                <InfoTooltip text={`Compute cost: ${
                  selectedPlatform === 'databricks' ? `DBU-based (avg $${platformConfigs.databricks.baseDBURate}/DBU × estimated DBUs for workload)` :
                  selectedPlatform === 'snowflake' ? `Credit-based (avg $${platformConfigs.snowflake.baseCreditRate}/credit × estimated credits for workload)` :
                  `CU-based (avg $${platformConfigs.fabric.baseCURate}/CU-hour × estimated CU hours for workload)`
                }. Based on 2025 official vendor pricing research.`}>
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
                <InfoTooltip text="One-time migration cost from SingleStore to new platform">
                  <span className="text-gray-700">Migration Services</span>
                </InfoTooltip>
                <span className="font-medium">{formatCurrency(results.migrationCost || 0)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <InfoTooltip text="Team training and certification costs">
                  <span className="text-gray-700">Training & Certification</span>
                </InfoTooltip>
                <span className="font-medium">{formatCurrency(results.trainingCost || 0)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-t font-bold">
                <span className="text-gray-800">Total One-time Costs</span>
                <span className="text-orange-600">{formatCurrency(results.oneTimeCosts || 0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nuvei-Specific Context */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <h4 className="font-medium text-green-800 mb-3">🏢 Nuvei Current State & Migration Context</h4>
        <div className="space-y-2 text-sm text-green-700">
          <div><strong>Current System:</strong> SingleStore On-Premise - $200,000/year fixed license</div>
          <div><strong>Daily Volumes:</strong> 20M transactions, 10M movements (600M/300M monthly)</div>
          <div><strong>Peak Periods:</strong> 2.5x volume during Black Friday/Cyber Monday</div>
          <div><strong>Compliance:</strong> PCI-DSS, SOX, GDPR requirements with 7-year retention</div>
          <div><strong>Global Operations:</strong> 5 regions requiring multi-region deployment</div>
        </div>
      </div>

      {/* Pricing Sources */}
      <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-800 mb-3">📊 Pricing Methodology & Sources</h4>
        <div className="space-y-2 text-sm text-blue-700">
          {platformConfigs[selectedPlatform]?.sources?.map((source, idx) => (
            <div key={idx}>• {source}</div>
          ))}
          <div className="text-xs text-blue-600 mt-2">Calculations include workload-specific estimates for payment processing patterns</div>
        </div>
      </div>

      <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-medium text-yellow-800 mb-2">⚠️ Important Disclaimers</h4>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Pricing based on January 2025 public rates and may vary with enterprise agreements</li>
          <li>• Actual costs depend on negotiated contracts, usage patterns, and optimizations</li>
          <li>• Does not include network egress, backup, or disaster recovery costs</li>
          <li>• Peak period scaling (2.5x for Black Friday) may require additional capacity</li>
          <li>• Multi-region deployment costs not fully reflected in estimates</li>
          <li>• Always obtain official vendor quotes for accurate budget planning</li>
        </ul>
      </div>
    </div>
  );
};

export default ROICalculator;