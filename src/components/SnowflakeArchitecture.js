import React, { useState } from 'react';

const SnowflakeArchitecture = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  
  const handleMouseEnter = (id) => {
    setActiveTooltip(id);
  };
  
  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  // Architecture component
  const ArchBox = ({ id, title, description, color, onMouseEnter, onMouseLeave, tooltip, icon: Icon }) => (
    <div 
      className={`relative p-4 border-2 rounded-lg shadow-sm transition-all duration-200 cursor-pointer hover:shadow-md bg-${color}-50 border-${color}-200 hover:border-${color}-400`}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center justify-center mb-2">
        {Icon && <Icon />}
      </div>
      <h4 className={`font-semibold text-center text-${color}-800 mb-1 text-sm`}>{title}</h4>
      <p className="text-xs text-gray-600 text-center">{description}</p>
      
      {activeTooltip === id && tooltip && (
        <div className="absolute z-10 p-3 bg-gray-800 text-white text-xs rounded shadow-lg -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full w-64">
          {tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  );

  // Simple SVG icons
  const Icons = {
    Cloud: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
    Database: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    Server: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    Shield: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    Layers: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12,2 2,7 12,12 22,7 12,2"></polygon>
        <polyline points="2,17 12,22 22,17"></polyline>
        <polyline points="2,12 12,17 22,12"></polyline>
      </svg>
    )
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 rounded-xl shadow-lg mb-6 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">
          Snowflake Cloud Data Warehouse Architecture
        </h1>
        <p className="text-white/80">Multi-cluster shared data architecture with separated storage and compute</p>
      </div>

      {/* Architecture Diagram */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Snowflake Architecture Components</h2>
        
        {/* LEVEL 1: Cloud Infrastructure */}
        <div className="mb-6 flex justify-center">
          <div className="w-2/3">
            <ArchBox
              id="cloud-services"
              icon={Icons.Cloud}
              title="Cloud Services Layer"
              description="Global services - metadata, optimization, security, transactions"
              color="cyan"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tooltip="The cloud services layer handles metadata management, query optimization, security, and transaction management. It's globally distributed and shared across all customers."
            />
          </div>
        </div>

        {/* LEVEL 2: Compute Layer */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center bg-cyan-100 py-2 rounded mb-4">Compute Layer - Virtual Warehouses</h3>
          <div className="flex justify-center space-x-4">
            <div className="w-1/4">
              <ArchBox
                id="warehouse-xs"
                icon={Icons.Server}
                title="X-Small Warehouse"
                description="1 cluster, 8 cores"
                color="blue"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Virtual warehouse with 1 cluster and 8 cores. Ideal for small workloads and development environments."
              />
            </div>
            <div className="w-1/4">
              <ArchBox
                id="warehouse-s"
                icon={Icons.Server}
                title="Small Warehouse"
                description="1 cluster, 16 cores"
                color="blue"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Virtual warehouse with 1 cluster and 16 cores. Good for medium-sized analytical workloads."
              />
            </div>
            <div className="w-1/4">
              <ArchBox
                id="warehouse-multi"
                icon={Icons.Server}
                title="Multi-Cluster Warehouse"
                description="Auto-scaling clusters"
                color="indigo"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Auto-scaling multi-cluster warehouse that can scale from 1 to 10 clusters based on demand. Ideal for high-concurrency workloads."
              />
            </div>
          </div>
        </div>

        {/* LEVEL 3: Storage Layer */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center bg-green-100 py-2 rounded mb-4">Storage Layer</h3>
          <div className="flex justify-center space-x-6">
            <div className="w-1/3">
              <ArchBox
                id="cloud-storage"
                icon={Icons.Database}
                title="Cloud Object Storage"
                description="S3, Azure Blob, or GCS"
                color="green"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Data is stored in cloud object storage (AWS S3, Azure Blob, or Google Cloud Storage) with automatic compression and encryption."
              />
            </div>
            <div className="w-1/3">
              <ArchBox
                id="micro-partitions"
                icon={Icons.Layers}
                title="Micro-Partitions"
                description="Immutable 50-500MB files"
                color="green"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Data is organized into micro-partitions - immutable files of 50-500MB with metadata for efficient pruning and parallel processing."
              />
            </div>
          </div>
        </div>

        {/* LEVEL 4: Data Organization */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center bg-purple-100 py-2 rounded mb-4">Data Organization</h3>
          <div className="flex justify-center space-x-4">
            <div className="w-1/4">
              <ArchBox
                id="databases"
                icon={Icons.Database}
                title="Databases"
                description="Logical containers"
                color="purple"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Databases are logical containers that group related schemas. Each database can have its own access controls and retention policies."
              />
            </div>
            <div className="w-1/4">
              <ArchBox
                id="schemas"
                icon={Icons.Layers}
                title="Schemas"
                description="Namespace groupings"
                color="purple"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Schemas provide namespace groupings within databases, organizing tables, views, and other objects logically."
              />
            </div>
            <div className="w-1/4">
              <ArchBox
                id="tables"
                icon={Icons.Database}
                title="Tables & Views"
                description="Structured data objects"
                color="purple"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Tables store structured data in columnar format. Views provide logical abstractions over tables for security and simplification."
              />
            </div>
          </div>
        </div>

        {/* LEVEL 5: Security & Governance */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center bg-red-100 py-2 rounded mb-4">Security & Governance</h3>
          <div className="flex justify-center space-x-4">
            <div className="w-1/4">
              <ArchBox
                id="rbac"
                icon={Icons.Shield}
                title="Role-Based Access"
                description="Granular permissions"
                color="red"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Role-based access control (RBAC) with granular permissions at database, schema, table, and column levels."
              />
            </div>
            <div className="w-1/4">
              <ArchBox
                id="encryption"
                icon={Icons.Shield}
                title="End-to-End Encryption"
                description="Data encryption at rest & transit"
                color="red"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="All data is encrypted end-to-end with TLS 1.2+ in transit and AES-256 at rest. Customer-managed keys supported."
              />
            </div>
            <div className="w-1/4">
              <ArchBox
                id="auditing"
                icon={Icons.Shield}
                title="Access History"
                description="Comprehensive audit logs"
                color="red"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Complete audit trail of all data access, queries, and administrative actions with detailed logging and monitoring."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-cyan-50 p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold text-cyan-800 mb-4">Architecture Benefits</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Separation of Storage & Compute:</strong> Scale independently based on needs</li>
            <li>• <strong>Multi-Cluster Warehouses:</strong> Handle high concurrency automatically</li>
            <li>• <strong>Zero Management:</strong> No infrastructure to maintain or tune</li>
            <li>• <strong>Instant Elasticity:</strong> Warehouses start and stop in seconds</li>
            <li>• <strong>Automatic Optimization:</strong> Query optimization without manual tuning</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold text-blue-800 mb-4">Data Sharing & Marketplace</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Secure Data Sharing:</strong> Share live data without copying</li>
            <li>• <strong>Data Marketplace:</strong> Access third-party datasets instantly</li>
            <li>• <strong>Cross-Cloud Sharing:</strong> Share across AWS, Azure, and GCP</li>
            <li>• <strong>Real-time Access:</strong> Shared data is always current</li>
            <li>• <strong>Governance Controls:</strong> Fine-grained access controls</li>
          </ul>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Technical Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Compute</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Virtual warehouses: X-Small to 6X-Large</li>
              <li>• Multi-cluster: 1-10 clusters per warehouse</li>
              <li>• Auto-suspend: Configurable timeouts</li>
              <li>• Auto-resume: Instant start on query</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Storage</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Columnar storage with compression</li>
              <li>• Micro-partitions: 50-500MB files</li>
              <li>• Time travel: 1-90 days retention</li>
              <li>• Fail-safe: Additional 7 days protection</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Connectivity</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• JDBC/ODBC drivers</li>
              <li>• Native connectors for popular tools</li>
              <li>• REST APIs and SDKs</li>
              <li>• SQL interface and Snowsight UI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnowflakeArchitecture;