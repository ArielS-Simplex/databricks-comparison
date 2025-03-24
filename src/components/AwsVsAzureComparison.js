import React, { useState } from 'react';
import serviceCategories from '../data/serviceCategories';
import '../styles/buttons.css'; // Add this import

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

  // Animation style helpers (instead of framer-motion variants)
  const getAnimationStyle = (isVisible) => ({
    opacity: isVisible ? 1 : 0,
    transform: `translateY(${isVisible ? 0 : 20}px)`,
    transition: 'opacity 0.3s, transform 0.3s',
  });

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

                  {/* AWS Sub-services */}
                  {isServiceExpanded(idx, 'aws') && category.aws.children.map((child, childIdx) => (
                    <tr key={`aws-child-${idx}-${childIdx}`} className="border-b bg-amber-50/10">
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2 pl-8">
                        <div className="font-medium text-sm">{child.service}</div>
                        <div className="text-xs text-gray-600">{child.description}</div>
                      </td>
                      <td></td>
                    </tr>
                  ))}

                  {/* Azure Sub-services */}
                  {isServiceExpanded(idx, 'azure') && category.azure.children.map((child, childIdx) => (
                    <tr key={`azure-child-${idx}-${childIdx}`} className="border-b bg-blue-50/10">
                      <td className="px-4 py-2"></td>
                      <td></td>
                      <td className="px-4 py-2 pl-8">
                        <div className="font-medium text-sm">{child.service}</div>
                        <div className="text-xs text-gray-600">{child.description}</div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
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

      {/* CSS animation for modal only - removed flowchart specific styles */}
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