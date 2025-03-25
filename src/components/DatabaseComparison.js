import React, { useState } from 'react';
import databricksTerminology from '../data/databricksTerminology';
import databaseComparisonData from '../data/databaseComparisonData';
import databaseExecutiveSummary from '../data/databaseExecutiveSummary';
import SimplifiedComparison from './SimplifiedComparison';  
import PageHeader from './common/PageHeader';

import '../styles/buttons.css';

// Add the new ACID on S3/ADLS content
const acidOnS3Content = {
  title: "ACID on Cloud Storage",
  description: "A key architectural advantage of Databricks is bringing ACID transactions to cloud object storage",
  advantages: [
    {
      id: "cheap-storage",
      title: "Cheap, Scalable Storage",
      databricks: "S3/ADLS is infinitely scalable and low-cost vs. DWH's proprietary storage",
      advantage: "Massive cost savings over time, especially for raw data or backups"
    },
    {
      id: "open-format",
      title: "Open Format (Parquet)",
      databricks: "Data is stored in open formats, not vendor-locked binaries",
      advantage: "You can query the same data with Spark, Presto, Trino, etc."
    },
    {
      id: "acid-transactions",
      title: "ACID on Object Storage",
      databricks: "Delta Lake adds transactions, rollback, concurrency to S3 — which had none",
      advantage: "Gives DWH-like reliability without moving data or paying DWH prices"
    },
    {
      id: "unified-storage",
      title: "Unified Storage Tier",
      databricks: "Store raw, processed, ML-ready, and BI data all in one place",
      advantage: "Avoids duplication across DWH, lake, and staging areas"
    },
    {
      id: "realtime-writes",
      title: "Real-Time Writes & Updates",
      databricks: "Supports streaming writes with MERGE, UPDATE, DELETE on S3",
      advantage: "Snowflake & SingleStore can't do ACID updates directly on S3"
    },
    {
      id: "etl-overhead",
      title: "Avoid ETL-to-Warehouse Overhead",
      databricks: "No need to copy data into DWH for analysis – it's already live & queryable",
      advantage: "Reduces latency, simplifies pipelines, cuts storage duplication"
    }
  ],
  businessBenefits: [
    {
      concern: "Data cost at scale",
      databricks: "Store petabytes for cheap (S3/ADLS)",
      competitors: "Costly proprietary storage"
    },
    {
      concern: "Vendor lock-in",
      databricks: "Open format = freedom",
      competitors: "Locked to internal format"
    },
    {
      concern: "Analytics on raw data",
      databricks: "Can query raw, semi-structured, or structured",
      competitors: "Need to ingest first"
    },
    {
      concern: "Streaming data ops",
      databricks: "Real-time + ACID on raw data",
      competitors: "External tables = no ACID"
    },
    {
      concern: "Data science & ML workflows",
      databricks: "Native notebooks, ML, Delta tables",
      competitors: "Needs external integration"
    }
  ]
};

const DatabaseComparison = () => {
  // State to track which comparison is expanded
  const [expandedItem, setExpandedItem] = useState(null);
  // State for viewing mode
  const [viewMode, setViewMode] = useState('all');
  // State for platform filter
  const [platformFilter, setPlatformFilter] = useState('all');
  // State for showing the quick metrics column
  const [showQuickMetrics, setShowQuickMetrics] = useState(true);
  // New state for audience view type (technical vs executive)
  const [audienceView, setAudienceView] = useState('executive');
  // State for selected business priority in executive view
  const [selectedPriority, setSelectedPriority] = useState('all');
  // State for expanded business priority
  const [expandedPriority, setExpandedPriority] = useState(null);
  // State for expanded industry
  const [expandedIndustry, setExpandedIndustry] = useState(null);
  // State for ACID feature section
  const [showAcidFeature, setShowAcidFeature] = useState(false);

  // Toggle expanded state
  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  // Toggle ACID Feature section
  const toggleAcidFeature = () => {
    setShowAcidFeature(!showAcidFeature);
  };

  // Toggle expansion of a business priority
  const togglePriorityExpansion = (priorityId) => {
    setExpandedPriority(expandedPriority === priorityId ? null : priorityId);
  };

  // Toggle expansion of an industry guidance
  const toggleIndustryExpansion = (industryIndex) => {
    setExpandedIndustry(expandedIndustry === industryIndex ? null : industryIndex);
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

  // Render business outcome tags for executive view
  const renderBusinessOutcomeBadge = (outcome) => {
    let badgeColor = "bg-gray-100 text-gray-800";
    let icon = "⭐";
    
    if (outcome === 'total-cost') {
      badgeColor = "bg-green-100 text-green-800";
      icon = "💰";
    } else if (outcome === 'time-to-value') {
      badgeColor = "bg-blue-100 text-blue-800";
      icon = "🚀";
    } else if (outcome === 'innovation') {
      badgeColor = "bg-purple-100 text-purple-800";
      icon = "💡";
    } else if (outcome === 'governance') {
      badgeColor = "bg-red-100 text-red-800";
      icon = "🔒";
    } else if (outcome === 'scalability') {
      badgeColor = "bg-orange-100 text-orange-800";
      icon = "📈";
    }
    
    return (
      <div className={`rounded-full px-3 py-1 text-xs font-medium ${badgeColor} flex items-center`}>
        <span className="mr-1">{icon}</span>
        {outcome === 'total-cost' ? 'TCO' : 
         outcome === 'time-to-value' ? 'Time to Value' : 
         outcome === 'innovation' ? 'Innovation' :
         outcome === 'governance' ? 'Governance' :
         outcome === 'scalability' ? 'Scalability' : 
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
      // For conditional, provide the specific conditions
      if (item.id === 'use-case') {
        summaryText = `OLTP: SingleStore (100x faster) | ML: Databricks (2-5x faster) | SQL: Snowflake (3-4x better concurrency)`;
      } else if (item.id === 'scalability') {
        summaryText = `Variable: Databricks (30-50% savings) | Elastic: Snowflake (20-40% lower overhead) | Predictable: SingleStore`;
      } else if (item.id === 'streaming') {
        summaryText = `Ingestion: SingleStore (1M+ rows/sec) | Processing: Databricks (2-3x throughput) | Snowflake (500K+ rows/sec)`;
      } else if (item.id === 'data-storage') {
        summaryText = `Small queries: SingleStore (10x faster) | Large data: Databricks (50-80% lower storage costs)`;
      } else {
        // Extract metrics with percentages
        const percentMatches = description.match(/\d+%|\d+-\d+%/g);
        if (percentMatches && percentMatches.length > 0) {
          summaryText = `Conditional advantage - Key metrics: ${percentMatches.join(', ')}`;
        } else {
          summaryText = description;
        }
      }
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
  const filteredData = databaseComparisonData.filter(item => {
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

  // Calculate widths based on platform filter and quick metrics
  const getTitleWidth = () => {
    if (showQuickMetrics) {
      return platformFilter === 'all' ? 'w-1/5' : 'w-1/4';
    } else {
      return platformFilter === 'all' ? 'w-1/4' : 'w-1/3';
    }
  };

  const getColumnWidth = () => {
    if (showQuickMetrics) {
      return platformFilter === 'all' ? 'w-1/5' : 'w-1/4';
    } else {
      return platformFilter === 'all' ? 'w-1/4' : 'w-1/3';
    }
  };

  const getQuickMetricsWidth = () => {
    return platformFilter === 'all' ? 'w-1/5' : 'w-1/4';
  };

  // Filter business priorities based on selected priority
  const filteredPriorities = selectedPriority === 'all' 
    ? databaseExecutiveSummary.businessPriorities 
    : databaseExecutiveSummary.businessPriorities.filter(priority => priority.id === selectedPriority);

  return (
    <div>
      {/* Header with blue-to-purple gradient */}
      <div>
        <PageHeader 
          title="Database Technology Comparison" 
          subtitle={audienceView === 'technical' ? 
            'Interactive comparison of SingleStore vs Databricks vs Snowflake' : 
            'SingleStore vs Databricks vs Snowflake for Data Engineering Teams'} 
        />
      </div>
      
      {/* Audience View Toggle - Technical vs Executive */}
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
            <button
              onClick={() => setAudienceView('simplified')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                audienceView === 'simplified'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Simplified View
            </button>
          </div>
        </div>
      </div>

      {/* Conditional content based on selected view */}
      {audienceView === 'technical' ? (
        // TECHNICAL VIEW CONTENT
        <>
          {/* Filter buttons */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-4">
            <div className="flex justify-center flex-wrap">
              <button 
                onClick={() => setViewMode('all')}
                className={`btn ${viewMode === 'all' ? 'btn-gradient' : 'btn-standard'}`}
              >
                All Comparisons
              </button>
              <button 
                onClick={() => setViewMode('performance')}
                className={`btn ${viewMode === 'performance' ? 'btn-gradient' : 'btn-standard'}`}
              >
                Performance
              </button>
              <button 
                onClick={() => setViewMode('cost')}
                className={`btn ${viewMode === 'cost' ? 'btn-gradient' : 'btn-standard'}`}
              >
                Cost Efficiency
              </button>
              <button 
                onClick={() => setViewMode('efficiency')}
                className={`btn ${viewMode === 'efficiency' ? 'btn-gradient' : 'btn-standard'}`}
              >
                Development Efficiency
              </button>
              <button 
                onClick={() => setViewMode('terminology')}
                className={`btn ${viewMode === 'terminology' ? 'btn-gradient' : 'btn-standard'}`}
              >
                Databricks Terms
              </button>
              <button 
                onClick={() => setViewMode('acid')}
                className={`btn ${viewMode === 'acid' ? 'btn-gradient' : 'btn-standard'}`}
              >
                ACID on Cloud Storage
              </button>
            </div>
          </div>
          
          {/* Platform filter */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow mb-4">
            <h3 className="text-center text-sm font-medium text-gray-700 mb-3">Compare Platforms</h3>
            <div className="flex justify-center flex-wrap gap-2">
              <button 
                onClick={() => setPlatformFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${platformFilter === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                All
              </button>
              <button 
                onClick={() => setPlatformFilter('singlestore-databricks')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${platformFilter === 'singlestore-databricks' ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}
              >
                SingleStore vs Databricks
              </button>
              <button 
                onClick={() => setPlatformFilter('databricks-snowflake')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${platformFilter === 'databricks-snowflake' ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-600 hover:bg-purple-100'}`}
              >
                Databricks vs Snowflake
              </button>
              <button 
                onClick={() => setPlatformFilter('singlestore-snowflake')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${platformFilter === 'singlestore-snowflake' ? 'bg-cyan-600 text-white' : 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100'}`}
              >
                SingleStore vs Snowflake
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
          
          {/* ACID on Cloud Storage Feature Section */}
          {viewMode === 'acid' && (
            <div className="mb-8 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-purple-800">Why It's Powerful That Databricks Brings ACID to S3/ADLS</h2>
                <p className="mb-6 text-gray-700">A key architectural advantage that often gets overlooked when comparing database platforms</p>
                
                {/* ACID Advantages */}
                <div className="mb-8">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-purple-600">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Advantage</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Databricks Implementation</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Key Differentiator</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {acidOnS3Content.advantages.map((advantage) => (
                          <tr key={advantage.id} className="hover:bg-purple-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {advantage.title}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              {advantage.databricks}
                            </td>
                            <td className="px-6 py-4 text-sm text-purple-700">
                              ✅ {advantage.advantage}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Business Benefits */}
                <h3 className="text-xl font-semibold mb-4 text-gray-800">💰 Real-World Business Benefits</h3>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business Concern</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Databricks Lakehouse (ACID on S3)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Snowflake / SingleStore</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {acidOnS3Content.businessBenefits.map((benefit, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {benefit.concern}
                          </td>
                          <td className="px-6 py-4 text-sm text-purple-700 font-medium">
                            {benefit.databricks}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {benefit.competitors}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Technical Notes */}
                <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Technical Nuances & Balanced Perspective</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <span className="font-medium">Snowflake's external tables</span> can query S3 directly but without the full ACID guarantees that Delta Lake provides
                    </li>
                    <li>
                      <span className="font-medium">SingleStore's in-memory architecture</span> offers superior performance for pure OLTP workloads where low-latency point lookups are critical
                    </li>
                    <li>
                      <span className="font-medium">Compute costs</span> should be considered alongside storage savings - Databricks typically requires right-sizing of compute resources for optimal performance
                    </li>
                    <li>
                      <span className="font-medium">Data migration complexity</span> varies based on source systems and data structure
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            {viewMode === 'terminology' ? (
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">Databricks Terminology</h2>
                <p className="mb-6 text-gray-700 text-center">Quick reference guide to Databricks concepts and terminology for your team</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {databricksTerminology.map(item => (
                    <div key={item.id} className="border rounded-lg overflow-hidden">
                      <div className="bg-purple-100 p-3 border-b">
                        <h3 className="font-medium text-purple-800">{item.term}</h3>
                      </div>
                      <div className="p-4">
                        <div className="mb-3">
                          <div className="font-medium text-sm text-gray-700 mb-1">Definition:</div>
                          <p>{item.definition}</p>
                        </div>
                        
                        <div className="mb-3">
                          <div className="font-medium text-sm text-gray-700 mb-1">Example:</div>
                          <p className="text-gray-700">{item.example}</p>
                        </div>
                        
                        <div>
                          <div className="font-medium text-sm text-gray-700 mb-1">Why It Matters:</div>
                          <p className="text-gray-700">{item.why}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : viewMode === 'acid' ? (
              null // We've already rendered the ACID content above
            ) : (
              Object.entries(groupedByCategory).map(([category, items]) => (
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
                        
                        {/* Quick Metrics Summary Column - Now with data-driven summaries */}
                        {showQuickMetrics && (
                          <div className={`${getQuickMetricsWidth()} p-4 border-l border-r border-gray-200`}>
                            <div className="text-sm text-gray-600 font-semibold">Key Metrics</div>
                            <div className={`mt-1 text-sm ${getMetricsSummaryColor(item.metrics)}`}>
                              {getMetricsSummary(item)}
                            </div>
                          </div>
                        )}
                        
                        {/* Platform specific cells - display based on platform filter */}
                        {(platformFilter === 'all' || platformFilter === 'singlestore-databricks' || platformFilter === 'singlestore-snowflake') && (
                          <div className={`${getColumnWidth()} p-4 border-l ${platformFilter === 'all' ? 'border-r' : ''} border-gray-200`}>
                            <div className="text-sm text-blue-800 font-semibold">SingleStore</div>
                            <div className="mt-1">{item.singlestore}</div>
                          </div>
                        )}
                        
                        {(platformFilter === 'all' || platformFilter === 'singlestore-databricks' || platformFilter === 'databricks-snowflake') && (
                          <div className={`${getColumnWidth()} p-4 ${platformFilter !== 'all' ? 'border-l border-r' : ''} border-gray-200`}>
                            <div className="text-sm text-purple-800 font-semibold">Databricks</div>
                            <div className="mt-1">{item.databricks}</div>
                          </div>
                        )}
                        
                        {(platformFilter === 'all' || platformFilter === 'databricks-snowflake' || platformFilter === 'singlestore-snowflake') && (
                          <div className={`${getColumnWidth()} p-4 ${platformFilter === 'all' ? 'border-l' : ''}`}>
                            <div className="text-sm text-cyan-800 font-semibold">Snowflake</div>
                            <div className="mt-1">{item.snowflake}</div>
                          </div>
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
              ))
            )}
          </div>

          {/* ACID on Cloud Storage Callout */}
          {viewMode !== 'acid' && viewMode !== 'terminology' && (
            <div className="mt-6 bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 -mt-10 -mr-10 bg-purple-200 rounded-full opacity-30"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl font-semibold text-purple-800 mb-2">Key Architectural Advantage: ACID on Cloud Storage</h2>
                <p className="text-gray-700 mb-3">
                  Databricks brings ACID transactions to cloud object storage (S3/ADLS) - a fundamental architecture advantage that impacts cost, flexibility, and analytics capabilities.
                </p>
                <button 
                  onClick={() => setViewMode('acid')}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-medium text-sm"
                >
                  See Why This Matters
                </button>
              </div>
            </div>
          )}
          
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">How to Use This Comparison</h2>
            <p className="text-gray-700">Click on any row to expand and see detailed information about that specific comparison point. Use the filter buttons above to focus on specific aspects or platform comparisons. The Key Metrics column highlights specific performance differences with percentage improvements where available.</p>
            <div className="mt-4 bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Performance and cost metrics can vary significantly based on specific workloads, configurations, and deployment scenarios. These figures represent typical scenarios but your actual results may differ.
              </p>
            </div>
          </div>
        </>
      ) : (
        // EXECUTIVE VIEW CONTENT
        <>
          {/* Business Priority Filter */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow mb-4">
            <h3 className="text-center text-sm font-medium text-gray-700 mb-3">Business Priority</h3>
            <div className="flex justify-center flex-wrap gap-2">
              <button 
                onClick={() => setSelectedPriority('all')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${selectedPriority === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                All Priorities
              </button>
              {databaseExecutiveSummary.businessPriorities.map(priority => (
                <button 
                  key={priority.id}
                  onClick={() => setSelectedPriority(priority.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md flex items-center ${
                    selectedPriority === priority.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <span className="mr-1">{priority.icon}</span> {priority.title}
                </button>
              ))}
            </div>
          </div>

          {/* ACID on Cloud Storage Executive Summary */}
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-purple-800">Strategic Advantage: ACID on Cloud Storage</h2>
              <button
                onClick={toggleAcidFeature}
                className="text-purple-700 hover:text-purple-900 focus:outline-none"
              >
                <span className="text-sm font-medium flex items-center">
                  {showAcidFeature ? 'Hide Details' : 'Show Details'}
                  <svg
                    className={`ml-1 w-5 h-5 transform transition-transform ${showAcidFeature ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>
            
            <p className="text-gray-700 mb-3">
              Databricks' ability to bring ACID transactions to cloud object storage creates significant business advantages that impact total cost of ownership, data accessibility, and analytics flexibility.
            </p>
            
            {showAcidFeature && (
              <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="border-l-4 border-purple-400 pl-3">
                    <h3 className="font-medium text-gray-900 mb-1">Cost Efficiency</h3>
                    <p className="text-sm text-gray-700">Store petabytes on low-cost S3/ADLS while maintaining transactional integrity, achieving 50-70% storage cost savings vs. proprietary database storage</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-400 pl-3">
                    <h3 className="font-medium text-gray-900 mb-1">Analytics Flexibility</h3>
                    <p className="text-sm text-gray-700">Query raw, semi-processed, or refined data directly with SQL, Python, or R without data duplication or separate analytics systems</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-400 pl-3">
                    <h3 className="font-medium text-gray-900 mb-1">Future-Proofing</h3>
                    <p className="text-sm text-gray-700">Open formats prevent vendor lock-in while cloud storage scalability eliminates capacity planning concerns</p>
                  </div>
                </div>
                
                <div className="mt-3 p-3 bg-yellow-50 rounded-lg text-sm">
                  <p className="text-yellow-800">
                    <strong>Executive Consideration:</strong> While Snowflake and SingleStore offer excellent analytical and transactional capabilities respectively, their architectures require data to be copied into proprietary formats. Databricks' approach eliminates this requirement, significantly reducing total storage costs and simplifying data architecture.
                  </p>
                </div>
              </div>
            )}
          </div>
          
          {/* Executive Dashboard - High Level Platform Comparison */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Strategic Platform Fit</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* SingleStore */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-medium text-blue-800 mb-2">SingleStore</h3>
                <p className="text-gray-700 mb-3">Best for organizations requiring high-performance transactional systems with some analytics capabilities.</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="bg-blue-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Fastest implementation for transaction-heavy applications</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Predictable pricing model for consistent workloads</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Flexible deployment options (cloud, on-premises, hybrid)</span>
                  </div>
                </div>
              </div>
              
              {/* Databricks */}
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="text-lg font-medium text-purple-800 mb-2">Databricks</h3>
                <p className="text-gray-700 mb-3">Best for organizations focused on data science, ML/AI adoption, and advanced analytics capabilities.</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="bg-purple-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Superior machine learning and AI capability integration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-purple-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Most cost-effective for growing data volumes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-purple-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Comprehensive governance with Unity Catalog</span>
                  </div>
                </div>
              </div>
              
              {/* Snowflake */}
              <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                <h3 className="text-lg font-medium text-cyan-800 mb-2">Snowflake</h3>
                <p className="text-gray-700 mb-3">Best for organizations prioritizing analytics, BI, and cross-department data sharing capabilities.</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="bg-cyan-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Most transparent pay-as-you-go pricing model</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-cyan-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Minimal administration and automatic optimization</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-cyan-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Superior data sharing and marketplace capabilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Priorities Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow mb-4">
            <h2 className="bg-gray-100 font-semibold p-3 text-gray-700">Business Priorities Comparison</h2>
            
            {filteredPriorities.map((priority) => (
              <div key={priority.id} className="border-t border-gray-200">
                <div 
                  className={`flex cursor-pointer hover:bg-gray-50 transition-colors ${expandedPriority === priority.id ? 'bg-blue-50' : ''}`}
                  onClick={() => togglePriorityExpansion(priority.id)}
                >
                  <div className="w-1/4 p-4 font-medium flex items-center">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{priority.icon}</span>
                      <span>{priority.title}</span>
                    </div>
                  </div>
                  
                  <div className="w-1/4 p-4 border-l border-r border-gray-200">
                    <div className="text-sm text-blue-800 font-semibold">SingleStore</div>
                    <div className="mt-1 text-sm">{priority.singlestore.summary}</div>
                  </div>
                  
                  <div className="w-1/4 p-4 border-r border-gray-200">
                    <div className="text-sm text-purple-800 font-semibold">Databricks</div>
                    <div className="mt-1 text-sm">{priority.databricks.summary}</div>
                  </div>

                  <div className="w-1/4 p-4">
                    <div className="text-sm text-cyan-800 font-semibold">Snowflake</div>
                    <div className="mt-1 text-sm">{priority.snowflake.summary}</div>
                  </div>
                  
                  <div className="flex items-center px-4">
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform ${expandedPriority === priority.id ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {expandedPriority === priority.id && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h3 className="font-medium mb-2 text-blue-800">SingleStore</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {priority.singlestore.strengths.map((strength, idx) => (
                            <li key={`singlestore-strength-${idx}`}>{strength}</li>
                          ))}
                        </ul>
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 text-sm">Business Case</h4>
                          <p className="text-sm text-gray-700 mt-1">{priority.singlestore.businessCase}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2 text-purple-800">Databricks</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {priority.databricks.strengths.map((strength, idx) => (
                            <li key={`databricks-strength-${idx}`}>{strength}</li>
                          ))}
                        </ul>
                        <div className="mt-3 p-3 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 text-sm">Business Case</h4>
                          <p className="text-sm text-gray-700 mt-1">{priority.databricks.businessCase}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2 text-cyan-800">Snowflake</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {priority.snowflake.strengths.map((strength, idx) => (
                            <li key={`snowflake-strength-${idx}`}>{strength}</li>
                          ))}
                        </ul>
                        <div className="mt-3 p-3 bg-cyan-50 rounded-lg">
                          <h4 className="font-medium text-cyan-800 text-sm">Business Case</h4>
                          <p className="text-sm text-gray-700 mt-1">{priority.snowflake.businessCase}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Industry Guidance Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow mb-4">
            <h2 className="bg-gray-100 font-semibold p-3 text-gray-700">Industry-Specific Guidance</h2>
            
            {databaseExecutiveSummary.industryGuidance.map((industry, idx) => (
              <div key={`industry-${idx}`} className="border-t border-gray-200">
                <div 
                  className={`flex cursor-pointer hover:bg-gray-50 transition-colors ${expandedIndustry === idx ? 'bg-purple-50' : ''}`}
                  onClick={() => toggleIndustryExpansion(idx)}
                >
                  <div className="w-1/4 p-4 font-medium">
                    {industry.industry}
                  </div>
                  
                  <div className="w-3/4 p-4 border-l border-gray-200">
                    <div className="text-sm text-gray-700">{industry.recommendation}</div>
                  </div>
                  
                  <div className="flex items-center px-4">
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform ${expandedIndustry === idx ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {expandedIndustry === idx && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <h3 className="font-medium mb-2">Key Considerations</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {industry.keyConsiderations.map((consideration, cidx) => (
                        <li key={`consideration-${idx}-${cidx}`}>{consideration}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Implementation Considerations */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-4">
            <h2 className="text-xl font-semibold mb-4 text-center">Implementation Considerations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-medium text-blue-800 mb-2">SingleStore</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-medium">Time to Value:</span> {databaseExecutiveSummary.implementationConsiderations.singlestore.timeToValue}</p>
                  <p><span className="font-medium">Skills Gap:</span> {databaseExecutiveSummary.implementationConsiderations.singlestore.skillsGap}</p>
                  <p><span className="font-medium">Enterprise Readiness:</span> {databaseExecutiveSummary.implementationConsiderations.singlestore.enterpriseReadiness}</p>
                  <p><span className="font-medium">Specialist Requirements:</span> {databaseExecutiveSummary.implementationConsiderations.singlestore.requiresSpecialists}</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h3 className="font-medium text-purple-800 mb-2">Databricks</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-medium">Time to Value:</span> {databaseExecutiveSummary.implementationConsiderations.databricks.timeToValue}</p>
                  <p><span className="font-medium">Skills Gap:</span> {databaseExecutiveSummary.implementationConsiderations.databricks.skillsGap}</p>
                  <p><span className="font-medium">Enterprise Readiness:</span> {databaseExecutiveSummary.implementationConsiderations.databricks.enterpriseReadiness}</p>
                  <p><span className="font-medium">Specialist Requirements:</span> {databaseExecutiveSummary.implementationConsiderations.databricks.requiresSpecialists}</p>
                </div>
              </div>
              
              <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
                <h3 className="font-medium text-cyan-800 mb-2">Snowflake</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-medium">Time to Value:</span> {databaseExecutiveSummary.implementationConsiderations.snowflake.timeToValue}</p>
                  <p><span className="font-medium">Skills Gap:</span> {databaseExecutiveSummary.implementationConsiderations.snowflake.skillsGap}</p>
                  <p><span className="font-medium">Enterprise Readiness:</span> {databaseExecutiveSummary.implementationConsiderations.snowflake.enterpriseReadiness}</p>
                  <p><span className="font-medium">Specialist Requirements:</span> {databaseExecutiveSummary.implementationConsiderations.snowflake.requiresSpecialists}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-2">Migration from Traditional Database Systems</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-blue-800 mb-1">SingleStore</h4>
                  <p><span className="font-medium">Complexity:</span> {databaseExecutiveSummary.migrationConsiderations.fromTraditional.singlestore.complexity}</p>
                  <p><span className="font-medium">Timeline:</span> {databaseExecutiveSummary.migrationConsiderations.fromTraditional.singlestore.timeline}</p>
                  <p><span className="font-medium">Key Challenges:</span> {databaseExecutiveSummary.migrationConsiderations.fromTraditional.singlestore.challenges}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-purple-800 mb-1">Databricks</h4>
                  <p><span className="font-medium">Complexity:</span> {databaseExecutiveSummary.migrationConsiderations.fromTraditional.databricks.complexity}</p>
                  <p><span className="font-medium">Timeline:</span> {databaseExecutiveSummary.migrationConsiderations.fromTraditional.databricks.timeline}</p>
                  <p><span className="font-medium">Key Challenges:</span> {databaseExecutiveSummary.migrationConsiderations.fromTraditional.databricks.challenges}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-cyan-800 mb-1">Snowflake</h4>
                  <p><span className="font-medium">Complexity:</span> {databaseExecutiveSummary.migrationConsiderations.fromTraditional.snowflake.complexity}</p>
                  <p><span className="font-medium">Timeline:</span> {databaseExecutiveSummary.migrationConsiderations.fromTraditional.snowflake.timeline}</p>
                  <p><span className="font-medium">Key Challenges:</span> {databaseExecutiveSummary.migrationConsiderations.fromTraditional.snowflake.challenges}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Organizational Fit Section */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-center">Organizational Fit Assessment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-blue-800 mb-2">SingleStore Profile</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-700">Best Fit For</p>
                    <p className="text-gray-600">{databaseExecutiveSummary.organizationalFit.singlestore.bestFor}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Challenges With</p>
                    <p className="text-gray-600">{databaseExecutiveSummary.organizationalFit.singlestore.challengesWith}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Team Structure</p>
                    <p className="text-gray-600">{databaseExecutiveSummary.organizationalFit.singlestore.teamStructure}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Cultural Alignment</p>
                    <p className="text-gray-600">{databaseExecutiveSummary.organizationalFit.singlestore.culturalAlignment}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-purple-800 mb-2">Databricks Profile</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-700">Best Fit For</p>
                    <p className="text-gray-600">{databaseExecutiveSummary.organizationalFit.databricks.bestFor}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Challenges With</p>
                    <p className="text-gray-600">{databaseExecutiveSummary.organizationalFit.databricks.challengesWith}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Team Structure</p>
                    <p className="text-gray-600">{databaseExecutiveSummary.organizationalFit.databricks.teamStructure}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Cultural Alignment</p>
                    <p className="text-gray-600">{databaseExecutiveSummary.organizationalFit.databricks.culturalAlignment}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-cyan-800 mb-2">Snowflake Profile</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-700">Best Fit For</p>
                    <p className="text-gray-600">{databaseExecutiveSummary.organizationalFit.snowflake.bestFor}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Challenges With</p>
                    <p className="text-gray-600">{databaseExecutiveSummary.organizationalFit.snowflake.challengesWith}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Team Structure</p>
                    <p className="text-gray-600">{databaseExecutiveSummary.organizationalFit.snowflake.teamStructure}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Cultural Alignment</p>
                    <p className="text-gray-600">{databaseExecutiveSummary.organizationalFit.snowflake.culturalAlignment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DatabaseComparison;