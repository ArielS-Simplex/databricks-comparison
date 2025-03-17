import React, { useState } from 'react';
import DatabaseComparison from './components/DatabaseComparison';
import DataEngineeringGlossary from './components/DataEngineeringGlossary';
import AwsVsAzureComparison from './components/AwsVsAzureComparison';
import DataProcessingFlows from './components/DataProcessingFlows';
import './App.css';

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
            className={`px-6 py-3 mx-2 my-1 rounded-lg text-lg font-medium transition-all duration-200 shadow-md ${
              activeTab === 'comparison' 
                ? 'bg-white text-blue-700 transform scale-105' 
                : 'bg-blue-500/30 text-white hover:bg-blue-500/50'
            }`}
          >
            Database Comparison
          </button>
          <button 
            onClick={() => setActiveTab('glossary')} 
            className={`px-6 py-3 mx-2 my-1 rounded-lg text-lg font-medium transition-all duration-200 shadow-md ${
              activeTab === 'glossary' 
                ? 'bg-white text-blue-700 transform scale-105' 
                : 'bg-blue-500/30 text-white hover:bg-blue-500/50'
            }`}
          >
            Data Engineering Glossary
          </button>
          <button 
            onClick={() => setActiveTab('aws-vs-azure')} 
            className={`px-6 py-3 mx-2 my-1 rounded-lg text-lg font-medium transition-all duration-200 shadow-md ${
              activeTab === 'aws-vs-azure' 
                ? 'bg-white text-blue-700 transform scale-105' 
                : 'bg-blue-500/30 text-white hover:bg-blue-500/50'
            }`}
          >
            AWS vs Azure
          </button>
          <button 
            onClick={() => setActiveTab('data-flows')} 
            className={`px-6 py-3 mx-2 my-1 rounded-lg text-lg font-medium transition-all duration-200 shadow-md ${
              activeTab === 'data-flows' 
                ? 'bg-white text-blue-700 transform scale-105' 
                : 'bg-blue-500/30 text-white hover:bg-blue-500/50'
            }`}
          >
            Processing Flows
          </button>
        </div>
      </div>

      {/* Container with consistent max width and padding */}
      <div className="container max-w-6xl mx-auto p-6">
        {/* Render the active component */}
        {activeTab === 'comparison' && <DatabaseComparison />}
        {activeTab === 'glossary' && <DataEngineeringGlossary />}
        {activeTab === 'aws-vs-azure' && <AwsVsAzureComparison />}
        {activeTab === 'data-flows' && <DataProcessingFlows />}
      </div>
    </div>
  );
}

export default App;