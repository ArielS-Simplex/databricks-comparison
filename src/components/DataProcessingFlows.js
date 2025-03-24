import React, { useState } from 'react';
import '../styles/buttons.css';

// Enhanced flow step explanations with more technical details
const flowExplanations = {
  // AWS Flow
  'Simplex CC': {
    title: 'Simplex CC',
    description: 'Source application generating transaction data and events',
    details: 'The starting point of data collection, where raw transaction data is generated and captured for processing. Generates structured event data for payment processing systems.'
  },
  'Kafka': {
    title: 'Apache Kafka',
    description: 'Event streaming platform for high-throughput data pipelines',
    details: 'Manages real-time data streams and provides a buffer between data producers and consumers. Offers fault-tolerant storage with configurable retention periods and scalable throughput. Supports multiple consumers for the same data.'
  },
  'S3': {
    title: 'Amazon S3',
    description: 'Object storage for raw and processed data',
    details: 'Stores the raw data from Kafka in a durable, highly available storage layer. Acts as the data lake for all incoming transaction data. Supports versioning, lifecycle policies, and multiple storage tiers.'
  },
  'Snowflake': {
    title: 'Snowflake',
    description: 'Cloud data warehouse for analytics',
    details: 'Processes and transforms the raw data from S3 into structured, queryable datasets ready for analysis. Features separation of storage and compute, allowing for independent scaling of resources based on workload demands.'
  },
  'DBT': {
    title: 'DBT (Data Build Tool)',
    description: 'Transformation and modeling tool',
    details: 'Applies business logic, data cleaning, and transformations to prepare the data for analytics consumption. Uses SQL-based transformations with version control, testing, and documentation capabilities. Creates a transformation layer between raw data and analytics.'
  },
  'Amplitude': {
    title: 'Amplitude',
    description: 'Product analytics platform',
    details: 'Provides insights, visualizations, and analytics on the processed data for business users and stakeholders. Offers user behavior analysis, funnel analysis, retention metrics, and custom event tracking for business intelligence.'
  },
  
  // Azure Flow
  'Nuvei App': {
    title: 'Nuvei App',
    description: 'Payment processing application',
    details: 'Payment processing application that generates events and data that need to be processed and analyzed. Produces payment transaction events, user interactions, and system health metrics.'
  },
  'Azure Storage': {
    title: 'Azure Data Lake Storage Gen2',
    description: 'Hierarchical namespace storage for data lakes',
    details: 'Combines the scalability of blob storage with the hierarchical namespace capabilities of a file system. Provides fine-grained ACLs, optimized directory operations, and high-performance access for big data analytics workloads.'
  },
  'Databricks': {
    title: 'Azure Databricks',
    description: 'Apache Spark-based analytics platform',
    details: 'Processes data using Spark, combines Delta Lake for reliability, and enables data science workloads with collaborative notebooks and ML workflows. Implements the medallion architecture with Bronze (raw), Silver (validated), and Gold (aggregated) data layers for progressive refinement.'
  },
  'Power BI': {
    title: 'Power BI',
    description: 'Business intelligence and visualization tool',
    details: 'Connects to Databricks to visualize processed data and deliver insights to business users through interactive dashboards. Supports direct query to Databricks clusters, scheduled refreshes, and enterprise data governance.'
  }
};

// Architecture comparison data for the table
const architectureComparison = [
  {
    aspect: 'Processing Model',
    aws: 'Separate specialized tools (Snowflake + DBT)',
    azure: 'Integrated platform (Databricks)',
    impact: 'Azure simplifies management with fewer tools; AWS offers more specialized capabilities for each stage.'
  },
  {
    aspect: 'Data Quality Control',
    aws: 'DBT testing and transformation validation',
    azure: 'Medallion architecture (Bronze/Silver/Gold)',
    impact: 'Both approaches ensure data quality, but Databricks medallion architecture offers more structured progression.'
  },
  {
    aspect: 'ACID Transactions',
    aws: 'Available in Snowflake; not native to S3',
    azure: 'Native with Delta Lake throughout the pipeline',
    impact: 'Azure offers consistent ACID transactions from ingestion to consumption; AWS requires moving to Snowflake first.'
  },
  {
    aspect: 'Scalability',
    aws: 'Independent scaling for each component',
    azure: 'Unified auto-scaling through Databricks',
    impact: 'AWS allows more granular scaling; Azure simplifies with unified scaling.'
  },
  {
    aspect: 'Cost Model',
    aws: 'Pay separately for each service',
    azure: 'Consolidated billing with workload optimizations',
    impact: 'AWS may have more predictable per-service costs; Azure can optimize across workloads more easily.'
  }
];

const DataProcessingFlows = () => {
  const [selectedFlowStep, setSelectedFlowStep] = useState(null);
  const [activeTab, setActiveTab] = useState('visual');

  return (
    <div>
      {/* Header with purple-to-blue gradient */}
      <div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg mb-4 text-center"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Data Processing Flows</h1>
        <p className="text-white/80">Compare cloud data processing pipelines across AWS and Azure</p>
      </div>

      {/* Tab navigation */}
      <div className="flex mb-4 border-b">
        <button 
          onClick={() => setActiveTab('visual')}
          className={`px-4 py-2 font-medium ${activeTab === 'visual' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Visual Comparison
        </button>
        <button 
          onClick={() => setActiveTab('architecture')}
          className={`px-4 py-2 font-medium ${activeTab === 'architecture' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Architecture Comparison
        </button>
        <button 
          onClick={() => setActiveTab('detail')}
          className={`px-4 py-2 font-medium ${activeTab === 'detail' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Detailed Breakdown
        </button>
      </div>

      {/* Visual Flow Comparison Tab */}
      {activeTab === 'visual' && (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-6 text-center">Pipeline Architecture Comparison</h2>
          
          {/* Legend */}
          <div className="flex justify-center mb-8 flex-wrap gap-4">
            <div className="flex items-center">
              <span className="inline-block w-4 h-4 rounded-full bg-green-500 mr-2"></span>
              <span className="text-sm">Data Source</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-4 h-4 rounded-full bg-blue-500 mr-2"></span>
              <span className="text-sm">Ingestion</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-4 h-4 rounded-full bg-purple-500 mr-2"></span>
              <span className="text-sm">Storage</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-4 h-4 rounded-full bg-amber-500 mr-2"></span>
              <span className="text-sm">Processing/Transformation</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-4 h-4 rounded-full bg-red-500 mr-2"></span>
              <span className="text-sm">Analytics/Visualization</span>
            </div>
          </div>
          
          {/* Horizontal Flow Comparison */}
          <div className="overflow-x-auto">
            <div className="min-w-[900px]"> {/* Ensure minimum width for small screens */}
              <div className="flex flex-col space-y-16">
                {/* AWS Flow */}
                <div>
                  <h3 className="text-xl font-semibold text-amber-700 mb-4">AWS Data Pipeline</h3>
                  <div className="relative h-[180px]">
                    {/* Source */}
                    <div 
                      className="absolute left-0 top-0 w-[120px] h-[100px] border border-green-300 rounded-lg bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setSelectedFlowStep(flowExplanations['Simplex CC'])}
                    >
                      <div className="font-semibold text-center">Simplex CC</div>
                      <div className="text-xs text-center mt-1">Transaction Source</div>
                    </div>
                    
                    {/* Kafka */}
                    <div 
                      className="absolute left-[180px] top-0 w-[120px] h-[100px] border border-blue-300 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setSelectedFlowStep(flowExplanations['Kafka'])}
                    >
                      <div className="font-semibold text-center">Apache Kafka</div>
                      <div className="text-xs text-center mt-1">Event Streaming</div>
                    </div>
                    
                    {/* S3 */}
                    <div 
                      className="absolute left-[360px] top-0 w-[120px] h-[100px] border border-purple-300 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col items-center justify-center p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setSelectedFlowStep(flowExplanations['S3'])}
                    >
                      <div className="font-semibold text-center">Amazon S3</div>
                      <div className="text-xs text-center mt-1">Data Lake Storage</div>
                    </div>
                    
                    {/* Snowflake */}
                    <div 
                      className="absolute left-[540px] top-[10px] w-[120px] h-[90px] border border-amber-300 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 flex flex-col items-center justify-center p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setSelectedFlowStep(flowExplanations['Snowflake'])}
                    >
                      <div className="font-semibold text-center">Snowflake</div>
                      <div className="text-xs text-center mt-1">Data Warehouse</div>
                    </div>
                    
                    {/* DBT - offset slightly */}
                    <div 
                      className="absolute left-[540px] top-[120px] w-[120px] h-[60px] border border-amber-300 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 flex flex-col items-center justify-center p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setSelectedFlowStep(flowExplanations['DBT'])}
                    >
                      <div className="font-semibold text-center">DBT</div>
                      <div className="text-xs text-center mt-1">Transformation</div>
                    </div>
                    
                    {/* Amplitude */}
                    <div 
                      className="absolute left-[720px] top-0 w-[120px] h-[100px] border border-red-300 rounded-lg bg-gradient-to-br from-red-50 to-red-100 flex flex-col items-center justify-center p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setSelectedFlowStep(flowExplanations['Amplitude'])}
                    >
                      <div className="font-semibold text-center">Amplitude</div>
                      <div className="text-xs text-center mt-1">Analytics Platform</div>
                    </div>
                    
                    {/* Connection Lines - Using SVG for better control */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" width="900" height="180">
                      {/* Simplex to Kafka */}
                      <path 
                        d="M120,50 L180,50" 
                        stroke="#22c55e" 
                        strokeWidth="2" 
                        fill="none"
                      />
                      <polygon points="175,45 185,50 175,55" fill="#22c55e" />
                      
                      {/* Kafka to S3 */}
                      <path 
                        d="M300,50 L360,50" 
                        stroke="#3b82f6" 
                        strokeWidth="2" 
                        fill="none"
                      />
                      <polygon points="355,45 365,50 355,55" fill="#3b82f6" />
                      
                      {/* S3 to Snowflake */}
                      <path 
                        d="M480,50 L540,50" 
                        stroke="#a855f7" 
                        strokeWidth="2" 
                        fill="none"
                      />
                      <polygon points="535,45 545,50 535,55" fill="#a855f7" />
                      
                      {/* Kafka to Snowflake (alternative path) */}
                      <path 
                        d="M300,70 C400,100 460,100 540,70" 
                        stroke="#3b82f6" 
                        strokeWidth="2" 
                        strokeDasharray="5,5"
                        fill="none"
                      />
                      <polygon points="535,75 545,70 535,65" fill="#3b82f6" />
                      
                      {/* S3 to DBT (alternative path) */}
                      <path 
                        d="M480,70 C500,120 520,140 540,140" 
                        stroke="#a855f7" 
                        strokeWidth="2" 
                        strokeDasharray="5,5"
                        fill="none"
                      />
                      <polygon points="535,145 545,140 535,135" fill="#a855f7" />
                      
                      {/* Snowflake to DBT */}
                      <path 
                        d="M600,100 L600,120" 
                        stroke="#f59e0b" 
                        strokeWidth="2" 
                        fill="none"
                      />
                      <polygon points="595,115 600,125 605,115" fill="#f59e0b" />
                      
                      {/* DBT to Amplitude */}
                      <path 
                        d="M660,140 C680,120 700,80 720,50" 
                        stroke="#f59e0b" 
                        strokeWidth="2" 
                        fill="none"
                      />
                      <polygon points="715,55 725,50 715,45" fill="#f59e0b" />
                      
                      {/* Snowflake to Amplitude */}
                      <path 
                        d="M660,50 L720,50" 
                        stroke="#f59e0b" 
                        strokeWidth="2" 
                        fill="none"
                      />
                      <polygon points="715,45 725,50 715,55" fill="#f59e0b" />
                    </svg>
                  </div>
                </div>
                
                {/* Azure Flow */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Azure Data Pipeline</h3>
                  <div className="relative h-[140px]">
                    {/* Nuvei App */}
                    <div 
                      className="absolute left-0 top-0 w-[120px] h-[100px] border border-green-300 rounded-lg bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setSelectedFlowStep(flowExplanations['Nuvei App'])}
                    >
                      <div className="font-semibold text-center">Nuvei App</div>
                      <div className="text-xs text-center mt-1">Payment Processing</div>
                    </div>
                    
                    {/* Kafka */}
                    <div 
                      className="absolute left-[180px] top-0 w-[120px] h-[100px] border border-blue-300 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setSelectedFlowStep(flowExplanations['Kafka'])}
                    >
                      <div className="font-semibold text-center">Apache Kafka</div>
                      <div className="text-xs text-center mt-1">Event Streaming</div>
                    </div>
                    
                    {/* Azure Storage */}
                    <div 
                      className="absolute left-[360px] top-0 w-[120px] h-[100px] border border-purple-300 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col items-center justify-center p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setSelectedFlowStep(flowExplanations['Azure Storage'])}
                    >
                      <div className="font-semibold text-center">Azure ADLS Gen2</div>
                      <div className="text-xs text-center mt-1">Hierarchical Storage</div>
                    </div>
                    
                    {/* Databricks */}
                    <div 
                      className="absolute left-[540px] top-0 w-[120px] h-[100px] border border-amber-300 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 flex flex-col items-center justify-center p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setSelectedFlowStep(flowExplanations['Databricks'])}
                    >
                      <div className="font-semibold text-center">Azure Databricks</div>
                      <div className="text-xs text-center mt-1">Processing + Delta Lake</div>
                    </div>
                    
                    {/* Power BI */}
                    <div 
                      className="absolute left-[720px] top-0 w-[120px] h-[100px] border border-red-300 rounded-lg bg-gradient-to-br from-red-50 to-red-100 flex flex-col items-center justify-center p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setSelectedFlowStep(flowExplanations['Power BI'])}
                    >
                      <div className="font-semibold text-center">Power BI</div>
                      <div className="text-xs text-center mt-1">Analytics & Dashboards</div>
                    </div>
                    
                    {/* Connection Lines - Using SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" width="900" height="140">
                      {/* Nuvei to Kafka */}
                      <path 
                        d="M120,50 L180,50" 
                        stroke="#22c55e" 
                        strokeWidth="2" 
                        fill="none"
                      />
                      <polygon points="175,45 185,50 175,55" fill="#22c55e" />
                      
                      {/* Kafka to Azure Storage */}
                      <path 
                        d="M300,50 L360,50" 
                        stroke="#3b82f6" 
                        strokeWidth="2" 
                        fill="none"
                      />
                      <polygon points="355,45 365,50 355,55" fill="#3b82f6" />
                      
                      {/* Azure Storage to Databricks */}
                      <path 
                        d="M480,50 L540,50" 
                        stroke="#a855f7" 
                        strokeWidth="2" 
                        fill="none"
                      />
                      <polygon points="535,45 545,50 535,55" fill="#a855f7" />
                      
                      {/* Kafka to Databricks (direct ingestion) */}
                      <path 
                        d="M300,70 C400,100 460,100 540,70" 
                        stroke="#3b82f6" 
                        strokeWidth="2" 
                        strokeDasharray="5,5"
                        fill="none"
                      />
                      <polygon points="535,75 545,70 535,65" fill="#3b82f6" />
                      
                      {/* Databricks to ADLS (write back) */}
                      <path 
                        d="M550,70 C500,100 450,100 430,70" 
                        stroke="#f59e0b" 
                        strokeWidth="2" 
                        strokeDasharray="5,5"
                        fill="none"
                      />
                      <polygon points="435,75 425,70 435,65" fill="#f59e0b" />
                      
                      {/* Databricks to Power BI */}
                      <path 
                        d="M660,50 L720,50" 
                        stroke="#f59e0b" 
                        strokeWidth="2" 
                        fill="none"
                      />
                      <polygon points="715,45 725,50 715,55" fill="#f59e0b" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Flow Legend */}
              <div className="mt-8 border-t pt-4">
                <h3 className="text-lg font-medium mb-2">Flow Legend</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="w-16 h-1 bg-gray-500 mr-2"></div>
                    <span className="text-sm">Standard data flow</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-1 bg-gray-500 mr-2" style={{ borderTop: '2px dashed #6b7280' }}></div>
                    <span className="text-sm">Alternative/optional data flow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Architecture Comparison Tab */}
      {activeTab === 'architecture' && (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-6 text-center">Architecture Characteristics Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border px-4 py-3 text-left">Architecture Aspect</th>
                  <th className="border px-4 py-3 text-left bg-amber-50">AWS Approach</th>
                  <th className="border px-4 py-3 text-left bg-blue-50">Azure Approach</th>
                  <th className="border px-4 py-3 text-left">Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {architectureComparison.map((item, idx) => (
                  <tr key={`arch-${idx}`} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border px-4 py-3 font-medium">{item.aspect}</td>
                    <td className="border px-4 py-3 bg-amber-50/30">{item.aws}</td>
                    <td className="border px-4 py-3 bg-blue-50/30">{item.azure}</td>
                    <td className="border px-4 py-3 text-gray-700">{item.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-2">Key Architecture Differences</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-700">
                <span className="font-medium">AWS Pipeline</span>: Uses a best-of-breed approach with separate specialized tools for each pipeline stage.
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Azure Pipeline</span>: Leverages an integrated platform (Databricks) that handles multiple pipeline stages with unified governance.
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Data Quality Approach</span>: AWS implements quality controls through DBT tests and transformations, while Azure uses the medallion architecture with progressive data refinement.
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Integration Complexity</span>: AWS requires more integration work between components but offers more flexibility in tool selection; Azure simplifies integration but with less flexibility.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Detailed Breakdown Tab */}
      {activeTab === 'detail' && (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-6 text-center">Component Detailed Comparison</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AWS Components Details */}
            <div>
              <h3 className="text-xl font-medium text-amber-800 mb-4 pb-2 border-b border-amber-200">AWS Pipeline Components</h3>
              
              <div className="space-y-6">
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-amber-700 mb-2">Data Flow Architecture</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Multiple specialized tools connected through well-defined interfaces</li>
                    <li>Clear separation between storage (S3) and processing (Snowflake)</li>
                    <li>Transformation layer (DBT) sits on top of processing layer</li>
                    <li>Analytics (Amplitude) consumes processed and transformed data</li>
                    <li>Each component can be replaced independently</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-amber-700 mb-2">Data Processing Characteristics</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Batch-oriented processing with scheduled transformations</li>
                    <li>SQL-based transformations through Snowflake and DBT</li>
                    <li>Separate data modeling and transformation layer</li>
                    <li>Data quality enforced through DBT tests and transformations</li>
                    <li>Each processing stage can be scaled independently</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-amber-700 mb-2">Key Advantages</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Best-of-breed tools for each specific function</li>
                    <li>Greater flexibility to replace individual components</li>
                    <li>Specialized optimization for each processing stage</li>
                    <li>Clear separation of concerns across the pipeline</li>
                    <li>Amplitude provides product-specific analytics capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Azure Components Details */}
            <div>
              <h3 className="text-xl font-medium text-blue-800 mb-4 pb-2 border-b border-blue-200">Azure Pipeline Components</h3>
              
              <div className="space-y-6">
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-blue-700 mb-2">Data Flow Architecture</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Integrated processing platform through Databricks</li>
                    <li>Storage (ADLS Gen2) tightly integrated with processing</li>
                    <li>Delta Lake provides ACID transactions throughout the pipeline</li>
                    <li>Processing and transformation happen within the same platform</li>
                    <li>Direct connection between processing and visualization (Power BI)</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-blue-700 mb-2">Data Processing Characteristics</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Medallion architecture for progressive data refinement</li>
                    <li>Bronze layer: Raw data ingestion with minimal processing</li>
                    <li>Silver layer: Cleansed, validated data with schema enforcement</li>
                    <li>Gold layer: Business-level aggregations and metrics</li>
                    <li>Support for both batch and streaming processing</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-blue-700 mb-2">Key Advantages</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Unified platform with consistent governance</li>
                    <li>Simplified management with fewer components</li>
                    <li>ACID transactions throughout the pipeline</li>
                    <li>Native support for machine learning workloads</li>
                    <li>Tight integration with Microsoft ecosystem (Power BI, Azure ML)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-2">Implementation Considerations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-amber-800 mb-2">When to Choose AWS Approach</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Need for specific capabilities in individual components</li>
                  <li>Complex transformation requirements best suited for DBT</li>
                  <li>Teams with specialized skills for each component</li>
                  <li>Product analytics is the primary consumption pattern</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-2">When to Choose Azure Approach</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Preference for unified platform with consistent governance</li>
                  <li>Need for integrated machine learning capabilities</li>
                  <li>Teams with data engineering and Spark expertise</li>
                  <li>Business intelligence is the primary consumption pattern</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Flow Step Details Modal - Keep the existing modal */}
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

      {/* Animation styles */}
      <style jsx>{`
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default DataProcessingFlows;