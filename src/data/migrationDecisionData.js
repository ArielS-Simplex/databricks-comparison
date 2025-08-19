// Migration decision matrix for database and analytics platform transitions
// Clear comparison of migration paths with practical guidance

const migrationDecisionData = {
  sources: [
    {
      id: 'singlestore',
      label: 'From SingleStore',
      destinations: [
        {
          id: 'databricks',
          label: 'Databricks (Lakehouse)',
          fitSignals: [
            'Analytics and ML workloads are primary focus',
            'Need unified batch and streaming data processing',
            'Comfortable separating OLTP from analytical workloads'
          ],
          pros: [
            'Open data formats with storage/compute separation',
            'Industry-leading ML and LLM capabilities',
            'Excellent streaming and large-scale processing'
          ],
          cons: [
            'No native OLTP support - requires architecture changes',
            'More complex operations than fully managed solutions',
            'Higher latency for small, frequent queries'
          ],
          complexity: 'medium-high',
          complexityNotes: [
            'Redesign schemas for analytical workloads',
            'Migrate ETL pipelines to Delta Live Tables',
            'Implement Unity Catalog governance'
          ],
          operatingModel: [
            'Cluster-based compute with auto-scaling',
            'Notebook and SQL development environment'
          ],
          costModel: [
            'Pay-per-use compute with object storage',
            'Cost optimization required for always-on workloads'
          ]
        },
        {
          id: 'snowflake',
          label: 'Snowflake (Data Warehouse)',
          fitSignals: [
            'BI and reporting are primary use cases',
            'Want minimal operational overhead',
            'Limited need for advanced ML on the platform'
          ],
          pros: [
            'Simple operations with automatic scaling',
            'Excellent BI tool ecosystem integration',
            'Predictable performance and costs'
          ],
          cons: [
            'Weaker real-time ingestion than SingleStore',
            'Proprietary format limits data portability',
            'ML capabilities require external tools'
          ],
          complexity: 'medium',
          complexityNotes: [
            'Migrate ELT processes to Snowflake SQL',
            'Rebuild streaming ingestion with Snowpipe',
            'Port stored procedures and functions'
          ],
          operatingModel: [
            'Virtual warehouses with elastic scaling',
            'SQL-first development approach'
          ],
          costModel: [
            'Credit-based pricing by compute usage',
            'Separate storage and compute billing'
          ]
        },
        {
          id: 'fabric',
          label: 'Azure Fabric',
          fitSignals: [
            'Strong Azure ecosystem commitment',
            'Heavy Power BI usage requiring tight integration',
            'Want unified data platform experience'
          ],
          pros: [
            'Native Power BI and Office 365 integration',
            'Unified data lake with OneLake',
            'Integrated security and governance'
          ],
          cons: [
            'Azure ecosystem lock-in',
            'Some features still maturing',
            'Complex licensing model'
          ],
          complexity: 'medium',
          complexityNotes: [
            'Adopt Fabric workspace structure',
            'Migrate to Data Factory pipelines',
            'Learn Fabric-specific tooling'
          ],
          operatingModel: [
            'Capacity-based resource allocation',
            'Workspace-centric development'
          ],
          costModel: [
            'Capacity units across all services',
            'Bundled pricing for integrated features'
          ]
        }
      ]
    },
    {
      id: 'sqlserver',
      label: 'From SQL Server',
      destinations: [
        {
          id: 'singlestore',
          label: 'SingleStore (HTAP)',
          fitSignals: [
            'Need real-time operational analytics',
            'Require fast queries on fresh transactional data',
            'Want to consolidate OLTP and analytics workloads'
          ],
          pros: [
            'True HTAP with real-time analytics',
            'High-performance ingestion and queries',
            'Good for operational dashboards'
          ],
          cons: [
            'MySQL-compatible SQL instead of T-SQL',
            'Requires application changes for dialect differences',
            'Limited managed service options'
          ],
          complexity: 'medium',
          complexityNotes: [
            'Convert T-SQL objects to MySQL syntax',
            'Implement change data capture for migration',
            'Test and optimize for HTAP workloads'
          ],
          operatingModel: [
            'Cluster-based deployment',
            'Manual scaling and tuning required'
          ],
          costModel: [
            'Instance-based pricing',
            'Storage and compute bundled'
          ]
        },
        {
          id: 'databricks',
          label: 'Databricks (Lakehouse)',
          fitSignals: [
            'Focus on advanced analytics and ML',
            'Need to scale beyond single-server limits',
            'Want modern data architecture with open formats'
          ],
          pros: [
            'Separation of storage and compute',
            'Best-in-class ML and AI capabilities',
            'Open data formats and vendor neutrality'
          ],
          cons: [
            'Not suitable for OLTP workloads',
            'Requires complete architectural rethink',
            'Higher operational complexity'
          ],
          complexity: 'medium-high',
          complexityNotes: [
            'Redesign data model for analytical use cases',
            'Migrate ETL processes to Databricks workflows',
            'Implement data governance with Unity Catalog'
          ],
          operatingModel: [
            'Cloud-native with managed clusters',
            'Notebook and pipeline-based development'
          ],
          costModel: [
            'Usage-based compute pricing',
            'Separate cloud storage costs'
          ]
        },
        {
          id: 'snowflake',
          label: 'Snowflake (Data Warehouse)',
          fitSignals: [
            'Primary focus on BI and reporting',
            'Want to eliminate database administration',
            'Need elastic scaling for varying workloads'
          ],
          pros: [
            'Zero-maintenance with automatic optimization',
            'Excellent performance for analytical queries',
            'Simple scaling and management'
          ],
          cons: [
            'No support for transactional workloads',
            'Requires migration of T-SQL logic',
            'Limited support for stored procedures'
          ],
          complexity: 'medium',
          complexityNotes: [
            'Convert stored procedures to Snowflake SQL',
            'Migrate ETL jobs to Snowflake Tasks',
            'Plan data loading and transformation strategy'
          ],
          operatingModel: [
            'Fully managed with virtual warehouses',
            'SQL-centric development environment'
          ],
          costModel: [
            'Pay-per-second compute usage',
            'Automatic storage compression and tiering'
          ]
        },
        {
          id: 'fabric',
          label: 'Azure Fabric',
          fitSignals: [
            'Standardized on Azure and Microsoft stack',
            'Heavy integration with Power BI and Office',
            'Want unified analytics platform'
          ],
          pros: [
            'Seamless integration with Microsoft ecosystem',
            'Unified data lake with OneLake',
            'Built-in Power BI integration'
          ],
          cons: [
            'Relatively new with evolving features',
            'Capacity-based pricing can be complex',
            'Microsoft ecosystem dependency'
          ],
          complexity: 'medium',
          complexityNotes: [
            'Learn Fabric workspace and capacity concepts',
            'Migrate to Fabric-native data pipelines',
            'Adapt to integrated development environment'
          ],
          operatingModel: [
            'Workspace-based with shared capacity',
            'Integrated tools across data lifecycle'
          ],
          costModel: [
            'Capacity-based pricing model',
            'Shared resources across workloads'
          ]
        }
      ]
    }
  ]
};

export default migrationDecisionData;
