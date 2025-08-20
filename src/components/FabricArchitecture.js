import React, { useState } from 'react';

const FabricArchitecture = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  
  const handleMouseEnter = (id) => {
    setActiveTooltip(id);
  };
  
  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  // Simple SVG icons
  const Icons = {
    Database: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    Cloud: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
    Server: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="4" rx="1" ry="1"></rect>
        <rect x="2" y="9" width="20" height="4" rx="1" ry="1"></rect>
        <rect x="2" y="15" width="20" height="4" rx="1" ry="1"></rect>
        <line x1="6" y1="5" x2="6" y2="5.01"></line>
        <line x1="6" y1="11" x2="6" y2="11.01"></line>
        <line x1="6" y1="17" x2="6" y2="17.01"></line>
      </svg>
    ),
    BI: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <rect x="7" y="7" width="3" height="9"></rect>
        <rect x="14" y="7" width="3" height="5"></rect>
      </svg>
    )
  };

  const components = [
    {
      id: 'onelake',
      name: 'OneLake',
      position: { top: '15%', left: '15%', width: '70%', height: '15%' },
      color: 'bg-blue-100 border-blue-300',
      icon: <Icons.Database />,
      description: 'Unified data lake for all analytics workloads with delta format'
    },
    {
      id: 'power-bi',
      name: 'Power BI',
      position: { top: '40%', left: '10%', width: '25%', height: '20%' },
      color: 'bg-yellow-100 border-yellow-300',
      icon: <Icons.BI />,
      description: 'Business intelligence and data visualization'
    },
    {
      id: 'data-factory',
      name: 'Data Factory',
      position: { top: '40%', left: '40%', width: '25%', height: '20%' },
      color: 'bg-green-100 border-green-300',
      icon: <Icons.Server />,
      description: 'Data integration and transformation pipelines'
    },
    {
      id: 'synapse',
      name: 'Synapse Analytics',
      position: { top: '40%', left: '70%', width: '25%', height: '20%' },
      color: 'bg-purple-100 border-purple-300',
      icon: <Icons.Cloud />,
      description: 'Big data and data warehouse analytics'
    },
    {
      id: 'ml-services',
      name: 'ML & AI Services',
      position: { top: '70%', left: '25%', width: '50%', height: '15%' },
      color: 'bg-orange-100 border-orange-300',
      icon: <Icons.Server />,
      description: 'Machine learning and artificial intelligence capabilities'
    }
  ];

  const features = [
    {
      title: 'OneLake Integration',
      description: 'Single data lake for all workloads with unified governance',
      icon: '🏗️'
    },
    {
      title: 'Power BI Integration',
      description: 'Native integration with Power BI for seamless reporting',
      icon: '📊'
    },
    {
      title: 'Unified Licensing',
      description: 'Capacity-based licensing model across all services',
      icon: '🎫'
    },
    {
      title: 'Delta Lake Format',
      description: 'Built on open delta format for data reliability',
      icon: '📁'
    },
    {
      title: 'Microsoft Ecosystem',
      description: 'Deep integration with Microsoft 365 and Azure',
      icon: '🔗'
    },
    {
      title: 'Real-time Analytics',
      description: 'Streaming analytics and event processing',
      icon: '⚡'
    }
  ];

  return (
    <div className="fabric-architecture">
      {/* Architecture Diagram */}
      <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-green-100 rounded-lg border-2 border-blue-200 mb-8 overflow-hidden">
        <h3 className="absolute top-4 left-6 text-xl font-bold text-blue-800">
          Microsoft Fabric Architecture Overview
        </h3>
        
        {components.map(component => (
          <div
            key={component.id}
            className={`absolute border-2 rounded-lg ${component.color} cursor-pointer transition-all duration-200 hover:shadow-lg transform hover:scale-105 flex flex-col items-center justify-center p-2`}
            style={{
              top: component.position.top,
              left: component.position.left,
              width: component.position.width,
              height: component.position.height
            }}
            onMouseEnter={() => handleMouseEnter(component.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center justify-center mb-1">
              {component.icon}
              <span className="ml-2 font-semibold text-sm text-center">{component.name}</span>
            </div>
            
            {activeTooltip === component.id && (
              <div className="absolute z-10 p-3 bg-gray-800 text-white text-xs rounded-lg shadow-lg -top-16 left-1/2 transform -translate-x-1/2 w-48">
                {component.description}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            )}
          </div>
        ))}

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* OneLake to all services */}
          <line x1="30%" y1="30%" x2="22%" y2="40%" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="50%" y1="30%" x2="52%" y2="40%" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="70%" y1="30%" x2="82%" y2="40%" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="50%" y1="30%" x2="50%" y2="70%" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">{feature.icon}</span>
              <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
            </div>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Architecture Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-bold text-blue-800 mb-4">OneLake Foundation</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Unified storage:</strong> Single data lake for all analytics workloads</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Delta format:</strong> Open delta lake format for ACID transactions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Auto organization:</strong> Automatic data organization and optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Security:</strong> Unified governance and security model</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-bold text-green-800 mb-4">Compute Engines</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span><strong>Spark engine:</strong> Apache Spark for big data processing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span><strong>SQL endpoint:</strong> T-SQL engine for data warehouse workloads</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span><strong>Analysis Services:</strong> Semantic modeling and OLAP</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span><strong>Real-time analytics:</strong> Event streaming and real-time processing</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Service Integration */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border border-blue-200">
        <h4 className="text-xl font-bold text-blue-800 mb-4">Service Integration</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">Data Integration</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Data Factory pipelines</li>
              <li>• Real-time event streams</li>
              <li>• External data connections</li>
              <li>• Dataflows and datasets</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">Analytics & BI</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Power BI integration</li>
              <li>• Synapse Analytics</li>
              <li>• Notebook experiences</li>
              <li>• Semantic models</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">ML & AI</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Azure Machine Learning</li>
              <li>• Cognitive Services</li>
              <li>• MLflow integration</li>
              <li>• AutoML capabilities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Capacity Model */}
      <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
        <h4 className="text-xl font-bold text-purple-800 mb-4">Unified Capacity Model</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">Capacity Units (CU)</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Single licensing model for all services</li>
              <li>• Shared capacity pool across workloads</li>
              <li>• Auto-scaling based on demand</li>
              <li>• Pause and resume capabilities</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">Cost Optimization</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Predictable monthly costs</li>
              <li>• No separate storage charges</li>
              <li>• Efficient resource utilization</li>
              <li>• Built-in monitoring and alerts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricArchitecture;