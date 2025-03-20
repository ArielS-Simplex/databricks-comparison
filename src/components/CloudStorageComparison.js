import React from 'react';

const CloudStorageComparison = () => {
  const comparisonData = [
    { azure: 'Azure Blob Storage', aws: 'Amazon S3', differences: 'Core object storage services with similar fundamentals' },
    { azure: 'Storage Account', aws: 'S3 Bucket + IAM', differences: 'Azure requires a Storage Account container for all storage services' },
    { azure: 'Blob Containers', aws: 'S3 Buckets', differences: 'Similar concept but S3 buckets are global namespace' },
    { azure: 'Access Tiers (Hot/Cool/Archive)', aws: 'S3 Standard/S3 IA/Glacier', differences: 'Similar concept, different retrieval times and pricing' },
    { azure: 'Lifecycle Management', aws: 'S3 Lifecycle Policies', differences: 'Nearly identical functionality, different configuration interface' },
    { azure: 'Soft Delete', aws: 'S3 Versioning + Lifecycle', differences: 'Azure\'s approach is simpler but less flexible' },
    { azure: 'Blob Leases', aws: 'S3 Object Lock', differences: 'Azure\'s leasing is more transaction-oriented' },
    { azure: 'Azure Data Lake Storage Gen2', aws: 'S3 + Athena', differences: 'ADLS Gen2 builds on Blob Storage with hierarchical namespace' },
    { azure: 'Azure CDN', aws: 'CloudFront', differences: 'Similar functionality for content delivery' },
    { azure: 'Azure Files', aws: 'Amazon EFS', differences: 'SMB file shares vs NFS file system' }
  ];

  const architecturalDifferences = [
    {
      title: 'Storage Account Structure',
      aws: 'Direct creation of S3 buckets',
      azure: 'Storage Account required as container for blobs, files, queues, tables'
    },
    {
      title: 'Data Access Control',
      aws: 'IAM + Bucket Policies (more flexible)',
      azure: 'Azure AD + SAS Tokens (more integrated with MS ecosystem)'
    },
    {
      title: 'Analytics Integration',
      aws: 'S3 → Athena/EMR/SageMaker',
      azure: 'Blob Storage → Databricks/Synapse/Azure ML'
    },
    {
      title: 'Performance Considerations',
      aws: 'S3 has higher baseline throughput',
      azure: 'Premium Blob Storage offers more consistent performance'
    }
  ];

  return (
    <div>
      {/* Header with blue-to-purple gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg mb-4 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Azure Blob Storage vs AWS S3</h1>
        <p className="text-white/80">Cloud Storage Comparison</p>
      </div>

      {/* Main comparison table */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Service Mapping</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 text-left bg-blue-50">Azure Concept</th>
                <th className="px-4 py-2 border-b-2 text-left bg-amber-50">AWS Equivalent</th>
                <th className="px-4 py-2 border-b-2 text-left">Key Differences</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, idx) => (
                <tr key={`item-${idx}`} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 bg-blue-50/30 font-medium">{item.azure}</td>
                  <td className="px-4 py-3 bg-amber-50/30 font-medium">{item.aws}</td>
                  <td className="px-4 py-3">{item.differences}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Architectural differences */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">High-Level Architectural Differences</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {architecturalDifferences.map((diff, idx) => (
            <div key={`arch-${idx}`} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-purple-700">{diff.title}</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex items-start">
                  <div className="w-20 flex-shrink-0">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Azure</span>
                  </div>
                  <p className="ml-2">{diff.azure}</p>
                </div>
                <div className="flex items-start">
                  <div className="w-20 flex-shrink-0">
                    <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 rounded text-sm">AWS</span>
                  </div>
                  <p className="ml-2">{diff.aws}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Examples section (optional) */}
      <div className="mt-4 bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Integration with Databricks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-r pr-4">
            <h3 className="text-xl font-medium mb-3 text-blue-700">Azure Blob Storage + Databricks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Native integration through Azure Databricks service</li>
              <li>Simplified authentication with Azure managed identity</li>
              <li>Direct mount points with DBFS</li>
              <li>Optimized for Azure Synapse Analytics integration</li>
            </ul>
          </div>
          <div className="pl-4">
            <h3 className="text-xl font-medium mb-3 text-amber-700">AWS S3 + Databricks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Integration via S3 APIs and AWS Databricks</li>
              <li>IAM role-based access control</li>
              <li>S3A connector for Spark</li>
              <li>Compatible with AWS Glue catalog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudStorageComparison;
