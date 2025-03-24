// Executive summary data that maps technical categories to business outcomes
const cloudExecutiveSummary = {
    businessPriorities: [
      {
        id: 'cost-optimization',
        title: 'Cost Optimization',
        icon: '💰',
        aws: {
          summary: 'Higher cost efficiency for high-volume workloads with reserved instances offering 40-60% savings.',
          strengths: [
            'More granular service pricing allowing precise optimization',
            'Stronger cost governance tools (AWS Cost Explorer, Budgets)',
            'Competitive spot pricing for non-critical workloads (up to 90% savings)'
          ],
          businessCase: 'Large enterprises with predictable workloads often achieve 25-30% lower TCO with committed AWS usage.'
        },
        azure: {
          summary: 'Better discounts for organizations with Microsoft enterprise agreements, with hybrid benefits for Windows workloads.',
          strengths: [
            'Azure Hybrid Benefit for Windows Server/SQL licenses',
            'Enterprise Agreement discounts with existing Microsoft relationships',
            'Reserved instances with flexibility to change instance types'
          ],
          businessCase: 'Organizations with existing Microsoft investments typically reduce cloud costs by 30-40% through licensing benefits.'
        },
      },
      {
        id: 'time-to-market',
        title: 'Speed to Market',
        icon: '🚀',
        aws: {
          summary: 'More specialized services enabling faster implementation of complex architectures without custom development.',
          strengths: [
            'Extensive marketplace of pre-built solutions',
            'More specialized services reducing custom development',
            'Broader set of quickstart templates for common architectures'
          ],
          businessCase: 'Digital-native companies typically launch new services 20-30% faster with AWS specialized solutions.'
        },
        azure: {
          summary: 'Faster implementation for Microsoft-centric organizations with integrated tooling and familiar development patterns.',
          strengths: [
            'Seamless Visual Studio & GitHub integration',
            'Simplified DevOps with Azure DevOps/GitHub Actions',
            'Lower learning curve for Microsoft-skilled workforce'
          ],
          businessCase: 'Microsoft-centric enterprises report 30-40% faster deployment cycles after moving to Azure.'
        }
      },
      {
        id: 'analytics',
        title: 'Data & Analytics',
        icon: '📊',
        aws: {
          summary: 'More mature data lake architecture with comprehensive tools for large-scale data processing.',
          strengths: [
            'More mature S3-based data lake implementation',
            'Stronger streaming capabilities with Kinesis',
            'Better integration with open-source analytics tools'
          ],
          businessCase: 'Organizations with heterogeneous data environments achieve 40-50% improvement in data pipeline efficiency.'
        },
        azure: {
          summary: 'Superior integrated analytics platform with native Databricks integration and Power BI for business intelligence.',
          strengths: [
            'First-party Databricks integration',
            'Synapse Analytics combining warehousing and big data',
            'Native Power BI integration for business intelligence'
          ],
          businessCase: 'Enterprises report 30-40% faster insights generation through Azure\'s integrated analytics ecosystem.'
        },
      },
      {
        id: 'governance',
        title: 'Compliance & Governance',
        icon: '🔒',
        aws: {
          summary: 'More comprehensive compliance portfolio with stronger security automation for regulated industries.',
          strengths: [
            'More comprehensive compliance certification portfolio',
            'More granular IAM controls',
            'Specialized offerings for highly regulated industries'
          ],
          businessCase: 'Financial services organizations reduce compliance overhead by 30-35% with AWS regulatory frameworks.'
        },
        azure: {
          summary: 'Superior enterprise governance with Microsoft Entra ID integration and stronger hybrid compliance capabilities.',
          strengths: [
            'Microsoft Entra ID integration with existing identity systems',
            'Better hybrid/multi-cloud governance tools',
            'Simplified compliance with Microsoft 365 integration'
          ],
          businessCase: 'Enterprise customers reduce identity management costs by 40-50% through Entra ID integration.'
        }
      },
      {
        id: 'operational-efficiency',
        title: 'Operational Efficiency',
        icon: '⚙️',
        aws: {
          summary: 'More automation options with robust infrastructure-as-code and extensive programmatic controls.',
          strengths: [
            'More extensive infrastructure-as-code capabilities',
            'Superior command-line tooling for automation',
            'Better support for container orchestration at scale'
          ],
          businessCase: 'Organizations achieve 40-50% higher infrastructure automation rates with AWS, reducing operational overhead.'
        },
        azure: {
          summary: 'Simpler operational model with better integration for Microsoft-centric IT organizations.',
          strengths: [
            'Simplified operations for Windows-based workloads',
            'Better integration with System Center and Microsoft admin tools',
            'More intuitive portal experience and management tools'
          ],
          businessCase: 'Microsoft-centric IT organizations report 25-35% lower operational overhead after moving to Azure.'
        }
      }
    ],
    
    industryGuidance: [
      {
        industry: 'Financial Services',
        recommendation: 'Consider AWS for its more comprehensive compliance portfolio and granular security controls. Azure may be preferred if you have significant Microsoft investments or need better integration with Microsoft 365 for productivity tools.',
        keyConsiderations: [
          'Regulatory compliance requirements',
          'Security and governance needs',
          'Integration with existing systems'
        ]
      },
      {
        industry: 'Healthcare',
        recommendation: 'Azure typically offers better HIPAA compliance tooling and integration with healthcare systems. AWS may be preferred for research workloads or organizations with existing AWS expertise.',
        keyConsiderations: [
          'Protected health information handling',
          'Integration with healthcare systems',
          'Machine learning for diagnostics'
        ]
      },
      {
        industry: 'Retail',
        recommendation: 'AWS is often preferred for its stronger data analytics and customer personalization capabilities. Companies competing with Amazon sometimes choose Azure to avoid working with a competitor.',
        keyConsiderations: [
          'Customer data analytics needs',
          'Competitive landscape',
          'Personalization requirements'
        ]
      },
      {
        industry: 'Manufacturing',
        recommendation: 'Azure typically offers better integration with operational technology and IoT systems. AWS may be preferred for supply chain analytics and logistics optimization.',
        keyConsiderations: [
          'IoT integration requirements',
          'Supply chain visibility',
          'ERP system integration'
        ]
      }
    ],
    
    databricksConsiderations: {
      aws: {
        advantages: [
          'More flexible deployment options',
          'Better integration with broader AWS data ecosystem',
          'Stronger security isolation capabilities'
        ],
        disadvantages: [
          'Third-party integration versus native Azure offering',
          'More complex identity management',
          'Separate billing and support channels'
        ],
        businessImpact: 'AWS Databricks deployments typically require 15-20% more operational overhead but offer greater flexibility for complex multi-service architectures.'
      },
      azure: {
        advantages: [
          'First-party service with native Azure integration',
          'Simplified identity management through Entra ID',
          'Unified billing and support',
          'Tighter integration with Azure Synapse Analytics'
        ],
        disadvantages: [
          'Less flexibility in network configuration',
          'Some advanced features may arrive later than on AWS',
          'More constrained to Microsofts deployment patterns'
        ],
        businessImpact: 'Azure Databricks deployments typically show 25-30% faster implementation times and lower operational overhead due to native integration.'
      }
    },
    
    costProfile: {
      aws: {
        enterpriseFit: 'Better for variable or unpredictable workloads with granular scaling',
        savingsApproach: 'Focus on reserved instances, Savings Plans, and spot instances for non-critical workloads',
        typicalSavings: '40-60% savings with 3-year commitments compared to on-demand pricing',
        hiddenCosts: 'Data transfer, storage management, and API request costs can accumulate unexpectedly'
      },
      azure: {
        enterpriseFit: 'Better for organizations with Microsoft EA agreements and Windows workloads',
        savingsApproach: 'Focus on leveraging hybrid benefits, EA discounts, and dev/test pricing',
        typicalSavings: '30-50% savings with hybrid benefits and EA discounts',
        hiddenCosts: 'Premium support, bandwidth, and managed service operational costs can exceed expectations'
      }
    },
    
    migrationConsiderations: {
      aws: {
        timeToValue: 'Typically 3-6 months for initial workload migration',
        skillsGap: 'Larger learning curve for Microsoft-centric organizations',
        enterpriseReadiness: 'Requires more customization for enterprise governance',
        partnersEcosystem: 'Larger partner ecosystem but more specialized partners'
      },
      azure: {
        timeToValue: 'Typically 2-5 months for Microsoft-centric organizations',
        skillsGap: 'Lower for Microsoft shops, higher for Linux-focused teams',
        enterpriseReadiness: 'Better out-of-box enterprise governance features',
        partnersEcosystem: 'Deeper Microsoft partner relationships with broader geographic coverage'
      }
    }
  };
  
  export default cloudExecutiveSummary;