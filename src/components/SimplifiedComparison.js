import React, { useState } from 'react';
import '../styles/buttons.css';

const SimplifiedComparison = () => {
  const [activeTab, setActiveTab] = useState('plain-english');

  // Simple tab switching
  const tabs = [
    { id: 'plain-english', label: 'In Plain English' },
    { id: 'when-to-choose', label: 'When to Choose' },
    { id: 'team-needs', label: 'Team Needs' },
    { id: 'budget', label: 'Budget Impact' },
    { id: 'getting-started', label: 'Getting Started' }
  ];

  return (
    <div>
      {/* Header with blue-to-purple gradient */}
      <div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg mb-4 text-center"
      >
        <h1 className="text-3xl font-bold text-white mb-2">
          Database Comparison: Simplified
        </h1>
        <p className="text-white/80">The essentials without the technical complexity</p>
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
            <h2 className="text-xl font-semibold text-center mb-6">What Are These Platforms - In Plain English</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* SingleStore */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-3">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-blue-800">SingleStore</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  <span className="font-medium">It's like:</span> A super-fast sports car that can also carry some luggage
                </p>
                <p className="text-gray-700 mb-4">
                  SingleStore is designed for speed. It processes transactions lightning fast (like processing orders or updating accounts), while also letting you run some analytics. It keeps data in memory for speed, similar to how a computer works faster when using RAM instead of hard drive.
                </p>
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="text-sm font-medium text-blue-800 mb-1">In one sentence:</p>
                  <p className="text-sm text-gray-700">
                    "A super-fast database that excels at processing transactions while also handling some analytics."
                  </p>
                </div>
              </div>
              
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
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
              <p className="text-gray-600 text-sm">Still confused? Think of them like vehicles:</p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">SingleStore = Sports Car</div>
                <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Databricks = Research Laboratory</div>
                <div className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Snowflake = Self-Driving Car</div>
              </div>
            </div>
          </div>
        )}
        
        {/* WHEN TO CHOOSE TAB */}
        {activeTab === 'when-to-choose' && (
          <div>
            <h2 className="text-xl font-semibold text-center mb-6">When to Choose Each Platform</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* When to choose SingleStore */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-blue-800">Choose SingleStore When...</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You need incredibly fast transaction processing (like processing orders)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Your application needs both transactions and some analytics capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You want to combine transactional and analytical workloads in one system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You need consistent, predictable performance for real-time applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>You want to deploy on-premises or in your own data center</span>
                  </li>
                </ul>
                <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-100">
                  <p className="text-sm text-blue-800 font-medium">Perfect for:</p>
                  <p className="text-sm text-gray-700">Financial trading platforms, real-time inventory systems, game leaderboards, IoT monitoring</p>
                </div>
              </div>
              
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
            </div>
            
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-yellow-800">Quick Decision Guide</h3>
              <ul className="space-y-2 text-gray-700">
                <li>💡 <span className="font-medium">If you're processing transactions in real-time</span> → SingleStore</li>
                <li>💡 <span className="font-medium">If you're building AI/ML models</span> → Databricks</li>
                <li>💡 <span className="font-medium">If you need simple analytics with minimal management</span> → Snowflake</li>
              </ul>
            </div>
          </div>
        )}
        
        {/* TEAM NEEDS TAB */}
        {activeTab === 'team-needs' && (
          <div>
            <h2 className="text-xl font-semibold text-center mb-6">Team Skills Needed</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* SingleStore Skills */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">S</span>
                  <h3 className="text-lg font-medium text-blue-800">SingleStore Team</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-gray-700">Must Have Skills:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">●</span>
                      <span>SQL expertise</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">●</span>
                      <span>Database administration</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">●</span>
                      <span>Performance tuning experience</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-gray-700">Nice to Have:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span>Distributed systems knowledge</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span>Memory optimization skills</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium mb-1 text-blue-800">Learning Curve:</h4>
                  <div className="flex items-center">
                    <div className="h-2 flex-grow rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-blue-500" style={{ width: '40%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">Medium</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Easy transition for SQL database experts, minimal new concepts</p>
                </div>
              </div>
              
              {/* Databricks Skills */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">D</span>
                  <h3 className="text-lg font-medium text-purple-800">Databricks Team</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-gray-700">Must Have Skills:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-2">●</span>
                      <span>Data engineering experience</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-2">●</span>
                      <span>Python or Scala knowledge</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-2">●</span>
                      <span>SQL proficiency</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-gray-700">Nice to Have:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span>Machine learning experience</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span>Apache Spark knowledge</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span>Data science background</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium mb-1 text-purple-800">Learning Curve:</h4>
                  <div className="flex items-center">
                    <div className="h-2 flex-grow rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-purple-500" style={{ width: '70%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">Steep</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Multiple languages and concepts to master, especially for ML workflows</p>
                </div>
              </div>
              
              {/* Snowflake Skills */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <span className="bg-cyan-100 text-cyan-800 text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">S</span>
                  <h3 className="text-lg font-medium text-cyan-800">Snowflake Team</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-gray-700">Must Have Skills:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="text-cyan-500 mr-2">●</span>
                      <span>SQL proficiency</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-500 mr-2">●</span>
                      <span>Data warehouse concepts</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-gray-700">Nice to Have:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span>Cloud infrastructure knowledge</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span>ETL/ELT experience</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">○</span>
                      <span>Business intelligence tools</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-cyan-50 p-3 rounded-lg">
                  <h4 className="font-medium mb-1 text-cyan-800">Learning Curve:</h4>
                  <div className="flex items-center">
                    <div className="h-2 flex-grow rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-cyan-500" style={{ width: '30%' }}></div>
                    </div>
                    <span className="ml-2 text-sm">Gentle</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Very SQL-centric, familiar concepts with minimal administration</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-4 text-center text-gray-800">Team Structure Comparison</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left font-medium text-gray-700">Role Type</th>
                      <th className="px-4 py-2 text-center font-medium text-blue-700">SingleStore</th>
                      <th className="px-4 py-2 text-center font-medium text-purple-700">Databricks</th>
                      <th className="px-4 py-2 text-center font-medium text-cyan-700">Snowflake</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-700">Database Admin</td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Essential</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Helpful</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Minimal</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-700">Data Engineer</td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Helpful</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Essential</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Helpful</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-700">Data Scientist</td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Optional</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Essential</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Optional</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium text-gray-700">SQL Analyst</td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Essential</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Helpful</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">Essential</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* BUDGET TAB */}
        {activeTab === 'budget' && (
          <div>
            <h2 className="text-xl font-semibold text-center mb-6">Budget Impact: The Financial Picture</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* SingleStore Cost */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-blue-800">SingleStore Costs</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Upfront Costs</span>
                      <span className="text-sm text-gray-600">High</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Ongoing Costs</span>
                      <span className="text-sm text-gray-600">Medium</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Staff Costs</span>
                      <span className="text-sm text-gray-600">Medium</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">Budget Highlights:</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Predictable licensing costs</li>
                    <li>• Higher upfront hardware investments</li>
                    <li>• Lower storage costs for small to medium data</li>
                    <li>• Potential cost savings for transaction-heavy workloads</li>
                  </ul>
                </div>
              </div>
              
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
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-4 text-gray-800">Simplified Cost Comparison</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left font-medium text-gray-700">Cost Factor</th>
                      <th className="px-4 py-2 text-center font-medium text-blue-700">SingleStore</th>
                      <th className="px-4 py-2 text-center font-medium text-purple-700">Databricks</th>
                      <th className="px-4 py-2 text-center font-medium text-cyan-700">Snowflake</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-2">Small Projects (&lt;1TB)</td>
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
                      <td className="px-4 py-2">Pay-as-you-go Flexibility</td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐</span>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-yellow-500">⭐⭐⭐⭐</span>
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
                  <strong>Note:</strong> Cost effectiveness depends heavily on your specific use case. More stars indicate better cost efficiency for that factor.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* GETTING STARTED TAB */}
        {activeTab === 'getting-started' && (
          <div>
            <h2 className="text-xl font-semibold text-center mb-6">Getting Started: First Steps</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* SingleStore Getting Started */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-blue-800">SingleStore First Steps</h3>
                </div>
                
                <ol className="space-y-4 mb-6">
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">1</span>
                    <div className="ml-3">
                      <p className="text-gray-700">Start with a free trial of SingleStore Managed Service</p>
                      <p className="text-sm text-gray-500 mt-1">No credit card required for initial testing</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">2</span>
                    <div className="ml-3">
                      <p className="text-gray-700">Connect with standard SQL tools</p>
                      <p className="text-sm text-gray-500 mt-1">Works with any SQL client or BI tool</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">3</span>
                    <div className="ml-3">
                      <p className="text-gray-700">Import a sample dataset</p>
                      <p className="text-sm text-gray-500 mt-1">Use the provided examples or your own data</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">4</span>
                    <div className="ml-3">
                      <p className="text-gray-700">Run sample queries and test performance</p>
                      <p className="text-sm text-gray-500 mt-1">Compare with your existing solution</p>
                    </div>
                  </li>
                </ol>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">Time Investment:</h4>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Initial setup:</span> 1-2 hours<br />
                    <span className="font-medium">Basic POC:</span> 1-2 days<br />
                    <span className="font-medium">Production readiness:</span> 2-4 weeks
                  </p>
                </div>
              </div>
              
              {/* Databricks Getting Started */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-purple-800">Databricks First Steps</h3>
                </div>
                
                <ol className="space-y-4 mb-6">
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm">1</span>
                    <div className="ml-3">
                      <p className="text-gray-700">Sign up for a free Databricks Community Edition</p>
                      <p className="text-sm text-gray-500 mt-1">For learning, or start a trial on AWS/Azure/GCP</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm">2</span>
                    <div className="ml-3">
                      <p className="text-gray-700">Complete the getting started notebook tutorials</p>
                      <p className="text-sm text-gray-500 mt-1">Built-in examples teach the basics</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm">3</span>
                    <div className="ml-3">
                      <p className="text-gray-700">Create a cluster and first notebook</p>
                      <p className="text-sm text-gray-500 mt-1">Start with a small cluster for experimentation</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm">4</span>
                    <div className="ml-3">
                      <p className="text-gray-700">Import your data and run simple transformations</p>
                      <p className="text-sm text-gray-500 mt-1">Test with both SQL and Python/Scala</p>
                    </div>
                  </li>
                </ol>
                
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-1">Time Investment:</h4>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Initial setup:</span> 2-4 hours<br />
                    <span className="font-medium">Basic POC:</span> 3-7 days<br />
                    <span className="font-medium">Production readiness:</span> 1-3 months
                  </p>
                </div>
              </div>
              
              {/* Snowflake Getting Started */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-cyan-800">Snowflake First Steps</h3>
                </div>
                
                <ol className="space-y-4 mb-6">
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-sm">1</span>
                    <div className="ml-3">
                      <p className="text-gray-700">Start with a 30-day free trial</p>
                      <p className="text-sm text-gray-500 mt-1">$400 in credits to explore all features</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-sm">2</span>
                    <div className="ml-3">
                      <p className="text-gray-700">Use Snowflake web interface (Snowsight)</p>
                      <p className="text-sm text-gray-500 mt-1">No additional tools required to get started</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-sm">3</span>
                    <div className="ml-3">
                      <p className="text-gray-700">Load sample data from Marketplace</p>
                      <p className="text-sm text-gray-500 mt-1">Free datasets available to experiment with</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-sm">4</span>
                    <div className="ml-3">
                      <p className="text-gray-700">Create a virtual warehouse and run queries</p>
                      <p className="text-sm text-gray-500 mt-1">Start small and scale as needed</p>
                    </div>
                  </li>
                </ol>
                
                <div className="bg-cyan-50 p-3 rounded-lg">
                  <h4 className="font-medium text-cyan-800 mb-1">Time Investment:</h4>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Initial setup:</span> 1 hour<br />
                    <span className="font-medium">Basic POC:</span> 1-2 days<br />
                    <span className="font-medium">Production readiness:</span> 2-6 weeks
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-medium mb-4 text-gray-800 text-center">Quick Start Checklist</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded shadow-sm">
                  <h4 className="font-medium text-blue-800 mb-2">SingleStore Essentials</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      SQL client (DBeaver, MySQL Workbench)
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Understanding of distributed tables
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Basic SQL knowledge
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Sample dataset for testing
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded shadow-sm">
                  <h4 className="font-medium text-purple-800 mb-2">Databricks Essentials</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Cloud account (AWS, Azure, or GCP)
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Basic Python or SQL knowledge
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Storage bucket/container for data
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Sample dataset or ML use case
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded shadow-sm">
                  <h4 className="font-medium text-cyan-800 mb-2">Snowflake Essentials</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Web browser (Snowsight interface)
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Basic SQL knowledge
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Data to import (or use samples)
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Familiarity with cloud concepts
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-5 bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-green-800 mb-1">Pro Tip:</h4>
                <p className="text-sm text-gray-700">Start with a small proof-of-concept using a real business problem you need to solve. This will give you practical insights into which platform best fits your specific needs.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimplifiedComparison;