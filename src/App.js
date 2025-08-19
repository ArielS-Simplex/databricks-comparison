import React, { useState, useEffect } from 'react';
import AzureDatabricksInfraDetail from './components/AzureDatabricksInfra';
import SimplifiedComparison from './components/SimplifiedComparison';
import NuveiDecisionGuide from './components/NuveiDecisionGuide';
import ArchitectureOverview from './components/ArchitectureOverview';
import SnowflakeArchitecture from './components/SnowflakeArchitecture';
import FabricArchitecture from './components/FabricArchitecture';
import ROICalculator from './components/ROICalculator';
import PerformanceBenchmarks from './components/PerformanceBenchmarks';
import FeatureComparison from './components/FeatureComparison';
import CaseStudyLibrary from './components/CaseStudyLibrary';
import GlobalSearch from './components/GlobalSearch';
import './App.css';
import './styles/common.css'; // Import common styles
import './styles/buttons.css'; // Import button styles

function App() {
  // State to track active primary category and subcategory
  const [activeCategory, setActiveCategory] = useState('nuvei-migration');
  const [activeSubcategory, setActiveSubcategory] = useState('guide');
  const [databaseViewMode, setDatabaseViewMode] = useState('simplified');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Navigation structure with categories and subcategories
  const navigation = {
    'nuvei-migration': {
      label: 'Nuvei Migration Guide',
      subcategories: {
        'guide': {
          label: 'Migration Strategy & Timeline',
          component: <NuveiDecisionGuide />
        },
        'overview': {
          label: 'Project Overview',
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
          label: 'Cost Comparison',
          component: <ROICalculator />
        },
        'performance': {
          label: 'Performance Benchmarks',
          component: <PerformanceBenchmarks />
        },
        'features': {
          label: 'Feature Comparison',
          component: <FeatureComparison />
        },
        'case-studies': {
          label: 'Case Study Library',
          component: <CaseStudyLibrary />
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

  const handleSearchNavigate = (category, subcategory) => {
    setActiveCategory(category);
    setActiveSubcategory(subcategory);
    setOpenDropdown(null);
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Cmd/Ctrl + K to open search
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
      // Escape to close search
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

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
      {/* Main Navigation Menu with Dropdowns */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">Analytics Platform Guide</h1>
            
            {/* Search Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search</span>
                <kbd className="hidden sm:inline-block px-2 py-1 text-xs bg-gray-100 rounded border">⌘K</kbd>
              </button>
            </div>
            
            {/* Dropdown Navigation */}
            <div className="flex items-center space-x-1">
              {Object.entries(navigation).map(([categoryKey, category]) => {
                const hasMultipleSubcategories = Object.keys(category.subcategories).length > 1;
                
                return (
                  <div key={categoryKey} className="relative">
                    <button
                      onClick={() => {
                        if (hasMultipleSubcategories) {
                          setOpenDropdown(openDropdown === categoryKey ? null : categoryKey);
                        } else {
                          // Navigate directly if only one subcategory
                          const firstSubcategoryKey = Object.keys(category.subcategories)[0];
                          setActiveCategory(categoryKey);
                          setActiveSubcategory(firstSubcategoryKey);
                          setOpenDropdown(null);
                        }
                      }}
                      className={`flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors ${
                        activeCategory === categoryKey ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
                      }`}
                    >
                      {category.label}
                      {hasMultipleSubcategories && (
                        <svg className={`ml-1 h-4 w-4 transition-transform ${openDropdown === categoryKey ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                  
                  {/* Dropdown Menu */}
                  {openDropdown === categoryKey && (
                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                      {Object.entries(category.subcategories).map(([subcategoryKey, subcategory]) => (
                        <button
                          key={subcategoryKey}
                          onClick={() => {
                            setActiveCategory(categoryKey);
                            setActiveSubcategory(subcategoryKey);
                            setOpenDropdown(null);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors ${
                            activeCategory === categoryKey && activeSubcategory === subcategoryKey
                              ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                              : 'text-gray-700'
                          }`}
                        >
                          <div className="font-medium">{subcategory.label}</div>
                          {subcategoryKey === 'roi-calculator' && (
                            <div className="text-xs text-gray-500 mt-1">Cloud platform cost comparison</div>
                          )}
                          {subcategoryKey === 'performance' && (
                            <div className="text-xs text-gray-500 mt-1">Performance benchmarks & metrics</div>
                          )}
                          {subcategoryKey === 'features' && (
                            <div className="text-xs text-gray-500 mt-1">Feature-by-feature comparison</div>
                          )}
                          {subcategoryKey === 'case-studies' && (
                            <div className="text-xs text-gray-500 mt-1">Real implementation examples</div>
                          )}
                          {subcategoryKey === 'platforms' && (
                            <div className="text-xs text-gray-500 mt-1">Side-by-side platform comparison</div>
                          )}
                          {subcategoryKey === 'guide' && (
                            <div className="text-xs text-gray-500 mt-1">Step-by-step migration guidance</div>
                          )}
                          {subcategoryKey === 'overview' && (
                            <div className="text-xs text-gray-500 mt-1">High-level architecture comparison</div>
                          )}
                          {subcategoryKey === 'databricks' && (
                            <div className="text-xs text-gray-500 mt-1">Databricks technical details</div>
                          )}
                          {subcategoryKey === 'snowflake' && (
                            <div className="text-xs text-gray-500 mt-1">Snowflake technical details</div>
                          )}
                          {subcategoryKey === 'fabric' && (
                            <div className="text-xs text-gray-500 mt-1">Microsoft Fabric technical details</div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Section Navigation */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="flex justify-center w-full max-w-6xl mx-auto flex-wrap">
          {Object.entries(navigation).map(([category, { label }]) => (
            <button 
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setActiveSubcategory(Object.keys(navigation[category].subcategories)[0]);
                setOpenDropdown(null);
              }} 
              className={`px-6 py-4 text-white font-medium transition-all duration-200 border-b-2 hover:bg-white/10 ${
                activeCategory === category 
                  ? 'border-white bg-white/20' 
                  : 'border-transparent'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Page Title Banner */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-lg font-semibold text-gray-800">
            {navigation[activeCategory].subcategories[activeSubcategory].label}
          </h2>
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

      {/* Global Search Modal */}
      {isSearchOpen && (
        <GlobalSearch
          onClose={() => setIsSearchOpen(false)}
          onNavigate={handleSearchNavigate}
        />
      )}
    </div>
  );
}

export default App;