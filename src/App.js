import React, { useState } from 'react';
import DatabaseComparison from './components/DatabaseComparison';
import DataEngineeringGlossary from './components/DataEngineeringGlossary';
import AwsVsAzureComparison from './components/AwsVsAzureComparison';
import DataProcessingFlows from './components/DataProcessingFlows';
import CloudStorageComparison from './components/CloudStorageComparison';
import AzureDatabricksInfraDetail from './components/AzureDatabricksInfra';
import StoragePricingComparison from './components/StoragePricingComparison';
import './App.css';
import './styles/buttons.css';

function App() {
  // State to track active primary category and subcategory
  const [activeCategory, setActiveCategory] = useState('cloud-compare');
  const [activeSubcategory, setActiveSubcategory] = useState('overview');

  // Navigation structure with categories and subcategories
  const navigation = {
    'cloud-compare': {
      label: 'AWS vs Azure',
      subcategories: {
        'overview': { label: 'Services Overview', component: <AwsVsAzureComparison /> },
        'storage': { label: 'Storage Services', component: <CloudStorageComparison /> },
        'storage-pricing': { label: 'Storage Pricing', component: <StoragePricingComparison /> },
        'data-flows': { label: 'Data Processing Flows', component: <DataProcessingFlows /> }
      }
    },
    'database-compare': {
      label: 'Database Technologies',
      subcategories: {
        'database': { label: 'SingleStore vs Databricks vs Snowflake', component: <DatabaseComparison /> }
      }
    },
    'architecture': {
      label: 'Architecture',
      subcategories: {
        'databricks': { label: 'Databricks Architecture', component: <AzureDatabricksInfraDetail /> }
      }
    },
    'reference': {
      label: 'Reference',
      subcategories: {
        'glossary': { label: 'Data Engineering Glossary', component: <DataEngineeringGlossary /> }
      }
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Select the first subcategory when changing categories
    setActiveSubcategory(Object.keys(navigation[category].subcategories)[0]);
  };

  return (
    <div className="App bg-gray-50 min-h-screen">
      {/* Primary navigation - Categories */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 shadow-md">
        <div className="flex justify-center w-full max-w-6xl mx-auto flex-wrap">
          {Object.entries(navigation).map(([category, { label }]) => (
            <button 
              key={category}
              onClick={() => handleCategoryClick(category)} 
              className={`btn-nav ${
                activeCategory === category 
                  ? 'btn-nav-active' 
                  : 'btn-nav-inactive'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Secondary navigation - Subcategories */}
      <div className="bg-gray-100 py-3 px-6 border-b">
        <div className="flex justify-center w-full max-w-6xl mx-auto flex-wrap">
          {Object.entries(navigation[activeCategory].subcategories).map(([subcategory, { label }]) => (
            <button 
              key={subcategory}
              onClick={() => setActiveSubcategory(subcategory)} 
              className={`px-4 py-2 mx-1 text-sm font-medium rounded-md ${
                activeSubcategory === subcategory 
                  ? 'bg-white shadow text-blue-600' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Container for component content */}
      <div className="container max-w-6xl mx-auto p-6">
        {navigation[activeCategory].subcategories[activeSubcategory].component}
      </div>
    </div>
  );
}

export default App;