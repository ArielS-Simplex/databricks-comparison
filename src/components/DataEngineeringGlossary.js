import React, { useState } from 'react';

const DataEngineeringGlossary = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Define the categories for filtering
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'fundamental', name: 'Fundamental Concepts' },
    { id: 'storage', name: 'Storage & Computing' },
    { id: 'file', name: 'File Formats' },
    { id: 'database', name: 'Database Concepts' },
    { id: 'modeling', name: 'Data Modeling' },
    { id: 'warehouse', name: 'Warehouses & Lakes' },
    { id: 'processing', name: 'Data Processing' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'databricks', name: 'Databricks' },
    { id: 'advanced', name: 'Advanced Concepts' },
    { id: 'platform', name: 'Platform-Specific' }
  ];

  // Define the glossary data
  const glossaryData = [
    // FUNDAMENTAL DATA CONCEPTS
    {
      category: 'fundamental',
      term: 'Bit',
      definition: 'The smallest unit of data, representing a single binary value (0 or 1)',
      example: 'The number 5 is represented as 101 in binary (4+0+1)',
      aws: '-',
      azure: '-',
      other: '-'
    },
    {
      category: 'fundamental',
      term: 'Byte',
      definition: 'A unit of digital information consisting of 8 bits',
      example: 'The letter \'A\' is stored as the byte 01000001 in ASCII encoding',
      aws: '-',
      azure: '-',
      other: '-'
    },
    {
      category: 'fundamental',
      term: 'Data Type',
      definition: 'Classification that specifies which type of value a variable has',
      example: 'Integer: 42, String: "hello", Float: 3.14, Boolean: true',
      aws: '-',
      azure: '-',
      other: '-'
    },
    {
      category: 'fundamental',
      term: 'Structured Data',
      definition: 'Data that adheres to a pre-defined data model',
      example: 'Customer records in a database table with fixed columns',
      aws: 'RDS, DynamoDB',
      azure: 'Azure SQL DB, Cosmos DB',
      other: 'Snowflake, MongoDB'
    },
    {
      category: 'fundamental',
      term: 'Unstructured Data',
      definition: 'Data that doesn\'t follow a specific format',
      example: 'Customer support emails, social media posts, videos',
      aws: 'S3',
      azure: 'Blob Storage',
      other: 'GCS, Hadoop HDFS'
    },
    {
      category: 'fundamental',
      term: 'Semi-structured Data',
      definition: 'Data that doesn\'t conform to a rigid structure but has tags',
      example: 'JSON payment data with varying fields per transaction',
      aws: 'DynamoDB, DocumentDB',
      azure: 'Cosmos DB',
      other: 'MongoDB, Couchbase'
    },
    
    // STORAGE & COMPUTING CONCEPTS
    {
      category: 'storage',
      term: 'RAM',
      definition: 'Temporary working memory for active datasets',
      example: 'SQL query on 4GB of customer data requires at least 4GB RAM',
      aws: 'EC2 Memory Optimized',
      azure: 'Azure VM D-series',
      other: '-'
    },
    {
      category: 'storage',
      term: 'Disk Storage',
      definition: 'Persistent storage medium for data',
      example: 'Transaction logs stored on SSD for long-term retention',
      aws: 'EBS, S3',
      azure: 'Managed Disks, Blob Storage',
      other: 'Google Persistent Disk'
    },
    {
      category: 'storage',
      term: 'SIMD Processing',
      definition: 'CPU technique to process multiple data values in a single operation',
      example: 'Comparing 256 transaction amounts to a threshold at once',
      aws: '-',
      azure: '-',
      other: 'Intel AVX, ARM Neon'
    },
    {
      category: 'storage',
      term: 'Vectorized Execution',
      definition: 'Processing batches of data at once rather than row-by-row',
      example: 'Calculating average of 1000 transactions in a single operation',
      aws: 'Redshift',
      azure: 'Synapse Analytics',
      other: 'Databricks Photon, Snowflake'
    },
    
    // FILE FORMATS & DATA SERIALIZATION
    {
      category: 'file',
      term: 'CSV',
      definition: 'Comma-separated values, simple text format for tabular data',
      example: 'name,age,email\\nJohn,30,john@example.com',
      aws: '-',
      azure: '-',
      other: '-'
    },
    {
      category: 'file',
      term: 'JSON',
      definition: 'JavaScript Object Notation, lightweight data-interchange format',
      example: '{"customer": {"name": "John", "orders": [{"id": 1}]}}',
      aws: '-',
      azure: '-',
      other: '-'
    },
    {
      category: 'file',
      term: 'Parquet',
      definition: 'Columnar storage file format that compresses data',
      example: 'A 100GB dataset reduced to 20GB with faster query times',
      aws: 'AWS Glue, Athena',
      azure: 'Synapse Analytics',
      other: 'Databricks, Snowflake'
    },
    {
      category: 'file',
      term: 'Avro',
      definition: 'Row-based storage format with schema definition',
      example: 'Payment transactions with enforced data types',
      aws: 'MSK (Kafka), Glue',
      azure: 'HDInsight, Event Hubs',
      other: 'Confluent Kafka, Databricks'
    },
    {
      category: 'file',
      term: 'ORC',
      definition: 'Optimized Row Columnar format, optimized for Hive',
      example: 'Data warehouse tables storing billions of transactions',
      aws: 'EMR, Athena',
      azure: 'HDInsight, Synapse',
      other: 'Databricks, Hive'
    },
    {
      category: 'file',
      term: 'Delta Format',
      definition: 'Open-source format that adds ACID transactions to Parquet',
      example: 'Multiple data scientists updating the same dataset without conflicts',
      aws: '-',
      azure: '-',
      other: 'Databricks Delta Lake'
    },
    
    // DATABASE CONCEPTS
    {
      category: 'database',
      term: 'RDBMS',
      definition: 'Relational Database Management System',
      example: 'PostgreSQL storing customer information in tables',
      aws: 'RDS, Aurora',
      azure: 'Azure SQL DB',
      other: 'Oracle, MySQL, PostgreSQL'
    },
    {
      category: 'database',
      term: 'NoSQL',
      definition: 'Database design for non-tabular data models',
      example: 'Storing customer profiles as flexible JSON documents',
      aws: 'DynamoDB, DocumentDB',
      azure: 'Cosmos DB',
      other: 'MongoDB, Cassandra'
    },
    {
      category: 'database',
      term: 'OLTP',
      definition: 'Online Transaction Processing systems',
      example: 'Payment processing system handling 1000+ TPS',
      aws: 'RDS, Aurora',
      azure: 'Azure SQL DB',
      other: 'Oracle, MySQL'
    },
    {
      category: 'database',
      term: 'OLAP',
      definition: 'Online Analytical Processing systems',
      example: 'Data warehouse generating quarterly reports',
      aws: 'Redshift',
      azure: 'Synapse Analytics',
      other: 'Snowflake, Teradata'
    },
    {
      category: 'database',
      term: 'Column Storage',
      definition: 'Storing data by organizing each column separately',
      example: 'Storing all transaction amounts together for fast aggregation',
      aws: 'Redshift',
      azure: 'Synapse Analytics',
      other: 'Snowflake, ClickHouse'
    },
    {
      category: 'database',
      term: 'Row Storage',
      definition: 'Traditional storage method organizing data by rows',
      example: 'Customer records stored as complete rows',
      aws: 'RDS, Aurora',
      azure: 'Azure SQL DB',
      other: 'MySQL, PostgreSQL'
    },
    {
      category: 'database',
      term: 'Primary Key (PK)',
      definition: 'Unique identifier column',
      example: 'transaction_id in the transaction table',
      aws: '-',
      azure: '-',
      other: '-'
    },
    {
      category: 'database',
      term: 'Foreign Key (FK)',
      definition: 'Column that references a primary key in another table',
      example: 'merchant_id in transactions table',
      aws: '-',
      azure: '-',
      other: '-'
    },
    {
      category: 'database',
      term: 'Shard',
      definition: 'A horizontal partition of data',
      example: 'Customer data split across servers by region',
      aws: 'DynamoDB, DocumentDB',
      azure: 'Cosmos DB, SQL DB',
      other: 'MongoDB Atlas, Citus'
    },
    {
      category: 'database',
      term: 'Partition',
      definition: 'Division of a logical database into distinct parts',
      example: 'Transaction table partitioned by month',
      aws: 'Redshift, S3',
      azure: 'Synapse, ADLS',
      other: 'Snowflake, Hive'
    },

    // DATA MODELING CONCEPTS
    {
      category: 'modeling',
      term: 'Schema',
      definition: 'Structure that defines how data is organized',
      example: 'Payment system tables for transactions, customers, merchants',
      aws: 'Glue Data Catalog',
      azure: 'Azure Purview',
      other: 'Alation, Collibra'
    },
    {
      category: 'modeling',
      term: 'Star Schema',
      definition: 'Dimensional model with a central fact table',
      example: 'Transaction facts connected to customer, date dimensions',
      aws: 'Redshift',
      azure: 'Synapse Analytics',
      other: 'Snowflake, BigQuery'
    },
    {
      category: 'modeling',
      term: 'Snowflake Schema',
      definition: 'Extension of star schema with normalized dimensions',
      example: 'Customer dimension normalized into details and address tables',
      aws: 'Redshift',
      azure: 'Synapse Analytics',
      other: 'Snowflake, Oracle'
    },
    {
      category: 'modeling',
      term: 'Dimensional Modeling',
      definition: 'Organizing data into measures and dimensions',
      example: 'Payment amounts (measures) by time, location (dimensions)',
      aws: '-',
      azure: '-',
      other: '-'
    },
    {
      category: 'modeling',
      term: 'Data Vault',
      definition: 'Enterprise data warehouse modeling methodology',
      example: 'Hubs, links, and satellites for payment data',
      aws: '-',
      azure: '-',
      other: '-'
    },
    
    // DATA WAREHOUSE & LAKES
    {
      category: 'warehouse',
      term: 'Data Warehouse',
      definition: 'Repository for structured, filtered data',
      example: 'Cleaned transaction data optimized for reporting',
      aws: 'Redshift',
      azure: 'Synapse Analytics',
      other: 'Snowflake, BigQuery'
    },
    {
      category: 'warehouse',
      term: 'Data Lake',
      definition: 'Repository for vast amounts of raw data',
      example: 'S3 bucket with clickstream, logs, and customer interactions',
      aws: 'S3 + Lake Formation',
      azure: 'ADLS Gen2',
      other: 'GCS + Dataproc'
    },
    {
      category: 'warehouse',
      term: 'Data Lakehouse',
      definition: 'Hybrid approach combining lake storage with warehouse functionality',
      example: 'Analyzing both structured and raw logs',
      aws: 'Redshift Spectrum',
      azure: 'Synapse Analytics',
      other: 'Databricks Lakehouse'
    },
    {
      category: 'warehouse',
      term: 'ETL',
      definition: 'Extract, Transform, Load process',
      example: 'Extracting payment data, standardizing formats',
      aws: 'Glue, Data Pipeline',
      azure: 'Data Factory',
      other: 'Informatica, Talend'
    },
    {
      category: 'warehouse',
      term: 'ELT',
      definition: 'Extract, Load, Transform variation',
      example: 'Loading raw logs to lake, transforming with SQL',
      aws: 'Glue, Athena',
      azure: 'Data Factory, Synapse',
      other: 'Databricks, dbt'
    },
    {
      category: 'warehouse',
      term: 'Data Mart',
      definition: 'Subset of a data warehouse for a specific business line',
      example: 'Finance-specific view focused on revenue and chargebacks',
      aws: 'Redshift',
      azure: 'Synapse Analytics',
      other: 'Snowflake'
    },
    
    // DATA PROCESSING CONCEPTS
    {
      category: 'processing',
      term: 'Batch Processing',
      definition: 'Processing data in large groups at intervals',
      example: 'Daily job processing previous day\'s transactions',
      aws: 'Batch, EMR',
      azure: 'Batch Service, HDInsight',
      other: 'Databricks, Spark'
    },
    {
      category: 'processing',
      term: 'Stream Processing',
      definition: 'Processing data continuously as it\'s generated',
      example: 'Real-time fraud detection for each transaction',
      aws: 'Kinesis, MSK',
      azure: 'Event Hubs, Stream Analytics',
      other: 'Kafka, Flink'
    },
    {
      category: 'processing',
      term: 'Micro-batch',
      definition: 'Processing data in small, near-continuous batches',
      example: 'Aggregating transactions in 5-minute windows',
      aws: 'Kinesis',
      azure: 'Stream Analytics',
      other: 'Spark Structured Streaming'
    },
    {
      category: 'processing',
      term: 'Real-time Processing',
      definition: 'Processing data immediately as it arrives',
      example: 'Instant payment notification to customer',
      aws: 'Lambda + Kinesis',
      azure: 'Functions + Event Hubs',
      other: 'Flink, Kafka Streams'
    },
    {
      category: 'processing',
      term: 'MapReduce',
      definition: 'Programming model for large distributed data processing',
      example: 'Counting occurrences of each product in transactions',
      aws: 'EMR',
      azure: 'HDInsight',
      other: 'Hadoop, Spark'
    },
    {
      category: 'processing',
      term: 'DAG (Directed Acyclic Graph)',
      definition: 'Workflow with task dependencies',
      example: 'ETL pipeline showing validation before transformation',
      aws: 'Step Functions',
      azure: 'Logic Apps',
      other: 'Airflow, Prefect, Dagster'
    },
    
    // CLOUD & DISTRIBUTED COMPUTING
    {
      category: 'cloud',
      term: 'Distributed Computing',
      definition: 'System with components on different networked computers',
      example: 'Payment processing across multiple servers',
      aws: '-',
      azure: '-',
      other: '-'
    },
    {
      category: 'cloud',
      term: 'Horizontal Scaling',
      definition: 'Adding more machines to handle increased load',
      example: 'Adding 5 new database servers for Black Friday',
      aws: 'Auto Scaling Groups',
      azure: 'VMSS',
      other: 'Kubernetes'
    },
    {
      category: 'cloud',
      term: 'Vertical Scaling',
      definition: 'Adding more power to an existing machine',
      example: 'Upgrading analytics server from 16GB to 64GB RAM',
      aws: 'EC2 Instance Resize',
      azure: 'VM Resize',
      other: '-'
    },
    {
      category: 'cloud',
      term: 'Container',
      definition: 'Lightweight, standalone executable package',
      example: 'Payment microservice in Docker container',
      aws: 'ECS, EKS',
      azure: 'AKS, Container Instances',
      other: 'Docker, Kubernetes'
    },
    {
      category: 'cloud',
      term: 'Kubernetes',
      definition: 'System for managing containerized applications',
      example: 'Auto-scaling payment containers based on volume',
      aws: 'EKS',
      azure: 'AKS',
      other: 'GKE, OpenShift'
    },
    {
      category: 'cloud',
      term: 'Microservices',
      definition: 'Application as collection of loosely coupled services',
      example: 'Separate services for payment processing, fraud detection',
      aws: 'ECS, EKS, Lambda',
      azure: 'AKS, Functions',
      other: 'Kubernetes, Docker'
    },
    
    // DATABRICKS CORE CONCEPTS
    {
      category: 'databricks',
      term: 'Delta Lake',
      definition: 'Storage layer with ACID transactions for big data',
      example: 'Two analysts updating the same dataset without conflicts',
      aws: '-',
      azure: '-',
      other: 'Databricks Delta Lake'
    },
    {
      category: 'databricks',
      term: 'Medallion Architecture',
      definition: 'Bronze (raw), Silver (validated), Gold (aggregated) layers',
      example: 'Raw JSON payments in Bronze, cleansed in Silver, summaries in Gold',
      aws: '-',
      azure: '-',
      other: 'Databricks'
    },
    {
      category: 'databricks',
      term: 'Lakehouse',
      definition: 'Hybrid architecture combining lake storage with warehouse functionality',
      example: 'Petabytes of raw data with SQL query capabilities',
      aws: '-',
      azure: '-',
      other: 'Databricks Lakehouse'
    },
    {
      category: 'databricks',
      term: 'Unity Catalog',
      definition: 'Unified governance layer with fine-grained access controls',
      example: 'Restricting PII access while allowing aggregate metrics',
      aws: 'Glue/Lake Formation',
      azure: 'Purview',
      other: 'Databricks Unity Catalog'
    },
    {
      category: 'databricks',
      term: 'Photon Engine',
      definition: 'C++ vectorized query engine for Spark',
      example: 'Complex query running 5x faster with Photon',
      aws: '-',
      azure: '-',
      other: 'Databricks Photon'
    },
    {
      category: 'databricks',
      term: 'Delta Live Tables (DLT)',
      definition: 'Framework for reliable pipelines with quality controls',
      example: 'Enforcing "all transaction_ids must be unique" rule',
      aws: '-',
      azure: '-',
      other: 'Databricks DLT'
    },
    {
      category: 'databricks',
      term: 'MLflow',
      definition: 'Platform for managing the ML lifecycle',
      example: 'Tracking fraud detection model development parameters',
      aws: 'SageMaker',
      azure: 'Azure ML',
      other: 'MLflow, Weights & Biases'
    },
    {
      category: 'databricks',
      term: 'Structured Streaming',
      definition: 'Spark API for continuous data processing',
      example: 'Processing payment events in real-time, updating models',
      aws: '-',
      azure: '-',
      other: 'Spark Structured Streaming'
    },
    {
      category: 'databricks',
      term: 'Z-Ordering',
      definition: 'Technique that co-locates related data for faster queries',
      example: 'Z-ordering by date and merchant_id for 10-100x speed',
      aws: '-',
      azure: '-',
      other: 'Databricks'
    },
    {
      category: 'databricks',
      term: 'DBUs (Databricks Units)',
      definition: 'Billing units for compute resources',
      example: '4-core cluster consuming 0.75 DBUs per hour',
      aws: '-',
      azure: '-',
      other: 'Databricks'
    },
    {
      category: 'databricks',
      term: 'Notebooks',
      definition: 'Interactive documents with code, visualizations, markdown',
      example: 'End-to-end payment analysis notebook',
      aws: 'SageMaker Notebooks',
      azure: 'Azure Notebooks',
      other: 'Jupyter, Databricks, Colab'
    },
    {
      category: 'databricks',
      term: 'Workspace',
      definition: 'Collaborative environment for organizing assets',
      example: 'Organizing notebooks into department folders',
      aws: '-',
      azure: '-',
      other: 'Databricks Workspace'
    },
    {
      category: 'databricks',
      term: 'Clusters',
      definition: 'Managed compute resources for workloads',
      example: 'Auto-scaling cluster for peak processing',
      aws: 'EMR',
      azure: 'HDInsight, Synapse',
      other: 'Databricks'
    },
    {
      category: 'databricks',
      term: 'Auto Loader',
      definition: 'Ingestion service for incrementally processing new files',
      example: 'Automatically processing new transaction log files',
      aws: '-',
      azure: '-',
      other: 'Databricks Auto Loader'
    },

    // ADVANCED DATA ENGINEERING CONCEPTS
    {
      category: 'advanced',
      term: 'Data Lineage',
      definition: 'Documentation of data\'s origins and transformations',
      example: 'Tracing payment metric back to source systems',
      aws: 'Glue, AWS CloudTrail',
      azure: 'Purview',
      other: 'Collibra, Alation'
    },
    {
      category: 'advanced',
      term: 'Data Governance',
      definition: 'Framework for managing data availability, security',
      example: 'Policies for PII access and protection',
      aws: 'Lake Formation',
      azure: 'Purview',
      other: 'Collibra, Alation'
    },
    {
      category: 'advanced',
      term: 'Data Catalog',
      definition: 'Inventory of available data assets',
      example: 'Directory of payment datasets with descriptions',
      aws: 'Glue Data Catalog',
      azure: 'Purview',
      other: 'Collibra, Alation'
    },
    {
      category: 'advanced',
      term: 'Data Quality',
      definition: 'Measure of data\'s condition and suitability',
      example: 'Percentage of transactions with valid customer_ids',
      aws: 'Glue DataBrew',
      azure: 'Data Factory Data Flows',
      other: 'Great Expectations, dbt'
    },
    {
      category: 'advanced',
      term: 'Schema Evolution',
      definition: 'Changing schema without disrupting services',
      example: 'Adding payment_method field without breaking pipelines',
      aws: 'Glue Schema Registry',
      azure: 'Schema Registry',
      other: 'Confluent Schema Registry'
    },
    {
      category: 'advanced',
      term: 'CDC (Change Data Capture)',
      definition: 'Capturing changes made to a database',
      example: 'Tracking all customer address updates',
      aws: 'DMS',
      azure: 'Data Factory',
      other: 'Debezium, Striim'
    },
    {
      category: 'advanced',
      term: 'Idempotence',
      definition: 'Operation can be applied multiple times without changing result',
      example: 'Payment processing that doesn\'t double-charge',
      aws: '-',
      azure: '-',
      other: '-'
    },
    {
      category: 'advanced',
      term: 'ACID Properties',
      definition: 'Guaranteeing database transactions',
      example: 'Funds transfer completes entirely or not at all',
      aws: '-',
      azure: '-',
      other: '-'
    },
    {
      category: 'advanced',
      term: 'Slowly Changing Dimensions',
      definition: 'Handling historical data changes in a warehouse',
      example: 'Tracking merchant information changes over time',
      aws: '-',
      azure: '-',
      other: '-'
    },
    
    // PLATFORM-SPECIFIC CONCEPTS
    {
      category: 'platform',
      term: 'S3 (AWS)',
      definition: 'Simple Storage Service, object storage',
      example: 'Storing transaction logs in encrypted bucket',
      aws: 'S3',
      azure: '-',
      other: '-'
    },
    {
      category: 'platform',
      term: 'Blob Storage (Azure)',
      definition: 'Microsoft\'s object storage solution',
      example: 'Archiving payment receipts',
      aws: '-',
      azure: 'Blob Storage',
      other: '-'
    },
    {
      category: 'platform',
      term: 'Redshift (AWS)',
      definition: 'Cloud data warehouse service',
      example: 'Weekly settlement reports across merchant data',
      aws: 'Redshift',
      azure: '-',
      other: '-'
    },
    {
      category: 'platform',
      term: 'Synapse Analytics (Azure)',
      definition: 'Analytics service for data warehousing and big data',
      example: 'Combining transactions with clickstream analysis',
      aws: '-',
      azure: 'Synapse Analytics',
      other: '-'
    },
    {
      category: 'platform',
      term: 'Glue (AWS)',
      definition: 'Serverless data integration service',
      example: 'Cataloging payment data sources',
      aws: 'Glue',
      azure: '-',
      other: '-'
    },
    {
      category: 'platform',
      term: 'Data Factory (Azure)',
      definition: 'Integration service for ETL/ELT workflows',
      example: 'Moving data from payment systems to data lake',
      aws: '-',
      azure: 'Data Factory',
      other: '-'
    },
    {
      category: 'platform',
      term: 'Athena (AWS)',
      definition: 'Interactive query service for S3 data',
      example: 'Ad-hoc fraud analysis queries against S3 data',
      aws: 'Athena',
      azure: '-',
      other: '-'
    },
    {
      category: 'platform',
      term: 'EMR (AWS)',
      definition: 'Managed Hadoop framework',
      example: 'Monthly reconciliation across historical data',
      aws: 'EMR',
      azure: '-',
      other: '-'
    },
    {
      category: 'platform',
      term: 'Lambda (AWS)',
      definition: 'Serverless compute service',
      example: 'Real-time payment validation functions',
      aws: 'Lambda',
      azure: '-',
      other: '-'
    },
    {
      category: 'platform',
      term: 'Azure Functions',
      definition: 'Microsoft\'s serverless compute',
      example: 'Fraud detection triggers on transactions',
      aws: '-',
      azure: 'Azure Functions',
      other: '-'
    }
  ];

  // Filter the glossary data based on category and search term
  const filteredData = glossaryData.filter(item => {
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesSearch = 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.example.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.aws.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.azure.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.other.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Removed toggle expanded functionality since all info is visible in the table

  return (
    <div className="flex flex-col max-w-6xl mx-auto p-4">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-lg text-center">
        <h1 className="text-2xl font-bold text-white">Data Engineering Glossary</h1>
        <p className="text-white opacity-80 mt-2">From Bits to Databricks: Comprehensive Data Terms with Platform Examples</p>
      </div>
      
      {/* Search and filter controls */}
      <div className="bg-white p-4 border-b flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search terms, definitions, examples..."
            className="w-full p-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setCategoryFilter(category.id)}
              className={`px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ${
                categoryFilter === category.id 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm' 
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Glossary table */}
      <div className="bg-white shadow-lg rounded-b-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Term</th>
              <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Definition</th>
              <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
              <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AWS</th>
              <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Azure</th>
              <th scope="col" className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Other</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <React.Fragment key={item.term}>
                  <tr className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="p-3 whitespace-nowrap font-medium text-gray-900">
                      {item.term}
                    </td>
                    <td className="p-3 text-gray-700">{item.definition}</td>
                    <td className="p-3 text-gray-700">{item.example}</td>
                    <td className="p-3 text-gray-700 whitespace-nowrap">
                      {item.aws}
                    </td>
                    <td className="p-3 text-gray-700 whitespace-nowrap">
                      {item.azure}
                    </td>
                    <td className="p-3 text-gray-700 whitespace-nowrap">
                      {item.other}
                    </td>
                  </tr>
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No terms found matching your criteria. Try adjusting your search or filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Using This Glossary</h2>
        <p className="text-gray-700 mb-2">
          This glossary provides comprehensive coverage of data engineering terms from fundamental concepts to platform-specific implementations.
        </p>
        <p className="text-gray-700">
          Click on any row to see expanded details. Use the category filters and search bar to quickly find specific terms.
        </p>
      </div>
    </div>
  );
};

export default DataEngineeringGlossary;