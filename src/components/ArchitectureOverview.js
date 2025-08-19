import React from 'react';

const ArchitectureOverview = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg mb-6 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">
          Platform Architecture Overview
        </h1>
        <p className="text-white/80">Technical architecture comparison of Snowflake, Databricks, and Microsoft Fabric</p>
      </div>

      {/* Architecture Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Snowflake Architecture */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-500">
          <h3 className="text-xl font-bold text-cyan-800 mb-4 flex items-center">
            <div className="bg-cyan-100 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            Snowflake Cloud DW
          </h3>
          
          <div className="space-y-4">
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Core Architecture</h4>
              <p className="text-sm text-gray-700 mb-3">Multi-cluster shared data architecture with automatic scaling and concurrency management</p>
              <ul className="text-xs space-y-1 text-gray-600">
                <li>• Separated storage and compute layers</li>
                <li>• Automatic scaling and optimization</li>
                <li>• Multi-cluster warehouses</li>
                <li>• Cross-cloud and cross-region replication</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-gray-700 text-sm">Storage Layer</h5>
                <p className="text-xs text-gray-600">Centralized cloud storage with micro-partitioning, compression, and automatic clustering</p>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700 text-sm">Compute Layer</h5>
                <p className="text-xs text-gray-600">Virtual warehouses with independent scaling, automatic suspension, and instant resume</p>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700 text-sm">Data Sharing</h5>
                <p className="text-xs text-gray-600">Secure data sharing without data movement through Snowflake Marketplace</p>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700 text-sm">Query Processing</h5>
                <p className="text-xs text-gray-600">Columnar storage with vectorized processing and automatic optimization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Databricks Architecture */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
            <div className="bg-purple-100 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            Databricks Lakehouse
          </h3>
          
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Core Architecture</h4>
              <p className="text-sm text-gray-700 mb-3">Unified lakehouse platform combining data lake flexibility with data warehouse performance</p>
              <ul className="text-xs space-y-1 text-gray-600">
                <li>• Delta Lake ACID storage format</li>
                <li>• Apache Spark compute engine</li>
                <li>• Unity Catalog for governance</li>
                <li>• Multi-cloud deployment (AWS, Azure, GCP)</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-gray-700 text-sm">Data Storage Layer</h5>
                <p className="text-xs text-gray-600">Delta Lake on cloud object storage with ACID transactions and time travel</p>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700 text-sm">Compute Layer</h5>
                <p className="text-xs text-gray-600">Optimized Apache Spark with Delta Engine and Photon for accelerated queries</p>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700 text-sm">ML/AI Integration</h5>
                <p className="text-xs text-gray-600">Native MLflow for ML lifecycle, feature stores, and model serving</p>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700 text-sm">Development Environment</h5>
                <p className="text-xs text-gray-600">Collaborative notebooks supporting Python, Scala, SQL, R</p>
              </div>
            </div>
          </div>
        </div>

        {/* Microsoft Fabric Architecture */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            Microsoft Fabric
          </h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Core Architecture</h4>
              <p className="text-sm text-gray-700 mb-3">Unified analytics platform with OneLake as the single source of truth for all data workloads</p>
              <ul className="text-xs space-y-1 text-gray-600">
                <li>• OneLake unified data lake</li>
                <li>• Multiple compute engines (Spark, SQL, AS)</li>
                <li>• Integrated with Microsoft 365 ecosystem</li>
                <li>• Capacity-based unified licensing</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-gray-700 text-sm">OneLake Storage</h5>
                <p className="text-xs text-gray-600">Unified data lake built on Azure Data Lake with automatic data organization</p>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700 text-sm">Compute Engines</h5>
                <p className="text-xs text-gray-600">Multiple engines: Spark for big data, SQL endpoint for analytics, Analysis Services for BI</p>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700 text-sm">Data Integration</h5>
                <p className="text-xs text-gray-600">Native connectors to Microsoft services, real-time event streams, and data pipelines</p>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700 text-sm">Business Intelligence</h5>
                <p className="text-xs text-gray-600">Deeply integrated Power BI with direct mode connectivity and semantic modeling</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Philosophy Comparison */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Architecture Philosophy Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-cyan-800 font-bold text-lg">SF</span>
            </div>
            <h4 className="font-semibold text-cyan-800 mb-2">Cloud-Native DW</h4>
            <p className="text-sm text-gray-600">Purpose-built cloud data warehouse with automatic optimization and scaling</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-800 font-bold text-lg">DB</span>
            </div>
            <h4 className="font-semibold text-purple-800 mb-2">Lakehouse Approach</h4>
            <p className="text-sm text-gray-600">Combines data lake flexibility with warehouse performance for ML/AI workloads</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-green-800 font-bold text-lg">MF</span>
            </div>
            <h4 className="font-semibold text-green-800 mb-2">Unified Platform</h4>
            <p className="text-sm text-gray-600">All-in-one analytics solution integrated with Microsoft ecosystem</p>
          </div>
        </div>
      </div>

      {/* Technical Considerations */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Key Technical Considerations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Data Processing Approaches</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-cyan-50 p-3 rounded">
                <span className="font-medium text-cyan-800">Snowflake:</span> SQL-first approach with virtual warehouses for compute scaling
              </div>
              <div className="bg-purple-50 p-3 rounded">
                <span className="font-medium text-purple-800">Databricks:</span> Spark-based processing with support for batch, streaming, and ML workloads
              </div>
              <div className="bg-green-50 p-3 rounded">
                <span className="font-medium text-green-800">Fabric:</span> Multiple engines (Spark, SQL, Analysis Services) in unified platform
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Storage and Governance</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-cyan-50 p-3 rounded">
                <span className="font-medium text-cyan-800">Snowflake:</span> Proprietary format with built-in governance and automatic optimization
              </div>
              <div className="bg-purple-50 p-3 rounded">
                <span className="font-medium text-purple-800">Databricks:</span> Open Delta Lake format with Unity Catalog for multi-cloud governance
              </div>
              <div className="bg-green-50 p-3 rounded">
                <span className="font-medium text-green-800">Fabric:</span> OneLake with Microsoft Purview integration for unified data governance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureOverview;