import React, { useState } from 'react';
import aiCapabilityData from '../data/aiCapabilityData';
import '../styles/buttons.css';

const AICapabilityMatrix = () => {
  // State to track which comparison is expanded
  const [expandedItem, setExpandedItem] = useState(null);
  // State for viewing mode
  const [viewMode, setViewMode] = useState('all');
  // State for showing the quick metrics column
  const [showQuickMetrics, setShowQuickMetrics] = useState(true);

  // Toggle expanded state
  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  // Function to render the metrics badge
  const renderMetricsBadge = (metrics) => {
    if (!metrics) return null;
    
    let badgeColor = "bg-gray-100 text-gray-800";
    let icon = "⚖️";
    
    if (metrics.winner === 'databricks') {
      badgeColor = "bg-purple-100 text-purple-800";
      icon = "🔥";
    } else if (metrics.winner === 'singlestore') {
      badgeColor = "bg-blue-100 text-blue-800";
      icon = "🔥";
    } else if (metrics.winner === 'snowflake') {
      badgeColor = "bg-cyan-100 text-cyan-800";
      icon = "🔥";
    } else if (metrics.winner === 'conditional') {
      badgeColor = "bg-yellow-100 text-yellow-800";
      icon = "⚖️";
    }
    
    return (
      <div className={`rounded-full px-3 py-1 text-xs font-medium ${badgeColor} flex items-center`}>
        <span className="mr-1">{icon}</span>
        {metrics.type === 'performance' ? 'Performance' : 
         metrics.type === 'cost' ? 'Cost Efficiency' : 
         metrics.type === 'efficiency' ? 'Efficiency' : 
         'Comparison'}
      </div>
    );
  };

  // Function to extract the key metrics from the description
  const getMetricsSummary = (item) => {
    if (!item.metrics) return "No comparative data available";
    
    // Use the actual metrics description to extract key data points
    const description = item.metrics.description;
    let summaryText = "";
    
    if (item.metrics.winner === 'databricks') {
      // Extract the Databricks-specific metric from the description
      const databricksMatch = description.match(/Databricks:([^|]+)/);
      if (databricksMatch && databricksMatch[1]) {
        summaryText = `Winner: Databricks - ${databricksMatch[1].trim()}`;
      } else {
        summaryText = `Winner: Databricks - ${description}`;
      }
    } else if (item.metrics.winner === 'singlestore') {
      // Extract the SingleStore-specific metric
      const singlestoreMatch = description.match(/SingleStore:([^|]+)/);
      if (singlestoreMatch && singlestoreMatch[1]) {
        summaryText = `Winner: SingleStore - ${singlestoreMatch[1].trim()}`;
      } else {
        summaryText = `Winner: SingleStore - ${description}`;
      }
    } else if (item.metrics.winner === 'snowflake') {
      // Extract the Snowflake-specific metric
      const snowflakeMatch = description.match(/Snowflake:([^|]+)/);
      if (snowflakeMatch && snowflakeMatch[1]) {
        summaryText = `Winner: Snowflake - ${snowflakeMatch[1].trim()}`;
      } else {
        summaryText = `Winner: Snowflake - ${description}`;
      }
    } else if (item.metrics.winner === 'conditional') {
      // For conditional winners, provide the specific conditions from the description
      summaryText = description;
    } else {
      // For qualitative comparisons, use the original description
      summaryText = description;
    }
    
    return summaryText;
  };

  // Get a color class for the metric summary based on the winner
  const getMetricsSummaryColor = (metrics) => {
    if (!metrics) return "text-gray-600";
    
    if (metrics.winner === 'databricks') {
      return "text-purple-700";
    } else if (metrics.winner === 'singlestore') {
      return "text-blue-700";
    } else if (metrics.winner === 'snowflake') {
      return "text-cyan-700";
    } else {
      return "text-gray-600";
    }
  };

  // Filter the data based on the view mode
  const filteredData = aiCapabilityData.filter(item => {
    if (viewMode === 'all') return true;
    if (viewMode === 'performance') return item.metrics?.type === 'performance';
    if (viewMode === 'cost') return item.metrics?.type === 'cost';
    if (viewMode === 'efficiency') return item.metrics?.type === 'efficiency';
    return true;
  });

  // Group the filtered data by category
  const groupedByCategory = filteredData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Calculate widths for a two-platform comparison
  const getTitleWidth = () => {
    if (showQuickMetrics) {
      return 'w-1/4';
    } else {
      return 'w-1/3';
    }
  };

  const getColumnWidth = () => {
    if (showQuickMetrics) {
      return 'w-1/4';
    } else {
      return 'w-1/3';
    }
  };

  const getQuickMetricsWidth = () => {
    return 'w-1/4';
  };

  return (
    <div>
      {/* Header with blue-to-purple gradient */}
      <div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg mb-4 text-center"
      >
        <h1 className="text-3xl font-bold text-white mb-2">
          AI Capability Matrix
        </h1>
        <p className="text-white/80">Databricks vs Snowflake for Machine Learning and AI Workloads</p>
      </div>
      
      {/* Focus filter */}
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow mb-4">
        <h3 className="text-center text-sm font-medium text-gray-700 mb-3">Focus Area</h3>
        <div className="flex justify-center flex-wrap gap-2">
          <button 
            onClick={() => setViewMode('all')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            All Capabilities
          </button>
          <button 
            onClick={() => setViewMode('performance')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'performance' ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-600 hover:bg-purple-100'}`}
          >
            Performance
          </button>
          <button 
            onClick={() => setViewMode('efficiency')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'efficiency' ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}
          >
            Developer Efficiency
          </button>
          <button 
            onClick={() => setViewMode('cost')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'cost' ? 'bg-cyan-600 text-white' : 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100'}`}
          >
            Cost Efficiency
          </button>
        </div>
      </div>
      
      {/* Quick metrics toggle */}
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow mb-8">
        <div className="flex justify-center items-center">
          <span className="mr-3 text-sm font-medium text-gray-700">Show Key Metrics Summary:</span>
          <button 
            onClick={() => setShowQuickMetrics(!showQuickMetrics)}
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${showQuickMetrics ? 'bg-blue-600' : 'bg-gray-200'}`}
            role="switch"
            aria-checked={showQuickMetrics}
          >
            <span 
              aria-hidden="true" 
              className={`${showQuickMetrics ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
            ></span>
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        {Object.entries(groupedByCategory).map(([category, items]) => (
          <div key={category} className="border-b last:border-b-0">
            <h2 className="bg-gray-100 font-semibold p-3 text-gray-700">{category}</h2>
            
            {items.map((item) => (
              <div key={item.id} className="border-t border-gray-200 first:border-t-0">
                <div 
                  className={`flex cursor-pointer hover:bg-gray-50 transition-colors ${expandedItem === item.id ? 'bg-blue-50' : ''}`}
                  onClick={() => toggleExpand(item.id)}
                >
                  {/* Feature Title Column */}
                  <div className={`${getTitleWidth()} p-4 font-medium flex items-center`}>
                    <div>
                      {item.title}
                      {item.metrics && (
                        <div className="mt-2">
                          {renderMetricsBadge(item.metrics)}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Quick Metrics Summary Column */}
                  {showQuickMetrics && (
                    <div className={`${getQuickMetricsWidth()} p-4 border-l border-r border-gray-200`}>
                      <div className="text-sm text-gray-600 font-semibold">Key Metrics</div>
                      <div className={`mt-1 text-sm ${getMetricsSummaryColor(item.metrics)}`}>
                        {getMetricsSummary(item)}
                      </div>
                    </div>
                  )}
                  
                  {/* Platform specific cells - now just Databricks and Snowflake */}
                  <div className={`${getColumnWidth()} p-4 border-l border-r border-gray-200`}>
                    <div className="text-sm text-purple-800 font-semibold">Databricks</div>
                    <div className="mt-1">{item.databricks}</div>
                  </div>
                  
                  <div className={`${getColumnWidth()} p-4`}>
                    <div className="text-sm text-cyan-800 font-semibold">Snowflake</div>
                    <div className="mt-1">{item.snowflake}</div>
                  </div>
                  
                  <div className="flex items-center px-4">
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform ${expandedItem === item.id ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {expandedItem === item.id && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium mb-2">Detailed Comparison</h3>
                        <p className="text-gray-700">{item.details}</p>
                      </div>
                      
                      {item.metrics && (
                        <div className="bg-white p-4 rounded shadow-sm">
                          <h3 className="font-medium mb-2">Performance & Efficiency Metrics</h3>
                          <p className="text-gray-700 mb-2">{item.metrics.description}</p>
                          <p className="text-xs text-gray-500">Source: {item.metrics.source}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">AI & ML Platform Decision Guide</h2>
        <p className="text-gray-700">This matrix compares the machine learning and AI capabilities of the two leading enterprise ML platforms: Databricks and Snowflake. Click any row to see detailed explanations of key differences.</p>
        <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <h3 className="text-purple-800 font-medium mb-1">Why This Comparison Matters</h3>
          <p className="text-sm text-purple-700">
            As organizations scale their AI initiatives, the choice between Databricks and Snowflake for ML workloads has significant implications for development speed, operational efficiency, and total cost of ownership. The right platform choice can reduce time-to-value for AI initiatives by 40-60% while improving model quality and reducing operational overhead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AICapabilityMatrix;