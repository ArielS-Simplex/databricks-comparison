import React, { useState } from 'react';
import AzureDatabricksInfra from './AzureDatabricksInfra';
import '../styles/buttons.css'; // Add this import

// Flow step explanations
const flowExplanations = {
  // AWS Flow
  'Simplex CC': {
    title: 'Simplex CC',
    description: 'Source application generating transaction data and events',
    details: 'The starting point of data collection, where raw transaction data is generated and captured for processing.'
  },
  'Kafka': {
    title: 'Apache Kafka',
    description: 'Event streaming platform for high-throughput data pipelines',
    details: 'Manages real-time data streams and provides a buffer between data producers and consumers. Integrates with both S3 for storage and directly with processing services.'
  },
  'S3': {
    title: 'Amazon S3',
    description: 'Object storage for raw and processed data',
    details: 'Stores the raw data from Kafka in a durable, highly available storage layer. Acts as the data lake for all incoming transaction data.'
  },
  'Snowflake': {
    title: 'Snowflake',
    description: 'Cloud data warehouse for analytics',
    details: 'Processes and transforms the raw data from S3 into structured, queryable datasets ready for analysis.'
  },
  'DBT': {
    title: 'DBT (Data Build Tool)',
    description: 'Transformation and modeling tool',
    details: 'Applies business logic, data cleaning, and transformations to prepare the data for analytics consumption.'
  },
  'Amplitude': {
    title: 'Amplitude',
    description: 'Product analytics platform',
    details: 'Provides insights, visualizations, and analytics on the processed data for business users and stakeholders.'
  },
  
  // Azure Flow
  'Nuvei App': {
    title: 'Nuvei App',
    description: 'Payment processing application',
    details: 'Payment processing application that generates events and data that need to be processed and analyzed.'
  },
  'Azure Storage': {
    title: 'Azure Blob Storage',
    description: 'Scalable object storage for data lakes',
    details: 'Stores raw data from Kafka as well as processed data from Databricks in a hierarchical namespace using containers and directories.'
  },
  'Databricks': {
    title: 'Azure Databricks',
    description: 'Apache Spark-based analytics platform',
    details: 'Processes data using Spark, combines Delta Lake for reliability, and enables data science workloads with collaborative notebooks and ML workflows.'
  },
  'Power BI': {
    title: 'Power BI',
    description: 'Business intelligence and visualization tool',
    details: 'Connects to Databricks to visualize processed data and deliver insights to business users through interactive dashboards.'
  }
};

const DataProcessingFlows = () => {
  const [selectedFlowStep, setSelectedFlowStep] = useState(null);

  // Helper for hover animations
  const getHoverStyle = (e, scale = true) => {
    if (scale) {
      e.currentTarget.style.transform = 'scale(1.02)';
    } else {
      e.currentTarget.style.transform = 'none';
    }
  };

  return (
    <div>
      {/* Header with purple-to-blue gradient */}
      <div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg mb-4 text-center"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Data Processing Flows</h1>
        <p className="text-white/80">Compare cloud data processing pipelines across AWS and Azure</p>
      </div>

      {/* Flow Charts */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Pipeline Architecture Comparison</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AWS Flow */}
          <div
            className="flex flex-col items-center border border-amber-100 rounded-lg p-6 bg-amber-50/30"
            style={{ opacity: 1, transition: 'opacity 0.3s' }}
          >
            <h3 className="text-lg font-semibold text-amber-600 mb-6">AWS Data Pipeline</h3>
            <div className="relative flex flex-col items-center w-full">
              {/* Simplex CC */}
              <div 
                className="flow-step bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-300"
                onClick={() => setSelectedFlowStep(flowExplanations['Simplex CC'])}
              >
                <div className="font-semibold">Simplex CC</div>
                <div className="text-xs">Transaction data source</div>
              </div>
              
              <div className="flow-connector">
                <div className="flow-arrow text-amber-500">▼</div>
                <div className="flow-description">Emits events & transactions</div>
              </div>
              
              {/* Kafka */}
              <div 
                className="flow-step bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-300"
                onClick={() => setSelectedFlowStep(flowExplanations['Kafka'])}
              >
                <div className="font-semibold">Apache Kafka</div>
                <div className="text-xs">Real-time event streaming</div>
              </div>
              
              <div className="flow-connector">
                <div className="flow-arrow text-amber-500">▼</div>
                <div className="flow-description">Buffers & streams data</div>
              </div>
              
              {/* S3 */}
              <div 
                className="flow-step bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-300"
                onClick={() => setSelectedFlowStep(flowExplanations['S3'])}
              >
                <div className="font-semibold">Amazon S3</div>
                <div className="text-xs">Raw data storage</div>
              </div>
              
              <div className="flow-connector">
                <div className="flow-arrow text-amber-500">▼</div>
                <div className="flow-description">Provides data access</div>
              </div>
              
              {/* Snowflake */}
              <div 
                className="flow-step bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-300"
                onClick={() => setSelectedFlowStep(flowExplanations['Snowflake'])}
              >
                <div className="font-semibold">Snowflake</div>
                <div className="text-xs">Data processing & warehousing</div>
              </div>
              
              <div className="flow-connector">
                <div className="flow-arrow text-amber-500">▼</div>
                <div className="flow-description">Transforms & structures data</div>
              </div>
              
              {/* DBT */}
              <div 
                className="flow-step bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-300"
                onClick={() => setSelectedFlowStep(flowExplanations['DBT'])}
              >
                <div className="font-semibold">DBT</div>
                <div className="text-xs">Data modeling & transformation</div>
              </div>
              
              <div className="flow-connector">
                <div className="flow-arrow text-amber-500">▼</div>
                <div className="flow-description">Prepares for consumption</div>
              </div>
              
              {/* Amplitude */}
              <div 
                className="flow-step bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-300"
                onClick={() => setSelectedFlowStep(flowExplanations['Amplitude'])}
              >
                <div className="font-semibold">Amplitude</div>
                <div className="text-xs">Analytics & visualization</div>
              </div>
            </div>
          </div>

          {/* Azure Flow */}
          <div
            className="flex flex-col items-center border border-blue-100 rounded-lg p-6 bg-blue-50/30"
            style={{ opacity: 1, transition: 'opacity 0.3s' }}
          >
            <h3 className="text-lg font-semibold text-blue-600 mb-6">Azure Data Pipeline</h3>
            <div className="relative flex flex-col items-center w-full">
              {/* Nuvei App */}
              <div 
                className="flow-step bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300"
                onClick={() => setSelectedFlowStep(flowExplanations['Nuvei App'])}
              >
                <div className="font-semibold">Nuvei App</div>
                <div className="text-xs">Payment processing application</div>
              </div>
              
              <div className="flow-connector">
                <div className="flow-arrow text-blue-500">▼</div>
                <div className="flow-description">Generates payment events</div>
              </div>
              
              {/* Kafka */}
              <div 
                className="flow-step bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300"
                onClick={() => setSelectedFlowStep(flowExplanations['Kafka'])}
              >
                <div className="font-semibold">Apache Kafka</div>
                <div className="text-xs">Real-time event ingestion</div>
              </div>
              
              <div className="flow-connector">
                <div className="flow-arrow text-blue-500">▼</div>
                <div className="flow-description">Captures & forwards events</div>
              </div>
              
              {/* Azure Storage */}
              <div 
                className="flow-step bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300"
                onClick={() => setSelectedFlowStep(flowExplanations['Azure Storage'])}
              >
                <div className="font-semibold">Azure Blob Storage</div>
                <div className="text-xs">Raw data storage in containers</div>
              </div>
              
              <div className="flow-connector">
                <div className="flow-arrow text-blue-500">▼</div>
                <div className="flow-description">Provides persistent storage</div>
              </div>
              
              {/* Databricks */}
              <div 
                className="flow-step bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300"
                onClick={() => setSelectedFlowStep(flowExplanations['Databricks'])}
              >
                <div className="font-semibold">Azure Databricks</div>
                <div className="text-xs">Processing with Delta Lake</div>
              </div>
              
              <div className="flow-connector">
                <div className="flow-arrow text-blue-500">▼</div>
                <div className="flow-description">Bronze → Silver → Gold medallion layers</div>
              </div>
              
              {/* Power BI */}
              <div 
                className="flow-step bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300"
                onClick={() => setSelectedFlowStep(flowExplanations['Power BI'])}
              >
                <div className="font-semibold">Power BI</div>
                <div className="text-xs">Business intelligence & dashboards</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md mt-4 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Key Processing Differences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium text-amber-800 mb-2">AWS Processing Approach</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-700">
              <li>Uses third-party tools like Snowflake and DBT for data transformation</li>
              <li>S3 serves as the central data lake foundation</li>
              <li>More focus on custom pipelines with specialized tools</li>
              <li>Separate tools for visualization (Amplitude) and processing (Snowflake)</li>
              <li>Analytics separated from data storage and processing layers</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Azure Processing Approach</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-700">
              <li>Databricks provides an integrated platform for processing and analytics</li>
              <li>Built-in medallion architecture (Bronze/Silver/Gold) for data quality</li>
              <li>Delta Lake provides ACID transactions on the data lake</li>
              <li>Tighter integration between storage (ADLS) and compute (Databricks)</li>
              <li>Power BI offers native connectivity to the processing layer</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Flow Step Details Modal */}
      {selectedFlowStep && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" 
          onClick={() => setSelectedFlowStep(null)}
        >
          <div 
            className="bg-white p-6 rounded-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'scaleIn 0.2s ease-out' }}
          >
            <h3 className="text-xl font-semibold mb-2">{selectedFlowStep.title}</h3>
            <p className="text-gray-600 font-medium">{selectedFlowStep.description}</p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">{selectedFlowStep.details}</p>
            </div>
            <button
              className="mt-4 btn btn-gradient"
              onClick={() => setSelectedFlowStep(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Add CSS for flow chart */}
      <style jsx>{`
        .flow-step {
          width: 180px;
          padding: 12px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          margin: 0 auto 8px auto;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          display: block;
          max-width: 100%;
        }
        
        .flow-step:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .flow-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 60px;
          justify-content: center;
          margin-bottom: 8px;
          width: 100%;
        }
        
        .flow-arrow {
          font-size: 20px;
          margin-bottom: 4px;
        }
        
        .flow-description {
          background: #f8fafc;
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 12px;
          color: #64748b;
          border: 1px dashed #cbd5e1;
          text-align: center;
          max-width: 90%;
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default DataProcessingFlows;
