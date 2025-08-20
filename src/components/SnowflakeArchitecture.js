import React, { useState } from 'react';

const SnowflakeArchitecture = () => {
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
    Network: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 1v6m0 6v6"></path>
        <path d="m21 12-6-3-6 3-6-3"></path>
      </svg>
    )
  };

  const components = [
    {
      id: 'data-cloud',
      name: 'Snowflake Data Cloud',
      position: { top: '10%', left: '20%', width: '60%', height: '15%' },
      color: 'bg-cyan-100 border-cyan-300',
      icon: <Icons.Cloud />,
      description: 'Global data cloud platform with cross-cloud capabilities'
    },
    {
      id: 'storage-layer',
      name: 'Storage Layer',
      position: { top: '35%', left: '10%', width: '35%', height: '20%' },
      color: 'bg-blue-100 border-blue-300',
      icon: <Icons.Database />,
      description: 'Centralized storage with micro-partitioning and compression'
    },
    {
      id: 'compute-layer',
      name: 'Compute Layer (Virtual Warehouses)',
      position: { top: '35%', left: '55%', width: '35%', height: '20%' },
      color: 'bg-green-100 border-green-300',
      icon: <Icons.Server />,
      description: 'Elastic compute resources that scale independently'
    },
    {
      id: 'services-layer',
      name: 'Services Layer',
      position: { top: '65%', left: '20%', width: '60%', height: '15%' },
      color: 'bg-purple-100 border-purple-300',
      icon: <Icons.Network />,
      description: 'Query optimization, metadata management, and security'
    }
  ];

  const features = [
    {
      title: 'Separated Storage & Compute',
      description: 'Independent scaling of storage and compute resources',
      icon: '🔄'
    },
    {
      title: 'Multi-Cluster Warehouses',
      description: 'Automatic scaling for concurrent workloads',
      icon: '⚡'
    },
    {
      title: 'Data Sharing',
      description: 'Secure data sharing without data movement',
      icon: '🤝'
    },
    {
      title: 'Time Travel',
      description: 'Query historical data up to 90 days',
      icon: '⏰'
    },
    {
      title: 'Zero Copy Cloning',
      description: 'Instant database and table clones',
      icon: '📋'
    },
    {
      title: 'Automatic Optimization',
      description: 'Self-tuning performance and maintenance',
      icon: '🎯'
    }
  ];

  return (
    <div className="snowflake-architecture">
      {/* Architecture Diagram */}
      <div className="relative w-full h-96 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-lg border-2 border-cyan-200 mb-8 overflow-hidden">
        <h3 className="absolute top-4 left-6 text-xl font-bold text-cyan-800">
          Snowflake Architecture Overview
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
          {/* Storage to Compute */}
          <line x1="45%" y1="45%" x2="55%" y2="45%" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" />
          {/* Services to Storage */}
          <line x1="35%" y1="65%" x2="35%" y2="55%" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" />
          {/* Services to Compute */}
          <line x1="65%" y1="65%" x2="65%" y2="55%" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" />
          {/* Data Cloud to Storage */}
          <line x1="40%" y1="25%" x2="35%" y2="35%" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" />
          {/* Data Cloud to Compute */}
          <line x1="60%" y1="25%" x2="65%" y2="35%" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
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
          <h4 className="text-xl font-bold text-cyan-800 mb-4">Storage Architecture</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-cyan-600 mr-2">•</span>
              <span><strong>Micro-partitioning:</strong> Automatic data organization for optimal query performance</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 mr-2">•</span>
              <span><strong>Columnar format:</strong> Compressed columnar storage with metadata</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 mr-2">•</span>
              <span><strong>Data encryption:</strong> End-to-end encryption at rest and in transit</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 mr-2">•</span>
              <span><strong>Cross-cloud:</strong> Support for AWS, Azure, and Google Cloud</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-bold text-green-800 mb-4">Compute Architecture</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span><strong>Virtual warehouses:</strong> Independent compute clusters for different workloads</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span><strong>Auto-scaling:</strong> Automatic scaling up/down based on demand</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span><strong>Auto-suspend:</strong> Automatic suspension when not in use</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span><strong>Multi-cluster:</strong> Handle high concurrency with multiple clusters</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Performance Optimizations */}
      <div className="mt-8 bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
        <h4 className="text-xl font-bold text-cyan-800 mb-4">Performance Optimizations</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">Query Optimization</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Automatic query optimization</li>
              <li>• Result set caching</li>
              <li>• Intelligent query routing</li>
              <li>• Parallel query execution</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">Data Management</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Automatic clustering</li>
              <li>• Search optimization service</li>
              <li>• Materialized views</li>
              <li>• External tables</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnowflakeArchitecture;