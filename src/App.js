import React, { useState } from 'react';
import AzureDatabricksInfraDetail from './components/AzureDatabricksInfra';
import SimplifiedComparison from './components/SimplifiedComparison';
import NuveiDecisionGuide from './components/NuveiDecisionGuide';
import ArchitectureOverview from './components/ArchitectureOverview';
import SnowflakeArchitecture from './components/SnowflakeArchitecture';
import FabricArchitecture from './components/FabricArchitecture';
import ROICalculator from './components/ROICalculator';
import PerformanceBenchmarks from './components/PerformanceBenchmarks';
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
        },
        'roi-calculator': {
          label: 'ROI Calculator',
          component: <ROICalculator />
        },
        'performance': {
          label: 'Performance Benchmarks',
          component: <PerformanceBenchmarks />
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
      {/* Quick Navigation Menu */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-800">Analytics Platform Guide</h1>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-gray-500">Quick Access:</span>
              {/* Migration Guide */}
              <button 
                onClick={() => {setActiveCategory('nuvei-migration'); setActiveSubcategory('guide');}}
                className={`px-2 py-1 rounded text-xs hover:bg-blue-50 hover:text-blue-700 ${
                  activeCategory === 'nuvei-migration' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'
                }`}
              >
                Migration Guide
              </button>
              {/* Platform Comparison */}
              <button 
                onClick={() => {setActiveCategory('platform-compare'); setActiveSubcategory('platforms');}}
                className={`px-2 py-1 rounded text-xs hover:bg-blue-50 hover:text-blue-700 ${
                  activeCategory === 'platform-compare' && activeSubcategory === 'platforms' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'
                }`}
              >
                Platform Comparison
              </button>
              {/* ROI Calculator */}
              <button 
                onClick={() => {setActiveCategory('platform-compare'); setActiveSubcategory('roi-calculator');}}
                className={`px-2 py-1 rounded text-xs hover:bg-blue-50 hover:text-blue-700 ${
                  activeCategory === 'platform-compare' && activeSubcategory === 'roi-calculator' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'
                }`}
              >
                ROI Calculator
              </button>
              {/* Performance Benchmarks */}
              <button 
                onClick={() => {setActiveCategory('platform-compare'); setActiveSubcategory('performance');}}
                className={`px-2 py-1 rounded text-xs hover:bg-blue-50 hover:text-blue-700 ${
                  activeCategory === 'platform-compare' && activeSubcategory === 'performance' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'
                }`}
              >
                Performance Benchmarks
              </button>
              {/* Architecture */}
              <button 
                onClick={() => {setActiveCategory('architecture'); setActiveSubcategory('overview');}}
                className={`px-2 py-1 rounded text-xs hover:bg-blue-50 hover:text-blue-700 ${
                  activeCategory === 'architecture' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'
                }`}
              >
                Architecture
              </button>
            </div>
          </div>
        </div>
      </div>

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
              className={`px-4 py-2 mx-1 text-sm font-medium rounded-md transition-all duration-200 border ${
                activeSubcategory === subcategory 
                  ? 'bg-white shadow text-blue-600 border-blue-200' 
                  : 'text-gray-800 hover:text-blue-700 hover:bg-blue-50 border-transparent hover:border-blue-200'
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