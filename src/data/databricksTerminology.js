const databricksTerminology = [
  {
    id: 'delta-lake',
    term: 'Delta Lake',
    definition: 'An open-source storage layer that brings ACID transactions to big data workloads.',
    example: 'When two data engineers update the same customer dataset simultaneously, Delta Lake ensures neither overrides the other\'s changes.',
    why: 'Provides reliability and consistency guarantees previously only available in traditional databases.'
  },
  {
    id: 'medallion',
    term: 'Medallion Architecture',
    definition: 'A data organization framework using Bronze (raw), Silver (validated), and Gold (aggregated) layers.',
    example: 'Raw JSON payment transactions go into Bronze, cleansed data with proper types into Silver, and daily merchant summaries into Gold.',
    why: 'Creates clear separation of concerns and progressive data quality improvement through the pipeline.'
  },
  {
    id: 'lakehouse',
    term: 'Lakehouse',
    definition: 'A hybrid architecture combining data lake storage with data warehouse functionality.',
    example: 'Storing petabytes of raw data while still providing SQL query capabilities and BI tool connectivity.',
    why: 'Eliminates need for separate systems for different data workloads (analytics, ML, BI).'
  },
  {
    id: 'unity-catalog',
    term: 'Unity Catalog',
    definition: 'Unified governance layer for managing data assets across clouds with fine-grained access controls.',
    example: 'Restricting access to PII columns in customer data while allowing aggregated metrics for analytics teams.',
    why: 'Centralizes security, auditing, and lineage tracking across all data assets.'
  },
  {
    id: 'photon',
    term: 'Photon Engine',
    definition: 'C++ vectorized query execution engine that accelerates Spark workloads without code changes.',
    example: 'A complex aggregation query runs 5x faster with Photon enabled without modifying any SQL code.',
    why: 'Delivers significant performance gains for data-intensive workloads, especially for analytics.'
  },
  {
    id: 'delta-live-tables',
    term: 'Delta Live Tables (DLT)',
    definition: 'Declarative framework for building reliable data pipelines with quality controls and monitoring.',
    example: 'Defining data quality expectations like "all transaction_ids must be unique" directly in pipeline code.',
    why: 'Reduces boilerplate code and increases reliability by automating dependency management and quality checks.'
  },
  {
    id: 'mlflow',
    term: 'MLflow',
    definition: 'Open-source platform for managing the ML lifecycle including experimentation, reproducibility, and deployment.',
    example: 'Tracking model parameters, metrics, and artifacts during fraud detection model development.',
    why: 'Standardizes the machine learning process from experiment to production.'
  },
  {
    id: 'structured-streaming',
    term: 'Structured Streaming',
    definition: 'Spark API for continuous data processing with exactly-once guarantees.',
    example: 'Processing a stream of payment events as they arrive, updating fraud detection models in real-time.',
    why: 'Enables real-time data processing using the same APIs as batch processing.'
  },
  {
    id: 'z-ordering',
    term: 'Z-Ordering',
    definition: 'Physical data organization technique that co-locates related data for faster queries.',
    example: 'Z-ordering transaction data by date and merchant_id improves filtering performance by 10-100x.',
    why: 'Optimizes read performance for specific query patterns without requiring index maintenance.'
  },
  {
    id: 'dbus',
    term: 'DBUs (Databricks Units)',
    definition: 'Billing units representing compute resources consumed per hour.',
    example: 'A Standard cluster with 4 cores might consume 0.75 DBUs per hour while running.',
    why: 'Forms the basis of usage-based pricing model, allowing cost optimization via scaling.'
  },
  {
    id: 'notebooks',
    term: 'Notebooks',
    definition: 'Interactive documents combining code, visualizations, and markdown in multiple languages.',
    example: 'Creating an end-to-end data pipeline with SQL data preparation, Python modeling, and R visualizations in a single notebook.',
    why: 'Enables collaborative, documented data workflows bridging data engineering and data science.'
  },
  {
    id: 'workspace',
    term: 'Workspace',
    definition: 'Collaborative environment for organizing and developing Databricks assets.',
    example: 'Organizing notebooks into folders for different departments while sharing common utilities.',
    why: 'Provides team-based collaboration, access controls, and versioning for data assets.'
  },
  {
    id: 'clusters',
    term: 'Clusters',
    definition: 'Managed compute resources that execute Databricks workloads with auto-scaling capabilities.',
    example: 'Setting up an auto-scaling cluster that grows to 20 nodes during peak processing and scales down to 2 during quiet periods.',
    why: 'Separates storage from compute, allowing flexible scaling based on workload demands.'
  },
  {
    id: 'auto-loader',
    term: 'Auto Loader',
    definition: 'Efficient data ingestion service for incrementally processing new files in cloud storage.',
    example: 'Automatically detecting and processing new transaction log files as they arrive in S3 without explicit listing operations.',
    why: 'Simplifies data ingestion while optimizing for cost and performance compared to manual approaches.'
  },
  {
    id: 'delta-sharing',
    term: 'Delta Sharing',
    definition: 'Open protocol for securely sharing data across organizations regardless of platform.',
    example: 'Sharing payment transaction aggregates with partner organizations without giving direct access to your data lake.',
    why: 'Enables secure, efficient data sharing workflows across organizational boundaries.'
  }
];

export default databricksTerminology;
