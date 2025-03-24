import React, { useState } from 'react';
import DatabaseComparison from './components/DatabaseComparison';
import DataEngineeringGlossary from './components/DataEngineeringGlossary';
import AwsVsAzureComparison from './components/AwsVsAzureComparison';
import DataProcessingFlows from './components/DataProcessingFlows';
import CloudStorageComparison from './components/CloudStorageComparison';
import AzureDatabricksInfraDetail from './components/AzureDatabricksInfra'; // new import
import StoragePricingComparison from './components/StoragePricingComparison'; // added import
import './App.css';
import './styles/buttons.css'; // Import the button styles

function App() {
  // State to track active tab
  const [activeTab, setActiveTab] = useState('comparison');

  return (
    <div className="App bg-gray-50 min-h-screen">
      {/* Blue-to-purple gradient for the main tabs */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 flex justify-center shadow-md">
        <div className="flex justify-center w-full max-w-6xl mx-auto flex-wrap">
          <button 
            onClick={() => setActiveTab('comparison')} 
            className={`btn-nav ${
              activeTab === 'comparison' 
                ? 'btn-nav-active' 
                : 'btn-nav-inactive'
            }`}
          >
            SingleStore vs Databricks
          </button>
          <button 
            onClick={() => setActiveTab('glossary')} 
            className={`btn-nav ${
              activeTab === 'glossary' 
                ? 'btn-nav-active' 
                : 'btn-nav-inactive'
            }`}
          >
            Data Engineering Glossary
          </button>
          <button 
            onClick={() => setActiveTab('aws-vs-azure')} 
            className={`btn-nav ${
              activeTab === 'aws-vs-azure' 
                ? 'btn-nav-active' 
                : 'btn-nav-inactive'
            }`}
          >
            AWS vs Azure Cloud Services
          </button>
          <button 
            onClick={() => setActiveTab('cloud-storage')} 
            className={`btn-nav ${
              activeTab === 'cloud-storage' 
                ? 'btn-nav-active' 
                : 'btn-nav-inactive'
            }`}
          >
            Blob vs S3
          </button>
          <button 
            onClick={() => setActiveTab('data-flows')} 
            className={`btn-nav ${
              activeTab === 'data-flows' 
                ? 'btn-nav-active' 
                : 'btn-nav-inactive'
            }`}
          >
            Processing Flows
          </button>
          <button 
            onClick={() => setActiveTab('infra')} 
            className={`btn-nav ${
              activeTab === 'infra' 
                ? 'btn-nav-active' 
                : 'btn-nav-inactive'
            }`}
          >
            Databricks Infra
          </button>
          <button 
            onClick={() => setActiveTab('storage-pricing')} 
            className={`btn-nav ${
              activeTab === 'storage-pricing' 
                ? 'btn-nav-active' 
                : 'btn-nav-inactive'
            }`}
          >
            AWS vs Azure Storage Pricing
          </button>
        </div>
      </div>

      {/* Container with consistent max width and padding */}
      <div className="container max-w-6xl mx-auto p-6">
        {/* Render the active component */}
        {activeTab === 'comparison' && <DatabaseComparison />}
        {activeTab === 'glossary' && <DataEngineeringGlossary />}
        {activeTab === 'aws-vs-azure' && <AwsVsAzureComparison />}
        {activeTab === 'cloud-storage' && <CloudStorageComparison />}
        {activeTab === 'data-flows' && <DataProcessingFlows />}
        {activeTab === 'infra' && <AzureDatabricksInfraDetail />}  {/* new render */}
        {activeTab === 'storage-pricing' && <StoragePricingComparison />}
      </div>
    </div>
  );
}

export default App;