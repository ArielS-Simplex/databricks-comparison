import React, { useState } from 'react';

const CostAnalysisQuestions = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const questionSections = [
    {
      id: 'current-costs',
      title: 'Current State Assessment',
      icon: '📊',
      description: 'Understanding your baseline costs and requirements',
      questions: [
        {
          category: 'Financial Baseline',
          items: [
            'What is your current annual data platform spend (licensing, infrastructure, personnel)?',
            'What are your current hardware/infrastructure costs (servers, storage, network)?',
            'What do you spend annually on support contracts and maintenance?',
            'What are your current personnel costs (DBAs, data engineers, operations)?'
          ]
        },
        {
          category: 'Performance Baseline',
          items: [
            'What are your current average query response times for typical reports?',
            'What is your concurrent user capacity during peak periods?',
            'What is your current data processing throughput (GB/TB per hour)?',
            'What are your system availability/uptime statistics?'
          ]
        },
        {
          category: 'Operational Requirements',
          items: [
            'What data volume do you process monthly/annually?',
            'What are your peak period multipliers (Black Friday, quarter-end)?',
            'What compliance/regulatory requirements must you meet (SOX, PCI-DSS, GDPR)?',
            'What geographic regions require data residency?'
          ]
        }
      ]
    },
    {
      id: 'vendor-pricing',
      title: 'Accurate Vendor Pricing',
      icon: '💰',
      description: 'Getting real pricing data instead of public list prices',
      questions: [
        {
          category: 'Official Vendor Quotes',
          items: [
            'Request Azure DBU pricing from Databricks with your volume commitments',
            'Get Snowflake credit pricing based on your actual workload patterns',
            'Obtain Microsoft Fabric CU pricing with reserved instance discounts',
            'What regional pricing differences apply to your locations?'
          ]
        },
        {
          category: 'Contract Terms',
          items: [
            'What commitment discounts are available (1-year vs 3-year terms)?',
            'What volume thresholds trigger discount tiers?',
            'What are the minimum commit amounts and overage penalties?',
            'What professional services and implementation costs are included?'
          ]
        },
        {
          category: 'Hidden Costs',
          items: [
            'What are the support level pricing differences (standard vs enterprise)?',
            'What network egress and data transfer costs apply?',
            'What backup and disaster recovery costs are additional?',
            'What training and certification costs are required?'
          ]
        }
      ]
    },
    {
      id: 'performance-testing',
      title: 'Real Performance Benchmarks',
      icon: '⚡',
      description: 'Replace vendor benchmarks with your actual workload testing',
      questions: [
        {
          category: 'Proof-of-Concept Testing',
          items: [
            'Can you test with your real datasets (anonymized if needed)?',
            'What are your typical query workloads to test?',
            'How do you simulate peak period scenarios with realistic concurrency?',
            'What end-to-end pipeline performance metrics matter most?'
          ]
        },
        {
          category: 'Workload-Specific Metrics',
          items: [
            'What are your ETL/ELT processing times for your data volumes?',
            'What query response times do your users expect for reports?',
            'What real-time analytics latency do you require?',
            'What ML model training and inference performance do you need?'
          ]
        },
        {
          category: 'Scalability Requirements',
          items: [
            'How does performance scale at 2x, 5x, 10x your current data volumes?',
            'What concurrent user capacity do you need under peak loads?',
            'How quickly must auto-scaling respond to load changes?',
            'What network and storage bottlenecks exist in your environment?'
          ]
        }
      ]
    },
    {
      id: 'implementation',
      title: 'Realistic Implementation Planning',
      icon: '🏗️',
      description: 'Understanding real timelines and resource requirements',
      questions: [
        {
          category: 'Organizational Readiness',
          items: [
            'What is your current technical team skill level and availability?',
            'What data governance and security approval processes exist?',
            'How complex are integrations with your existing systems?',
            'What change management and user adoption challenges do you face?'
          ]
        },
        {
          category: 'Technical Migration Complexity',
          items: [
            'What is the volume and complexity of your data migration?',
            'How many applications/reports need rewriting or modification?',
            'What testing and validation timeframes are realistic?',
            'What rollback and risk mitigation plans are needed?'
          ]
        },
        {
          category: 'Project Timeline Reality',
          items: [
            'What scope and duration is realistic for a pilot phase (typically 3-6 months)?',
            'What phased rollout plan makes sense by business unit/function?',
            'What production deployment and stabilization period do you need?',
            'What ongoing optimization and tuning resources are required?'
          ]
        }
      ]
    },
    {
      id: 'decision-framework',
      title: 'Executive Decision Framework',
      icon: '🎯',
      description: 'Structuring the final recommendation with clear criteria',
      questions: [
        {
          category: 'Decision Criteria Weighting',
          items: [
            'How important is Total Cost of Ownership vs initial implementation cost?',
            'What performance requirements are non-negotiable vs nice-to-have?',
            'How much implementation risk can your organization tolerate?',
            'How important is strategic alignment with your technology roadmap?'
          ]
        },
        {
          category: 'Risk Assessment',
          items: [
            'What cost overrun mitigation strategies will you put in place?',
            'What performance SLAs and rollback plans are required?',
            'What vendor lock-in and data portability concerns exist?',
            'What implementation risk mitigation through pilots/phases is needed?'
          ]
        },
        {
          category: 'Success Criteria',
          items: [
            'What financial accuracy targets are required (within what % of actual costs)?',
            'What performance benchmarks must be validated through testing?',
            'What implementation timeline and resource constraints are firm?',
            'What user adoption and change management success metrics matter?'
          ]
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Cost Analysis Framework
        </h1>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center mb-2">
            <span className="text-2xl mr-2">⚠️</span>
            <span className="font-semibold text-yellow-800">Data Collection Required</span>
          </div>
          <p className="text-yellow-700 text-sm">
            Pricing calculations have been archived due to complexity and need for organization-specific data. 
            Use this framework to collect accurate information for your specific requirements.
          </p>
        </div>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Instead of speculative cost calculations, this framework helps you gather the specific data needed 
          for accurate platform comparison and executive decision-making.
        </p>
      </div>

      {/* Question Sections */}
      <div className="space-y-4">
        {questionSections.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow-lg border border-gray-200">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">{section.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                  <p className="text-gray-600 text-sm">{section.description}</p>
                </div>
              </div>
              <span className={`text-gray-400 transform transition-transform ${
                expandedSection === section.id ? 'rotate-180' : ''
              }`}>
                ▼
              </span>
            </button>
            
            {expandedSection === section.id && (
              <div className="px-6 pb-6">
                <div className="space-y-6">
                  {section.questions.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-800 mb-3">{category.category}</h4>
                      <ul className="space-y-2">
                        {category.items.map((question, questionIndex) => (
                          <li key={questionIndex} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Next Steps */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">Recommended Next Steps</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-green-700 mb-2">Immediate Actions (Week 1-2)</h4>
            <ul className="text-sm text-green-600 space-y-1">
              <li>• Finance team: Current annual data platform costs</li>
              <li>• IT operations: Performance baselines and constraints</li>
              <li>• Business stakeholders: Peak usage patterns</li>
              <li>• Request formal RFP responses from vendors</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-green-700 mb-2">Strategic Planning (Month 2-3)</h4>
            <ul className="text-sm text-green-600 space-y-1">
              <li>• Engage analyst firm for impartial cost comparison</li>
              <li>• Schedule proof-of-concept evaluations</li>
              <li>• Interview peer organizations with similar scale</li>
              <li>• Structured evaluation with consistent test scenarios</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 text-xs text-gray-500 text-center">
        This framework replaces speculative pricing calculations with data-driven decision making, 
        ensuring executive confidence in platform recommendations.
      </div>
    </div>
  );
};

export default CostAnalysisQuestions;