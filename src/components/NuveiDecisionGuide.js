import React, { useState } from 'react';
import PageHeader from './common/PageHeader';

const NuveiDecisionGuide = () => {
  const [activeScenario, setActiveScenario] = useState('current-state');

  const scenarios = [
    { id: 'current-state', label: 'Current Problem' },
    { id: 'use-cases', label: 'Business Requirements' },
    { id: 'cost-estimates', label: 'Cost Analysis' },
    { id: 'recommendations', label: 'Recommended Solution' },
    { id: 'comparison', label: 'Options Comparison' }
  ];

  return (
    <div>
      <PageHeader
        title="Nuvei Data Platform Migration Guide"
        subtitle="Business case and options for migrating from legacy SQL Server to modern analytics platform"
      />

      {/* Executive Summary */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-3">🎯 Executive Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-medium text-blue-700">The Problem</div>
            <div className="text-gray-700">Legacy SQL Server can't handle Nuvei's 260M monthly transactions and advanced analytics needs</div>
          </div>
          <div>
            <div className="font-medium text-blue-700">The Solution</div>
            <div className="text-gray-700">Migrate to modern cloud analytics platform (Snowflake, Databricks, or Microsoft Fabric)</div>
          </div>
          <div>
            <div className="font-medium text-blue-700">Investment Required</div>
            <div className="text-gray-700">Enterprise-scale pricing varies based on usage and negotiation - estimate $50K-100K+ monthly for transaction volume</div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-600">
          <strong>Disclaimer:</strong> This analysis is based on current team structure and platform capabilities as understood. 
          Final platform selection should include detailed technical evaluation, cost analysis, proof-of-concept testing, 
          and validation of all technical claims before making business decisions.
        </p>
      </div>

      {/* Scenario tabs */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-wrap justify-center gap-2">
          {scenarios.map(scenario => (
            <button
              key={scenario.id}
              onClick={() => setActiveScenario(scenario.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeScenario === scenario.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {scenario.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {/* CURRENT PROBLEM */}
        {activeScenario === 'current-state' && (
          <div>
            <h2 className="text-xl font-semibold text-center mb-6">Current Data Infrastructure Problems</h2>
            
            {/* Business Impact Summary */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">🚨 Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-red-700 mb-2">Performance Issues:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• SQL Server struggles with 260M monthly transactions</li>
                    <li>• Slow query performance impacts business decisions</li>
                    <li>• Can't scale to support growing business needs</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-700 mb-2">Failed Initiatives:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• SingleStore implementation unsuccessful</li>
                    <li>• Multi-cloud complexity (AWS + Azure)</li>
                    <li>• Limited AI/ML capabilities for fraud detection</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* SQL Server Legacy */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center">
                  <span className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center text-red-600 mr-2">1</span>
                  SQL Server (Legacy)
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">📦</span>
                    <span>Main data warehouse</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <span>Scaling limitations</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">💰</span>
                    <span>High licensing costs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">👥</span>
                    <span>3 BI devs + BI manager</span>
                  </div>
                </div>
              </div>

              {/* SingleStore Experience */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-800 mb-3 flex items-center">
                  <span className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center text-orange-600 mr-2">2</span>
                  SingleStore (Nuvei AWS)
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-orange-500 mr-2">🚫</span>
                    <span>Didn't meet expectations</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-orange-500 mr-2">🔧</span>
                    <span>Complex management</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-orange-500 mr-2">💸</span>
                    <span>Cost/benefit mismatch</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-orange-500 mr-2">☁️</span>
                    <span>On AWS (migrating to Azure)</span>
                  </div>
                </div>
              </div>

              {/* Current Databricks */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 mr-2">3</span>
                  Databricks (Azure)
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-2">🧪</span>
                    <span>POC in progress</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-2">🔬</span>
                    <span>1 senior data engineer</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-2">📊</span>
                    <span>Small data volumes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-2">☁️</span>
                    <span>Already on Azure</span>
                  </div>
                </div>
              </div>

              {/* Snowflake for Simplex */}
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                <h3 className="font-semibold text-cyan-800 mb-3 flex items-center">
                  <span className="bg-cyan-100 rounded-full w-8 h-8 flex items-center justify-center text-cyan-600 mr-2">4</span>
                  Snowflake (Simplex AWS)
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-cyan-500 mr-2">🏢</span>
                    <span>Simplex needs (acquired)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-500 mr-2">�</span>
                    <span>2 data engineers</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-500 mr-2">✅</span>
                    <span>Working POC</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-500 mr-2">☁️</span>
                    <span>On AWS (needs migration)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Current Tech Stack */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-800 mb-2 flex items-center">
                  <span className="text-purple-600 mr-2">🔧</span>
                  Current Tech Stack
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="text-purple-500 mr-2">⚙️</span>
                    <span>Airflow (orchestration)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-500 mr-2">🔄</span>
                    <span>dbt (transformations)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-500 mr-2">☁️</span>
                    <span>Multi-cloud setup</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-500 mr-2">🎯</span>
                    <span>Migrating to Azure</span>
                  </div>
                </div>
              </div>

              {/* Key Challenges */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Key Challenges & Opportunities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="font-medium text-yellow-700 mb-1">Challenges:</p>
                    <ul className="space-y-1">
                      <li>• SQL Server can't scale for growing analytical needs</li>
                      <li>• SingleStore implementation was unsuccessful</li>
                      <li>• Multi-cloud complexity (AWS + Azure)</li>
                      <li>• Snowflake serves only Simplex, not Nuvei needs</li>
                      <li>• Team expertise spread across platforms</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-yellow-700 mb-1">Opportunities:</p>
                    <ul className="space-y-1">
                      <li>• Azure migration can consolidate cloud strategy</li>
                      <li>• Existing Snowflake experience from Simplex team</li>
                      <li>• Databricks already on Azure for data science</li>
                      <li>• Airflow + dbt stack can work with any platform</li>
                      <li>• Proven team expertise across platforms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BUSINESS REQUIREMENTS */}
        {activeScenario === 'use-cases' && (
          <div>
            <h2 className="text-xl font-semibold text-center mb-6">Business Requirements for New Platform</h2>
            
            {/* Business Context */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">💼 Nuvei's Business Context</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-medium text-blue-700 mb-2">Company Scale:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• $1.19B annual revenue (2023)</li>
                    <li>• $95B+ transaction volume annually</li>
                    <li>• 200+ markets, 700+ payment methods</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-blue-700 mb-2">Growth Strategy:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Recent acquisitions (SafeCharge $889M, Paya $1.3B)</li>
                    <li>• Moving to AI-first payment optimization</li>
                    <li>• $6.3B valuation (acquired by Advent 2024)</li>
                    <li>• Expanding global payment capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-4">Key Scenarios for Platform Selection</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <p>• <strong>Enterprise Transaction Processing:</strong> 260M+ monthly payments ($95B+ annual volume) requiring real-time analytics and regulatory compliance</p>
                <p>• <strong>Risk & Fraud Detection:</strong> ML models scoring millions of transactions/hour across 700+ payment methods with sub-second response times</p>
                <p>• <strong>Multi-Company Data Integration:</strong> Complex ETL pipelines consolidating data from 6+ major acquisitions (SafeCharge, Paya, etc.) via existing Airflow + dbt stack</p>
                <p>• <strong>Global Business Intelligence:</strong> Interactive dashboards serving 200+ global markets</p>
                <p>• <strong>Advanced Analytics:</strong> Customer behavior analysis across enterprise merchant portfolio and payment optimization</p>
                <p>• <strong>Regulatory & Compliance:</strong> PCI DSS, AML, transaction monitoring across multiple jurisdictions with full audit trails</p>
              </div>
              
              {/* Real Nuvei Scale */}
              <div className="mt-4 bg-white border border-blue-200 rounded p-4">
                <h4 className="font-medium text-blue-700 mb-2">Actual Nuvei Scale (2021-2024)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div>
                    <div className="font-medium">Annual Volume</div>
                    <div className="text-gray-600">$95B+ (2021)</div>
                  </div>
                  <div>
                    <div className="font-medium">Monthly Transactions</div>
                    <div className="text-gray-600">~260M payments</div>
                  </div>
                  <div>
                    <div className="font-medium">Daily Average</div>
                    <div className="text-gray-600">~8.5M transactions</div>
                  </div>
                  <div>
                    <div className="font-medium">Global Reach</div>
                    <div className="text-gray-600">200+ markets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COST ESTIMATES */}
        {activeScenario === 'cost-estimates' && (
          <div>
            <h2 className="text-xl font-semibold text-center mb-6">Platform Cost Considerations for Enterprise Scale</h2>
            
            {/* Disclaimer */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                <span className="text-red-600 mr-2">⚠️</span>
                Important Cost Disclaimer
              </h3>
              <p className="text-sm text-gray-700">
                <strong>General cost guidance only.</strong> Enterprise pricing varies significantly based on usage patterns, contract negotiations, regional availability, and optimization strategies. 
                These are general ranges for planning purposes - actual costs can only be determined through vendor discussions and proof-of-concept testing.
              </p>
            </div>

            {/* Nuvei Scale Assumptions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-3">Nuvei Real Business Context & Scale</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="font-medium text-blue-700">Company Profile</div>
                  <div className="text-gray-600">Founded 2003 (Montreal)</div>
                  <div className="text-gray-600">200+ markets, 700+ payment methods</div>
                  <div className="text-gray-600">Enterprise-scale payment processor</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Transaction Scale</div>
                  <div className="text-gray-600">High-volume transaction processing</div>
                  <div className="text-gray-600">~260M monthly transactions</div>
                  <div className="text-gray-600">~8.5M daily average</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Major Acquisitions</div>
                  <div className="text-gray-600">Multiple payment companies</div>
                  <div className="text-gray-600">Complex data integration needs</div>
                  <div className="text-gray-600">6+ companies since 2019</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Global Reach</div>
                  <div className="text-gray-600">200+ markets worldwide</div>
                  <div className="text-gray-600">700+ payment methods</div>
                  <div className="text-gray-600">Private equity backed</div>
                </div>
              </div>
            </div>

            {/* Cost Scenarios */}
            <div className="space-y-6">
              
              {/* Current State Consolidation */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 mr-3">1️⃣</span>
                  Current State: Data Platform Consolidation (Year 1) * *
                </h3>
                <p className="text-sm text-gray-600 mb-2">Consolidate acquisition data (SafeCharge, Paya, etc.), optimize current analytics infrastructure</p>
                <div className="text-xs text-blue-600 mb-4 bg-blue-50 p-2 rounded">
                  📊 Enterprise Scale: 260M monthly transactions | $95B+ annual volume | 200+ markets | Multiple acquisition integrations
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3 text-left font-medium">Component *</th>
                        <th className="border border-gray-300 p-3 text-center font-medium text-cyan-700">Snowflake</th>
                        <th className="border border-gray-300 p-3 text-center font-medium text-orange-700">Databricks</th>
                        <th className="border border-gray-300 p-3 text-center font-medium text-purple-700">Microsoft Fabric</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Migration & Setup</td>
                        <td className="border border-gray-300 p-3 text-center">Complex enterprise setup</td>
                        <td className="border border-gray-300 p-3 text-center">Enterprise migration project</td>
                        <td className="border border-gray-300 p-3 text-center">Microsoft-native migration</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Monthly Platform Cost</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold">Transparent per-second billing</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold text-green-600">Generally lower for large data volumes</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold">Unified licensing model</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Team Training & Ramp-up</td>
                        <td className="border border-gray-300 p-3 text-center">Moderate (SQL familiar)</td>
                        <td className="border border-gray-300 p-3 text-center">Steeper learning curve</td>
                        <td className="border border-gray-300 p-3 text-center">Familiar for Microsoft users</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-xs text-gray-500 mt-2 italic">
                  Enterprise pricing requires vendor consultation for accurate estimates.
                </div>
                
                {/* Cost Calculation Methodology */}
                <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-3">
                  <h4 className="text-xs font-medium text-yellow-800 mb-2">💡 Cost Calculation Basis (*All estimates only):</h4>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>• <strong>Platform sizing:</strong> Based on high transaction volume (~200M daily) and complex data requirements</p>
                    <p>• <strong>Migration scope:</strong> Enterprise-scale data consolidation from multiple acquired companies</p>
                    <p>• <strong>Team scale:</strong> Large organization with distributed teams requiring comprehensive training</p>
                    <p>• <strong>Cost factors:</strong> Usage patterns, optimization, contract terms, and support levels significantly impact pricing</p>
                    <p>• <strong>Recommendation:</strong> Obtain vendor quotes and conduct POCs to validate both performance and costs.</p>
                  </div>
                </div>
              </div>

              {/* Medium Projection */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center text-orange-600 mr-3">2️⃣</span>
                  Enhanced ML/AI: Real-time Risk & Optimization (Year 2-3) * *
                </h3>
                <p className="text-sm text-gray-600 mb-2">Scale AI/ML across payment flows, advanced fraud detection, real-time decisioning</p>
                <div className="text-xs text-orange-600 mb-4 bg-orange-50 p-2 rounded">
                  📈 Growth Scale: 350M+ monthly transactions | Enhanced fraud detection | Real-time payment optimization | Global expansion
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3 text-left font-medium">Component *</th>
                        <th className="border border-gray-300 p-3 text-center font-medium text-cyan-700">Snowflake</th>
                        <th className="border border-gray-300 p-3 text-center font-medium text-orange-700">Databricks</th>
                        <th className="border border-gray-300 p-3 text-center font-medium text-purple-700">Microsoft Fabric</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Base Platform Cost</td>
                        <td className="border border-gray-300 p-3 text-center">Higher compute costs</td>
                        <td className="border border-gray-300 p-3 text-center">Competitive for large data</td>
                        <td className="border border-gray-300 p-3 text-center">Bundled pricing model</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">ML/AI Capabilities</td>
                        <td className="border border-gray-300 p-3 text-center">SQL-based ML functions</td>
                        <td className="border border-gray-300 p-3 text-center">Native MLflow & AutoML</td>
                        <td className="border border-gray-300 p-3 text-center">Azure ML integration</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Real-time Processing</td>
                        <td className="border border-gray-300 p-3 text-center">Stream processing extra</td>
                        <td className="border border-gray-300 p-3 text-center">Spark Streaming included</td>
                        <td className="border border-gray-300 p-3 text-center">Event streaming included</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-medium">Overall Value</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold text-green-600">Predictable SQL analytics</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold">Best for ML/AI workloads</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold">Microsoft ecosystem fit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-xs text-gray-500 mt-2 italic">
                  Enterprise pricing requires vendor consultation for accurate estimates.
                </div>
                
                {/* Cost Calculation Methodology */}
                <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-3">
                  <h4 className="text-xs font-medium text-yellow-800 mb-2">💡 Cost Scaling Methodology:</h4>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>• <strong>Platform scaling:</strong> Growth scenarios require careful capacity planning and optimization</p>
                    <p>• <strong>ML/AI capabilities:</strong> Real-time fraud detection across multiple payment methods</p>
                    <p>• <strong>Real-time processing:</strong> High-frequency transaction scoring and decision-making</p>
                    <p>• <strong>Considerations:</strong> Volume discounts, multi-year contracts, and optimization strategies affect pricing</p>
                  </div>
                </div>
              </div>

              {/* Future AI-First */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center text-green-600 mr-3">3️⃣</span>
                  Future AI-First: Next-Gen Payment Intelligence (Year 3+) *
                </h3>
                <p className="text-sm text-gray-600 mb-2">Full AI-driven payment optimization, predictive analytics, autonomous fraud prevention</p>
                <div className="text-xs text-green-600 mb-4 bg-green-50 p-2 rounded">
                  🚀 Enterprise AI Scale: 500M+ monthly transactions | Full payment automation | Advanced ML across all flows | Global AI-first operations
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3 text-left font-medium">Component</th>
                        <th className="border border-gray-300 p-3 text-center font-medium text-cyan-700">Snowflake</th>
                        <th className="border border-gray-300 p-3 text-center font-medium text-orange-700">Databricks</th>
                        <th className="border border-gray-300 p-3 text-center font-medium text-purple-700">Microsoft Fabric</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Base Platform (scaled)</td>
                        <td className="border border-gray-300 p-3 text-center">Pay-per-query scaling</td>
                        <td className="border border-gray-300 p-3 text-center">Scales cost-effectively</td>
                        <td className="border border-gray-300 p-3 text-center">Capacity-based scaling</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Advanced ML/DL</td>
                        <td className="border border-gray-300 p-3 text-center">Partner ML tools required</td>
                        <td className="border border-gray-300 p-3 text-center">Comprehensive ML platform</td>
                        <td className="border border-gray-300 p-3 text-center">Azure ML ecosystem</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Real-time at Scale</td>
                        <td className="border border-gray-300 p-3 text-center">Limited real-time</td>
                        <td className="border border-gray-300 p-3 text-center">Advanced streaming</td>
                        <td className="border border-gray-300 p-3 text-center">Event-driven architecture</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Peak Load Management</td>
                        <td className="border border-gray-300 p-3 text-center">Elastic warehouses</td>
                        <td className="border border-gray-300 p-3 text-center">Auto-scaling clusters</td>
                        <td className="border border-gray-300 p-3 text-center">Capacity reservations</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Best Use Case</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold text-green-600">Analytics at scale</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold">Full ML/AI automation</td>
                        <td className="border border-gray-300 p-3 text-center font-semibold">Microsoft integration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-xs text-gray-500 mt-2 italic">
                  Enterprise pricing requires vendor consultation for accurate estimates.
                </div>
                
                {/* Cost Calculation Methodology */}
                <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-3">
                  <h4 className="text-xs font-medium text-yellow-800 mb-2">💡 Enterprise AI Cost Basis:</h4>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>• <strong>Base platform:</strong> High transaction volumes requiring enterprise-grade infrastructure</p>
                    <p>• <strong>Advanced ML/DL:</strong> Full AI automation across payment flows requires significant compute resources</p>
                    <p>• <strong>Real-time at scale:</strong> Sub-second decisioning for global payment optimization</p>
                    <p>• <strong>Enterprise scale:</strong> Large payment processors require substantial infrastructure investment</p>
                  </div>
                </div>
              </div>

              {/* Cost Summary */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Cost Analysis Summary</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Cost Efficiency by Use Case</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between bg-white p-2 rounded">
                        <span><strong>Pure BI/Analytics:</strong></span>
                        <span className="text-green-600">Snowflake most cost-effective</span>
                      </div>
                      <div className="flex justify-between bg-white p-2 rounded">
                        <span><strong>Unified ML Platform:</strong></span>
                        <span className="text-orange-600">Databricks competitive</span>
                      </div>
                      <div className="flex justify-between bg-white p-2 rounded">
                        <span><strong>Peak Load Handling:</strong></span>
                        <span className="text-cyan-600">Snowflake auto-scaling advantage</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Additional Cost Considerations</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <strong>Training investment:</strong> Databricks/Fabric require more upskilling</li>
                      <li>• <strong>Integration scope:</strong> External ML tools may be needed with Snowflake</li>
                      <li>• <strong>Optimization potential:</strong> All platforms benefit from proper optimization</li>
                      <li>• <strong>Enterprise pricing:</strong> Volume discounts available through negotiation</li>
                      <li>• <strong>Contract terms:</strong> Multi-year commitments can reduce costs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Final Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Important:</strong> Cost considerations are for planning purposes only. Actual expenses depend on specific usage patterns, 
                  optimization strategies, contract negotiations, and regional availability. Always obtain official vendor quotes and conduct 
                  proof-of-concept testing to validate both performance and costs before making platform decisions.
                </p>
              </div>
              
              {/* Cost Estimation Sources */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <h4 className="font-medium text-blue-800 mb-2">📊 Cost Estimation Data Sources:</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• <strong>Nuvei scale data:</strong> Based on public financials ($95B+ annual volume, $1.19B revenue, 200+ markets)</p>
                  <p>• <strong>Platform pricing:</strong> Extrapolated from public pricing tiers and enterprise case studies</p>
                  <p>• <strong>Transaction volume:</strong> 260M monthly transactions (~8.5M daily) scaled to growth projections</p>
                  <p>• <strong>Industry benchmarks:</strong> Compared to similar fintech companies (Stripe, PayPal, Adyen)</p>
                  <p>• <strong>Implementation costs:</strong> Based on typical enterprise migration patterns and team sizes</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RECOMMENDATIONS */}
        {activeScenario === 'recommendations' && (
          <div>
            <h2 className="text-xl font-semibold text-center mb-6">Recommended Solution for Nuvei</h2>
            
            {/* Executive Decision Summary */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">💼 Executive Decision Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-medium text-blue-700 mb-2">Business Decision:</p>
                  <p className="text-gray-700">Move from failing SQL Server to modern cloud analytics platform that can scale with Nuvei's growth (260M+ monthly transactions)</p>
                </div>
                <div>
                  <p className="font-medium text-blue-700 mb-2">Investment Required:</p>
                  <p className="text-gray-700">Enterprise-scale monthly platform costs plus significant one-time migration and training investment</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Top Recommendation */}
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">🏆 Recommended Solution: Snowflake on Azure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Business Advantages:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✅ Team already trained on Snowflake (Simplex experience)</li>
                      <li>✅ Familiar SQL interface - easier staff transition</li>
                      <li>✅ Runs on Azure (matches current cloud strategy)</li>
                      <li>✅ Works with existing tools (Airflow + dbt)</li>
                      <li>✅ Proven enterprise platform with strong track record</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Risk Mitigation for Nuvei:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>🎯 Use existing Snowflake knowledge to accelerate deployment</li>
                      <li>🎯 Consolidate cloud infrastructure on Azure</li>
                      <li>🎯 Keep specialized Databricks for advanced data science</li>
                      <li>🎯 Smooth transition from SQL Server concepts</li>
                      <li>🎯 Avoid repeating SingleStore implementation issues</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Secondary Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-3">🥈 Alternative: Expand Databricks</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Consider if:</strong></p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Want unified lakehouse approach</li>
                      <li>• ML/AI is strategic priority</li>
                      <li>• Already on Azure (no migration needed)</li>
                      <li>• Can invest in team training</li>
                    </ul>
                    <p className="text-blue-700 font-medium mt-2">Risk: Steeper learning curve for BI team</p>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-3">🥉 Consider: Microsoft Fabric</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Evaluate if:</strong></p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Want Azure-native solution</li>
                      <li>• Heavy Power BI usage planned</li>
                      <li>• Unified platform preference</li>
                      <li>• Can handle newer platform risks</li>
                    </ul>
                    <p className="text-purple-700 font-medium mt-2">Risk: Less mature, team learning curve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SIDE BY SIDE COMPARISON */}
        {activeScenario === 'comparison' && (
          <div>
            <h2 className="text-xl font-semibold text-center mb-6">For Nuvei: Snowflake vs Databricks vs Microsoft Fabric</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-left font-medium">Criteria</th>
                    <th className="border border-gray-300 p-3 text-center font-medium text-cyan-700">Snowflake</th>
                    <th className="border border-gray-300 p-3 text-center font-medium text-purple-700">Databricks</th>
                    <th className="border border-gray-300 p-3 text-center font-medium text-green-700">Microsoft Fabric</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Migration from SQL Server</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Familiar SQL</td>
                    <td className="border border-gray-300 p-3 text-center">🟡 Different approach</td>
                    <td className="border border-gray-300 p-3 text-center">🟡 Moderate effort</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Operational Complexity</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Managed service</td>
                    <td className="border border-gray-300 p-3 text-center">🟡 More configuration</td>
                    <td className="border border-gray-300 p-3 text-center">🟡 Integrated platform</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Time to Initial Value</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Potentially fast</td>
                    <td className="border border-gray-300 p-3 text-center">🟡 Longer ramp-up</td>
                    <td className="border border-gray-300 p-3 text-center">🟡 Variable</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">BI Tool Integration</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Broad support</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Good support</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Power BI focus</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Data Science Integration</td>
                    <td className="border border-gray-300 p-3 text-center">🟡 Via connectors</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Built-in</td>
                    <td className="border border-gray-300 p-3 text-center">🟡 Developing</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Cost Model</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Pay-per-use</td>
                    <td className="border border-gray-300 p-3 text-center">🟡 Usage-based</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Capacity-based</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Team Readiness</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Ready (2 data engineers)</td>
                    <td className="border border-gray-300 p-3 text-center">� Limited (1 senior engineer)</td>
                    <td className="border border-gray-300 p-3 text-center">🟡 New (none trained)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Azure Alignment</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Native on Azure</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Already on Azure</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Azure-native</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Airflow + dbt Integration</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Well-supported</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 Well-supported</td>
                    <td className="border border-gray-300 p-3 text-center">🟡 Developing</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">BI Team Transition</td>
                    <td className="border border-gray-300 p-3 text-center">🟢 SQL-familiar</td>
                    <td className="border border-gray-300 p-3 text-center">🟡 New concepts</td>
                    <td className="border border-gray-300 p-3 text-center">🟡 New platform</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-medium text-blue-800 mb-2">Analysis Summary</h3>
              <p className="text-sm text-gray-700">
                <strong>Snowflake on Azure</strong> appears to leverage existing team expertise, aligns with Azure migration, 
                is compatible with current Airflow+dbt stack, and may provide a lower-risk path to replace SQL Server. 
                Keeping Databricks for data science and transitioning the BI team to Snowflake's SQL-centric approach could be considered.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                <em>Note: Final platform selection should include detailed technical evaluation, cost analysis, and proof-of-concept validation.</em>
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default NuveiDecisionGuide;
