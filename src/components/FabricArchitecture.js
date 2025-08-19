import React, { useState } from 'react';

const FabricArchitecture = () => {
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
    Grid: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    ),
    Layers: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12,2 2,7 12,12 22,7 12,2"></polygon>
        <polyline points="2,17 12,22 22,17"></polyline>
        <polyline points="2,12 12,17 22,12"></polyline>
      </svg>
    ),
    BarChart: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
      </svg>
    ),
    Zap: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
      </svg>
    )
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 rounded-xl shadow-lg mb-6 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">
          Microsoft Fabric Architecture
        </h1>
        <p className="text-white/80">Unified analytics platform with OneLake and integrated compute engines</p>
      </div>

      {/* Architecture Diagram */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Microsoft Fabric Components</h2>
        
        {/* LEVEL 1: Microsoft 365 Ecosystem */}
        <div className="mb-6 flex justify-center">
          <div className="w-3/4">
            <ArchBox
              id="microsoft-ecosystem"
              icon={Icons.Cloud}
              title="Microsoft 365 Ecosystem"
              description="Integrated with Office 365, Teams, and Azure services"
              color="blue"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tooltip="Microsoft Fabric is deeply integrated with the Microsoft 365 ecosystem, providing seamless access to data across Office 365, Teams, SharePoint, and Azure services."
            />
          </div>
        </div>

        {/* LEVEL 2: OneLake Foundation */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center bg-green-100 py-2 rounded mb-4">OneLake - Unified Data Lake</h3>
          <div className="flex justify-center">
            <div className="w-2/3">
              <ArchBox
                id="onelake"
                icon={Icons.Database}
                title="OneLake"
                description="Single, unified data lake for all workloads"
                color="green"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="OneLake is a unified data lake built on Azure Data Lake Storage that serves as the single source of truth for all data across all Fabric workloads."
              />
            </div>
          </div>
        </div>

        {/* LEVEL 3: Compute Engines */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center bg-purple-100 py-2 rounded mb-4">Compute Engines</h3>
          <div className="flex justify-center space-x-4">
            <div className="w-1/4">
              <ArchBox
                id="spark-engine"
                icon={Icons.Zap}
                title="Apache Spark"
                description="Big data processing"
                color="purple"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Apache Spark engine for big data processing, data engineering, and machine learning workloads within Fabric."
              />
            </div>
            <div className="w-1/4">
              <ArchBox
                id="sql-engine"
                icon={Icons.Database}
                title="SQL Endpoint"
                description="T-SQL analytics"
                color="purple"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="SQL endpoint providing T-SQL interface for analytics and business intelligence workloads with familiar SQL Server syntax."
              />
            </div>
            <div className="w-1/4">
              <ArchBox
                id="analysis-services"
                icon={Icons.BarChart}
                title="Analysis Services"
                description="Semantic modeling"
                color="purple"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Analysis Services engine for semantic modeling, providing rich business logic and calculations for BI scenarios."
              />
            </div>
          </div>
        </div>

        {/* LEVEL 4: Fabric Workloads */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center bg-orange-100 py-2 rounded mb-4">Fabric Workloads</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <ArchBox
              id="data-factory"
              icon={Icons.Layers}
              title="Data Factory"
              description="Data integration"
              color="orange"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tooltip="Data Factory for data integration, providing 200+ connectors and data movement capabilities."
            />
            <ArchBox
              id="synapse-analytics"
              icon={Icons.Database}
              title="Synapse Data Engineering"
              description="Spark & pipelines"
              color="orange"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tooltip="Synapse Data Engineering provides Spark pools and notebooks for data engineering and transformation tasks."
            />
            <ArchBox
              id="synapse-warehouse"
              icon={Icons.Database}
              title="Synapse Data Warehouse"
              description="SQL analytics"
              color="orange"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tooltip="Synapse Data Warehouse provides SQL-based analytics capabilities with T-SQL support."
            />
            <ArchBox
              id="synapse-science"
              icon={Icons.BarChart}
              title="Synapse Data Science"
              description="ML & AI"
              color="orange"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tooltip="Synapse Data Science provides machine learning and AI capabilities integrated with Azure ML."
            />
            <ArchBox
              id="real-time-analytics"
              icon={Icons.Zap}
              title="Real-Time Analytics"
              description="Event streaming"
              color="orange"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tooltip="Real-Time Analytics provides event streaming and real-time data processing capabilities."
            />
          </div>
        </div>

        {/* LEVEL 5: Power BI Integration */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center bg-yellow-100 py-2 rounded mb-4">Business Intelligence</h3>
          <div className="flex justify-center">
            <div className="w-1/2">
              <ArchBox
                id="power-bi"
                icon={Icons.BarChart}
                title="Power BI"
                description="Integrated business intelligence"
                color="yellow"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Power BI is deeply integrated with Fabric, providing direct mode connectivity and semantic modeling capabilities without data movement."
              />
            </div>
          </div>
        </div>

        {/* LEVEL 6: Governance & Security */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center bg-red-100 py-2 rounded mb-4">Governance & Security</h3>
          <div className="flex justify-center space-x-6">
            <div className="w-1/3">
              <ArchBox
                id="purview"
                icon={Icons.Grid}
                title="Microsoft Purview"
                description="Data governance"
                color="red"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Microsoft Purview provides comprehensive data governance, including data discovery, classification, and lineage tracking."
              />
            </div>
            <div className="w-1/3">
              <ArchBox
                id="azure-ad"
                icon={Icons.Grid}
                title="Azure Active Directory"
                description="Identity & access"
                color="red"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Azure Active Directory provides identity and access management with single sign-on and multi-factor authentication."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-50 p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold text-green-800 mb-4">Architecture Benefits</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Unified Platform:</strong> All analytics workloads in one platform</li>
            <li>• <strong>OneLake:</strong> Single data lake eliminating data silos</li>
            <li>• <strong>Native Integration:</strong> Deep Microsoft 365 ecosystem integration</li>
            <li>• <strong>Capacity-Based Pricing:</strong> Simplified consumption model</li>
            <li>• <strong>Direct Mode:</strong> Power BI connects without data movement</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold text-blue-800 mb-4">Microsoft Ecosystem Integration</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Office 365:</strong> Excel, Teams, SharePoint integration</li>
            <li>• <strong>Azure Services:</strong> Native Azure service connectivity</li>
            <li>• <strong>Power Platform:</strong> Power Apps and Power Automate</li>
            <li>• <strong>Dynamics 365:</strong> Business application data integration</li>
            <li>• <strong>Microsoft Graph:</strong> Unified data access layer</li>
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
              <li>• Fabric Capacity Units (FCU) pricing</li>
              <li>• Auto-scaling Spark pools</li>
              <li>• Serverless SQL endpoints</li>
              <li>• Analysis Services semantic models</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Storage</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• OneLake built on Azure Data Lake</li>
              <li>• Delta Lake format support</li>
              <li>• Automatic data organization</li>
              <li>• Cross-workload data sharing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Integration</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 200+ data connectors</li>
              <li>• Real-time event streaming</li>
              <li>• Power BI direct mode</li>
              <li>• Microsoft 365 native integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricArchitecture;