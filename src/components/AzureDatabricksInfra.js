import React, { useState } from 'react';

const DatabricksArchitecture = () => {
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
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    Box: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      </svg>
    ),
    Code: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    Table: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3zM3 9h18M9 21V9"></path>
      </svg>
    ),
    Chart: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
      </svg>
    ),
    Cogs: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
    Network: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="18" r="3"></circle>
        <circle cx="12" cy="6" r="3"></circle>
        <line x1="6" y1="15" x2="12" y2="9"></line>
        <line x1="12" y1="9" x2="18" y2="15"></line>
      </svg>
    ),
    Fire: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3s.5-2 1.5-2.5C10 6 8 7 8 8.5c0 1.36.5 1 .5 2.5-.5 1-1.5 1-1.5 2-1 1 .5 1.5 1.5 1.5zm9-1.5c0 1.38-.5 2-1 3s.5 2 1.5 2.5c-1.5 0-3-1-3-2.5 0-1.36.5-1 .5-2.5-.5-1-1.5-1-1.5-2-1-1 .5-1.5 1.5-1.5.5 0 1.5 1 1.5 2.5h-.5z"></path>
      </svg>
    ),
    Download: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path>
      </svg>
    ),
    Info: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    ),
    Project: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
        <line x1="12" y1="22" x2="12" y2="15.5"></line>
        <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
      </svg>
    ),
    ArrowDown: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    )
  };
  
  // Component for displaying tooltips
  const Tooltip = ({ id, content }) => {
    if (activeTooltip !== id) return null;
    
    return (
      <div className="absolute z-10 p-3 bg-gray-800 text-white text-xs rounded shadow-lg max-w-xs">
        {content}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
      </div>
    );
  };

  // Component for boxes in the diagram
  const ArchBox = ({ id, icon: Icon, title, description, color, onMouseEnter, onMouseLeave, tooltip, width = "w-full" }) => {
    const colorClasses = {
      blue: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      green: "bg-green-50 border-green-200 hover:bg-green-100",
      purple: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      orange: "bg-orange-50 border-orange-200 hover:bg-orange-100",
      indigo: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
      red: "bg-red-50 border-red-200 hover:bg-red-100"
    };
    
    const iconColors = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      indigo: "text-indigo-600",
      red: "text-red-600"
    };
    
    return (
      <div 
        className={`p-3 rounded-lg shadow-sm border ${colorClasses[color]} transition-all duration-300 relative flex flex-col ${width}`}
        onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex items-center mb-1">
          <span className={`${iconColors[color]} mr-2`}><Icon /></span>
          <h4 className="font-semibold">{title}</h4>
        </div>
        <p className="text-xs text-gray-600">{description}</p>
        <Tooltip id={id} content={tooltip} />
      </div>
    );
  };
  
  // Arrow connector component
  const ArrowConnector = ({ className = "" }) => (
    <div className={`flex justify-center my-2 ${className}`}>
      <span className="text-blue-500">
        <Icons.ArrowDown />
      </span>
    </div>
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Databricks Architecture: Hierarchical Flow</h2>
      
      {/* LEVEL 1: Azure Subscription */}
      <div className="mb-3 flex justify-center">
        <div className="w-2/3">
          <ArchBox
            id="azure-subscription"
            icon={Icons.Cloud}
            title="Azure Subscription"
            description="The foundation - contains all your Azure resources and services"
            color="blue"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            tooltip="An Azure subscription is the fundamental billing unit that contains all your Azure resources. It provides authenticated and authorized access to Azure products and services."
          />
        </div>
      </div>
      
      <ArrowConnector />
      
      {/* LEVEL 2: Storage */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-center bg-blue-100 py-1 rounded mb-3">Storage Layer</h3>
        <div className="flex justify-center space-x-4">
          <div className="w-1/3">
            <ArchBox
              id="adls-gen2"
              icon={Icons.Database}
              title="Azure Data Lake Storage Gen2"
              description="Hierarchical namespace storage for analytics"
              color="green"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tooltip="ADLS Gen2 combines the file system semantics of Data Lake Storage Gen1 with the scalability and economy of Blob Storage. It supports hierarchical directories and POSIX-compliant access control."
            />
          </div>
          
          <div className="w-1/3">
            <ArchBox
              id="blob-storage"
              icon={Icons.Box}
              title="Azure Blob Storage"
              description="Object storage for unstructured data"
              color="blue"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tooltip="Azure Blob Storage is an object storage solution optimized for storing massive amounts of unstructured data. It's the underlying technology for ADLS Gen2."
            />
          </div>
        </div>
        
        <ArrowConnector />
        
        <div className="flex justify-center">
          <div className="w-2/3">
            <ArchBox
              id="data-formats"
              icon={Icons.Table}
              title="Data Format Organization"
              description="How data is organized in storage"
              color="indigo"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tooltip="Data is organized in zones: Raw (original formats), Bronze (validated raw data), Silver (cleaned/transformed), and Gold (business-level aggregates), often using Delta Lake format for reliability."
            />
            
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="bg-gray-50 p-2 rounded border border-gray-200 text-xs text-center">
                <div className="font-semibold">Raw Zone</div>
                <div className="text-gray-600">Original data formats</div>
              </div>
              
              <div className="bg-gray-50 p-2 rounded border border-gray-200 text-xs text-center">
                <div className="font-semibold">Bronze/Silver/Gold</div>
                <div className="text-gray-600">Progressive refinement</div>
              </div>
              
              <div className="bg-gray-50 p-2 rounded border border-gray-200 text-xs text-center">
                <div className="font-semibold">Delta Tables</div>
                <div className="text-gray-600">Reliable data storage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ArrowConnector />
      
      {/* LEVEL 3: Databricks Workspace */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-center bg-purple-100 py-1 rounded mb-3">Databricks Workspace</h3>
        <div className="flex justify-center">
          <div className="w-2/3">
            <ArchBox
              id="workspace"
              icon={Icons.Code}
              title="Databricks Workspace"
              description="Web-based interface for managing all Databricks assets"
              color="purple"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tooltip="The Databricks workspace is a SaaS application that serves as the main interface for users to access notebooks, create clusters, run jobs, and manage data. It's managed by Databricks but connects to resources in your Azure subscription."
            />
            
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="bg-purple-50 p-2 rounded border border-purple-200 text-xs text-center">
                <div className="font-semibold">Control Plane</div>
                <div className="text-gray-600">Databricks-managed UI</div>
              </div>
              
              <div className="bg-purple-50 p-2 rounded border border-purple-200 text-xs text-center">
                <div className="font-semibold">Data Plane</div>
                <div className="text-gray-600">Your Azure VNet</div>
              </div>
              
              <div className="bg-purple-50 p-2 rounded border border-purple-200 text-xs text-center">
                <div className="font-semibold">Unity Catalog</div>
                <div className="text-gray-600">Data governance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ArrowConnector />
      
      {/* LEVEL 4: Compute Infrastructure */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-center bg-orange-100 py-1 rounded mb-3">Compute Infrastructure</h3>
        <div className="flex justify-center">
          <div className="w-2/3">
            <ArchBox
              id="clusters"
              icon={Icons.Server}
              title="Databricks Clusters"
              description="Spark compute resources that process your data"
              color="orange"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tooltip="Databricks clusters are groups of computers that process your data as a single unit. They're powered by Apache Spark and run in your Azure VNet. You can configure node types, autoscaling, and other properties."
            />
            
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="p-2 rounded border border-orange-200 bg-orange-50 text-xs">
                <div className="font-semibold flex items-center">
                  <span className="text-orange-600 mr-1"><Icons.Server /></span>
                  Driver Node
                </div>
                <ul className="list-disc pl-5 text-gray-600 mt-1">
                  <li>Coordinates the cluster</li>
                  <li>Maintains state information</li>
                  <li>Hosts Spark Context</li>
                </ul>
              </div>
              
              <div className="p-2 rounded border border-orange-200 bg-orange-50 text-xs">
                <div className="font-semibold flex items-center">
                  <span className="text-orange-600 mr-1"><Icons.Server /></span>
                  Worker Nodes
                </div>
                <ul className="list-disc pl-5 text-gray-600 mt-1">
                  <li>Execute tasks in parallel</li>
                  <li>Cache data in memory</li>
                  <li>Process data partitions</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="bg-white p-2 rounded shadow-sm text-xs text-center border border-orange-100">
                <div className="font-semibold">All-Purpose Clusters</div>
                <div className="text-gray-600">Interactive development</div>
              </div>
              
              <div className="bg-white p-2 rounded shadow-sm text-xs text-center border border-orange-100">
                <div className="font-semibold">Job Clusters</div>
                <div className="text-gray-600">Scheduled jobs</div>
              </div>
              
              <div className="bg-white p-2 rounded shadow-sm text-xs text-center border border-orange-100">
                <div className="font-semibold">SQL Warehouses</div>
                <div className="text-gray-600">SQL & BI workloads</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ArrowConnector />
      
      {/* LEVEL 5: Processing Layer */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-center bg-red-100 py-1 rounded mb-3">Data Processing Layer</h3>
        <div className="flex justify-center">
          <div className="w-full px-16">
            <div className="grid grid-cols-2 gap-4">
              <ArchBox
                id="spark-processing"
                icon={Icons.Fire}
                title="Apache Spark"
                description="Distributed computing engine"
                color="red"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Apache Spark is an open-source distributed computing system that provides parallel processing for big data. It includes APIs for SQL, DataFrames, machine learning, graph processing, and streaming."
              />
              
              <ArchBox
                id="delta-lake"
                icon={Icons.Table}
                title="Delta Lake"
                description="ACID transactions on cloud storage"
                color="blue"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Delta Lake is an open-source storage layer that brings reliability to data lakes through ACID transactions, scalable metadata handling, schema enforcement, time travel (data versioning), and more."
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-2">
              <ArchBox
                id="spark-apis"
                icon={Icons.Project}
                title="Spark Processing APIs"
                description="Tools for data processing"
                color="green"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Spark offers multiple APIs for data processing including DataFrames/Datasets (structured data), Spark SQL (SQL queries), Streaming (real-time data), MLlib (machine learning), and GraphX (graph computation)."
              />
              
              <ArchBox
                id="mlflow"
                icon={Icons.Chart}
                title="MLflow"
                description="ML lifecycle management"
                color="indigo"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="MLflow is an open-source platform to manage the ML lifecycle, including experimentation, reproducibility, deployment, and a central model registry."
              />
            </div>
          </div>
        </div>
      </div>
      
      <ArrowConnector />
      
      {/* LEVEL 6: Developer Tools */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-center bg-green-100 py-1 rounded mb-3">Developer & Orchestration Tools</h3>
        <div className="flex justify-center">
          <div className="w-full px-16">
            <div className="grid grid-cols-3 gap-4">
              <ArchBox
                id="notebooks"
                icon={Icons.Code}
                title="Notebooks"
                description="Interactive development environment"
                color="purple"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Notebooks provide an interactive environment for data exploration, visualization, and collaboration. They support multiple languages including Python, SQL, R, and Scala."
              />
              
              <ArchBox
                id="workflows"
                icon={Icons.Cogs}
                title="Workflows"
                description="Multi-task job orchestration"
                color="blue"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="Databricks Workflows is a managed orchestration service for coordinating notebooks, SQL, and other tasks into reliable data pipelines with monitoring, error handling, and recovery capabilities."
              />
              
              <ArchBox
                id="jobs"
                icon={Icons.Cogs}
                title="Jobs Scheduler"
                description="Schedule & monitor workloads"
                color="green"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tooltip="The Jobs service allows you to schedule execution of notebooks or JARs, monitor their progress, and configure alerts for failures, all with ephemeral clusters that start/stop automatically."
              />
            </div>
          </div>
        </div>
      </div>
      
      <ArrowConnector />
      
      {/* LEVEL 7: Data Consumption */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-center bg-indigo-100 py-1 rounded mb-3">Data Consumption Layer</h3>
        <div className="flex justify-center">
          <div className="w-2/3">
            <ArchBox
              id="data-consumption"
              icon={Icons.Download}
              title="Data Consumption Options"
              description="Ways to use and analyze processed data"
              color="indigo"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tooltip="The final stage where processed data is used for business insights, applications, and decision making."
            />
            
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="bg-indigo-50 p-2 rounded border border-indigo-200 text-xs text-center">
                <div className="font-semibold">Databricks SQL</div>
                <div className="text-gray-600">SQL and dashboards</div>
              </div>
              
              <div className="bg-indigo-50 p-2 rounded border border-indigo-200 text-xs text-center">
                <div className="font-semibold">BI Tools</div>
                <div className="text-gray-600">Power BI, Tableau, etc.</div>
              </div>
              
              <div className="bg-indigo-50 p-2 rounded border border-indigo-200 text-xs text-center">
                <div className="font-semibold">Custom Apps</div>
                <div className="text-gray-600">APIs and applications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data Flow Summary */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
        <h3 className="font-semibold flex items-center mb-3">
          <span className="text-blue-500 mr-2"><Icons.Info /></span>
          End-to-End Data Flow Summary
        </h3>
        <ol className="list-decimal pl-6 text-sm text-gray-700 space-y-2">
          <li><span className="font-medium">Data Ingestion:</span> Raw data lands in Azure Storage (Blob/ADLS Gen2) from various sources</li>
          <li><span className="font-medium">Processing:</span> Databricks clusters read from storage, process data using Spark</li>
          <li><span className="font-medium">Transformation:</span> Data moves through medallion architecture (Bronze → Silver → Gold)</li>
          <li><span className="font-medium">Storage:</span> Processed data stored as Delta Lake tables for reliability</li>
          <li><span className="font-medium">Serving:</span> Data made available through SQL warehouses, APIs, or direct table access</li>
          <li><span className="font-medium">Consumption:</span> Analysis in notebooks, dashboards, BI tools, or applications</li>
        </ol>
      </div>
      
      {/* Key terms and concepts */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-semibold flex items-center mb-3">
          <span className="text-gray-500 mr-2"><Icons.Info /></span>
          Key Databricks Concepts & Terminology
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><span className="font-medium">RDD (Resilient Distributed Dataset):</span> Low-level data structure in Spark</li>
              <li><span className="font-medium">DataFrame/Dataset:</span> High-level APIs for structured data</li>
              <li><span className="font-medium">Partition:</span> A division of data for parallel processing</li>
              <li><span className="font-medium">Shuffle:</span> The process of redistributing data across partitions</li>
              <li><span className="font-medium">Executor:</span> A JVM process on a worker node that runs tasks</li>
              <li><span className="font-medium">Task:</span> A unit of work sent to one executor</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><span className="font-medium">DBU (Databricks Unit):</span> Billing unit for Databricks usage</li>
              <li><span className="font-medium">Medallion Architecture:</span> Bronze (raw), Silver (filtered), Gold (aggregated)</li>
              <li><span className="font-medium">Metastore:</span> Repository of table metadata/schema information</li>
              <li><span className="font-medium">Mount Point:</span> Connection to storage that persists across clusters</li>
              <li><span className="font-medium">Notebook:</span> Interactive document combining code, visuals, and text</li>
              <li><span className="font-medium">Delta Table:</span> A set of Parquet files and a transaction log</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabricksArchitecture;