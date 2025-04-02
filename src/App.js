import React, { useState } from 'react';
import DatabaseComparison from './components/DatabaseComparison';
import DataEngineeringGlossary from './components/DataEngineeringGlossary';
import AwsVsAzureComparison from './components/AwsVsAzureComparison';
import DataProcessingFlows from './components/DataProcessingFlows';
import CloudStorageComparison from './components/CloudStorageComparison';
import AzureDatabricksInfraDetail from './components/AzureDatabricksInfra';
import StoragePricingComparison from './components/StoragePricingComparison';
import SimplifiedComparison from './components/SimplifiedComparison';
import AICapabilityMatrix from './components/AICapabilityMatrix';
import './App.css';
import './styles/common.css'; // Import common styles
import './styles/buttons.css'; // Import button styles

function App() {
  // State to track active primary category and subcategory
  const [activeCategory, setActiveCategory] = useState('cloud-compare');
  const [activeSubcategory, setActiveSubcategory] = useState('overview');
  // View mode for database section only
  const [databaseViewMode, setDatabaseViewMode] = useState('executive');

  // Navigation structure with categories and subcategories
  const navigation = {
    'cloud-compare': {
      label: 'AWS vs Azure',
      subcategories: {
        'overview': { 
          label: 'Services Overview', 
          component: <AwsVsAzureComparison />
        },
        'storage': { 
          label: 'Storage Services', 
          component: <CloudStorageComparison />
        },
        'storage-pricing': { 
          label: 'Storage Pricing', 
          component: <StoragePricingComparison />
        },
        'data-flows': { 
          label: 'Data Processing Flows', 
          component: <DataProcessingFlows />
        }
        // The 'integrations' subcategory has been removed
      }
    },
    'database-compare': {
      label: 'Database Comparison',
      subcategories: {
        'database': { 
          label: 'SingleStore vs Databricks vs Snowflake',
          // For database section, we'll use the view mode to determine which component to show
          hasMutipleViews: true
        }
      }
    },
    'architecture': {
      label: 'Databricks Architecture',
      subcategories: {
        'databricks': { 
          label: 'Databricks Architecture', 
          component: <AzureDatabricksInfraDetail />
        }
      }
    },
    'Data Engineering Glossary': {
      label: 'Data Engineering Glossary',
      subcategories: {
        'glossary': { 
          label: 'Data Engineering Glossary', 
          component: <DataEngineeringGlossary />
        }
      }
    },
    'ai-capability': {
      label: 'AI Capability Matrix',
      subcategories: {
        'matrix': { 
          label: 'AI Capability Matrix', 
          component: <AICapabilityMatrix />
        }
      }
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Select the first subcategory when changing categories
    setActiveSubcategory(Object.keys(navigation[category].subcategories)[0]);
  };

  // Get the current component based on active category and subcategory
  const getCurrentComponent = () => {
    const subcategory = navigation[activeCategory].subcategories[activeSubcategory];
    
    // Special handling for database section which has multiple view modes
    if (activeCategory === 'database-compare' && activeSubcategory === 'database') {
      if (databaseViewMode === 'simplified') {
        return <SimplifiedComparison />;
      } else {
        // Pass hideViewSelector=true to prevent showing duplicate view selectors
        return <DatabaseComparison audienceView={databaseViewMode} hideViewSelector={true} />;
      }
    }
    
    // For other sections, just return the regular component
    return subcategory.component;
  };

  // Check if the current section has multiple view modes
  const hasMultipleViews = () => {
    return navigation[activeCategory].subcategories[activeSubcategory].hasMutipleViews;
  };

  return (
    <div className="App bg-gray-50 min-h-screen">
      {/* Primary navigation - Categories */}
      <div className="header-gradient">
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

      {/* View mode selector (only for sections with multiple views) */}
      {hasMultipleViews() && (
        <div className="bg-white py-2 px-6 shadow-sm">
          <div className="flex justify-center w-full max-w-6xl mx-auto">
            <div className="flex space-x-2">
              <button
                onClick={() => setDatabaseViewMode('executive')}
                className={`px-3 py-1 text-sm font-medium rounded ${
                  databaseViewMode === 'executive' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Executive View
              </button>
              <button
                onClick={() => setDatabaseViewMode('technical')}
                className={`px-3 py-1 text-sm font-medium rounded ${
                  databaseViewMode === 'technical' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Technical View
              </button>
              <button
                onClick={() => setDatabaseViewMode('simplified')}
                className={`px-3 py-1 text-sm font-medium rounded ${
                  databaseViewMode === 'simplified' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Simplified View
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Container for component content */}
      <div className="container max-w-6xl mx-auto p-6">
        {getCurrentComponent()}
      </div>
    </div>
  );
}

export default App;