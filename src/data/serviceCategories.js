// Group services by category and map AWS to Azure equivalents
const serviceCategories = [
  {
    category: 'Storage',
    aws: {
      parent: { 
        service: 'Amazon S3', 
        description: 'Scalable object storage for data lakes', 
        category: 'Storage'
      },
      children: [
        { 
          service: 'S3 Standard', 
          description: 'General-purpose object storage', 
          category: 'Storage',
        },
        { 
          service: 'S3 Glacier', 
          description: 'Low-cost archive storage with retrieval options', 
          category: 'Storage',
        }
      ]
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
          service: 'Data Lake Storage Gen2', 
          description: 'Hierarchical namespace with Blob storage capabilities', 
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
        service: 'Amazon Kinesis', 
        description: 'Real-time data streaming service', 
        category: 'Streaming'
      },
      children: [
        { 
          service: 'Kinesis Data Streams', 
          description: 'Real-time data streaming for ingestion and processing', 
          category: 'Streaming'
        },
        { 
          service: 'Kinesis Data Firehose', 
          description: 'Load streaming data into data stores and analytics tools', 
          category: 'Streaming'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Azure Event Hubs', 
        description: 'Big data streaming platform and event ingestion service', 
        category: 'Streaming'
      },
      children: [
        {
          service: 'Event Hubs Kafka', 
          description: 'Kafka endpoint for Azure Event Hubs', 
          category: 'Streaming'
        }
      ]
    }
  },
  {
    category: 'ETL',
    aws: {
      parent: { 
        service: 'AWS Glue', 
        description: 'Serverless ETL service for data preparation', 
        category: 'ETL'
      },
      children: [
        {
          service: 'Glue DataBrew',
          description: 'Visual data preparation tool',
          category: 'ETL'
        },
        {
          service: 'Glue Studio',
          description: 'Visual interface for ETL job development',
          category: 'ETL'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Azure Data Factory', 
        description: 'Data integration service for ETL/ELT workflows', 
        category: 'ETL'
      },
      children: [
        {
          service: 'Mapping Data Flows',
          description: 'Visual data transformation service',
          category: 'ETL'
        },
        {
          service: 'Wrangling Data Flows',
          description: 'Interactive data preparation service',
          category: 'ETL'
        }
      ]
    }
  },
  {
    category: 'Analytics',
    aws: {
      parent: { 
        service: 'Amazon EMR', 
        description: 'Managed big data platform running Apache Spark and other tools', 
        category: 'Analytics'
      },
      children: [
        { 
          service: 'EMR Studio', 
          description: 'Integrated development environment for analytics', 
          category: 'Analytics',
        }
      ]
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
          service: 'MLflow', 
          description: 'Platform for managing the ML lifecycle', 
          category: 'Machine Learning',
        }
      ]
    }
  },
  {
    category: 'Data Warehouse',
    aws: {
      parent: { 
        service: 'Amazon Redshift', 
        description: 'Petabyte-scale data warehouse for analytics', 
        category: 'Analytics'
      },
      children: [
        {
          service: 'Redshift Spectrum',
          description: 'Query data directly from S3 without loading',
          category: 'Analytics'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Azure Synapse Analytics', 
        description: 'Analytics service for big data and data warehousing', 
        category: 'Analytics'
      },
      children: [
        {
          service: 'Synapse SQL pools',
          description: 'Enterprise data warehousing with parallel processing',
          category: 'Analytics'
        },
        {
          service: 'Synapse Spark pools',
          description: 'Spark-based big data analytics',
          category: 'Analytics'
        }
      ]
    }
  },
  {
    category: 'Data Processing',
    aws: {
      parent: { 
        service: 'AWS Glue ETL', 
        description: 'Serverless data processing service', 
        category: 'Processing'
      },
      children: [
        {
          service: 'AWS EMR',
          description: 'Big data processing platform',
          category: 'Processing'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Azure HDInsight', 
        description: 'Fully-managed cloud Hadoop & Spark offering', 
        category: 'Processing'
      },
      children: [
        {
          service: 'Azure Databricks',
          description: 'Spark-based analytics platform',
          category: 'Processing'
        }
      ]
    }
  },
  {
    category: 'Transformation',
    aws: {
      parent: { 
        service: 'AWS Glue', 
        description: 'Data transformation and loading service', 
        category: 'Processing'
      },
      children: [
        {
          service: 'Step Functions',
          description: 'Workflow orchestration for serverless applications',
          category: 'Processing'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Azure Data Factory', 
        description: 'Data integration service with transformation capabilities', 
        category: 'Processing'
      },
      children: [
        {
          service: 'Databricks Delta Live Tables',
          description: 'Declarative ETL pipelines',
          category: 'Processing'
        }
      ]
    }
  },
  {
    category: 'Visualization',
    aws: {
      parent: { 
        service: 'Amazon QuickSight', 
        description: 'Business intelligence service for visualization', 
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
      children: [
        {
          service: 'Power BI Embedded',
          description: 'Embed Power BI content in applications',
          category: 'Analytics'
        }
      ]
    }
  },
  {
    category: 'Monitoring',
    aws: {
      parent: { 
        service: 'Amazon CloudWatch', 
        description: 'Monitoring and observability service', 
        category: 'Monitoring'
      },
      children: [
        {
          service: 'CloudWatch Logs',
          description: 'Centralized log management service',
          category: 'Monitoring'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Azure Monitor', 
        description: 'Full stack monitoring service for applications and infrastructure', 
        category: 'Monitoring'
      },
      children: [
        {
          service: 'Log Analytics',
          description: 'Log data collection and analysis service',
          category: 'Monitoring'
        },
        {
          service: 'Application Insights',
          description: 'Application performance management service',
          category: 'Monitoring'
        }
      ]
    }
  },
  {
    category: 'Container Services',
    aws: {
      parent: { 
        service: 'Amazon ECS', 
        description: 'Fully managed container orchestration service', 
        category: 'Compute'
      },
      children: [
        {
          service: 'Amazon EKS',
          description: 'Managed Kubernetes service',
          category: 'Compute'
        },
        {
          service: 'Fargate',
          description: 'Serverless compute engine for containers',
          category: 'Compute'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Azure Container Instances', 
        description: 'Run containers without managing servers', 
        category: 'Compute'
      },
      children: [
        {
          service: 'Azure Kubernetes Service (AKS)',
          description: 'Managed Kubernetes service',
          category: 'Compute'
        },
        {
          service: 'Azure Container Apps',
          description: 'Serverless container service',
          category: 'Compute'
        }
      ]
    }
  },
  {
    category: 'Virtual Machines',
    aws: {
      parent: { 
        service: 'Amazon EC2', 
        description: 'Virtual servers in the cloud', 
        category: 'Compute'
      },
      children: [
        {
          service: 'EC2 Auto Scaling',
          description: 'Automatically adjust compute capacity',
          category: 'Compute'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Azure Virtual Machines', 
        description: 'Windows or Linux virtual machines in the cloud', 
        category: 'Compute'
      },
      children: [
        {
          service: 'Virtual Machine Scale Sets',
          description: 'Manage and scale sets of identical VMs',
          category: 'Compute'
        }
      ]
    }
  },
  {
    category: 'Identity',
    aws: {
      parent: { 
        service: 'AWS IAM', 
        description: 'Identity and access management', 
        category: 'Security'
      },
      children: [
        {
          service: 'AWS Single Sign-On',
          description: 'Centrally manage access to AWS accounts and applications',
          category: 'Security'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Microsoft Entra ID', 
        description: 'Identity and access management service (formerly Azure AD)', 
        category: 'Security'
      },
      children: [
        {
          service: 'Entra ID B2C',
          description: 'Customer identity and access management',
          category: 'Security'
        }
      ]
    }
  },
  {
    category: 'Secrets',
    aws: {
      parent: { 
        service: 'AWS Secrets Manager', 
        description: 'Rotate, manage, and retrieve secrets', 
        category: 'Security'
      },
      children: [
        {
          service: 'AWS Parameter Store',
          description: 'Secure, hierarchical storage for configuration data',
          category: 'Security'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Azure Key Vault', 
        description: 'Safeguard cryptographic keys and secrets', 
        category: 'Security'
      },
      children: [
        {
          service: 'Managed HSM',
          description: 'Hardware Security Module dedicated to single customers',
          category: 'Security'
        }
      ]
    }
  },
  {
    category: 'Query',
    aws: {
      parent: { 
        service: 'Amazon Athena', 
        description: 'Serverless interactive query service', 
        category: 'Analytics'
      },
      children: [
        {
          service: 'Lake Formation',
          description: 'Build, secure, and manage data lakes',
          category: 'Analytics'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Azure Synapse SQL On-demand', 
        description: 'Serverless SQL query service for data lakes', 
        category: 'Analytics'
      },
      children: [
        {
          service: 'Synapse Serverless SQL Pool',
          description: 'Query data in data lake without provisioning resources',
          category: 'Analytics'
        }
      ]
    }
  },
  {
    category: 'Serverless',
    aws: {
      parent: { 
        service: 'AWS Lambda', 
        description: 'Serverless compute service', 
        category: 'Compute'
      },
      children: [
        {
          service: 'Step Functions',
          description: 'Coordinate multiple Lambda functions',
          category: 'Compute'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Azure Functions', 
        description: 'Event-driven serverless compute platform', 
        category: 'Compute'
      },
      children: [
        {
          service: 'Durable Functions',
          description: 'Extension for creating stateful workflows',
          category: 'Compute'
        }
      ]
    }
  },
  {
    category: 'Machine Learning',
    aws: {
      parent: { 
        service: 'Amazon SageMaker', 
        description: 'Build, train, and deploy machine learning models', 
        category: 'AI/ML'
      },
      children: [
        {
          service: 'SageMaker Studio',
          description: 'Web-based IDE for ML',
          category: 'AI/ML'
        }
      ]
    },
    azure: {
      parent: { 
        service: 'Azure Machine Learning', 
        description: 'End-to-end machine learning service', 
        category: 'AI/ML'
      },
      children: [
        {
          service: 'Azure ML Studio',
          description: 'Web interface for machine learning solutions',
          category: 'AI/ML'
        }
      ]
    }
  },
  {
    category: 'API Management',
    aws: {
      parent: { 
        service: 'Amazon API Gateway', 
        description: 'Create, publish, maintain, monitor, and secure APIs', 
        category: 'Integration'
      },
      children: []
    },
    azure: {
      parent: { 
        service: 'Azure API Management', 
        description: 'Publish, secure, transform, maintain, and monitor APIs', 
        category: 'Integration'
      },
      children: []
    }
  }
];

export default serviceCategories;