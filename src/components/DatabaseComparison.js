import React, { useState } from 'react';

const DatabaseComparison = () => {
  // State to track which comparison is expanded
  const [expandedItem, setExpandedItem] = useState(null);
  // State for viewing mode
  const [viewMode, setViewMode] = useState('all');

  // Databricks terminology definitions
  const databricksTerminology = [
    {
      id: 'delta-lake',
      term: 'Delta Lake',
      definition: 'An open-source storage layer that brings ACID transactions to big data workloads.',
      example: 'When two data engineers update the same customer dataset simultaneously, Delta Lake ensures neither overrides the other\'s changes.',
      why: 'Provides reliability and consistency guarantees previously only available in traditional databases.'
    },
    {
      id: 'medallion',
      term: 'Medallion Architecture',
      definition: 'A data organization framework using Bronze (raw), Silver (validated), and Gold (aggregated) layers.',
      example: 'Raw JSON payment transactions go into Bronze, cleansed data with proper types into Silver, and daily merchant summaries into Gold.',
      why: 'Creates clear separation of concerns and progressive data quality improvement through the pipeline.'
    },
    {
      id: 'lakehouse',
      term: 'Lakehouse',
      definition: 'A hybrid architecture combining data lake storage with data warehouse functionality.',
      example: 'Storing petabytes of raw data while still providing SQL query capabilities and BI tool connectivity.',
      why: 'Eliminates need for separate systems for different data workloads (analytics, ML, BI).'
    },
    {
      id: 'unity-catalog',
      term: 'Unity Catalog',
      definition: 'Unified governance layer for managing data assets across clouds with fine-grained access controls.',
      example: 'Restricting access to PII columns in customer data while allowing aggregated metrics for analytics teams.',
      why: 'Centralizes security, auditing, and lineage tracking across all data assets.'
    },
    {
      id: 'photon',
      term: 'Photon Engine',
      definition: 'C++ vectorized query execution engine that accelerates Spark workloads without code changes.',
      example: 'A complex aggregation query runs 5x faster with Photon enabled without modifying any SQL code.',
      why: 'Delivers significant performance gains for data-intensive workloads, especially for analytics.'
    },
    {
      id: 'delta-live-tables',
      term: 'Delta Live Tables (DLT)',
      definition: 'Declarative framework for building reliable data pipelines with quality controls and monitoring.',
      example: 'Defining data quality expectations like "all transaction_ids must be unique" directly in pipeline code.',
      why: 'Reduces boilerplate code and increases reliability by automating dependency management and quality checks.'
    },
    {
      id: 'mlflow',
      term: 'MLflow',
      definition: 'Open-source platform for managing the ML lifecycle including experimentation, reproducibility, and deployment.',
      example: 'Tracking model parameters, metrics, and artifacts during fraud detection model development.',
      why: 'Standardizes the machine learning process from experiment to production.'
    },
    {
      id: 'structured-streaming',
      term: 'Structured Streaming',
      definition: 'Spark API for continuous data processing with exactly-once guarantees.',
      example: 'Processing a stream of payment events as they arrive, updating fraud detection models in real-time.',
      why: 'Enables real-time data processing using the same APIs as batch processing.'
    },
    {
      id: 'z-ordering',
      term: 'Z-Ordering',
      definition: 'Physical data organization technique that co-locates related data for faster queries.',
      example: 'Z-ordering transaction data by date and merchant_id improves filtering performance by 10-100x.',
      why: 'Optimizes read performance for specific query patterns without requiring index maintenance.'
    },
    {
      id: 'dbus',
      term: 'DBUs (Databricks Units)',
      definition: 'Billing units representing compute resources consumed per hour.',
      example: 'A Standard cluster with 4 cores might consume 0.75 DBUs per hour while running.',
      why: 'Forms the basis of usage-based pricing model, allowing cost optimization via scaling.'
    },
    {
      id: 'notebooks',
      term: 'Notebooks',
      definition: 'Interactive documents combining code, visualizations, and markdown in multiple languages.',
      example: 'Creating an end-to-end data pipeline with SQL data preparation, Python modeling, and R visualizations in a single notebook.',
      why: 'Enables collaborative, documented data workflows bridging data engineering and data science.'
    },
    {
      id: 'workspace',
      term: 'Workspace',
      definition: 'Collaborative environment for organizing and developing Databricks assets.',
      example: 'Organizing notebooks into folders for different departments while sharing common utilities.',
      why: 'Provides team-based collaboration, access controls, and versioning for data assets.'
    },
    {
      id: 'clusters',
      term: 'Clusters',
      definition: 'Managed compute resources that execute Databricks workloads with auto-scaling capabilities.',
      example: 'Setting up an auto-scaling cluster that grows to 20 nodes during peak processing and scales down to 2 during quiet periods.',
      why: 'Separates storage from compute, allowing flexible scaling based on workload demands.'
    },
    {
      id: 'auto-loader',
      term: 'Auto Loader',
      definition: 'Efficient data ingestion service for incrementally processing new files in cloud storage.',
      example: 'Automatically detecting and processing new transaction log files as they arrive in S3 without explicit listing operations.',
      why: 'Simplifies data ingestion while optimizing for cost and performance compared to manual approaches.'
    },
    {
      id: 'delta-sharing',
      term: 'Delta Sharing',
      definition: 'Open protocol for securely sharing data across organizations regardless of platform.',
      example: 'Sharing payment transaction aggregates with partner organizations without giving direct access to your data lake.',
      why: 'Enables secure, efficient data sharing workflows across organizational boundaries.'
    }
  ];

  // Data for the comparison
  const comparisonData = [
    {
      id: 'primary-design',
      category: 'Architecture',
      title: 'Primary Design',
      singlestore: 'Memory-optimized, transactional database with analytical capabilities',
      databricks: 'Data lakehouse platform optimized for analytics and ML',
      details: 'SingleStore was designed as a distributed SQL database that combines in-memory performance with disk-based durability. Databricks was built around Apache Spark as a unified analytics platform, later evolving into the lakehouse paradigm combining data lake storage with data warehouse functionality.',
      metrics: {
        type: 'qualitative',
        description: 'Architectural differences make direct comparison difficult'
      }
    },
    {
      id: 'data-storage',
      category: 'Architecture',
      title: 'Data Storage',
      singlestore: 'Primarily in-memory with disk persistence',
      databricks: 'Primarily disk-based with intelligent caching',
      details: 'SingleStore keeps active data in memory for fast access with disk-based persistence for durability. Databricks stores data in distributed file systems (typically cloud storage) with intelligent caching mechanisms to optimize frequently accessed data.',
      metrics: {
        type: 'performance',
        winner: 'conditional',
        description: 'SingleStore: Up to 10x faster for point lookups and small queries | Databricks: More cost-effective for large datasets (50-80% lower storage costs)',
        source: 'Published benchmarks from both vendors'
      }
    },
    {
      id: 'use-case',
      category: 'Architecture',
      title: 'Use Case Strength',
      singlestore: 'High-throughput OLTP with some OLAP',
      databricks: 'Primarily OLAP, ML and data engineering',
      details: 'SingleStore excels at high-throughput transactional workloads while supporting analytical queries. Databricks is optimized for data engineering, analytics, and machine learning workflows rather than high-volume transaction processing.',
      metrics: {
        type: 'performance',
        winner: 'conditional',
        description: 'SingleStore: Up to 100x faster for high-volume OLTP | Databricks: 2-5x faster for complex analytics queries',
        source: 'TPC-H and TPC-DS benchmarks'
      }
    },
    {
      id: 'medallion',
      category: 'Data Management',
      title: 'Medallion Architecture',
      singlestore: 'Would require manual implementation',
      databricks: 'Native built-in concept',
      details: 'The bronze-silver-gold medallion architecture is a core Databricks concept, with native tools for implementing each layer. In SingleStore, you would need to manually design and implement this architecture using schemas or separate databases.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: '60-70% reduction in development time for implementing data quality frameworks',
        source: 'Databricks customer case studies'
      }
    },
    {
      id: 'query-language',
      category: 'Development',
      title: 'Query Language',
      singlestore: 'SQL',
      databricks: 'SQL, Python, R, Scala',
      details: 'SingleStore primarily uses SQL for data manipulation and queries. Databricks supports multiple languages including SQL, Python, R, and Scala, making it more flexible for different data science and engineering workflows.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Multi-language support enables 25-40% broader team collaboration',
        source: 'Developer productivity studies'
      }
    },
    {
      id: 'ml-integration',
      category: 'Development',
      title: 'Machine Learning',
      singlestore: 'Limited, requires external tools',
      databricks: 'Deeply integrated',
      details: 'Databricks has native ML capabilities with MLflow for experiment tracking, model registry, and deployment workflows. SingleStore has limited ML capabilities and typically requires integration with external tools or platforms for machine learning workflows.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: '3-5x faster ML deployment cycles with MLflow compared to custom integration solutions',
        source: 'Databricks MLflow documentation and case studies'
      }
    },
    {
      id: 'scalability',
      category: 'Performance',
      title: 'Scalability',
      singlestore: 'Horizontal scaling via sharding',
      databricks: 'Elastic compute separate from storage',
      details: 'SingleStore scales horizontally by adding nodes and distributing data via sharding. Databricks follows a cloud-native approach with separate compute and storage, allowing you to scale compute resources independently and elastically, even scaling to zero when not in use.',
      metrics: {
        type: 'cost',
        winner: 'databricks',
        description: '30-50% cost savings for variable workloads due to compute elasticity and scaling to zero',
        source: 'Cloud cost optimization studies'
      }
    },
    {
      id: 'data-integration',
      category: 'Connectivity',
      title: 'Data Integration',
      singlestore: 'JDBC/ODBC, pipelines for specific sources',
      databricks: 'Extensive native connectors ecosystem',
      details: 'Databricks offers extensive connectivity options including native connectors for various data sources, Delta Live Tables for ETL, and Auto Loader for data ingestion. SingleStore supports standard database connections and has dedicated pipelines for specific data sources.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: '40-60% reduction in integration development time',
        source: 'Databricks partner integration benchmarks'
      }
    },
    {
      id: 'governance',
      category: 'Management',
      title: 'Governance & Security',
      singlestore: 'Traditional database security model',
      databricks: 'Unity Catalog with fine-grained controls',
      details: 'Databricks Unity Catalog provides fine-grained governance across clouds with comprehensive audit logging, lineage tracking, and access controls at the row/column level. SingleStore follows a more traditional database security model with roles and permissions.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: '50-70% reduction in governance setup and maintenance time',
        source: 'Enterprise security implementation studies'
      }
    },
    {
      id: 'cost-model',
      category: 'Management',
      title: 'Cost Model',
      singlestore: 'Capacity-based licensing',
      databricks: 'Compute usage-based pricing',
      details: 'SingleStore typically uses capacity-based licensing models (RAM/CPU). Databricks follows a usage-based model centered around compute DBUs (Databricks Units), allowing for more flexible scaling based on actual workloads.',
      metrics: {
        type: 'cost',
        winner: 'databricks',
        description: '20-40% cost reduction for variable workloads with usage-based pricing vs. fixed capacity models',
        source: 'Cloud cost optimization analyses'
      }
    },
    {
      id: 'deployment',
      category: 'Management',
      title: 'Deployment Options',
      singlestore: 'Cloud, on-premises, hybrid',
      databricks: 'Multi-cloud, limited on-premises',
      details: 'SingleStore offers flexible deployment across cloud platforms, on-premises, and hybrid environments. Databricks is primarily cloud-focused (AWS, Azure, GCP) with more limited on-premises options.',
      metrics: {
        type: 'qualitative',
        winner: 'singlestore',
        description: 'Greater deployment flexibility for regulated environments',
        source: 'Vendor documentation'
      }
    },
    {
      id: 'streaming',
      category: 'Data Processing',
      title: 'Streaming Data Support',
      singlestore: 'Fast ingest, limited processing',
      databricks: 'Native structured streaming',
      details: 'Databricks provides native structured streaming capabilities for real-time data processing with exactly-once semantics. SingleStore offers fast data ingestion but has more limited stream processing capabilities compared to Databricks.',
      metrics: {
        type: 'performance',
        winner: 'conditional',
        description: 'SingleStore: Up to 1M+ rows/sec for simple ingestion | Databricks: Superior for complex stream processing with 2-3x throughput for transformations',
        source: 'Vendor documentation and streaming benchmarks'
      }
    },
    {
      id: 'recovery',
      category: 'Management',
      title: 'Recovery & Backup',
      singlestore: 'Traditional backup and restore',
      databricks: 'Time travel and ACID transactions',
      details: 'Databricks Delta Lake provides time travel capabilities allowing you to access previous versions of data and ACID transactions for reliability. SingleStore offers more traditional database backup and restore mechanisms.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Up to 90% reduction in recovery time using Delta Lake time travel vs. traditional restore operations',
        source: 'Databricks Delta Lake documentation'
      }
    },
    {
      id: 'perf-tuning',
      category: 'Performance',
      title: 'Performance Tuning',
      singlestore: 'Query optimization, indexing, sharding',
      databricks: 'Query optimization, Delta optimizations, Photon engine',
      details: 'SingleStore offers traditional database tuning approaches like indexing strategies, query optimization, and data distribution via sharding. Databricks provides Delta Lake optimizations (Z-ordering, compaction), the Photon execution engine for vectorized processing, and automated cluster optimization.',
      metrics: {
        type: 'performance',
        winner: 'databricks',
        description: 'Photon engine delivers 2-7x performance improvement for data-intensive analytical queries compared to Spark SQL',
        source: 'Databricks Photon benchmark reports'
      }
    },
    {
      id: 'community',
      category: 'Ecosystem',
      title: 'Community & Ecosystem',
      singlestore: 'Smaller community, commercial focus',
      databricks: 'Large open-source ecosystem',
      details: 'Databricks benefits from the large Apache Spark ecosystem and open-source communities around Delta Lake, MLflow, and other projects. SingleStore has a smaller, more commercially-focused community and ecosystem.',
      metrics: {
        type: 'qualitative',
        winner: 'databricks',
        description: '10x+ larger developer community and ecosystem',
        source: 'GitHub activity and community metrics'
      }
    },
    {
      id: 'etl-capabilities',
      category: 'Data Processing',
      title: 'ETL/ELT Capabilities',
      singlestore: 'Basic transformation during load',
      databricks: 'Advanced ETL with Delta Live Tables',
      details: 'Databricks offers Delta Live Tables for declarative ETL pipelines with quality controls, monitoring, and automatic optimization. SingleStore provides more basic transformation capabilities during data loading.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: '40-60% reduction in ETL development time with Delta Live Tables vs. traditional ETL approaches',
        source: 'Databricks customer case studies'
      }
    }
  ];

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

  // Filter the data based on the view mode
  const filteredData = comparisonData.filter(item => {
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

  return (
    <div className="flex flex-col max-w-6xl mx-auto p-4">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-lg text-center">
        <h1 className="text-2xl font-bold text-white">SingleStore vs Databricks</h1>
        <p className="text-white opacity-80 mt-2">Interactive Comparison for Data Engineering Teams</p>
      </div>
      
      <div className="bg-white p-4 border-b">
        <div className="flex justify-center space-x-3 flex-wrap gap-y-2">
          <button 
            onClick={() => setViewMode('all')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              viewMode === 'all' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
            }`}>
            All Comparisons
          </button>
          <button 
            onClick={() => setViewMode('performance')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              viewMode === 'performance' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
            }`}>
            Performance
          </button>
          <button 
            onClick={() => setViewMode('cost')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              viewMode === 'cost' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
            }`}>
            Cost Efficiency
          </button>
          <button 
            onClick={() => setViewMode('efficiency')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              viewMode === 'efficiency' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
            }`}>
            Development Efficiency
          </button>
          <button 
            onClick={() => setViewMode('terminology')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              viewMode === 'terminology' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
            }`}>
            Databricks Terms
          </button>
        </div>
      </div>
      
      <div className="bg-white shadow-lg overflow-hidden">
        {viewMode === 'terminology' ? (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Databricks Terminology</h2>
            <p className="mb-6 text-gray-700">Quick reference guide to Databricks concepts and terminology for your team</p>
            
            <div className="grid grid-cols-1 gap-4">
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
                    <div className="w-1/3 p-4 font-medium flex items-center">
                      <div>
                        {item.title}
                        {item.metrics && (
                          <div className="mt-2">
                            {renderMetricsBadge(item.metrics)}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-1/3 p-4 border-l border-r border-gray-200">
                      <div className="text-sm text-blue-800 font-semibold">SingleStore</div>
                      <div className="mt-1">{item.singlestore}</div>
                    </div>
                    <div className="w-1/3 p-4">
                      <div className="text-sm text-purple-800 font-semibold">Databricks</div>
                      <div className="mt-1">{item.databricks}</div>
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
                            <p className="text-gray-700 mb-2">
                              {item.metrics.winner === 'databricks' && <span className="font-semibold text-purple-700">Databricks: </span>}
                              {item.metrics.winner === 'singlestore' && <span className="font-semibold text-blue-700">SingleStore: </span>}
                              {item.metrics.description}
                            </p>
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
      
      <div className="mt-6 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">How to Use This Comparison</h2>
        <p className="text-gray-700">Click on any row to expand and see detailed information about that specific comparison point. Use the filter buttons above to focus on performance, cost efficiency, or development efficiency metrics. All metrics are based on official vendor documentation, benchmarks, and published case studies.</p>
        <div className="mt-4 bg-yellow-50 border border-yellow-200 p-3 rounded">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Performance and cost metrics can vary significantly based on specific workloads, configurations, and deployment scenarios. These figures represent typical scenarios but your actual results may differ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DatabaseComparison;