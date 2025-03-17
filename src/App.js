import React, { useState } from 'react';
import DatabaseComparison from './components/DatabaseComparison';
import DataEngineeringGlossary from './components/DataEngineeringGlossary';
import AwsVsAzureComparison from './components/AwsVsAzureComparison';
import './App.css';

function App() {
  // State to track active tab
  const [activeTab, setActiveTab] = useState('comparison');

  return (
    <div className="App">
      {/* Clean tab navigation with separated buttons */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 flex justify-center">
        <div className="flex space-x-4">
          <button 
            onClick={() => setActiveTab('comparison')} 
            className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-200 shadow-md ${
              activeTab === 'comparison' 
                ? 'bg-white text-blue-600 transform scale-105' 
                : 'bg-blue-500/30 text-white hover:bg-blue-500/50'
            }`}
          >
            Database Comparison
          </button>
          <button 
            onClick={() => setActiveTab('glossary')} 
            className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-200 shadow-md ${
              activeTab === 'glossary' 
                ? 'bg-white text-purple-600 transform scale-105' 
                : 'bg-purple-500/30 text-white hover:bg-purple-500/50'
            }`}
          >
            Data Engineering Glossary
          </button>
          <button 
            onClick={() => setActiveTab('aws-vs-azure')} 
            className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-200 shadow-md ${
              activeTab === 'aws-vs-azure' 
                ? 'bg-white text-green-600 transform scale-105' 
                : 'bg-green-500/30 text-white hover:bg-green-500/50'
            }`}
          >
            AWS vs Azure
          </button>
        </div>
      </div>

      {/* Render the active component */}
      {activeTab === 'comparison' && <DatabaseComparison />}
      {activeTab === 'glossary' && <DataEngineeringGlossary />}
      {activeTab === 'aws-vs-azure' && <AwsVsAzureComparison />}
    </div>
  );
}

export default App;