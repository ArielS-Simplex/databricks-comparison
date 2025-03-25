import React, { useState } from 'react';
import PageHeader from './common/PageHeader';

const StoragePricingComparison = () => {
  // State for data volume selector
  const [dataVolume, setDataVolume] = useState('medium');
  
  // Pricing data for different storage tiers - EXAMPLE PRICES (need verification)
  const storageTierPricing = [
    {
      tier: 'Hot / Standard',
      azure: '$0.0184 per GB/month',
      aws: '$0.023 per GB/month',
      diff: -20, // Azure is 20% cheaper
      notes: 'Frequently accessed data, immediate availability'
    },
    {
      tier: 'Cool / Infrequent Access',
      azure: '$0.01 per GB/month',
      aws: '$0.0125 per GB/month',
      diff: -20, // Azure is 20% cheaper
      notes: 'Less frequently accessed, small retrieval fee'
    },
    {
      tier: 'Archive / Glacier',
      azure: '$0.00099 per GB/month',
      aws: '$0.004 per GB/month',
      diff: -75, // Azure is 75% cheaper
      notes: 'Rarely accessed, higher retrieval fees and latency'
    },
    {
      tier: 'API Operations (PUT/GET)',
      azure: '$0.005-$0.05 per 10,000 operations',
      aws: '$0.0004-$0.005 per 1,000 requests',
      diff: null, // Complex comparison, can't express as simple %
      notes: 'Varies by operation type and data tier'
    },
    {
      tier: 'Data Transfer Out',
      azure: '$0.05-$0.08 per GB (first 10TB)',
      aws: '$0.05-$0.09 per GB (first 10TB)',
      diff: -5, // Azure averages ~5% cheaper
      notes: 'Significant cost factor for data-heavy workloads'
    }
  ];

  // 3-year TCO projections for different data volumes - EXAMPLE VALUES
  const tcoProjections = {
    small: [
      {
        scenario: 'Basic Storage (10TB, low operations)',
        azure: {
          monthly: 192,
          year1: 2300,
          year2: 4600,
          year3: 6900,
          total: 13800
        },
        aws: {
          monthly: 230,
          year1: 2760,
          year2: 5520,
          year3: 8280,
          total: 16560
        },
        diff: -16.7, // Azure is 16.7% cheaper over 3 years
        notes: '10TB with 80% hot, 15% cool, 5% archive storage'
      },
      {
        scenario: 'Active Analytics (10TB, high operations)',
        azure: {
          monthly: 258,
          year1: 3100,
          year2: 6200,
          year3: 9300,
          total: 18600
        },
        aws: {
          monthly: 283,
          year1: 3400,
          year2: 6800,
          year3: 10200,
          total: 20400
        },
        diff: -8.8, // Azure is 8.8% cheaper over 3 years
        notes: 'Frequent data access with regular query operations'
      }
    ],
    medium: [
      {
        scenario: 'Basic Storage (100TB, low operations)',
        azure: {
          monthly: 1833,
          year1: 22000,
          year2: 44000,
          year3: 66000,
          total: 132000
        },
        aws: {
          monthly: 2300,
          year1: 27600,
          year2: 55200,
          year3: 82800,
          total: 165600
        },
        diff: -20.3, // Azure is 20.3% cheaper over 3 years
        notes: '100TB with 70% hot, 20% cool, 10% archive storage'
      },
      {
        scenario: 'Active Analytics (100TB, high operations)',
        azure: {
          monthly: 2417,
          year1: 29000,
          year2: 58000,
          year3: 87000,
          total: 174000
        },
        aws: {
          monthly: 2792,
          year1: 33500,
          year2: 67000,
          year3: 100500,
          total: 201000
        },
        diff: -13.4, // Azure is 13.4% cheaper over 3 years
        notes: 'Frequent data analysis with ML workloads'
      },
      {
        scenario: 'Hybrid Usage (100TB, mixed operations)',
        azure: {
          monthly: 2125,
          year1: 25500,
          year2: 51000,
          year3: 76500,
          total: 153000
        },
        aws: {
          monthly: 2508,
          year1: 30100,
          year2: 60200,
          year3: 90300,
          total: 180600
        },
        diff: -15.3, // Azure is 15.3% cheaper over 3 years
        notes: 'Mix of storage and compute workloads'
      }
    ],
    large: [
      {
        scenario: 'Enterprise Storage (1PB, optimized)',
        azure: {
          monthly: 14833,
          year1: 178000,
          year2: 356000,
          year3: 534000,
          total: 1068000
        },
        aws: {
          monthly: 18417,
          year1: 221000,
          year2: 442000,
          year3: 663000,
          total: 1326000
        },
        diff: -19.5, // Azure is 19.5% cheaper over 3 years
        notes: '1PB with tiered storage strategy and reserved capacity'
      },
      {
        scenario: 'Data Lake (1PB, heavy analytics)',
        azure: {
          monthly: 17917,
          year1: 215000,
          year2: 430000,
          year3: 645000,
          total: 1290000
        },
        aws: {
          monthly: 21500,
          year1: 258000,
          year2: 516000,
          year3: 774000,
          total: 1548000
        },
        diff: -16.7, // Azure is 16.7% cheaper over 3 years
        notes: 'Heavy query and analysis workloads with data lake patterns'
      },
      {
        scenario: 'Mixed Workload (1PB, varied usage)',
        azure: {
          monthly: 16333,
          year1: 196000,
          year2: 392000,
          year3: 588000,
          total: 1176000
        },
        aws: {
          monthly: 19583,
          year1: 235000,
          year2: 470000,
          year3: 705000,
          total: 1410000
        },
        diff: -16.6, // Azure is 16.6% cheaper over 3 years
        notes: 'Mix of archival, hot storage, and analytics workloads'
      }
    ]
  };

  // Cost efficiency factors
  const costEfficiencyFactors = [
    {
      factor: 'Reserved Capacity Discounts',
      azure: 'Up to 38% savings with 3-year reserved capacity',
      aws: 'Up to 30% with S3 Reservations or 62% with Storage Lens optimizations',
      impact: 'Significant for stable, predictable workloads',
      example: 'A company with 500TB of consistent storage needs could save ~$55,000 annually by committing to 3-year reserved capacity instead of pay-as-you-go'
    },
    {
      factor: 'Lifecycle Management',
      azure: 'Automated tiering can reduce costs by 40-60%',
      aws: 'S3 Intelligent-Tiering can reduce costs by 30-50%',
      impact: 'Critical for data with changing access patterns',
      example: 'Transaction logs older than 90 days are automatically moved from hot to cool storage, and after 1 year to archive storage, reducing costs by 75%'
    },
    {
      factor: 'Regional Price Variations',
      azure: 'Up to 25% difference between regions',
      aws: 'Up to 40% difference between regions',
      impact: 'Consider for global deployments',
      example: 'Storing 100TB in US Central regions vs. Europe North can save approximately $2,000/month while maintaining similar performance'
    },
    {
      factor: 'Egress Costs',
      azure: 'First 5GB free, then tiered pricing',
      aws: 'All outbound data charged, tiered pricing',
      impact: 'Major cost factor for data-sharing workloads',
      example: 'A data warehouse with 10TB monthly analytics exports to external systems could face $800-$1,000 in monthly egress fees alone'
    }
  ];

  // Hidden cost considerations
  const hiddenCosts = [
    {
      category: 'Operation Costs',
      description: 'API calls, data retrieval, and monitoring can add 10-15% to base storage costs',
      recommendation: 'Use batch operations and optimize access patterns',
      example: 'Each GET/PUT/LIST operation costs money. Example: 10 million API calls per month could add $50-100 to your bill. Reading 1000 small files costs more than reading 1 large file with the same total data.'
    },
    {
      category: 'Data Transfer Between Services',
      description: 'Moving data between storage and compute services incurs costs even within the same cloud',
      recommendation: 'Co-locate services and use private endpoints where possible',
      example: 'Transferring 1TB of data from storage to a compute service in different regions could cost $90, whereas keeping them in the same region might only cost $10 or be free.'
    },
    {
      category: 'Data Retrieval Penalties',
      description: 'Early deletion or retrieval from cool/archive tiers incurs penalties',
      recommendation: 'Carefully plan data lifecycle policies',
      example: 'Retrieving 1TB from archive storage before the minimum duration (e.g., 180 days) could incur a $100+ penalty charge on top of standard retrieval fees.'
    },
    {
      category: 'Monitoring & Management',
      description: 'Advanced monitoring features add costs but provide optimization opportunities',
      recommendation: 'Invest in monitoring for large deployments to identify cost-saving opportunities',
      example: 'Azure Storage Analytics or AWS S3 Storage Lens might cost $200/month for a large deployment, but could identify $1000+ in monthly savings through usage pattern optimization.'
    },
    {
      category: 'Payment Industry Compliance Storage',
      description: 'PCI-DSS and other payment regulations require specific data retention and protection',
      recommendation: 'Design storage architecture with compliance-specific tiers',
      example: 'Transaction data requiring 7-year retention with encryption and audit trails might cost 30% more than standard storage due to compliance requirements for access controls and redundancy.'
    }
  ];

  // Function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div>
      {/* Replace custom header with PageHeader component */}
      <PageHeader 
        title="Cloud Storage Pricing Analysis"
        subtitle="3-Year Total Cost of Ownership Comparison"
      />

      {/* Basic pricing table */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Base Pricing Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 text-left">Storage Tier/Service</th>
                <th className="px-4 py-2 border-b-2 text-left bg-blue-50">Azure Blob Storage</th>
                <th className="px-4 py-2 border-b-2 text-left bg-amber-50">AWS S3</th>
                <th className="px-4 py-2 border-b-2 text-center">Difference</th>
                <th className="px-4 py-2 border-b-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {storageTierPricing.map((item, idx) => (
                <tr key={`pricing-${idx}`} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{item.tier}</td>
                  <td className="px-4 py-3 bg-blue-50/30">{item.azure}</td>
                  <td className="px-4 py-3 bg-amber-50/30">{item.aws}</td>
                  <td className="px-4 py-3 text-center">
                    {item.diff !== null ? (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.diff < 0 
                          ? 'bg-green-100 text-green-800' 
                          : item.diff > 0 
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {item.diff < 0 
                          ? `Azure ${Math.abs(item.diff)}% cheaper` 
                          : item.diff > 0 
                            ? `AWS ${item.diff}% cheaper`
                            : 'Same cost'}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-500">Varies by usage</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600 text-sm">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          <span className="font-semibold text-amber-700">IMPORTANT:</span> These are example prices for illustration purposes. 
          Actual pricing varies by region and changes frequently. Verify current pricing on cloud provider websites before making decisions.
        </p>
      </div>

      {/* TCO Comparison with data volume selector */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h2 className="text-2xl font-semibold">3-Year TCO Projections</h2>
          <div className="mt-3 md:mt-0">
            <label className="mr-2 font-medium">Data Volume:</label>
            <div className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  dataVolume === 'small' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-300`}
                onClick={() => setDataVolume('small')}
              >
                Small (10TB)
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  dataVolume === 'medium' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border-t border-b border-gray-300`}
                onClick={() => setDataVolume('medium')}
              >
                Medium (100TB)
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  dataVolume === 'large' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-300`}
                onClick={() => setDataVolume('large')}
              >
                Large (1PB)
              </button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 text-left">Usage Scenario</th>
                <th className="px-4 py-2 border-b-2 text-center" colSpan="3">Azure Blob Storage</th>
                <th className="px-4 py-2 border-b-2 text-center" colSpan="3">AWS S3</th>
                <th className="px-4 py-2 border-b-2 text-center">Difference</th>
                <th className="px-4 py-2 border-b-2 text-left">Notes</th>
              </tr>
              <tr>
                <th className="px-4 py-2 border-b-2 text-left"></th>
                <th className="px-4 py-2 border-b-2 text-center bg-blue-50">Monthly</th>
                <th className="px-4 py-2 border-b-2 text-center bg-blue-50">Annual</th>
                <th className="px-4 py-2 border-b-2 text-center bg-blue-100">3-Year</th>
                <th className="px-4 py-2 border-b-2 text-center bg-amber-50">Monthly</th>
                <th className="px-4 py-2 border-b-2 text-center bg-amber-50">Annual</th>
                <th className="px-4 py-2 border-b-2 text-center bg-amber-100">3-Year</th>
                <th className="px-4 py-2 border-b-2 text-center"></th>
                <th className="px-4 py-2 border-b-2 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {tcoProjections[dataVolume].map((scenario, idx) => (
                <tr key={`tco-${idx}`} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{scenario.scenario}</td>
                  <td className="px-4 py-3 text-center bg-blue-50/30">
                    {formatCurrency(scenario.azure.monthly)}
                  </td>
                  <td className="px-4 py-3 text-center bg-blue-50/30">
                    {formatCurrency(scenario.azure.year1)}
                  </td>
                  <td className="px-4 py-3 text-center bg-blue-100/40 font-bold">
                    {formatCurrency(scenario.azure.total)}
                  </td>
                  <td className="px-4 py-3 text-center bg-amber-50/30">
                    {formatCurrency(scenario.aws.monthly)}
                  </td>
                  <td className="px-4 py-3 text-center bg-amber-50/30">
                    {formatCurrency(scenario.aws.year1)}
                  </td>
                  <td className="px-4 py-3 text-center bg-amber-100/40 font-bold">
                    {formatCurrency(scenario.aws.total)}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      scenario.diff < 0 
                        ? 'bg-green-100 text-green-800' 
                        : scenario.diff > 0
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      {scenario.diff < 0 
                        ? `Azure ${Math.abs(scenario.diff)}% cheaper` 
                        : scenario.diff > 0
                          ? `AWS ${scenario.diff}% cheaper`
                          : 'Same cost'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 text-sm">{scenario.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          <span className="font-semibold text-amber-700">IMPORTANT:</span> These are example prices for illustration. 
          Actual costs will vary based on your specific usage patterns, regional pricing, and negotiated enterprise discounts.
          All pricing should be verified with cloud providers' current pricing calculators.
        </p>
      </div>

      {/* Cost efficiency factors */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Cost Efficiency Factors</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 text-left">Factor</th>
                <th className="px-4 py-2 border-b-2 text-left bg-blue-50">Azure Capability</th>
                <th className="px-4 py-2 border-b-2 text-left bg-amber-50">AWS Capability</th>
                <th className="px-4 py-2 border-b-2 text-left">Business Impact</th>
                <th className="px-4 py-2 border-b-2 text-left">Real-World Example</th>
              </tr>
            </thead>
            <tbody>
              {costEfficiencyFactors.map((item, idx) => (
                <tr key={`factor-${idx}`} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{item.factor}</td>
                  <td className="px-4 py-3 bg-blue-50/30">{item.azure}</td>
                  <td className="px-4 py-3 bg-amber-50/30">{item.aws}</td>
                  <td className="px-4 py-3">{item.impact}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{item.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hidden cost considerations */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Hidden Cost Considerations</h2>
        <div className="grid md:grid-cols-1 gap-4">
          {hiddenCosts.map((cost, idx) => (
            <div key={`hidden-${idx}`} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-purple-700">{cost.category}</h3>
              <p className="mb-3 text-gray-700">{cost.description}</p>
              
              <div className="bg-amber-50 border border-amber-100 rounded-md p-3 mb-3">
                <h4 className="font-medium text-amber-800 mb-1">Example:</h4>
                <p className="text-gray-700">{cost.example}</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Recommendation</span>
                </div>
                <p className="ml-2 text-sm">{cost.recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom insight box */}
      <div className="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-blue-100 p-4">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">Key Pricing Insights</h3>
        <div className="mb-2 p-2 bg-amber-50 border border-amber-200 rounded-md">
          <p className="text-amber-800 text-sm font-medium">
            <span className="font-bold">Note:</span> Pricing should be verified with cloud provider calculators. The comparative insights below 
            remain valid even as specific prices change.
          </p>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Azure Blob Storage is generally 15-20% less expensive than AWS S3 for equivalent storage volumes</li>
          <li>The cost gap widens for archival storage, with Azure Archive up to 75% cheaper than AWS Glacier</li>
          <li>AWS offers more granular cost optimization tools but requires more active management</li>
          <li>Data egress costs can overshadow storage costs for data-sharing intensive workloads</li>
          <li>The cost advantage of either platform changes at different scale thresholds and usage patterns</li>
          <li>For Databricks workloads, the native cloud provider integration typically provides 5-15% better cost efficiency</li>
          <li>Enterprise discounts can significantly alter this comparison - negotiate with both vendors</li>
        </ul>
      </div>
    </div>
  );
};

export default StoragePricingComparison;