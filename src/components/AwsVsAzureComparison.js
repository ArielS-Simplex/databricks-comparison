import React, { useState } from 'react';
// Using React's built-in transitions instead of framer-motion due to compatibility issues
// with React 19

const awsComponents = [
  { service: 'S3', description: 'Scalable object storage', category: 'Storage' },
  { service: 'RDS', description: 'Managed relational databases', category: 'Database' },
  { service: 'Redshift', description: 'Petabyte-scale data warehouse', category: 'Analytics' },
  { service: 'DynamoDB', description: 'Fast NoSQL database', category: 'Database' },
  { service: 'Glue', description: 'Serverless ETL service', category: 'ETL' },
  { service: 'EMR', description: 'Big data processing with Hadoop', category: 'Analytics' },
  { service: 'Lambda', description: 'Serverless compute', category: 'Compute' },
  { service: 'Kinesis', description: 'Real-time data streaming', category: 'Streaming' },
  { service: 'Snowflake', description: 'Cloud-native data warehouse', category: 'Analytics' },
  { service: 'Amplitude', description: 'Product analytics platform', category: 'Analytics' }
];

const azureComponents = [
  { service: 'Blob Storage', description: 'Massively scalable object storage', category: 'Storage' },
  { service: 'Azure SQL', description: 'Fully managed SQL database', category: 'Database' },
  { service: 'Synapse', description: 'Integrated analytics service', category: 'Analytics' },
  { service: 'Cosmos DB', description: 'Globally distributed NoSQL', category: 'Database' },
  { service: 'Data Factory', description: 'Hybrid data integration', category: 'ETL' },
  { service: 'HDInsight', description: 'Managed big data service', category: 'Analytics' },
  { service: 'Functions', description: 'Event-driven serverless compute', category: 'Compute' },
  { service: 'Event Hubs', description: 'Big data streaming platform', category: 'Streaming' },
  { service: 'Databricks', description: 'Collaborative analytics platform', category: 'Analytics' },
  { service: 'Power BI', description: 'Interactive data visualization', category: 'Analytics' }
];

const AwsVsAzureComparison = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Animation style helpers (instead of framer-motion variants)
  const getAnimationStyle = (isVisible) => ({
    opacity: isVisible ? 1 : 0,
    transform: `translateY(${isVisible ? 0 : 20}px)`,
    transition: 'opacity 0.3s, transform 0.3s',
  });

  // Helper for hover animations
  const getHoverStyle = (e, scale = true) => {
    if (scale) {
      e.currentTarget.style.transform = 'scale(1.02)';
    } else {
      e.currentTarget.style.transform = 'none';
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div 
        className="bg-gradient-to-r from-orange-500 via-blue-600 to-blue-500 p-8 rounded-xl shadow-lg mb-8 text-center"
        style={{ opacity: 1, animation: 'fadeIn 0.5s' }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">AWS vs Azure: Data Services</h1>
        <p className="text-white/80">Interactive comparison of cloud data solutions</p>
      </div>

      {/* Services Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* AWS Column */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">AWS Services</h2>
          <div className="space-y-3">
            {awsComponents.map((component) => (
              <div
                key={component.service}
                className="p-3 bg-gray-100 rounded-md cursor-pointer transition-all duration-200"
                onClick={() => setSelectedService(component)}
                onMouseEnter={(e) => getHoverStyle(e, true)}
                onMouseLeave={(e) => getHoverStyle(e, false)}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{component.service}</span>
                  <span className="text-sm text-gray-500">{component.category}</span>
                </div>
                <p className="text-sm text-gray-600">{component.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Azure Column */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Azure Services</h2>
          <div className="space-y-3">
            {azureComponents.map((component) => (
              <div
                key={component.service}
                className="p-3 bg-gray-100 rounded-md cursor-pointer transition-all duration-200"
                onClick={() => setSelectedService(component)}
                onMouseEnter={(e) => getHoverStyle(e, true)}
                onMouseLeave={(e) => getHoverStyle(e, false)}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{component.service}</span>
                  <span className="text-sm text-gray-500">{component.category}</span>
                </div>
                <p className="text-sm text-gray-600">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flow Charts */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Data Processing Flows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AWS Flow */}
          <div
            className="flex flex-col items-center"
            style={getAnimationStyle(true)}
          >
            <h3 className="text-lg font-medium text-orange-500 mb-4">AWS Flow</h3>
            <div className="space-y-4">
              {[
                'App',
                'Kafka',
                'S3',
                'Snowflake',
                'Amplitude'
              ].map((step, index) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className="w-32 p-3 bg-orange-100 border border-orange-200 rounded-lg text-center font-medium transition-transform duration-200"
                    onMouseEnter={(e) => getHoverStyle(e, true)}
                    onMouseLeave={(e) => getHoverStyle(e, false)}
                  >
                    {step}
                  </div>
                  {index < 4 && (
                    <div className="h-6 flex items-center">
                      <span className="text-orange-500 text-2xl">↓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Azure Flow */}
          <div
            className="flex flex-col items-center"
            style={getAnimationStyle(true)}
          >
            <h3 className="text-lg font-medium text-blue-600 mb-4">Azure Flow</h3>
            <div className="space-y-4">
              {[
                'App',
                'Event Hubs',
                'Blob Storage',
                'Databricks',
                'Power BI'
              ].map((step, index) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className="w-32 p-3 bg-blue-100 border border-blue-200 rounded-lg text-center font-medium transition-transform duration-200"
                    onMouseEnter={(e) => getHoverStyle(e, true)}
                    onMouseLeave={(e) => getHoverStyle(e, false)}
                  >
                    {step}
                  </div>
                  {index < 4 && (
                    <div className="h-6 flex items-center">
                      <span className="text-blue-600 text-2xl">↓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Modal (Simplified) */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center" 
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white p-6 rounded-lg max-w-md"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'scaleIn 0.2s ease-out' }}
          >
            <h3 className="text-xl font-semibold mb-2">{selectedService.service}</h3>
            <p className="text-gray-600">{selectedService.description}</p>
            <p className="text-sm text-gray-500 mt-2">Category: {selectedService.category}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AwsVsAzureComparison;