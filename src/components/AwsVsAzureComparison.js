import React, { useState } from 'react';
import serviceCategories from '../data/serviceCategories';
import cloudExecutiveSummary from '../data/cloudExecutiveSummary';
import '../styles/buttons.css';

const AwsVsAzureComparison = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [expandedServices, setExpandedServices] = useState({});
  // New state for audience view type (technical vs executive)
  const [audienceView, setAudienceView] = useState('technical');
  // State for selected business priority in executive view
  const [selectedPriority, setSelectedPriority] = useState('all');
  // State for expanded business priority
  const [expandedPriority, setExpandedPriority] = useState(null);
  // State for expanded industry
  const [expandedIndustry, setExpandedIndustry] = useState(null);

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

  // Toggle expansion of a business priority
  const togglePriorityExpansion = (priorityId) => {
    setExpandedPriority(expandedPriority === priorityId ? null : priorityId);
  };

  // Toggle expansion of an industry guidance
  const toggleIndustryExpansion = (industryIndex) => {
    setExpandedIndustry(expandedIndustry === industryIndex ? null : industryIndex);
  };

  // Helper for hover animations
  const getHoverStyle = (e, scale = true) => {
    if (scale) {
      e.currentTarget.style.transform = 'scale(1.02)';
    } else {
      e.currentTarget.style.transform = 'none';
    }
  };

  // Filter business priorities based on selected priority
  const filteredPriorities = selectedPriority === 'all' 
    ? cloudExecutiveSummary.businessPriorities 
    : cloudExecutiveSummary.businessPriorities.filter(priority => priority.id === selectedPriority);

  return (
    <div>
      {/* Header with blue-to-purple gradient */}
      <div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg mb-4 text-center"
      >
        <h1 className="text-3xl font-bold text-white mb-2">AWS vs Azure: Data Engineering Solutions</h1>
        <p className="text-white/80">
          {audienceView === 'technical' ? 
            'Interactive comparison of cloud data processing and Databricks integration' : 
            'Strategic decision framework for cloud platform selection'}
        </p>
      </div>

      {/* Audience View Toggle - Technical vs Executive */}
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow mb-4">
        <h3 className="text-center text-sm font-medium text-gray-700 mb-3">Audience View</h3>
        <div className="flex justify-center">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setAudienceView('technical')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                audienceView === 'technical'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Technical Details
            </button>
            <button
              onClick={() => setAudienceView('executive')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                audienceView === 'executive'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Executive Summary
            </button>
          </div>
        </div>
      </div>

      {/* Conditional content based on selected view */}
      {audienceView === 'technical' ? (
        // TECHNICAL VIEW CONTENT
        <>
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
        </>
      ) : (
        // EXECUTIVE VIEW CONTENT
        <>
          {/* Business Priority Filter */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow mb-4">
            <h3 className="text-center text-sm font-medium text-gray-700 mb-3">Business Priority</h3>
            <div className="flex justify-center flex-wrap gap-2">
              <button 
                onClick={() => setSelectedPriority('all')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${selectedPriority === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                All Priorities
              </button>
              {cloudExecutiveSummary.businessPriorities.map(priority => (
                <button 
                  key={priority.id}
                  onClick={() => setSelectedPriority(priority.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md flex items-center ${
                    selectedPriority === priority.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <span className="mr-1">{priority.icon}</span> {priority.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Executive Dashboard - High Level Comparison */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-4">
            <h2 className="text-xl font-semibold mb-4 text-center">Executive Decision Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="text-lg font-medium text-amber-800 mb-2">AWS Strategic Fit</h3>
                <p className="text-gray-700 mb-4">Best for organizations seeking maximum technical flexibility, specialized services, and granular control over cloud resources.</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="bg-amber-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Higher cost efficiency for high-volume workloads</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-amber-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">More specialized services reducing custom development</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-amber-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Superior data lake and streaming capabilities</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Azure Strategic Fit</h3>
                <p className="text-gray-700 mb-4">Best for Microsoft-centric organizations seeking integrated analytics, simplified operations, and enterprise governance.</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="bg-blue-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Better integration with Microsoft enterprise ecosystem</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Superior integrated analytics platform with Databricks</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-100 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Lower operational overhead for Microsoft-skilled teams</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Databricks-specific comparison */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Databricks Implementation Considerations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-amber-700 mb-2">AWS Databricks</h4>
                  <ul className="text-sm text-gray-700 space-y-1 mb-3">
                    {cloudExecutiveSummary.databricksConsiderations.aws.advantages.map((adv, idx) => (
                      <li key={`aws-adv-${idx}`} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span> {adv}
                      </li>
                    ))}
                  </ul>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {cloudExecutiveSummary.databricksConsiderations.aws.disadvantages.map((disadv, idx) => (
                      <li key={`aws-disadv-${idx}`} className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span> {disadv}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-blue-700 mb-2">Azure Databricks</h4>
                  <ul className="text-sm text-gray-700 space-y-1 mb-3">
                    {cloudExecutiveSummary.databricksConsiderations.azure.advantages.map((adv, idx) => (
                      <li key={`azure-adv-${idx}`} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span> {adv}
                      </li>
                    ))}
                  </ul>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {cloudExecutiveSummary.databricksConsiderations.azure.disadvantages.map((disadv, idx) => (
                      <li key={`azure-disadv-${idx}`} className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span> {disadv}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 italic">Business impact: {cloudExecutiveSummary.databricksConsiderations.azure.businessImpact}</p>
            </div>
          </div>

          {/* Business Priorities Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow mb-4">
            <h2 className="bg-gray-100 font-semibold p-3 text-gray-700">Business Priorities Comparison</h2>
            
            {filteredPriorities.map((priority) => (
              <div key={priority.id} className="border-t border-gray-200">
                <div 
                  className={`flex cursor-pointer hover:bg-gray-50 transition-colors ${expandedPriority === priority.id ? 'bg-blue-50' : ''}`}
                  onClick={() => togglePriorityExpansion(priority.id)}
                >
                  <div className="w-1/4 p-4 font-medium flex items-center">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{priority.icon}</span>
                      <span>{priority.title}</span>
                    </div>
                  </div>
                  
                  <div className="w-1/3 p-4 border-l border-r border-gray-200">
                    <div className="text-sm text-amber-800 font-semibold">AWS</div>
                    <div className="mt-1 text-sm">{priority.aws.summary}</div>
                  </div>
                  
                  <div className="w-1/3 p-4">
                    <div className="text-sm text-blue-800 font-semibold">Azure</div>
                    <div className="mt-1 text-sm">{priority.azure.summary}</div>
                  </div>
                  
                  <div className="flex items-center px-4">
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform ${expandedPriority === priority.id ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {expandedPriority === priority.id && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium mb-2 text-amber-800">AWS Strengths</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {priority.aws.strengths.map((strength, idx) => (
                            <li key={`aws-strength-${idx}`}>{strength}</li>
                          ))}
                        </ul>
                        <div className="mt-3 p-3 bg-amber-50 rounded-lg">
                          <h4 className="font-medium text-amber-800 text-sm">Business Case</h4>
                          <p className="text-sm text-gray-700 mt-1">{priority.aws.businessCase}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2 text-blue-800">Azure Strengths</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {priority.azure.strengths.map((strength, idx) => (
                            <li key={`azure-strength-${idx}`}>{strength}</li>
                          ))}
                        </ul>
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 text-sm">Business Case</h4>
                          <p className="text-sm text-gray-700 mt-1">{priority.azure.businessCase}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Industry Guidance Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow mb-4">
            <h2 className="bg-gray-100 font-semibold p-3 text-gray-700">Industry-Specific Guidance</h2>
            
            {cloudExecutiveSummary.industryGuidance.map((industry, idx) => (
              <div key={`industry-${idx}`} className="border-t border-gray-200">
                <div 
                  className={`flex cursor-pointer hover:bg-gray-50 transition-colors ${expandedIndustry === idx ? 'bg-purple-50' : ''}`}
                  onClick={() => toggleIndustryExpansion(idx)}
                >
                  <div className="w-1/4 p-4 font-medium">
                    {industry.industry}
                  </div>
                  
                  <div className="w-2/3 p-4 border-l border-gray-200">
                    <div className="text-sm text-gray-700">{industry.recommendation}</div>
                  </div>
                  
                  <div className="flex items-center px-4">
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform ${expandedIndustry === idx ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {expandedIndustry === idx && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <h3 className="font-medium mb-2">Key Considerations</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {industry.keyConsiderations.map((consideration, cidx) => (
                        <li key={`consideration-${idx}-${cidx}`}>{consideration}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Cost Structure & Migration Section */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-4">
            <h2 className="text-xl font-semibold mb-4 text-center">Strategic Implementation Considerations</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Cost Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h4 className="font-medium text-amber-800 mb-2">AWS Cost Structure</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-medium">Enterprise Fit:</span> {cloudExecutiveSummary.costProfile.aws.enterpriseFit}</p>
                    <p><span className="font-medium">Optimization Approach:</span> {cloudExecutiveSummary.costProfile.aws.savingsApproach}</p>
                    <p><span className="font-medium">Typical Savings:</span> {cloudExecutiveSummary.costProfile.aws.typicalSavings}</p>
                    <p><span className="font-medium">Hidden Costs:</span> {cloudExecutiveSummary.costProfile.aws.hiddenCosts}</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-medium text-blue-800 mb-2">Azure Cost Structure</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-medium">Enterprise Fit:</span> {cloudExecutiveSummary.costProfile.azure.enterpriseFit}</p>
                    <p><span className="font-medium">Optimization Approach:</span> {cloudExecutiveSummary.costProfile.azure.savingsApproach}</p>
                    <p><span className="font-medium">Typical Savings:</span> {cloudExecutiveSummary.costProfile.azure.typicalSavings}</p>
                    <p><span className="font-medium">Hidden Costs:</span> {cloudExecutiveSummary.costProfile.azure.hiddenCosts}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Migration Considerations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-amber-800 mb-2">AWS Migration Profile</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-medium">Time to Value:</span> {cloudExecutiveSummary.migrationConsiderations.aws.timeToValue}</p>
                    <p><span className="font-medium">Skills Gap:</span> {cloudExecutiveSummary.migrationConsiderations.aws.skillsGap}</p>
                    <p><span className="font-medium">Enterprise Readiness:</span> {cloudExecutiveSummary.migrationConsiderations.aws.enterpriseReadiness}</p>
                    <p><span className="font-medium">Partner Ecosystem:</span> {cloudExecutiveSummary.migrationConsiderations.aws.partnersEcosystem}</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-blue-800 mb-2">Azure Migration Profile</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-medium">Time to Value:</span> {cloudExecutiveSummary.migrationConsiderations.azure.timeToValue}</p>
                    <p><span className="font-medium">Skills Gap:</span> {cloudExecutiveSummary.migrationConsiderations.azure.skillsGap}</p>
                    <p><span className="font-medium">Enterprise Readiness:</span> {cloudExecutiveSummary.migrationConsiderations.azure.enterpriseReadiness}</p>
                    <p><span className="font-medium">Partner Ecosystem:</span> {cloudExecutiveSummary.migrationConsiderations.azure.partnersEcosystem}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

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