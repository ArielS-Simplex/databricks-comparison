// Enterprise Data Warehouse Pricing Configuration
// Last Updated: January 2025
// Sources: Official vendor pricing, enterprise contracts, industry analysis

const pricingConfig = {
  // Current Nuvei baseline
  currentSystem: {
    name: 'SingleStore (On-Premise)',
    annualLicense: 200000, // $200k/year
    monthlyTransactions: 600000000, // 20M daily * 30
    monthlyMovements: 300000000, // 10M daily * 30
    notes: 'Current on-premise deployment with fixed annual licensing'
  },

  // Platform-specific pricing configurations
  platforms: {
    databricks: {
      name: 'Databricks',
      pricing: {
        // DBU (Databricks Unit) pricing per hour
        dbu: {
          standard: 0.15,  // Basic workloads
          premium: 0.40,   // Most common tier
          enterprise: 0.55, // Advanced features
          default: 0.40     // Use Premium as default
        },
        // Storage pricing per GB per month
        storage: {
          delta: 0.023,     // Delta Lake storage
          standard: 0.026,  // Standard blob storage
          default: 0.023
        },
        // Compute estimates  
        compute: {
          dbusPerMillionTransactions: 25, // Enterprise payment processing with fraud detection, ML
          dbusPerMillionMovements: 15,    // Complex ETL/movement operations with analytics
          efficiencyFactor: 0.85          // 15% better efficiency with optimization
        }
      },
      contractDiscounts: {
        annual: 0.20,     // 20% discount for annual commitment
        volume: 0.15,     // 15% additional for high volume
        enterprise: 0.10  // 10% enterprise agreement discount
      },
      sources: [
        'Databricks official pricing guide 2025',
        'Azure Databricks pricing calculator',
        'Enterprise contract benchmarks'
      ]
    },

    snowflake: {
      name: 'Snowflake',
      pricing: {
        // Credit pricing per compute-hour
        credits: {
          standard: 2.00,         // Basic edition
          enterprise: 3.00,       // Enterprise edition
          businessCritical: 4.00, // Business Critical edition
          default: 3.00           // Use Enterprise as default
        },
        // Storage pricing per TB per month
        storage: {
          perTB: 23,  // $23/TB/month (compressed)
          compressionRatio: 5, // Typical 5:1 compression
          default: 23
        },
        // Compute estimates
        compute: {
          creditsPerMillionTransactions: 20, // Enterprise payment processing with complex analytics
          creditsPerMillionMovements: 12,   // Heavy ETL operations for financial compliance
          efficiencyFactor: 1.0             // Baseline efficiency
        }
      },
      contractDiscounts: {
        annual: 0.25,      // 25% discount for annual pre-purchase
        capacity: 0.10,    // 10% for capacity commitment
        enterprise: 0.05   // 5% enterprise negotiation
      },
      sources: [
        'Snowflake pricing guide 2025',
        'Public pricing calculator',
        'Industry benchmark reports'
      ]
    },

    fabric: {
      name: 'Microsoft Fabric',
      pricing: {
        // Capacity Unit (CU) pricing per hour
        capacityUnits: {
          F2: 0.18,    // Small capacity
          F64: 0.36,   // Medium capacity  
          F256: 0.48,  // Large capacity
          default: 0.36 // Use F64 as default
        },
        // OneLake storage included in capacity
        storage: {
          included: true,
          overage: 0.024, // Per GB if exceeding included storage
          default: 0
        },
        // Compute estimates
        compute: {
          cusPerMillionTransactions: 18, // Enterprise payment processing workloads
          cusPerMillionMovements: 12,   // Complex ETL operations with analytics
          efficiencyFactor: 0.90        // 10% better with Microsoft integration
        }
      },
      contractDiscounts: {
        annual: 0.15,      // 15% annual commitment
        azure: 0.20,       // 20% if existing Azure customer
        enterprise: 0.10   // 10% EA discount
      },
      sources: [
        'Microsoft Fabric pricing documentation',
        'Azure pricing calculator',
        'Microsoft EA pricing tiers'
      ]
    }
  },

  // Workload multipliers
  workloadMultipliers: {
    light: {
      factor: 0.7,
      description: 'Basic reporting, simple queries',
      concurrentUsers: 50,
      queryComplexity: 'low'
    },
    medium: {
      factor: 1.0,
      description: 'Regular analytics, standard ETL',
      concurrentUsers: 200,
      queryComplexity: 'medium'
    },
    heavy: {
      factor: 1.5,
      description: 'Complex analytics, ML workloads',
      concurrentUsers: 500,
      queryComplexity: 'high'
    }
  },

  // Additional cost factors
  additionalCosts: {
    support: {
      databricks: 0.10,  // 10% of platform cost
      snowflake: 0.08,   // 8% of platform cost
      fabric: 0.05       // 5% (included in Microsoft support)
    },
    training: {
      databricks: 25000, // One-time training cost
      snowflake: 15000,
      fabric: 10000      // Lower due to Microsoft familiarity
    },
    migration: {
      databricks: 75000, // Migration services cost
      snowflake: 50000,
      fabric: 60000
    }
  },

  // Disclaimers and notes
  disclaimers: [
    'Pricing based on January 2025 public pricing and industry benchmarks',
    'Actual costs may vary based on negotiated contracts and specific usage patterns',
    'Does not include network egress, backup, or disaster recovery costs',
    'Volume discounts typically available for commitments over $500k/year',
    'Prices shown are for US regions; other regions may vary by 10-20%'
  ],

  // Nuvei-specific considerations
  nuveiFactors: {
    peakMultiplier: 2.5,        // Black Friday, Cyber Monday peaks
    globalRegions: 5,            // Multi-region deployment needs
    complianceRequirements: {
      pciDss: true,
      sox: true,
      gdpr: true
    },
    dataRetentionMonths: 84,    // 7 years for financial compliance
    realTimeRequirement: true,   // Sub-100ms payment processing
    fraudDetectionML: true       // ML models for fraud scoring
  }
};

export default pricingConfig;