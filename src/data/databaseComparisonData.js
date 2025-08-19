// src/data/databaseComparisonData.js

const databaseComparisonData = [
    {
      id: 'primary-design',
      category: 'Architecture',
      title: 'Primary Design',
      singlestore: 'Memory-optimized, transactional database with analytical capabilities',
      databricks: 'Data lakehouse platform optimized for analytics and ML',
      snowflake: 'Cloud-native data warehouse with separation of storage and compute',
      details: 'SingleStore was designed as a distributed SQL database that combines in-memory performance with disk-based durability. Databricks was built around Apache Spark as a unified analytics platform, later evolving into the lakehouse paradigm combining data lake storage with data warehouse functionality. Snowflake was architected as a cloud-native data warehouse with complete separation of storage, compute, and services layers.',
      metrics: {
        type: 'qualitative',
        description: 'Architectural differences make direct comparison difficult'
      }
    },
    {
      id: 'data-storage',
      category: 'Architecture',
      title: 'Data Storage',
      singlestore: 'Primarily in-memory with disk persistence',
      databricks: 'Primarily disk-based with intelligent caching',
      snowflake: 'Cloud object storage with micro-partitioning',
      details: 'SingleStore keeps active data in memory for fast access with disk-based persistence for durability. Databricks stores data in distributed file systems (typically cloud storage) with intelligent caching mechanisms to optimize frequently accessed data. Snowflake stores all data in cloud object storage organized into micro-partitions with automatic optimization and metadata management.',
      metrics: {
        type: 'performance',
        winner: 'conditional',
        description: 'SingleStore: Fastest for point lookups and small queries | Databricks: Cost-effective for large datasets | Snowflake: Good balance of performance and storage efficiency',
        source: 'Published benchmarks from all vendors'
      }
    },
    {
      id: 'use-case',
      category: 'Architecture',
      title: 'Use Case Strength',
      singlestore: 'High-throughput OLTP with some OLAP',
      databricks: 'Primarily OLAP, ML and data engineering',
      snowflake: 'Pure OLAP with focus on SQL analytics',
      details: 'SingleStore excels at high-throughput transactional workloads while supporting analytical queries. Databricks is optimized for data engineering, analytics, and machine learning workflows rather than high-volume transaction processing. Snowflake specializes in analytical SQL workloads with high-concurrency support but lacks native OLTP capabilities.',
      metrics: {
        type: 'performance',
        winner: 'conditional',
        description: 'SingleStore: Up to 100x faster for high-volume OLTP | Databricks: 2-5x faster for complex ML analytics | Snowflake: 3-4x better for concurrent SQL analytics queries',
        source: 'TPC-H, TPC-DS benchmarks, and vendor performance tests'
      }
    },
    {
      id: 'medallion',
      category: 'Data Management',
      title: 'Medallion Architecture',
      singlestore: 'Would require manual implementation',
      databricks: 'Native built-in concept',
      snowflake: 'Supported via schemas and views',
      details: 'The bronze-silver-gold medallion architecture is a core Databricks concept, with native tools for implementing each layer. In SingleStore, you would need to manually design and implement this architecture using schemas or separate databases. Snowflake can implement medallion architecture using schemas, views, and stored procedures, though not as inherently as Databricks.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: 60-70% reduction in development time | Snowflake: 30-40% reduction vs manual implementation | SingleStore: Requires full manual implementation',
        source: 'Customer case studies and implementation reports'
      }
    },
    {
      id: 'query-language',
      category: 'Development',
      title: 'Query Language',
      singlestore: 'SQL',
      databricks: 'SQL, Python, R, Scala',
      snowflake: 'SQL with some JavaScript extensions',
      details: 'SingleStore primarily uses SQL for data manipulation and queries. Databricks supports multiple languages including SQL, Python, R, and Scala, making it more flexible for different data science and engineering workflows. Snowflake primarily uses SQL with some JavaScript extensions for stored procedures and UDFs.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: Multi-language support enables 25-40% broader team collaboration | Snowflake: SQL-first approach with limited extensibility | SingleStore: Standard SQL implementation',
        source: 'Developer productivity studies'
      }
    },
    {
      id: 'ml-integration',
      category: 'Development',
      title: 'Machine Learning',
      singlestore: 'Limited, requires external tools',
      databricks: 'Deeply integrated',
      snowflake: 'Snowpark for ML, external integrations',
      details: 'Databricks has native ML capabilities with MLflow for experiment tracking, model registry, and deployment workflows. SingleStore has limited ML capabilities and typically requires integration with external tools or platforms for machine learning workflows. Snowflake offers Snowpark for ML, Java/Scala UDFs, and external integrations but lacks the native ML ecosystem of Databricks.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: 3-5x faster ML deployment cycles with MLflow | Snowflake: Improving with Snowpark but requires 40-50% more integration work | SingleStore: Requires almost entirely external tooling',
        source: 'MLflow documentation and ML implementation case studies'
      }
    },
    {
      id: 'scalability',
      category: 'Performance',
      title: 'Scalability',
      singlestore: 'Horizontal scaling via sharding',
      databricks: 'Elastic compute separate from storage',
      snowflake: 'Multi-cluster, auto-scaling virtual warehouses',
      details: 'SingleStore scales horizontally by adding nodes and distributing data via sharding. Databricks follows a cloud-native approach with separate compute and storage, allowing you to scale compute resources independently and elastically, even scaling to zero when not in use. Snowflake offers multi-cluster virtual warehouses that can scale automatically, with independent sizing and complete separation from storage.',
      metrics: {
        type: 'cost',
        winner: 'conditional',
        description: 'Databricks: Cost-effective for variable workloads | Snowflake: Elastic scaling with lower operational overhead | SingleStore: Predictable scaling with planning',
        source: 'Cloud cost optimization studies'
      }
    },
    {
      id: 'data-integration',
      category: 'Connectivity',
      title: 'Data Integration',
      singlestore: 'JDBC/ODBC, pipelines for specific sources',
      databricks: 'Extensive native connectors ecosystem',
      snowflake: 'Snowpipe, partner integrations, Kafka connectors',
      details: 'Databricks offers extensive connectivity options including native connectors for various data sources, Delta Live Tables for ETL, and Auto Loader for data ingestion. SingleStore supports standard database connections and has dedicated pipelines for specific data sources. Snowflake provides Snowpipe for continuous data loading, partner integrations, and Kafka connectors for streaming data.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: 40-60% reduction in integration development time | Snowflake: 25-35% reduction with Snowpipe | SingleStore: Standard integration capabilities',
        source: 'Integration implementation benchmarks'
      }
    },
    {
      id: 'governance',
      category: 'Management',
      title: 'Governance & Security',
      singlestore: 'Traditional database security model',
      databricks: 'Unity Catalog with fine-grained controls',
      snowflake: 'Column-level security, data masking, RBAC',
      details: 'Databricks Unity Catalog provides fine-grained governance across clouds with comprehensive audit logging, lineage tracking, and access controls at the row/column level. SingleStore follows a more traditional database security model with roles and permissions. Snowflake offers robust security features including column-level security, data masking, RBAC, and comprehensive auditing capabilities.',
      metrics: {
        type: 'efficiency',
        winner: 'conditional',
        description: 'Databricks: 50-70% reduction in governance setup time with Unity Catalog | Snowflake: 40-60% reduction with native security features | SingleStore: Traditional setup requiring more manual configuration',
        source: 'Enterprise security implementation studies'
      }
    },
    {
      id: 'cost-model',
      category: 'Management',
      title: 'Cost Model',
      singlestore: 'Capacity-based licensing',
      databricks: 'Compute usage-based pricing',
      snowflake: 'Consumption-based pricing (credits)',
      details: 'SingleStore typically uses capacity-based licensing models (RAM/CPU). Databricks follows a usage-based model centered around compute DBUs (Databricks Units). Snowflake uses a consumption-based model with credits that are consumed based on the virtual warehouse size and usage duration.',
      metrics: {
        type: 'cost',
        winner: 'conditional',
        description: 'Databricks: Good value for variable workloads | Snowflake: Transparent pay-as-you-go model with predictable costs | SingleStore: Economical for consistent workloads',
        source: 'Cloud cost optimization analyses'
      }
    },
    {
      id: 'deployment',
      category: 'Management',
      title: 'Deployment Options',
      singlestore: 'Cloud, on-premises, hybrid',
      databricks: 'Multi-cloud, limited on-premises',
      snowflake: 'Multi-cloud only (AWS, Azure, GCP)',
      details: 'SingleStore offers flexible deployment across cloud platforms, on-premises, and hybrid environments. Databricks is primarily cloud-focused (AWS, Azure, GCP) with more limited on-premises options. Snowflake is exclusively cloud-based, available on major cloud platforms (AWS, Azure, GCP) with no on-premises deployment option.',
      metrics: {
        type: 'qualitative',
        winner: 'singlestore',
        description: 'SingleStore: Greatest deployment flexibility including on-premises | Databricks: Primarily cloud with limited on-premises | Snowflake: Cloud-only deployment model',
        source: 'Vendor documentation'
      }
    },
    {
      id: 'streaming',
      category: 'Data Processing',
      title: 'Streaming Data Support',
      singlestore: 'Fast ingest, limited processing',
      databricks: 'Native structured streaming',
      snowflake: 'Snowpipe Streaming, limited processing',
      details: 'Databricks provides native structured streaming capabilities for real-time data processing with exactly-once semantics. SingleStore offers fast data ingestion but has more limited stream processing capabilities compared to Databricks. Snowflake provides Snowpipe Streaming for continuous data ingestion but has more limited real-time transformation capabilities.',
      metrics: {
        type: 'performance',
        winner: 'conditional',
        description: 'SingleStore: Up to 1M+ rows/sec for simple ingestion | Databricks: Superior for complex stream processing with 2-3x throughput for transformations | Snowflake: Optimized for ingestion with 500K+ rows/sec but limited transformation capabilities',
        source: 'Streaming benchmarks and vendor documentation'
      }
    },
    {
      id: 'recovery',
      category: 'Management',
      title: 'Recovery & Backup',
      singlestore: 'Traditional backup and restore',
      databricks: 'Time travel and ACID transactions',
      snowflake: 'Time travel, fail-safe, zero-copy cloning',
      details: 'Databricks Delta Lake provides time travel capabilities allowing you to access previous versions of data and ACID transactions for reliability. SingleStore offers more traditional database backup and restore mechanisms. Snowflake provides time travel (data retention up to 90 days), fail-safe (additional 7 days beyond time travel), and zero-copy cloning for efficient development and testing.',
      metrics: {
        type: 'efficiency',
        winner: 'snowflake',
        description: 'Snowflake: Most comprehensive data protection with 90-day time travel and 7-day fail-safe | Databricks: Effective time travel with ACID transactions | SingleStore: Traditional backup/restore model with more operational overhead',
        source: 'Recovery benchmark studies and vendor documentation'
      }
    },
    {
      id: 'perf-tuning',
      category: 'Performance',
      title: 'Performance Tuning',
      singlestore: 'Query optimization, indexing, sharding',
      databricks: 'Query optimization, Delta optimizations, Photon engine',
      snowflake: 'Automatic optimization, search optimization, clustering keys',
      details: 'SingleStore offers traditional database tuning approaches like indexing strategies, query optimization, and data distribution via sharding. Databricks provides Delta Lake optimizations (Z-ordering, compaction), the Photon execution engine for vectorized processing, and automated cluster optimization. Snowflake provides largely automatic optimization with minimal tuning required, plus search optimization and clustering keys for specialized workloads.',
      metrics: {
        type: 'efficiency',
        winner: 'snowflake',
        description: 'Snowflake: 70-90% reduction in manual tuning effort | Databricks: Photon engine delivers 2-7x performance improvement for analytical queries | SingleStore: Most control but requires more expertise and manual tuning',
        source: 'Performance tuning studies and vendor documentation'
      }
    },
    {
      id: 'community',
      category: 'Ecosystem',
      title: 'Community & Ecosystem',
      singlestore: 'Smaller community, commercial focus',
      databricks: 'Large open-source ecosystem',
      snowflake: 'Large commercial ecosystem, Snowflake Marketplace',
      details: 'Databricks benefits from the large Apache Spark ecosystem and open-source communities around Delta Lake, MLflow, and other projects. SingleStore has a smaller, more commercially-focused community and ecosystem. Snowflake has a large commercial ecosystem with the Snowflake Marketplace for data sharing and numerous partner integrations.',
      metrics: {
        type: 'qualitative',
        winner: 'databricks',
        description: 'Databricks: 10x+ larger developer community with open-source foundations | Snowflake: Extensive partner ecosystem and data marketplace | SingleStore: Smaller but focused community',
        source: 'GitHub activity, marketplace analysis, and community metrics'
      }
    },
    {
      id: 'etl-capabilities',
      category: 'Data Processing',
      title: 'ETL/ELT Capabilities',
      singlestore: 'Basic transformation during load',
      databricks: 'Advanced ETL with Delta Live Tables',
      snowflake: 'Snowflake Tasks, Stored Procedures',
      details: 'Databricks offers Delta Live Tables for declarative ETL pipelines with quality controls, monitoring, and automatic optimization. SingleStore provides more basic transformation capabilities during data loading. Snowflake provides tasks for orchestration, stored procedures for transformations, and external tool integration for complex ETL workflows.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: 40-60% reduction in ETL development time with Delta Live Tables | Snowflake: 20-30% reduction with Tasks and Procedures | SingleStore: Basic capabilities requiring more custom development',
        source: 'ETL implementation case studies'
      }
    },
    {
      id: 'data-sharing',
      category: 'Connectivity',
      title: 'Data Sharing',
      singlestore: 'Traditional database link approaches',
      databricks: 'Delta Sharing, Unity Catalog',
      snowflake: 'Secure Data Sharing, Marketplace',
      details: 'Snowflake provides native Secure Data Sharing allowing organizations to share live data without copying it, plus the Snowflake Marketplace for discovering and accessing third-party data. Databricks offers Delta Sharing as an open protocol for secure data sharing with external organizations. SingleStore relies on more traditional database approaches for sharing data.',
      metrics: {
        type: 'efficiency',
        winner: 'snowflake',
        description: 'Snowflake: Most mature data sharing ecosystem with zero-copy sharing | Databricks: Open standard but less mature implementation | SingleStore: Traditional approaches requiring more integration work',
        source: 'Data sharing implementation studies'
      }
    },
    {
      id: 'concurrency',
      category: 'Performance',
      title: 'Query Concurrency',
      singlestore: 'High concurrency for mixed workloads',
      databricks: 'Limited by cluster resources',
      snowflake: 'Extremely high concurrency with virtual warehouses',
      details: 'Snowflake excels at high-concurrency workloads through its multi-cluster virtual warehouses that can be sized and scaled independently. SingleStore provides good concurrency for mixed OLTP/OLAP workloads. Databricks concurrency is limited by the resources allocated to a cluster, though it can be increased with larger clusters.',
      metrics: {
        type: 'performance',
        winner: 'snowflake',
        description: 'Snowflake: Supports 1000+ concurrent queries with optimal warehouse sizing | SingleStore: Effective for mixed workloads up to hundreds of concurrent queries | Databricks: More limited concurrency without significant cluster scaling',
        source: 'Concurrency benchmarks and vendor documentation'
      }
    }
  ];
  
  export default databaseComparisonData;