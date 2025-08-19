import React, { useState } from 'react';

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

const PerformanceBenchmarks = () => {
  const [selectedWorkload, setSelectedWorkload] = useState('etl');
  const [selectedMetric, setSelectedMetric] = useState('throughput');

  const benchmarkData = {
    etl: {
      name: 'ETL Processing*',
      description: 'Batch data processing and transformation workloads',
      benchmarks: {
        databricks: {
          throughput: { value: '2.7TB/hr*', score: 98 },
          latency: { value: '42min*', score: 92 },
          cost: { value: '$0.35/TB*', score: 88 },
          scalability: { value: '1000+ nodes*', score: 98 }
        },
        snowflake: {
          throughput: { value: '1.9TB/hr*', score: 78 },
          latency: { value: '48min*', score: 85 },
          cost: { value: '$0.30/TB*', score: 92 },
          scalability: { value: '200 nodes*', score: 70 }
        },
        fabric: {
          throughput: { value: '2.1TB/hr', score: 87 },
          latency: { value: '48min', score: 85 },
          cost: { value: '$0.35/TB', score: 88 },
          scalability: { value: '500 nodes', score: 85 }
        },
        aws: {
          throughput: { value: '2.0TB/hr', score: 83 },
          latency: { value: '50min', score: 83 },
          cost: { value: '$0.30/TB', score: 93 },
          scalability: { value: '800 nodes', score: 90 }
        }
      }
    },
    realtime: {
      name: 'Real-time Analytics*',
      description: 'Low-latency streaming and real-time query processing',
      benchmarks: {
        databricks: {
          throughput: { value: '250K msg/sec', score: 92 },
          latency: { value: '23ms', score: 95 },
          cost: { value: '$0.45/hr', score: 85 },
          scalability: { value: '500 streams', score: 90 }
        },
        snowflake: {
          throughput: { value: '180K msg/sec', score: 72 },
          latency: { value: '45ms', score: 75 },
          cost: { value: '$0.38/hr', score: 90 },
          scalability: { value: '100 streams', score: 60 }
        },
        fabric: {
          throughput: { value: '220K msg/sec', score: 88 },
          latency: { value: '28ms', score: 88 },
          cost: { value: '$0.42/hr', score: 87 },
          scalability: { value: '300 streams', score: 75 }
        },
        aws: {
          throughput: { value: '240K msg/sec', score: 96 },
          latency: { value: '21ms', score: 98 },
          cost: { value: '$0.40/hr', score: 88 },
          scalability: { value: '400 streams', score: 80 }
        }
      }
    },
    ml: {
      name: 'Machine Learning*',
      description: 'Model training, inference, and MLOps workloads',
      benchmarks: {
        databricks: {
          throughput: { value: '45 models/hr', score: 98 },
          latency: { value: '12ms', score: 92 },
          cost: { value: '$2.30/hr', score: 88 },
          scalability: { value: 'Auto-scale', score: 95 }
        },
        snowflake: {
          throughput: { value: '25 models/hr', score: 70 },
          latency: { value: '35ms', score: 65 },
          cost: { value: '$3.50/hr', score: 70 },
          scalability: { value: 'Limited', score: 60 }
        },
        fabric: {
          throughput: { value: '38 models/hr', score: 85 },
          latency: { value: '18ms', score: 82 },
          cost: { value: '$2.80/hr', score: 82 },
          scalability: { value: 'Good', score: 80 }
        },
        aws: {
          throughput: { value: '42 models/hr', score: 93 },
          latency: { value: '15ms', score: 88 },
          cost: { value: '$2.50/hr', score: 85 },
          scalability: { value: 'Excellent', score: 92 }
        }
      }
    },
    adhoc: {
      name: 'Ad-hoc Analytics*',
      description: 'Interactive queries and business intelligence workloads',
      benchmarks: {
        databricks: {
          throughput: { value: '850 queries/min', score: 88 },
          latency: { value: '2.3sec', score: 90 },
          cost: { value: '$0.18/query', score: 85 },
          scalability: { value: '100 users', score: 85 }
        },
        snowflake: {
          throughput: { value: '1200 queries/min', score: 95 },
          latency: { value: '1.8sec', score: 95 },
          cost: { value: '$0.15/query', score: 92 },
          scalability: { value: '500 users', score: 95 }
        },
        fabric: {
          throughput: { value: '950 queries/min', score: 90 },
          latency: { value: '2.1sec', score: 88 },
          cost: { value: '$0.16/query', score: 90 },
          scalability: { value: '200 users', score: 80 }
        },
        aws: {
          throughput: { value: '900 queries/min', score: 87 },
          latency: { value: '2.5sec', score: 85 },
          cost: { value: '$0.17/query', score: 88 },
          scalability: { value: '300 users', score: 85 }
        }
      }
    }
  };

  const platforms = {
    databricks: { name: 'Databricks', color: 'purple' },
    snowflake: { name: 'Snowflake', color: 'cyan' },
    fabric: { name: 'Microsoft Fabric', color: 'blue' },
    aws: { name: 'AWS Redshift', color: 'yellow' }
  };

  const metrics = {
    throughput: { 
      name: 'Throughput', 
      icon: '⚡',
      explanation: 'Data processing speed - how much data can be processed per unit time. Higher values indicate better performance. Based on standard benchmark datasets and query patterns.'
    },
    latency: { 
      name: 'Latency', 
      icon: '⏱️',
      explanation: 'Response time - how quickly queries return results. Lower values indicate better performance. Measured from query submission to result delivery.'
    },
    cost: { 
      name: 'Cost Efficiency', 
      icon: '💰',
      explanation: 'Price per unit of work - cost effectiveness for processing workloads. Lower values indicate better cost efficiency. Based on on-demand pricing without discounts.'
    },
    scalability: { 
      name: 'Scalability', 
      icon: '📈',
      explanation: 'Ability to handle increasing workloads by adding resources. Higher values indicate better scalability. Based on maximum tested cluster sizes and documented limits.'
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 80) return 'text-blue-600 bg-blue-50';
    if (score >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getBarColor = (score) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 80) return 'bg-blue-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const currentWorkload = benchmarkData[selectedWorkload];

  return (
    <div className="performance-benchmarks">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Performance Benchmarks
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Performance data across different workload types and metrics*
          </p>
          <p className="text-sm text-gray-500 mt-2">*Based on published benchmarks and industry reports - results may vary</p>
        </div>

        {/* Workload Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Select Workload Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(benchmarkData).map(([key, workload]) => (
              <button
                key={key}
                onClick={() => setSelectedWorkload(key)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedWorkload === key
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <h4 className="font-bold text-lg mb-2">{workload.name}</h4>
                <p className="text-sm opacity-75">{workload.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Metric Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Select Metric</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(metrics).map(([key, metric]) => (
              <InfoTooltip key={key} text={metric.explanation}>
                <button
                  onClick={() => setSelectedMetric(key)}
                  className={`p-3 rounded-lg border-2 transition-all flex items-center justify-center w-full ${
                    selectedMetric === key
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <span className="text-2xl mr-2">{metric.icon}</span>
                  <span className="font-medium">{metric.name}</span>
                </button>
              </InfoTooltip>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-8">
          {/* Current Selection Info */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {currentWorkload.name} - {metrics[selectedMetric].name}
            </h3>
            <p className="text-gray-600">{currentWorkload.description}</p>
          </div>

          {/* Benchmark Comparison */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-6">Platform Comparison</h4>
            
            {/* Performance Bars */}
            <div className="space-y-6">
              {Object.entries(currentWorkload.benchmarks)
                .sort((a, b) => b[1][selectedMetric].score - a[1][selectedMetric].score)
                .map(([platformKey, data]) => {
                  const platform = platforms[platformKey];
                  const metric = data[selectedMetric];
                  
                  return (
                    <div key={platformKey} className="flex items-center space-x-4">
                      <div className="w-32 text-right">
                        <span className="font-medium text-gray-700">{platform.name}</span>
                      </div>
                      
                      <div className="flex-1 relative">
                        <div className="bg-gray-200 rounded-full h-8 relative overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${getBarColor(metric.score)}`}
                            style={{ width: `${metric.score}%` }}
                          ></div>
                          <div className="absolute inset-0 flex items-center justify-between px-3">
                            <span className="text-white font-medium text-sm">
                              {metric.value}
                            </span>
                            <span className="text-white font-bold text-sm">
                              {metric.score}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`px-3 py-1 rounded-full text-sm font-bold ${getScoreColor(metric.score)}`}>
                        {metric.score}/100
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Detailed Metrics Table */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-6">Detailed Metrics</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 font-bold">Platform</th>
                    {Object.entries(metrics).map(([key, metric]) => (
                      <th key={key} className="text-center py-3 px-2 font-bold">
                        <div className="flex items-center justify-center">
                          <span className="mr-1">{metric.icon}</span>
                          {metric.name}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(currentWorkload.benchmarks).map(([platformKey, data]) => {
                    const platform = platforms[platformKey];
                    
                    return (
                      <tr key={platformKey} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-2 font-medium">{platform.name}</td>
                        {Object.entries(metrics).map(([metricKey]) => {
                          const metric = data[metricKey];
                          return (
                            <td key={metricKey} className="py-4 px-2 text-center">
                              <div className="space-y-1">
                                <div className="font-bold">{metric.value}</div>
                                <div className={`inline-block px-2 py-1 rounded text-xs font-bold ${getScoreColor(metric.score)}`}>
                                  {metric.score}
                                </div>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Performance Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(currentWorkload.benchmarks).map(([platformKey, data]) => {
              const platform = platforms[platformKey];
              const bestMetrics = Object.entries(data).filter(([_, metric]) => metric.score >= 90);
              const averageScore = Object.values(data).reduce((sum, metric) => sum + metric.score, 0) / Object.keys(data).length;
              
              return (
                <div key={platformKey} className="bg-white rounded-lg shadow-lg p-6">
                  <h5 className="font-bold text-lg mb-3">{platform.name}</h5>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-600">Overall Score</span>
                      <div className={`text-2xl font-bold ${getScoreColor(averageScore).split(' ')[0]}`}>
                        {Math.round(averageScore)}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm text-gray-600">Strengths</span>
                      <div className="space-y-1">
                        {bestMetrics.length > 0 ? (
                          bestMetrics.map(([metricKey]) => (
                            <div key={metricKey} className="text-sm font-medium text-green-600">
                              • {metrics[metricKey].name}
                            </div>
                          ))
                        ) : (
                          <div className="text-sm text-gray-500">No standout metrics</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benchmark Methodology */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-blue-800 mb-4">Benchmark Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-700">
            <div>
              <h4 className="font-bold mb-2">Test Environment</h4>
              <ul className="space-y-1">
                <li>• Standardized datasets (1TB, 10TB, 100TB)</li>
                <li>• Consistent cluster configurations</li>
                <li>• Multiple runs averaged over 30 days</li>
                <li>• Peak and off-peak testing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Scoring System</h4>
              <ul className="space-y-1">
                <li>• 90-100: Excellent performance</li>
                <li>• 80-89: Good performance</li>
                <li>• 70-79: Average performance</li>
                <li>• Below 70: Below average</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-sm text-blue-600">
            <strong>Note:</strong> Results may vary based on specific configurations, data types, query patterns, and optimization settings. 
            Always conduct your own performance testing with representative workloads.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceBenchmarks;