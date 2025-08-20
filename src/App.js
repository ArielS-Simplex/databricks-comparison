import React, { useState } from 'react';
import SimplifiedComparison from './components/SimplifiedComparison';
import ROICalculator from './components/ROICalculator';
import PerformanceBenchmarks from './components/PerformanceBenchmarks';
import FeatureComparison from './components/FeatureComparison';
import AzureDatabricksInfraDetail from './components/AzureDatabricksInfra';
import './App.css';
import './styles/common.css';
import './styles/buttons.css';

function App() {
  const [activeSection, setActiveSection] = useState('comparison');

  // Streamlined executive-focused sections
  const sections = {
    'comparison': {
      label: 'Platform Overview',
      icon: '📊',
      component: <SimplifiedComparison />
    },
    'costs': {
      label: 'Cost Analysis',
      icon: '💰',
      component: <ROICalculator />
    },
    'performance': {
      label: 'Performance',
      icon: '⚡',
      component: <PerformanceBenchmarks />
    },
    'features': {
      label: 'Features',
      icon: '✅',
      component: <FeatureComparison />
    },
    'architecture': {
      label: 'Technical Details',
      icon: '🔧',
      component: <AzureDatabricksInfraDetail />
    }
  };



  // Get current component - simplified
  const getCurrentComponent = () => {
    return sections[activeSection].component;
  };

  return (
    <div className="App bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Professional Executive Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-white mb-2">Analytics Platform Comparison</h1>
            <p className="text-blue-100 text-lg">Executive Decision Framework for Modern Data Platforms</p>
          </div>
          
          {/* Clean Navigation Tabs */}
          <div className="flex justify-center gap-2 flex-wrap">
            {Object.entries(sections).map(([sectionKey, { label, icon }]) => (
              <button 
                key={sectionKey}
                onClick={() => setActiveSection(sectionKey)} 
                className={`px-6 py-3 rounded-t-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeSection === sectionKey 
                    ? 'bg-white text-blue-800 shadow-lg transform -translate-y-1' 
                    : 'bg-blue-800/30 text-white hover:bg-blue-700/40 backdrop-blur-sm'
                }`}
              >
                <span className="text-xl">{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content Area with Better Styling */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-white rounded-xl shadow-xl p-8">
          {getCurrentComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;