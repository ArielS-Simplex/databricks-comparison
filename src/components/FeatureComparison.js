import React, { useState } from 'react';

const FeatureComparison = () => {
  const [selectedCategory, setSelectedCategory] = useState('core-capabilities');

  const featureCategories = {
    'core-capabilities': {
      name: 'Core Data Platform Capabilities',
      features: [
        {
          feature: 'Data Warehousing',
          databricks: { support: 'Full', details: 'Lakehouse architecture with Delta Lake' },
          snowflake: { support: 'Excellent', details: 'Native cloud data warehouse' },
          fabric: { support: 'Full', details: 'OneLake with warehouse capabilities' }
        },
        {
          feature: 'Data Lakes',
          databricks: { support: 'Excellent', details: 'Native Delta Lake support' },
          snowflake: { support: 'Good', details: 'External stages and Iceberg support' },
          fabric: { support: 'Full', details: 'OneLake unified data lake' }
        },
        {
          feature: 'Real-time Analytics',
          databricks: { support: 'Excellent', details: 'Structured Streaming' },
          snowflake: { support: 'Good', details: 'Streams and Tasks' },
          fabric: { support: 'Full', details: 'Real-Time Analytics' }
        },
        {
          feature: 'Machine Learning',
          databricks: { support: 'Excellent', details: 'MLflow, AutoML, Feature Store' },
          snowflake: { support: 'Limited', details: 'Snowpark ML (preview)' },
          fabric: { support: 'Good', details: 'Azure ML integration' }
        },
        {
          feature: 'Data Governance',
          databricks: { support: 'Good', details: 'Unity Catalog' },
          snowflake: { support: 'Excellent', details: 'Built-in governance features' },
          fabric: { support: 'Full', details: 'Microsoft Purview integration' }
        }
      ]
    },
    'integration': {
      name: 'Integration & Connectivity',
      features: [
        {
          feature: 'Cloud Native',
          databricks: { support: 'Full', details: 'AWS, Azure, GCP' },
          snowflake: { support: 'Full', details: 'AWS, Azure, GCP' },
          fabric: { support: 'Limited', details: 'Azure-first, limited multi-cloud' }
        },
        {
          feature: 'API Ecosystem',
          databricks: { support: 'Excellent', details: 'REST APIs, SDK, CLI' },
          snowflake: { support: 'Excellent', details: 'REST APIs, SQL API, Connectors' },
          fabric: { support: 'Good', details: 'Power BI APIs, REST APIs' }
        },
        {
          feature: 'Third-party Connectors',
          databricks: { support: 'Excellent', details: '100+ native connectors' },
          snowflake: { support: 'Excellent', details: 'Partner Connect ecosystem' },
          fabric: { support: 'Good', details: 'Microsoft ecosystem focus' }
        },
        {
          feature: 'ETL/ELT Tools',
          databricks: { support: 'Full', details: 'Native ETL + external tools' },
          snowflake: { support: 'Good', details: 'Partner integrations' },
          fabric: { support: 'Full', details: 'Data Factory integration' }
        }
      ]
    },
    'performance': {
      name: 'Performance & Scalability',
      features: [
        {
          feature: 'Auto-scaling',
          databricks: { support: 'Excellent', details: 'Auto-scaling clusters' },
          snowflake: { support: 'Excellent', details: 'Auto-scaling warehouses' },
          fabric: { support: 'Good', details: 'Automatic scaling' }
        },
        {
          feature: 'Serverless Computing',
          databricks: { support: 'Good', details: 'Serverless SQL (preview)' },
          snowflake: { support: 'Excellent', details: 'Serverless compute' },
          fabric: { support: 'Full', details: 'Serverless SQL pools' }
        },
        {
          feature: 'Concurrent Users',
          databricks: { support: 'Excellent', details: 'Unlimited concurrent users' },
          snowflake: { support: 'Excellent', details: 'Multi-cluster warehouses' },
          fabric: { support: 'Good', details: 'Based on capacity units' }
        },
        {
          feature: 'Query Optimization',
          databricks: { support: 'Excellent', details: 'Photon engine, Z-ordering' },
          snowflake: { support: 'Excellent', details: 'Automatic clustering, caching' },
          fabric: { support: 'Good', details: 'Query optimization engine' }
        }
      ]
    },
    'security': {
      name: 'Security & Compliance',
      features: [
        {
          feature: 'Data Encryption',
          databricks: { support: 'Full', details: 'End-to-end encryption' },
          snowflake: { support: 'Full', details: 'Automatic encryption at rest/transit' },
          fabric: { support: 'Full', details: 'Microsoft-managed encryption' }
        },
        {
          feature: 'Access Controls',
          databricks: { support: 'Excellent', details: 'RBAC, ABAC, fine-grained' },
          snowflake: { support: 'Excellent', details: 'RBAC, row/column level security' },
          fabric: { support: 'Full', details: 'Azure AD integration' }
        },
        {
          feature: 'Compliance Certifications',
          databricks: { support: 'Full', details: 'SOC 2, HIPAA, PCI DSS, ISO 27001' },
          snowflake: { support: 'Full', details: 'SOC 2, HIPAA, PCI DSS, ISO 27001' },
          fabric: { support: 'Full', details: 'Full Microsoft compliance suite' }
        },
        {
          feature: 'Data Masking',
          databricks: { support: 'Good', details: 'Column-level masking' },
          snowflake: { support: 'Excellent', details: 'Dynamic data masking' },
          fabric: { support: 'Good', details: 'Row-level security' }
        }
      ]
    },
    'developer-experience': {
      name: 'Developer Experience',
      features: [
        {
          feature: 'Programming Languages',
          databricks: { support: 'Excellent', details: 'Python, R, Scala, SQL, Java' },
          snowflake: { support: 'Good', details: 'SQL, Python, Java, JavaScript' },
          fabric: { support: 'Good', details: 'SQL, Python, R, .NET' }
        },
        {
          feature: 'Notebook Experience',
          databricks: { support: 'Excellent', details: 'Collaborative notebooks' },
          snowflake: { support: 'Limited', details: 'Snowsight worksheets' },
          fabric: { support: 'Good', details: 'Synapse notebooks' }
        },
        {
          feature: 'Version Control',
          databricks: { support: 'Excellent', details: 'Git integration, Repos' },
          snowflake: { support: 'Limited', details: 'Third-party integrations' },
          fabric: { support: 'Good', details: 'Git integration' }
        },
        {
          feature: 'IDE Integration',
          databricks: { support: 'Good', details: 'VS Code, IntelliJ plugins' },
          snowflake: { support: 'Limited', details: 'Third-party extensions' },
          fabric: { support: 'Excellent', details: 'Full Visual Studio integration' }
        }
      ]
    }
  };

  const getSupportLevel = (support) => {
    const levels = {
      'Excellent': { color: 'bg-green-100 text-green-800', icon: '●●●' },
      'Full': { color: 'bg-blue-100 text-blue-800', icon: '●●●' },
      'Good': { color: 'bg-yellow-100 text-yellow-800', icon: '●●○' },
      'Limited': { color: 'bg-red-100 text-red-800', icon: '●○○' }
    };
    return levels[support] || { color: 'bg-gray-100 text-gray-800', icon: '○○○' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Feature Comparison</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive feature-by-feature comparison across Databricks, Snowflake, and Microsoft Fabric
        </p>
      </div>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {Object.entries(featureCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === key
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:border-blue-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {featureCategories[selectedCategory].name}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/4">
                  Feature
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-600 rounded"></div>
                    <span>Databricks</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-cyan-500 rounded"></div>
                    <span>Snowflake</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <span>Microsoft Fabric</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {featureCategories[selectedCategory].features.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{item.feature}</div>
                  </td>
                  
                  {/* Databricks */}
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSupportLevel(item.databricks.support).color}`}>
                          {getSupportLevel(item.databricks.support).icon} {item.databricks.support}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">{item.databricks.details}</div>
                    </div>
                  </td>

                  {/* Snowflake */}
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSupportLevel(item.snowflake.support).color}`}>
                          {getSupportLevel(item.snowflake.support).icon} {item.snowflake.support}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">{item.snowflake.details}</div>
                    </div>
                  </td>

                  {/* Microsoft Fabric */}
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSupportLevel(item.fabric.support).color}`}>
                          {getSupportLevel(item.fabric.support).icon} {item.fabric.support}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">{item.fabric.details}</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-medium text-gray-900 mb-3">Support Level Legend</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">●●● Excellent</span>
            <span className="text-sm text-gray-600">Best-in-class</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">●●● Full</span>
            <span className="text-sm text-gray-600">Complete support</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">●●○ Good</span>
            <span className="text-sm text-gray-600">Solid capabilities</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">●○○ Limited</span>
            <span className="text-sm text-gray-600">Basic or preview</span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-4 bg-purple-600 rounded"></div>
            <h3 className="font-bold text-purple-900">Databricks</h3>
          </div>
          <p className="text-sm text-purple-700">
            Best for: Machine learning, data science, and unified analytics on lakehouse architecture
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 border border-cyan-200">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-4 bg-cyan-500 rounded"></div>
            <h3 className="font-bold text-cyan-900">Snowflake</h3>
          </div>
          <p className="text-sm text-cyan-700">
            Best for: Cloud-native data warehousing, data sharing, and enterprise analytics
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <h3 className="font-bold text-blue-900">Microsoft Fabric</h3>
          </div>
          <p className="text-sm text-blue-700">
            Best for: Microsoft ecosystem integration, Power BI analytics, and unified SaaS platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison;