// src/data/platformComparisonData.js
// Focused comparison: Databricks vs Snowflake vs Microsoft Fabric

const platformComparisonData = [
  {
    id: 'primary-use-case',
    category: 'Strategic Fit',
    title: 'Primary Use Case',
    databricks: 'Data science, ML/AI, and unified analytics platform',
    snowflake: 'Cloud data warehouse with SQL analytics focus',
    fabric: 'Integrated analytics platform for Microsoft ecosystem',
    details: 'Databricks excels at data science workflows and machine learning with strong data engineering capabilities. Snowflake specializes in SQL-based analytics and data sharing with automatic optimization. Microsoft Fabric provides an integrated analytics platform optimized for organizations already using Microsoft 365 and Power BI.',
    metrics: {
      type: 'strategic',
      winner: 'conditional',
      description: 'Databricks: Best for ML/AI initiatives | Snowflake: Best for SQL analytics and BI | Fabric: Best for Microsoft-centric organizations',
      source: 'Industry analysis and vendor positioning'
    }
  },
  {
    id: 'cost-model',
    category: 'Cost & Pricing',
    title: 'Cost Structure',
    databricks: 'Variable pricing based on compute usage with storage optimization',
    snowflake: 'Transparent per-second billing for compute and storage',
    fabric: 'Unified licensing with Microsoft ecosystem integration',
    details: 'Databricks offers significant cost savings for large data volumes through optimized storage on cloud object storage. Snowflake provides predictable, transparent pricing that scales with usage. Microsoft Fabric leverages existing Microsoft licensing and provides bundled analytics capabilities.',
    metrics: {
      type: 'cost',
      winner: 'conditional',
      description: 'Databricks: Cost-effective for large data volumes | Snowflake: Predictable usage-based pricing | Fabric: Value for Microsoft ecosystem customers',
      source: 'TCO analysis from enterprise implementations'
    }
  },
  {
    id: 'machine-learning',
    category: 'Capabilities',
    title: 'Machine Learning & AI',
    databricks: 'Native MLflow, AutoML, and integrated model serving',
    snowflake: 'SQL-based ML functions and partner integrations',
    fabric: 'Integrated with Azure ML and Microsoft AI services',
    details: 'Databricks provides the most comprehensive ML platform with native experiment tracking, model deployment, and feature stores. Snowflake offers SQL-based ML capabilities suitable for analysts. Microsoft Fabric integrates seamlessly with Azure ML and Microsoft Cognitive Services.',
    metrics: {
      type: 'capability',
      winner: 'databricks',
      description: 'Databricks: Comprehensive ML platform | Snowflake: SQL-based ML capabilities | Fabric: Integrated Microsoft AI ecosystem',
      source: 'ML platform benchmarks and user surveys'
    }
  },
  {
    id: 'data-governance',
    category: 'Governance',
    title: 'Data Governance & Security',
    databricks: 'Unity Catalog for comprehensive governance across clouds',
    snowflake: 'Built-in data classification and access controls',
    fabric: 'Microsoft Purview integration for unified governance',
    details: 'Databricks Unity Catalog provides unified governance across multiple clouds and data sources. Snowflake offers robust built-in governance features. Microsoft Fabric leverages Microsoft Purview for comprehensive data governance across the Microsoft ecosystem.',
    metrics: {
      type: 'governance',
      winner: 'conditional',
      description: 'All platforms provide enterprise-grade governance | Choose based on existing ecosystem and multi-cloud requirements',
      source: 'Enterprise governance assessments'
    }
  },
  {
    id: 'integration-ecosystem',
    category: 'Integration',
    title: 'Integration & Ecosystem',
    databricks: 'Open ecosystem with extensive partner integrations',
    snowflake: 'Strong data marketplace and native connectors',
    fabric: 'Deep Microsoft ecosystem integration',
    details: 'Databricks offers extensive integrations with open-source tools and cloud services. Snowflake provides a rich data marketplace and native connectors. Microsoft Fabric excels in Microsoft ecosystem integration including Office 365, Teams, and Power Platform.',
    metrics: {
      type: 'integration',
      winner: 'conditional',
      description: 'Choose based on existing technology stack | All platforms offer strong integration capabilities',
      source: 'Integration capability analysis'
    }
  },
  {
    id: 'performance-scale',
    category: 'Performance',
    title: 'Performance & Scale',
    databricks: 'Optimized for large-scale data processing and ML workloads',
    snowflake: 'Excellent performance for SQL analytics with auto-scaling',
    fabric: 'Good performance with Microsoft optimization for Office integration',
    details: 'Databricks excels at large-scale data processing and complex analytics workloads. Snowflake provides excellent SQL query performance with automatic scaling. Microsoft Fabric offers solid performance optimized for Microsoft workloads.',
    metrics: {
      type: 'performance',
      winner: 'conditional',
      description: 'Databricks: Best for complex analytics | Snowflake: Best for SQL workloads | Fabric: Optimized for Microsoft ecosystem',
      source: 'Performance benchmarks and customer reports'
    }
  },
  {
    id: 'ease-of-use',
    category: 'Usability',
    title: 'Ease of Use & Learning Curve',
    databricks: 'Steeper learning curve but powerful for data scientists',
    snowflake: 'SQL-familiar interface, easier for traditional BI teams',
    fabric: 'Familiar Microsoft interface, easiest for Microsoft users',
    details: 'Databricks requires more technical expertise but offers powerful capabilities for data science teams. Snowflake provides a familiar SQL interface that\'s accessible to traditional BI teams. Microsoft Fabric offers the most familiar interface for organizations already using Microsoft tools.',
    metrics: {
      type: 'usability',
      winner: 'conditional',
      description: 'Learning curve varies by team expertise and existing toolset | All platforms offer comprehensive training resources',
      source: 'User adoption and training studies'
    }
  }
];

export default platformComparisonData;
