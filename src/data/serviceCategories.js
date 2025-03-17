// Group services by category and map AWS to Azure equivalents
const serviceCategories = [
  {
    category: 'Storage',
    aws: {
      parent: { 
        service: 'S3', 
        description: 'Scalable object storage for data lakes', 
        category: 'Storage'
      },
      children: []
    },
    azure: {
      parent: { 
        service: 'Azure Storage', 
        description: 'Comprehensive cloud storage solution', 
        category: 'Storage'
      },
      children: [
        { 
          service: 'Blob Storage', 
          description: 'Object storage for unstructured data in data lakes', 
          category: 'Storage',
        },
        { 
          service: 'Storage Containers', 
          description: 'Logical containers for organizing blobs', 
          category: 'Storage',
        },
        { 
          service: 'Azure Files', 
          description: 'Fully managed file shares in the cloud', 
          category: 'Storage',
        }
      ]
    }
  },
  {
    category: 'Streaming',
    aws: {
      parent: { 
        service: 'Apache Kafka', 
        description: 'Open-source distributed event streaming platform', 
        category: 'Streaming'
      },
      children: [
        { 
          service: 'Kinesis', 
          description: 'Real-time data streaming service similar to Kafka', 
          category: 'Streaming'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Apache Kafka', 
        description: 'Open-source distributed event streaming platform', 
        category: 'Streaming'
      },
      children: []
    }
  },
  {
    category: 'ETL',
    aws: {
      parent: { 
        service: 'Glue', 
        description: 'Serverless ETL service for data preparation', 
        category: 'ETL'
      },
      children: []
    },
    azure: {
      parent: { 
        service: 'Data Factory', 
        description: 'Data integration service for ETL/ELT workflows', 
        category: 'ETL'
      },
      children: []
    }
  },
  {
    category: 'Analytics',
    aws: {
      parent: { 
        service: 'EMR', 
        description: 'Managed Spark service (alternative to Databricks)', 
        category: 'Analytics'
      },
      children: []
    },
    azure: {
      parent: { 
        service: 'Azure Databricks', 
        description: 'Analytics platform based on Apache Spark', 
        category: 'Analytics'
      },
      children: [
        { 
          service: 'Delta Lake', 
          description: 'Open source storage layer for reliable data lakes', 
          category: 'Storage',
        },
        { 
          service: 'Medallion Architecture', 
          description: 'Bronze (raw), Silver (filtered), Gold (aggregated) data layers', 
          category: 'Architecture',
        }
      ]
    }
  },
  {
    category: 'Data Warehouse',
    aws: {
      parent: { 
        service: 'Redshift', 
        description: 'Petabyte-scale data warehouse for analytics', 
        category: 'Analytics'
      },
      children: []
    },
    azure: {
      parent: { 
        service: 'Azure Synapse Analytics', 
        description: 'Analytics service for big data and data warehousing', 
        category: 'Analytics'
      },
      children: []
    }
  },
  {
    category: 'Data Processing',
    aws: {
      parent: { 
        service: 'Snowflake', 
        description: 'Cloud data platform for warehousing and analytics', 
        category: 'Analytics'
      },
      children: []
    },
    azure: {
      parent: null,
      children: []
    }
  },
  {
    category: 'Transformation',
    aws: {
      parent: { 
        service: 'DBT', 
        description: 'Data build tool for analytics engineering', 
        category: 'Processing'
      },
      children: []
    },
    azure: {
      parent: null,
      children: []
    }
  },
  {
    category: 'Visualization',
    aws: {
      parent: { 
        service: 'Amplitude', 
        description: 'Product analytics platform for insights', 
        category: 'Analytics'
      },
      children: []
    },
    azure: {
      parent: { 
        service: 'Power BI', 
        description: 'Business analytics service for visualizations', 
        category: 'Analytics'
      },
      children: []
    }
  },
  {
    category: 'Monitoring',
    aws: {
      parent: { 
        service: 'CloudWatch', 
        description: 'Monitoring and observability service', 
        category: 'Monitoring'
      },
      children: []
    },
    azure: {
      parent: { 
        service: 'Azure Monitor', 
        description: 'Full stack monitoring service for applications and infrastructure', 
        category: 'Monitoring'
      },
      children: []
    }
  },
  {
    category: 'Container Services',
    aws: {
      parent: { 
        service: 'ECS', 
        description: 'Fully managed container orchestration service', 
        category: 'Compute'
      },
      children: []
    },
    azure: {
      parent: { 
        service: 'Azure Container Instances', 
        description: 'Run containers without managing servers', 
        category: 'Compute'
      },
      children: []
    }
  },
  {
    category: 'Virtual Machines',
    aws: {
      parent: { 
        service: 'EC2', 
        description: 'Virtual servers in the cloud', 
        category: 'Compute'
      },
      children: []
    },
    azure: {
      parent: { 
        service: 'Azure Virtual Machines', 
        description: 'Windows or Linux virtual machines in the cloud', 
        category: 'Compute'
      },
      children: []
    }
  },
  {
    category: 'Identity',
    aws: {
      parent: { 
        service: 'IAM', 
        description: 'Identity and access management', 
        category: 'Security'
      },
      children: []
    },
    azure: {
      parent: { 
        service: 'Azure Active Directory', 
        description: 'Identity and access management service', 
        category: 'Security'
      },
      children: []
    }
  },
  {
    category: 'Secrets',
    aws: {
      parent: { 
        service: 'Secrets Manager', 
        description: 'Rotate, manage, and retrieve secrets', 
        category: 'Security'
      },
      children: []
    },
    azure: {
      parent: { 
        service: 'Azure Key Vault', 
        description: 'Safeguard cryptographic keys and secrets', 
        category: 'Security'
      },
      children: []
    }
  },
  {
    category: 'Query',
    aws: {
      parent: { 
        service: 'Athena', 
        description: 'Serverless interactive query service', 
        category: 'Analytics'
      },
      children: []
    },
    azure: {
      parent: null,
      children: []
    }
  },
  {
    category: 'Serverless',
    aws: {
      parent: { 
        service: 'Lambda', 
        description: 'Serverless compute service', 
        category: 'Compute'
      },
      children: []
    },
    azure: {
      parent: { 
        service: 'Azure Functions', 
        description: 'Event-driven serverless compute platform', 
        category: 'Compute'
      },
      children: []
    }
  }
];

export default serviceCategories;