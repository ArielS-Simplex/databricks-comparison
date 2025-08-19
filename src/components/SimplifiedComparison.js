import React, { useState } from 'react';
import '../styles/buttons.css';

const SimplifiedComparison = () => {
  const [activeTab, setActiveTab] = useState('plain-english');

  // Simple tab switching
  const tabs = [
    { id: 'plain-english', label: 'Plain English' },
    { id: 'when-to-choose', label: 'When to Choose' },
    { id: 'executive', label: 'Executive View' },
    { id: 'technical', label: 'Technical View' },
    { id: 'budget', label: 'Budget Impact' }
  ];

  return (
    <div>
      {/* Header with blue-to-purple gradient */}
      <div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg mb-4 text-center"
      >
        <h1 className="text-3xl font-bold text-white mb-2">
          Analytics Platform Comparison: Simplified
        </h1>
        <p className="text-white/80">Databricks vs Snowflake vs Microsoft Fabric - without the technical complexity</p>
      </div>

      {/* Simple tabs */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content container */}
      <div className="bg-white rounded-lg shadow-md p-6">
        
        {/* IN PLAIN ENGLISH TAB */}
        {activeTab === 'plain-english' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Databricks */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-3">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-purple-800">Databricks</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  <span className="font-medium">It's like:</span> A research lab with powerful tools for scientists
                </p>
                <p className="text-gray-700 mb-4">
                  Databricks is built for analyzing huge amounts of data and building AI/machine learning models. It organizes your data in what's called a "lakehouse" (combining the best parts of data warehouses and data lakes). It's particularly good for data scientists who want to discover insights and build predictive models.
                </p>
                <div className="bg-white p-3 rounded border border-purple-100">
                  <p className="text-sm font-medium text-purple-800 mb-1">In one sentence:</p>
                  <p className="text-sm text-gray-700">
                    "A platform for analyzing massive datasets and building AI/ML models with a unified approach to data."
                  </p>
                </div>
              </div>
              
              {/* Snowflake */}
              <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-100">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 rounded-full p-3 mr-3">
                    <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-cyan-800">Snowflake</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  <span className="font-medium">It's like:</span> A self-driving car that adjusts to traffic automatically
                </p>
                <p className="text-gray-700 mb-4">
                  Snowflake is a cloud data warehouse built for simplicity. It automatically handles scaling up or down based on your needs. It's particularly good at running lots of queries at the same time from different teams. It makes sharing data between departments or even with external partners really easy.
                </p>
                <div className="bg-white p-3 rounded border border-cyan-100">
                  <p className="text-sm font-medium text-cyan-800 mb-1">In one sentence:</p>
                  <p className="text-sm text-gray-700">
                    "A cloud data warehouse that automatically scales and makes it easy to share and analyze data."
                  </p>
                </div>
              </div>

              {/* Microsoft Fabric */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-green-800">Microsoft Fabric</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  <span className="font-medium">It's like:</span> An all-in-one smart home system that connects everything
                </p>
                <p className="text-gray-700 mb-4">
                  Microsoft Fabric is Microsoft's newest unified analytics platform. It combines data warehousing, data lakes, data engineering, and business intelligence all in one place. It integrates deeply with Power BI and other Microsoft tools, making it ideal for organizations already using Microsoft's ecosystem.
                </p>
                <div className="bg-white p-3 rounded border border-green-100">
                  <p className="text-sm font-medium text-green-800 mb-1">In one sentence:</p>
                  <p className="text-sm text-gray-700">
                    "Microsoft's all-in-one data platform that connects seamlessly with Office 365 and Power BI."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
              <p className="text-gray-600 text-sm">Think of the viable platforms like different tools:</p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Databricks = Research Laboratory</div>
                <div className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Snowflake = Self-Driving Car</div>
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Fabric = Smart Home System</div>
              </div>
            </div>
          </div>
        )}
        
        {/* WHEN TO CHOOSE TAB */}
        {activeTab === 'when-to-choose' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* When to choose Databricks */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-purple-800">Choose Databricks When...</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You want to build AI and machine learning models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You need to process massive amounts of data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Your team includes data scientists who need flexible tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You want to combine data lake storage with warehouse capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You need support for multiple programming languages (Python, SQL, R, etc.)</span>
                  </li>
                </ul>
                <div className="mt-4 bg-purple-50 p-3 rounded border border-purple-100">
                  <p className="text-sm text-purple-800 font-medium">Perfect for:</p>
                  <p className="text-sm text-gray-700">Recommendation engines, fraud detection systems, predictive maintenance, customer segmentation</p>
                </div>
              </div>
              
              {/* When to choose Snowflake */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-cyan-800">Choose Snowflake When...</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You need minimal administration and automatic scaling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You want to share data easily between departments or partners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You need to support many users running queries simultaneously</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You want pay-as-you-go pricing with no minimum commitments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Your workloads are unpredictable with peaks and valleys</span>
                  </li>
                </ul>
                <div className="mt-4 bg-cyan-50 p-3 rounded border border-cyan-100">
                  <p className="text-sm text-cyan-800 font-medium">Perfect for:</p>
                  <p className="text-sm text-gray-700">Business intelligence, cross-department analytics, data marketplaces, reporting dashboards</p>
                </div>
              </div>

              {/* When to choose Microsoft Fabric */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-green-800">Choose Microsoft Fabric When...</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You're already heavily invested in Microsoft ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You use Power BI extensively for business intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You want unified data platform with integrated tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You need tight integration with Office 365 and Teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You prefer capacity-based pricing for predictable costs</span>
                  </li>
                </ul>
                <div className="mt-4 bg-green-50 p-3 rounded border border-green-100">
                  <p className="text-sm text-green-800 font-medium">Perfect for:</p>
                  <p className="text-sm text-gray-700">Microsoft-centric organizations, Power BI users, unified analytics platform needs</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-yellow-800">Quick Decision Guide</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span role="img" aria-label="Light bulb">💡</span> <span className="font-medium">If you're building AI/ML models</span> → Databricks</li>
                <li><span role="img" aria-label="Light bulb">💡</span> <span className="font-medium">If you need simple analytics with minimal management</span> → Snowflake</li>
                <li><span role="img" aria-label="Light bulb">💡</span> <span className="font-medium">If you're Microsoft-focused with Power BI</span> → Microsoft Fabric</li>
              </ul>
            </div>
          </div>
        )}
        
        {/* BUDGET TAB */}
        {activeTab === 'budget' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Databricks Cost */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-purple-800">Databricks Costs</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Upfront Costs</span>
                      <span className="text-sm text-gray-600">Medium</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-purple-500 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Ongoing Costs</span>
                      <span className="text-sm text-gray-600">Medium-High</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-purple-500 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Staff Costs</span>
                      <span className="text-sm text-gray-600">High</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-purple-500 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-1">Budget Highlights:</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Usage-based pricing (compute units)</li>
                    <li>• Lower storage costs for large data volumes</li>
                    <li>• Higher skilled staff requirements increase personnel costs</li>
                    <li>• Optimization potential to reduce ongoing costs</li>
                  </ul>
                </div>
              </div>
              
              {/* Snowflake Cost */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-cyan-800">Snowflake Costs</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Upfront Costs</span>
                      <span className="text-sm text-gray-600">Low</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-cyan-500 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Ongoing Costs</span>
                      <span className="text-sm text-gray-600">Variable</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-cyan-500 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Staff Costs</span>
                      <span className="text-sm text-gray-600">Low</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-cyan-500 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 bg-cyan-50 p-3 rounded-lg">
                  <h4 className="font-medium text-cyan-800 mb-1">Budget Highlights:</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Pay-as-you-go consumption model</li>
                    <li>• Separate storage and compute costs</li>
                    <li>• Lower administration overhead costs</li>
                    <li>• Can get expensive with unoptimized queries</li>
                  </ul>
                </div>
              </div>
              
              {/* Microsoft Fabric Cost */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-orange-800">Microsoft Fabric Costs</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Upfront Costs</span>
                      <span className="text-sm text-gray-600">Low</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-orange-500 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Ongoing Costs</span>
                      <span className="text-sm text-gray-600">Medium</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-orange-500 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Staff Costs</span>
                      <span className="text-sm text-gray-600">Low</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-orange-500 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 bg-orange-50 p-3 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-1">Budget Highlights:</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Unified licensing model with Microsoft 365</li>
                    <li>• Capacity-based pricing simplifies budgeting</li>
                    <li>• Lower staff costs with familiar Microsoft tools</li>
                    <li>• Existing Microsoft investments reduce total cost</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-4 text-gray-800">Simplified Cost Comparison</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left font-medium text-gray-700">Cost Factor</th>
                      <th className="px-4 py-2 text-center font-medium text-purple-700">Databricks</th>
                      <th className="px-4 py-2 text-center font-medium text-cyan-700">Snowflake</th>
                      <th className="px-4 py-2 text-center font-medium text-orange-700">Microsoft Fabric</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-2">Small Projects (&lt;1TB)</td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐⭐</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Medium Projects (1-10TB)</td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Large Projects (&gt;10TB)</td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐⭐</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Pay-as-you-go Flexibility</td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐⭐</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Staff Cost Savings</td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐⭐</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 bg-yellow-50 p-3 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Cost effectiveness depends heavily on your specific use case, data volume, and optimization strategies. Ratings are general guidance only.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* EXECUTIVE VIEW TAB */}
        {activeTab === 'executive' && (
          <div>
            {/* Strategic Platform Fit */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              
              {/* Databricks */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-medium text-purple-800 mb-3">Databricks</h3>
                <p className="text-gray-700 mb-4">Best for organizations focused on data science, ML/AI adoption, and advanced analytics capabilities.</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="bg-purple-100 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Superior machine learning and AI capability integration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-purple-100 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Most cost-effective for growing data volumes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-purple-100 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Comprehensive governance with Unity Catalog</span>
                  </div>
                </div>
              </div>
              
              {/* Snowflake */}
              <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
                <h3 className="text-xl font-medium text-cyan-800 mb-3">Snowflake</h3>
                <p className="text-gray-700 mb-4">Best for organizations prioritizing analytics, BI, and cross-department data sharing capabilities.</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="bg-cyan-100 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Most transparent pay-as-you-go pricing model</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-cyan-100 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Minimal administration and automatic optimization</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-cyan-100 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Superior data sharing and marketplace capabilities</span>
                  </div>
                </div>
              </div>

              {/* Microsoft Fabric */}
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-medium text-orange-800 mb-3">Microsoft Fabric</h3>
                <p className="text-gray-700 mb-4">Best for organizations already invested in Microsoft ecosystem seeking integrated analytics platform.</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="bg-orange-100 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Seamless integration with Microsoft 365 and Power BI</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-orange-100 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Unified licensing and familiar Microsoft tooling</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-orange-100 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm">Lower learning curve for Microsoft-centric teams</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost and Migration Summary */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Strategic Implementation Considerations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Cost Profile</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <span className="font-medium text-purple-800">Databricks:</span> Usage-based pricing, generally cost-effective for large data volumes
                    </div>
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <span className="font-medium text-cyan-800">Snowflake:</span> Transparent per-second billing with predictable consumption model
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <span className="font-medium text-orange-800">Microsoft Fabric:</span> Unified licensing model, value for existing Microsoft customers
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Migration Considerations</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium">Time to Value:</span> Varies by platform and existing infrastructure
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium">Skills Gap:</span> Consider current team expertise and training needs
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium">Partner Ecosystem:</span> All platforms offer strong implementation partners
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                General cost profiles vary significantly based on usage patterns, optimization, and contract terms
              </div>
            </div>
          </div>
        )}

        {/* TECHNICAL VIEW TAB */}
        {activeTab === 'technical' && (
          <div>
            {/* Architecture Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              
              {/* Databricks Architecture */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  Databricks Lakehouse
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Core Architecture</h4>
                    <p className="text-sm text-gray-700 mb-3">Unified lakehouse platform combining data lake flexibility with data warehouse performance</p>
                    <ul className="text-xs space-y-1 text-gray-600">
                      <li>• Delta Lake ACID storage format</li>
                      <li>• Apache Spark compute engine</li>
                      <li>• Unity Catalog for governance</li>
                      <li>• Multi-cloud deployment (AWS, Azure, GCP)</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-700 text-sm">Data Storage Layer</h5>
                      <p className="text-xs text-gray-600">Delta Lake on cloud object storage (S3, ADLS, GCS) with ACID transactions, time travel, and schema evolution</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-700 text-sm">Compute Layer</h5>
                      <p className="text-xs text-gray-600">Optimized Apache Spark with Delta Engine for SQL workloads and Photon engine for accelerated queries</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-700 text-sm">ML/AI Integration</h5>
                      <p className="text-xs text-gray-600">Native MLflow for ML lifecycle, feature stores, and model serving with real-time inference</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-700 text-sm">Development Environment</h5>
                      <p className="text-xs text-gray-600">Collaborative notebooks supporting Python, Scala, SQL, R with integrated workflows</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Snowflake Architecture */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-500">
                <h3 className="text-xl font-bold text-cyan-800 mb-4 flex items-center">
                  <div className="bg-cyan-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  Snowflake Cloud DW
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Core Architecture</h4>
                    <p className="text-sm text-gray-700 mb-3">Multi-cluster shared data architecture with automatic scaling and concurrency management</p>
                    <ul className="text-xs space-y-1 text-gray-600">
                      <li>• Separated storage and compute layers</li>
                      <li>• Automatic scaling and optimization</li>
                      <li>• Multi-cluster warehouses</li>
                      <li>• Cross-cloud and cross-region replication</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-700 text-sm">Storage Layer</h5>
                      <p className="text-xs text-gray-600">Centralized cloud storage with micro-partitioning, compression, and automatic clustering</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-700 text-sm">Compute Layer</h5>
                      <p className="text-xs text-gray-600">Virtual warehouses with independent scaling, automatic suspension, and instant resume capabilities</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-700 text-sm">Data Sharing</h5>
                      <p className="text-xs text-gray-600">Secure data sharing without data movement through Snowflake Marketplace and direct sharing</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-700 text-sm">Query Processing</h5>
                      <p className="text-xs text-gray-600">Columnar storage with vectorized processing, result caching, and automatic query optimization</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Microsoft Fabric Architecture */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                  <div className="bg-orange-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  Microsoft Fabric
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Core Architecture</h4>
                    <p className="text-sm text-gray-700 mb-3">Unified analytics platform with OneLake as the single source of truth for all data workloads</p>
                    <ul className="text-xs space-y-1 text-gray-600">
                      <li>• OneLake unified data lake</li>
                      <li>• Multiple compute engines (Spark, SQL, AS)</li>
                      <li>• Integrated with Microsoft 365 ecosystem</li>
                      <li>• Capacity-based unified licensing</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-700 text-sm">OneLake Storage</h5>
                      <p className="text-xs text-gray-600">Unified data lake built on Azure Data Lake with automatic data organization and delta format support</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-700 text-sm">Compute Engines</h5>
                      <p className="text-xs text-gray-600">Multiple engines: Spark for big data, SQL endpoint for analytics, Analysis Services for BI workloads</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-700 text-sm">Data Integration</h5>
                      <p className="text-xs text-gray-600">Native connectors to Microsoft services, real-time event streams, and data pipelines with Data Factory</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-700 text-sm">Business Intelligence</h5>
                      <p className="text-xs text-gray-600">Deeply integrated Power BI with direct mode connectivity and semantic modeling capabilities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Comparison Summary */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Architecture Philosophy Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-800 font-bold text-lg">DB</span>
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-2">Lakehouse Approach</h4>
                  <p className="text-sm text-gray-600">Combines data lake flexibility with warehouse performance for ML/AI workloads</p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-cyan-800 font-bold text-lg">SF</span>
                  </div>
                  <h4 className="font-semibold text-cyan-800 mb-2">Cloud-Native DW</h4>
                  <p className="text-sm text-gray-600">Purpose-built cloud data warehouse with automatic optimization and scaling</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-800 font-bold text-lg">MF</span>
                  </div>
                  <h4 className="font-semibold text-orange-800 mb-2">Unified Platform</h4>
                  <p className="text-sm text-gray-600">All-in-one analytics solution integrated with Microsoft ecosystem</p>
                </div>
              </div>
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default SimplifiedComparison;