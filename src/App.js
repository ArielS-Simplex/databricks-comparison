import React, { useState } from 'react';
import AzureDatabricksInfraDetail from './components/AzureDatabricksInfra';
import SimplifiedComparison from './components/SimplifiedComparison';
import NuveiDecisionGuide from './components/NuveiDecisionGuide';
import ArchitectureOverview from './components/ArchitectureOverview';
import SnowflakeArchitecture from './components/SnowflakeArchitecture';
import FabricArchitecture from './components/FabricArchitecture';
import './App.css';
import './styles/common.css'; // Import common styles
import './styles/buttons.css'; // Import button styles

function App() {
  // State to track active primary category and subcategory
  const [activeCategory, setActiveCategory] = useState('nuvei-migration');
  const [activeSubcategory, setActiveSubcategory] = useState('guide');
  const [databaseViewMode, setDatabaseViewMode] = useState('simplified');

  // Navigation structure with categories and subcategories
  const navigation = {
    'nuvei-migration': {
      label: 'Nuvei Migration Guide',
      subcategories: {
        'guide': {
          label: 'Data Platform Migration Guide',
          component: <NuveiDecisionGuide />
        }
      }
    },
    'platform-compare': {
      label: 'Analytics Platform Comparison',
      subcategories: {
        'platforms': { 
          label: 'Databricks vs Snowflake vs Microsoft Fabric',
          // Everything is now in SimplifiedComparison with tabs
          hasMutipleViews: false
        }
      }
    },
    'architecture': {
      label: 'Technical Architecture',
      subcategories: {
        'overview': {
          label: 'Architecture Overview',
          component: <ArchitectureOverview />
        },
        'snowflake': {
          label: 'Snowflake Architecture',
          component: <SnowflakeArchitecture />
        },
        'databricks': { 
          label: 'Databricks Architecture', 
          component: <AzureDatabricksInfraDetail />
        },
        'fabric': {
          label: 'Microsoft Fabric Architecture',
          component: <FabricArchitecture />
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
    
    // Special handling for platform section - always use SimplifiedComparison
    if (activeCategory === 'platform-compare' && activeSubcategory === 'platforms') {
      return <SimplifiedComparison />;
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