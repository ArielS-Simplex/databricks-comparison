import React, { useState } from 'react';
import PageHeader from './common/PageHeader';
import serviceCategories from '../data/serviceCategories';
import cloudExecutiveSummary from '../data/cloudExecutiveSummary';
import '../styles/buttons.css';
import '../styles/common.css';

const AwsVsAzureComparison = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [expandedServices, setExpandedServices] = useState({});
  // New state for audience view type (technical vs executive)
  const [audienceView, setAudienceView] = useState('executive');
  // State for selected business priority in executive view
  const [selectedPriority, setSelectedPriority] = useState('all');

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

  // Filter business priorities based on selected priority
  const filteredPriorities = selectedPriority === 'all' 
    ? cloudExecutiveSummary.businessPriorities 
    : cloudExecutiveSummary.businessPriorities.filter(priority => priority.id === selectedPriority);

  return (
    <div>
      <PageHeader 
        title="AWS vs Azure: Data Engineering Solutions" 
        subtitle={audienceView === 'technical' ? 
          'Interactive comparison of cloud data processing and Databricks integration' : 
          'Strategic decision framework for cloud platform selection'} 
      />

      {/* Audience View Toggle - Technical vs Executive */}
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow mb-4">
        <h3 className="text-center text-sm font-medium text-gray-700 mb-3">Audience View</h3>
        <div className="flex justify-center">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
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
          </div>
        </div>
      </div>

      {/* Conditional content based on selected view */}
      {audienceView === 'technical' ? (
        // STREAMLINED TECHNICAL VIEW - Focused on Key Differences Only
        <>
          {/* Core Platform Comparison - Most Important */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">Key Technical Differences</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="text-lg font-medium text-amber-800 mb-3">🔶 AWS Strengths</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Market leadership:</strong> Most mature cloud platform with broadest service portfolio</li>
                  <li><strong>Data lakes:</strong> Superior S3 integration, Lake Formation, and Glue ecosystem</li>
                  <li><strong>Serverless:</strong> Advanced Lambda, Step Functions for event-driven architectures</li>
                  <li><strong>Global reach:</strong> Most regions and availability zones worldwide</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-medium text-blue-800 mb-3">🔷 Azure Strengths</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Microsoft ecosystem:</strong> Native integration with Office 365, Power BI, Teams</li>
                  <li><strong>Databricks optimization:</strong> Co-engineered platform with better performance</li>
                  <li><strong>Enterprise identity:</strong> Seamless Active Directory and hybrid cloud integration</li>
                  <li><strong>Cost efficiency:</strong> Often 20-30% lower costs for equivalent workloads</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Decision Framework for Technical Teams */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-center">Technical Decision Framework</h2>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3 text-amber-700">Choose AWS when:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>Building complex, multi-cloud data architectures</li>
                    <li>Need specialized ML/AI services (SageMaker ecosystem)</li>
                    <li>Heavy use of serverless and event-driven patterns</li>
                    <li>Existing AWS infrastructure and team expertise</li>
                    <li>Require maximum service flexibility and vendor choice</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3 text-blue-700">Choose Azure when:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>Heavy Microsoft ecosystem integration (Office, Teams, etc.)</li>
                    <li>Databricks is your primary analytics platform</li>
                    <li>Enterprise with existing Active Directory infrastructure</li>
                    <li>Cost optimization is a primary concern</li>
                    <li>Need strong hybrid cloud capabilities</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 bg-white p-4 rounded border border-gray-200">
                <p className="text-sm text-gray-600"><strong>For Nuvei specifically:</strong> Azure likely optimal due to existing Databricks usage, Microsoft ecosystem integration needs, and cost efficiency requirements for payment processing scale.</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        // EXECUTIVE VIEW CONTENT
        <>
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