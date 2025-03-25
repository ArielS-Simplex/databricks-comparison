import React, { useState } from 'react';
import PageHeader from './common/PageHeader';
import aiCapabilityData from '../data/aiCapabilityData';
import executiveSummaryData from '../data/executiveSummaryData';
import '../styles/buttons.css';
import '../styles/common.css';

const AICapabilityMatrix = () => {
  // State to track which comparison is expanded
  const [expandedItem, setExpandedItem] = useState(null);
  // State for viewing mode (capability filter)
  const [viewMode, setViewMode] = useState('all');
  // State for audience view type (technical vs executive)
  const [audienceView, setAudienceView] = useState('executive');
  // State for showing the quick metrics column
  const [showQuickMetrics, setShowQuickMetrics] = useState(true);

  // Toggle expanded state
  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  // Toggle between technical and executive views
  const toggleAudienceView = () => {
    setAudienceView(audienceView === 'technical' ? 'executive' : 'technical');
  };

  // Function to render the metrics badge
  const renderMetricsBadge = (metrics) => {
    if (!metrics) return null;
    
    let badgeColor = "bg-gray-100 text-gray-800";
    let icon = "⚖️";
    
    if (metrics.winner === 'databricks') {
      badgeColor = "bg-purple-100 text-purple-800";
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

  // Render business outcome tags for executive view
  const renderBusinessOutcomeBadge = (outcome) => {
    if (!outcome) return null;
    
    let badgeColor = "bg-gray-100 text-gray-800";
    let icon = "💼";
    
    if (outcome === 'cost-reduction') {
      badgeColor = "bg-green-100 text-green-800";
      icon = "💰";
    } else if (outcome === 'time-to-market') {
      badgeColor = "bg-blue-100 text-blue-800";
      icon = "🚀";
    } else if (outcome === 'scalability') {
      badgeColor = "bg-orange-100 text-orange-800";
      icon = "📈";
    } else if (outcome === 'innovation') {
      badgeColor = "bg-purple-100 text-purple-800";
      icon = "💡";
    } else if (outcome === 'risk-reduction') {
      badgeColor = "bg-red-100 text-red-800";
      icon = "🛡️";
    }
    
    return (
      <div className={`rounded-full px-3 py-1 text-xs font-medium ${badgeColor} flex items-center`}>
        <span className="mr-1">{icon}</span>
        {outcome === 'cost-reduction' ? 'Cost Reduction' : 
         outcome === 'time-to-market' ? 'Time to Market' : 
         outcome === 'scalability' ? 'Scalability' :
         outcome === 'innovation' ? 'Innovation' :
         outcome === 'risk-reduction' ? 'Risk Reduction' : 
         'Business Impact'}
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

  // Find executive summary for a capability
  const getExecutiveSummary = (itemId) => {
    const summary = executiveSummaryData.find(s => s.id === itemId);
    return summary || null;
  };

  return (
    <div>
      <PageHeader 
        title="AI Capability Matrix" 
        subtitle="Databricks vs Snowflake for Machine Learning and AI Workloads" 
      />
      
      {/* Audience View Toggle - New component for executive/technical view switch */}
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow mb-4">
        <h3 className="text-center text-sm font-medium text-gray-700 mb-3">Audience View</h3>
        <div className="flex justify-center">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setAudienceView('executive')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                audienceView === 'executive'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Executive Summary
            </button>
            <button
              onClick={() => setAudienceView('technical')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                audienceView === 'technical'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Technical Details
            </button>
          </div>
        </div>
      </div>
      
      {/* Focus filter */}
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow mb-4">
        <h3 className="text-center text-sm font-medium text-gray-700 mb-3">
          {audienceView === 'technical' ? 'Focus Area' : 'Business Outcome'}
        </h3>
        
        {audienceView === 'technical' ? (
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
        ) : (
          <div className="flex justify-center flex-wrap gap-2">
            <button 
              onClick={() => setViewMode('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              All Outcomes
            </button>
            <button 
              onClick={() => setViewMode('cost-reduction')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'cost-reduction' ? 'bg-green-600 text-white' : 'bg-green-50 text-green-600 hover:bg-green-100'}`}
            >
              Cost Reduction
            </button>
            <button 
              onClick={() => setViewMode('time-to-market')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'time-to-market' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
            >
              Time to Market
            </button>
            <button 
              onClick={() => setViewMode('innovation')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${viewMode === 'innovation' ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-600 hover:bg-purple-100'}`}
            >
              Innovation
            </button>
          </div>
        )}
      </div>
      
      {/* Quick metrics toggle - only shown in technical view */}
      {audienceView === 'technical' && (
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
      )}
      
      {/* Executive Summary View */}
      {audienceView === 'executive' && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Executive Summary View</h3>
              <p className="text-sm text-gray-600">Business-focused summaries highlighting strategic outcomes and investment rationale</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-purple-700 font-medium mb-1">Databricks</div>
              <div className="text-sm text-gray-700">
                A comprehensive AI platform with strong integration for developing and deploying ML models. Offers best-in-class ML operations and governance with higher upfront investment and steeper learning curve.
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">End-to-end ML</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">Higher control</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Higher investment</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-cyan-700 font-medium mb-1">Snowflake</div>
              <div className="text-sm text-gray-700">
                Lower entry barrier with serverless options and consumption-based pricing. More accessible for organizations starting their AI journey, with some tradeoffs in advanced ML capabilities.
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Serverless</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Lower entry cost</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Growing capabilities</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Key Investment Considerations</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <p><span className="font-medium">Team ML Expertise:</span> Databricks offers more value for teams with data science expertise; Snowflake has lower technical barriers for analytics-focused teams.</p>
              <p><span className="font-medium">Operational Model:</span> Databricks requires more infrastructure management; Snowflake provides more automation and serverless options.</p>
              <p><span className="font-medium">TCO Timeline:</span> Databricks typically shows better TCO over 2+ years for ML-intensive workloads; Snowflake often has lower initial costs and better TCO for lighter ML use cases.</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Comparison content - this section changes based on the audience view */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        {Object.entries(groupedByCategory).map(([category, items]) => (
          <div key={category} className="border-b last:border-b-0">
            <h2 className="bg-gray-100 font-semibold p-3 text-gray-700">{category}</h2>
            
            {items.map((item) => {
              // Get executive summary data if in executive view
              const executiveSummary = getExecutiveSummary(item.id);
              
              // Skip items that don't match the current business outcome filter in executive view
              if (audienceView === 'executive' && viewMode !== 'all' && 
                  (!executiveSummary || !executiveSummary.outcomes.includes(viewMode))) {
                return null;
              }
              
              return (
                <div key={item.id} className="border-t border-gray-200 first:border-t-0">
                  <div 
                    className={`flex cursor-pointer hover:bg-gray-50 transition-colors ${expandedItem === item.id ? 'bg-blue-50' : ''}`}
                    onClick={() => toggleExpand(item.id)}
                  >
                    {/* Title Column */}
                    <div className={`${getTitleWidth()} p-4 font-medium flex items-center`}>
                      <div>
                        {item.title}
                        {audienceView === 'technical' ? (
                          // Show technical badge in technical view
                          item.metrics && (
                            <div className="mt-2">
                              {renderMetricsBadge(item.metrics)}
                            </div>
                          )
                        ) : (
                          // Show business outcome badges in executive view
                          executiveSummary && (
                            <div className="mt-2 flex flex-wrap gap-1">
                              {executiveSummary.outcomes.map(outcome => (
                                <div key={outcome} className="mt-1">
                                  {renderBusinessOutcomeBadge(outcome)}
                                </div>
                              ))}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    
                    {/* Different content based on view type */}
                    {audienceView === 'technical' ? (
                      // Technical View Content
                      <>
                        {/* Quick Metrics Summary Column */}
                        {showQuickMetrics && (
                          <div className={`${getQuickMetricsWidth()} p-4 border-l border-r border-gray-200`}>
                            <div className="text-sm text-gray-600 font-semibold">Key Metrics</div>
                            <div className={`mt-1 text-sm ${getMetricsSummaryColor(item.metrics)}`}>
                              {getMetricsSummary(item)}
                            </div>
                          </div>
                        )}
                        
                        {/* Platform specific cells - technical details */}
                        <div className={`${getColumnWidth()} p-4 border-l border-r border-gray-200`}>
                          <div className="text-sm text-purple-800 font-semibold">Databricks</div>
                          <div className="mt-1">{item.databricks}</div>
                        </div>
                        
                        <div className={`${getColumnWidth()} p-4`}>
                          <div className="text-sm text-cyan-800 font-semibold">Snowflake</div>
                          <div className="mt-1">{item.snowflake}</div>
                        </div>
                      </>
                    ) : (
                      // Executive View Content - business-focused summaries
                      <>
                        {executiveSummary && (
                          <>
                            <div className="w-1/2 p-4 border-l border-r border-gray-200">
                              <div className="text-sm text-gray-600 font-semibold">Business Impact</div>
                              <div className="mt-1 text-sm">{executiveSummary.businessImpact}</div>
                            </div>
                            
                            <div className="w-1/3 p-4">
                              <div className="text-sm text-gray-600 font-semibold">Strategic Recommendation</div>
                              <div className="mt-1 text-sm">
                                {executiveSummary.recommendation === 'databricks' ? (
                                  <span className="text-purple-700">Choose Databricks if {executiveSummary.reasonDatabricks}</span>
                                ) : executiveSummary.recommendation === 'snowflake' ? (
                                  <span className="text-cyan-700">Choose Snowflake if {executiveSummary.reasonSnowflake}</span>
                                ) : (
                                  <span className="text-gray-700">Consider tradeoffs based on specific needs</span>
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    )}
                    
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
                  
                  {/* Expanded content - different based on view type */}
                  {expandedItem === item.id && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      {audienceView === 'technical' ? (
                        // Technical expanded content
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
                      ) : (
                        // Executive expanded content - if available
                        executiveSummary && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h3 className="font-medium mb-2">Investment Implications</h3>
                              <p className="text-gray-700">{executiveSummary.investmentImplications}</p>
                            </div>
                            
                            <div className="bg-white p-4 rounded shadow-sm">
                              <h3 className="font-medium mb-2">Case Study</h3>
                              <p className="text-gray-700 mb-2">{executiveSummary.caseStudy}</p>
                              {executiveSummary.roi && (
                                <div className="mt-2 p-2 bg-green-50 border border-green-100 rounded">
                                  <p className="text-sm font-medium text-green-800">Typical ROI: {executiveSummary.roi}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      {/* Footer content based on view type */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        {audienceView === 'technical' ? (
          <>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">AI & ML Platform Decision Guide</h2>
            <p className="text-gray-700">This matrix compares the machine learning and AI capabilities of the two leading enterprise ML platforms: Databricks and Snowflake. Click any row to see detailed explanations of key differences.</p>
            <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <h3 className="text-purple-800 font-medium mb-1">Why This Comparison Matters</h3>
              <p className="text-sm text-purple-700">
                As organizations scale their AI initiatives, the choice between Databricks and Snowflake for ML workloads has significant implications for development speed, operational efficiency, and total cost of ownership. The right platform choice can reduce time-to-value for AI initiatives by 40-60% while improving model quality and reducing operational overhead.
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Executive Decision Framework</h2>
            <p className="text-gray-700">This summary provides business-focused guidance on platform selection for AI initiatives. We've translated technical capabilities into business outcomes to support executive decision-making.</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <div className="font-medium text-green-800 mb-2">Cost Structure</div>
                <p className="text-sm text-green-700">Databricks typically requires higher upfront investment with better long-term TCO for ML-intensive workloads. Snowflake offers lower entry costs with consumption-based pricing that scales with usage.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="font-medium text-blue-800 mb-2">Time to Value</div>
                <p className="text-sm text-blue-700">Databricks delivers 40-60% faster development for complex AI projects. Snowflake provides quicker setup and simpler operations for basic ML use cases and analytics-driven applications.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="font-medium text-purple-800 mb-2">Strategic Positioning</div>
                <p className="text-sm text-purple-700">Databricks positions organizations for deeper AI innovation and differentiation. Snowflake offers broader data ecosystem integration with growing AI capabilities.</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AICapabilityMatrix;