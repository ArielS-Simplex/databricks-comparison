import React, { useState } from 'react';

const CaseStudyLibrary = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: "Financial Services: Real-time Fraud Detection",
      company: "Global Bank",
      industry: "financial",
      platform: "databricks",
      useCase: "Real-time fraud detection using ML models",
      challenge: "Process millions of transactions per day with sub-second fraud detection",
      solution: "Databricks lakehouse with streaming analytics and MLflow for model deployment",
      results: {
        improvement: "40% reduction in false positives",
        performance: "99.9% uptime",
        cost: "25% cost reduction vs previous solution"
      },
      technologies: ["Apache Spark", "Delta Lake", "MLflow", "Kafka"],
      timeline: "6 months implementation",
      teamSize: "12 data engineers, 8 data scientists",
      dataVolume: "50TB daily transaction data"
    },
    {
      id: 2,
      title: "Retail: Customer 360 Analytics Platform",
      company: "E-commerce Giant",
      industry: "retail",
      platform: "snowflake",
      useCase: "Unified customer data platform for personalization",
      challenge: "Integrate customer data from 20+ sources for real-time personalization",
      solution: "Snowflake data cloud with automated data sharing and Snowpark for ML",
      results: {
        improvement: "30% increase in customer engagement",
        performance: "Real-time data access across regions",
        cost: "15% reduction in data infrastructure costs"
      },
      technologies: ["Snowflake", "Fivetran", "dbt", "Tableau"],
      timeline: "8 months implementation",
      teamSize: "15 data engineers, 6 analysts",
      dataVolume: "100TB customer interaction data"
    },
    {
      id: 3,
      title: "Manufacturing: Predictive Maintenance Platform",
      company: "Auto Manufacturer",
      industry: "manufacturing",
      platform: "fabric",
      useCase: "IoT-driven predictive maintenance for production lines",
      challenge: "Predict equipment failures before they occur to minimize downtime",
      solution: "Microsoft Fabric with IoT Hub integration and Power BI dashboards",
      results: {
        improvement: "50% reduction in unplanned downtime",
        performance: "Real-time equipment monitoring",
        cost: "20% reduction in maintenance costs"
      },
      technologies: ["Microsoft Fabric", "Azure IoT Hub", "Power BI", "Azure ML"],
      timeline: "4 months implementation",
      teamSize: "10 engineers, 5 data scientists",
      dataVolume: "5TB daily IoT sensor data"
    },
    {
      id: 4,
      title: "Healthcare: Clinical Data Analytics",
      company: "Healthcare Network",
      industry: "healthcare",
      platform: "databricks",
      useCase: "Population health analytics and clinical insights",
      challenge: "Analyze patient data across multiple hospitals while maintaining compliance",
      solution: "Databricks Unity Catalog with HIPAA-compliant data governance",
      results: {
        improvement: "35% improvement in patient outcomes",
        performance: "Secure multi-tenant analytics",
        cost: "30% reduction in analytics infrastructure costs"
      },
      technologies: ["Databricks", "Unity Catalog", "Apache Spark", "Delta Lake"],
      timeline: "10 months implementation",
      teamSize: "8 data engineers, 12 clinical analysts",
      dataVolume: "200TB clinical and genomics data"
    },
    {
      id: 5,
      title: "Media: Content Recommendation Engine",
      company: "Streaming Service",
      industry: "media",
      platform: "snowflake",
      useCase: "Personalized content recommendations at scale",
      challenge: "Deliver personalized recommendations to 100M+ users in real-time",
      solution: "Snowflake with external functions and partner ecosystem integration",
      results: {
        improvement: "45% increase in user engagement",
        performance: "Sub-100ms recommendation response time",
        cost: "35% cost optimization through auto-scaling"
      },
      technologies: ["Snowflake", "AWS Lambda", "Redis", "Apache Kafka"],
      timeline: "5 months implementation",
      teamSize: "20 engineers, 8 data scientists",
      dataVolume: "80TB daily user behavior data"
    },
    {
      id: 6,
      title: "Energy: Smart Grid Analytics",
      company: "Utility Provider",
      industry: "energy",
      platform: "fabric",
      useCase: "Smart grid optimization and demand forecasting",
      challenge: "Optimize energy distribution and predict demand across the grid",
      solution: "Microsoft Fabric with real-time analytics and Power BI reporting",
      results: {
        improvement: "25% improvement in grid efficiency",
        performance: "Real-time demand forecasting",
        cost: "18% reduction in operational costs"
      },
      technologies: ["Microsoft Fabric", "Azure Stream Analytics", "Power BI", "Azure Digital Twins"],
      timeline: "7 months implementation",
      teamSize: "14 engineers, 6 analysts",
      dataVolume: "30TB daily grid sensor data"
    }
  ];

  const industries = [
    { key: 'all', name: 'All Industries' },
    { key: 'financial', name: 'Financial Services' },
    { key: 'retail', name: 'Retail & E-commerce' },
    { key: 'manufacturing', name: 'Manufacturing' },
    { key: 'healthcare', name: 'Healthcare' },
    { key: 'media', name: 'Media & Entertainment' },
    { key: 'energy', name: 'Energy & Utilities' }
  ];

  const platforms = [
    { key: 'all', name: 'All Platforms' },
    { key: 'databricks', name: 'Databricks', color: 'bg-purple-600' },
    { key: 'snowflake', name: 'Snowflake', color: 'bg-cyan-500' },
    { key: 'fabric', name: 'Microsoft Fabric', color: 'bg-blue-600' }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const platformMatch = selectedPlatform === 'all' || study.platform === selectedPlatform;
    return industryMatch && platformMatch;
  });

  const getPlatformIcon = (platform) => {
    const colors = {
      databricks: 'bg-purple-600',
      snowflake: 'bg-cyan-500',
      fabric: 'bg-blue-600'
    };
    return colors[platform] || 'bg-gray-600';
  };

  const getPlatformName = (platform) => {
    const names = {
      databricks: 'Databricks',
      snowflake: 'Snowflake',
      fabric: 'Microsoft Fabric'
    };
    return names[platform] || platform;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Case Study Library</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Real-world implementation examples and success stories across industries and platforms
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Industry Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Filter by Industry</label>
            <div className="flex flex-wrap gap-2">
              {industries.map(industry => (
                <button
                  key={industry.key}
                  onClick={() => setSelectedIndustry(industry.key)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedIndustry === industry.key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>
          </div>

          {/* Platform Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Filter by Platform</label>
            <div className="flex flex-wrap gap-2">
              {platforms.map(platform => (
                <button
                  key={platform.key}
                  onClick={() => setSelectedPlatform(platform.key)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    selectedPlatform === platform.key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {platform.color && (
                    <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
                  )}
                  <span>{platform.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium">{filteredCaseStudies.length}</span> case studies
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {filteredCaseStudies.map(study => (
          <div key={study.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{study.title}</h3>
                  <p className="text-blue-100">{study.company}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full ${getPlatformIcon(study.platform)}`}></div>
                  <span className="text-white text-sm font-medium">{getPlatformName(study.platform)}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Use Case */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Use Case</h4>
                <p className="text-gray-600 text-sm">{study.useCase}</p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{study.results.improvement}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{study.results.performance}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{study.results.cost}</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {study.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 gap-2 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Timeline:</span>
                    <span className="font-medium">{study.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Size:</span>
                    <span className="font-medium">{study.teamSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data Volume:</span>
                    <span className="font-medium">{study.dataVolume}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCaseStudies.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No case studies found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more results.</p>
        </div>
      )}

      {/* Summary Statistics */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Case Study Insights</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{caseStudies.length}</div>
            <div className="text-sm text-gray-600">Total Case Studies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">6</div>
            <div className="text-sm text-gray-600">Industries Covered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
            <div className="text-sm text-gray-600">Platform Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">30%</div>
            <div className="text-sm text-gray-600">Avg Cost Reduction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyLibrary;