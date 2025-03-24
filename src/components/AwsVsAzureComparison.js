import React, { useState } from 'react';
import serviceCategories from '../data/serviceCategories';
import '../styles/buttons.css';

const AwsVsAzureComparison = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [expandedServices, setExpandedServices] = useState({});

  // Toggle expansion of a service category
  const toggleServiceExpansion = (categoryIndex, cloud) => {
    const key = `${cloud}-${categoryIndex}`;
    setExpandedServices(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Check if a service is expanded
  const isServiceExpanded = (categoryIndex, cloud) => {
    const key = `${cloud}-${categoryIndex}`;
    return !!expandedServices[key];
  };

  // Helper for hover animations
  const getHoverStyle = (e, scale = true) => {
    if (scale) {
      e.currentTarget.style.transform = 'scale(1.02)';
    } else {
      e.currentTarget.style.transform = 'none';
    }
  };

  return (
    <div>
      {/* Header with blue-to-purple gradient */}
      <div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg mb-4 text-center"
      >
        <h1 className="text-3xl font-bold text-white mb-2">AWS vs Azure: Data Engineering Solutions</h1>
        <p className="text-white/80">Interactive comparison of cloud data processing and Databricks integration</p>
      </div>

      {/* Services Comparison Table */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Cloud Services Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 text-left">Category</th>
                <th className="px-4 py-2 border-b-2 text-left bg-amber-50">AWS Services</th>
                <th className="px-4 py-2 border-b-2 text-left bg-blue-50">Azure Services</th>
              </tr>
            </thead>
            <tbody>
              {serviceCategories.map((category, idx) => (
                <React.Fragment key={`category-${idx}`}>
                  {/* Category row */}
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{category.category}</td>
                    
                    {/* AWS Service */}
                    <td className="px-4 py-3 bg-amber-50/30">
                      {category.aws.parent ? (
                        <div 
                          className="cursor-pointer flex justify-between items-center"
                          onClick={() => category.aws.children.length > 0 && toggleServiceExpansion(idx, 'aws')}
                        >
                          <div>
                            <div className="font-semibold text-amber-800">{category.aws.parent.service}</div>
                            <div className="text-xs text-gray-600">{category.aws.parent.description}</div>
                          </div>
                          {category.aws.children.length > 0 && (
                            <span className="text-amber-600">
                              {isServiceExpanded(idx, 'aws') ? '▼' : '▶'}
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="text-gray-400 italic">No equivalent service</div>
                      )}
                    </td>
                    
                    {/* Azure Service */}
                    <td className="px-4 py-3 bg-blue-50/30">
                      {category.azure.parent ? (
                        <div 
                          className="cursor-pointer flex justify-between items-center"
                          onClick={() => category.azure.children.length > 0 && toggleServiceExpansion(idx, 'azure')}
                        >
                          <div>
                            <div className="font-semibold text-blue-800">{category.azure.parent.service}</div>
                            <div className="text-xs text-gray-600">{category.azure.parent.description}</div>
                          </div>
                          {category.azure.children.length > 0 && (
                            <span className="text-blue-600">
                              {isServiceExpanded(idx, 'azure') ? '▼' : '▶'}
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="text-gray-400 italic">No equivalent service</div>
                      )}
                    </td>
                  </tr>

                  {/* FIXED: Render child services in aligned pairs */}
                  {(isServiceExpanded(idx, 'aws') || isServiceExpanded(idx, 'azure')) && 
                    Array.from({ length: Math.max(
                      isServiceExpanded(idx, 'aws') ? category.aws.children.length : 0,
                      isServiceExpanded(idx, 'azure') ? category.azure.children.length : 0
                    )}).map((_, childIdx) => (
                      <tr key={`child-row-${idx}-${childIdx}`} className="border-b">
                        <td className="px-4 py-2"></td>
                        
                        {/* AWS Child */}
                        <td className={`px-4 py-2 ${isServiceExpanded(idx, 'aws') ? 'bg-amber-50/10' : ''}`}>
                          {isServiceExpanded(idx, 'aws') && childIdx < category.aws.children.length ? (
                            <div className="pl-8">
                              <div className="font-medium text-sm">{category.aws.children[childIdx].service}</div>
                              <div className="text-xs text-gray-600">{category.aws.children[childIdx].description}</div>
                            </div>
                          ) : null}
                        </td>
                        
                        {/* Azure Child */}
                        <td className={`px-4 py-2 ${isServiceExpanded(idx, 'azure') ? 'bg-blue-50/10' : ''}`}>
                          {isServiceExpanded(idx, 'azure') && childIdx < category.azure.children.length ? (
                            <div className="pl-8">
                              <div className="font-medium text-sm">{category.azure.children[childIdx].service}</div>
                              <div className="text-xs text-gray-600">{category.azure.children[childIdx].description}</div>
                            </div>
                          ) : null}
                        </td>
                      </tr>
                    ))
                  }
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Service Categories Summary Cards */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Platform Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h3 className="text-lg font-medium text-amber-800 mb-2">AWS Advantages</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Greater market share and longer history in cloud services</li>
              <li>More granular services with specialized capabilities</li>
              <li>Extremely broad global infrastructure</li>
              <li>Deep integration with data lake technologies</li>
              <li>Strong serverless computing options (Lambda, Step Functions)</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Azure Advantages</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Tighter integration with Microsoft ecosystem</li>
              <li>Native Databricks integration and optimization</li>
              <li>Stronger enterprise identity management with Entra ID</li>
              <li>More comprehensive hybrid cloud options</li>
              <li>Power BI integration for business analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Selection guidance */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">Selection Guidance</h2>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-medium mb-2">How to Choose Between AWS and Azure</h3>
          <p className="text-gray-700 mb-3">When selecting between AWS and Azure for data engineering workloads, consider these factors:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Existing organizational expertise and investments</li>
            <li>Integration requirements with other systems</li>
            <li>Specific features needed for your data pipeline</li>
            <li>Geographic availability in your target regions</li>
            <li>Cost structure and pricing models</li>
            <li>Compliance and governance requirements</li>
          </ul>
          <p className="mt-3 text-gray-700">For Databricks-centric workflows, Azure offers more seamless integration, while AWS provides greater flexibility with third-party tools and services.</p>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" 
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white p-6 rounded-lg max-w-md"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'scaleIn 0.2s ease-out' }}
          >
            <h3 className="text-xl font-semibold mb-2">{selectedService.service}</h3>
            <p className="text-gray-600">{selectedService.description}</p>
            <p className="text-sm text-gray-500 mt-2">Category: {selectedService.category}</p>
            <button
              className="mt-4 btn btn-gradient"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CSS animation for modal */}
      <style jsx>{`
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default AwsVsAzureComparison;