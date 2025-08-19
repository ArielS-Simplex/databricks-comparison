// AI Capability Matrix data (concise, qualitative)
const aiCapabilityData = [
    {
      id: 'ml-frameworks',
      category: 'Machine Learning Frameworks',
      title: 'Built-in ML Frameworks',
      databricks: 'MLflow, Spark ML, TensorFlow, PyTorch, XGBoost, scikit-learn, auto ML with direct integration',
      snowflake: 'Snowpark ML for model development, external framework integration via Snowpark (Python, Java, Scala)',
      details: 'Broader native framework support generally reduces integration effort. Databricks is more integrated; Snowflake focuses on Snowpark + connectors.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: broader built-in coverage | Snowflake: improving via Snowpark',
        source: 'Varies by workload and team skills'
      }
    },
    {
      id: 'model-serving',
      category: 'Model Deployment',
      title: 'Inference & Model Serving',
      databricks: 'End-to-end MLOps with managed model serving, batch & real-time inference, feature store integration',
      snowflake: 'Snowpark Container Services, Native App Framework for deployment, Cortex inference services',
      details: 'Unified MLOps vs. container-centric deployment. Choose based on operational model and team ownership.',
      metrics: {
        type: 'performance',
        winner: 'conditional',
        description: 'Databricks: integrated pipeline advantages | Snowflake: simple scale via serverless patterns',
        source: 'Architecture- and use-case-dependent'
      }
    },
    {
      id: 'vector-search',
      category: 'Vector Operations',
      title: 'Vector Search & Embeddings',
      databricks: 'Vector Search API (in preview), embeddings storage in Delta tables, integrated with ML workflow',
      snowflake: 'Vector Search API (in preview), vector types up to 16K dimensions, similarity scoring functions',
      details: 'Both support vector workloads; Databricks integrates with ML pipelines, Snowflake aligns with SQL-first patterns.',
      metrics: {
        type: 'performance',
        winner: 'conditional',
        description: 'Databricks: better ML workflow fit | Snowflake: solid for SQL-centric similarity search',
        source: 'Platform updates evolve rapidly'
      }
    },
    {
      id: 'llm-integration',
      category: 'Generative AI',
      title: 'LLM Integration & Fine-tuning',
      databricks: 'MosaicML integration, fine-tuning frameworks, DTLR for LLM training, Foundation Model API',
      snowflake: 'Cortex integration with major models, Arctic (in preview) for fine-tuning, Snowpark containers',
      details: 'Databricks focuses on end-to-end LLM workflows; Snowflake emphasizes integration with managed models.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: more complete in-platform LLM workflow | Snowflake: simpler integrations for common use',
        source: 'Product documentation and release notes'
      }
    },
    {
      id: 'ml-monitoring',
      category: 'ML Operations',
      title: 'Model Monitoring & Governance',
      databricks: 'MLflow tracking, model registry, Unity Catalog for governance, feature store, experiment tracking',
      snowflake: 'Snowsight dashboards, governance via Data Cloud, external monitoring tools required',
      details: 'Governance depth differs: Databricks offers ML-centric governance; Snowflake relies more on external tooling for ML specifics.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: unified ML governance | Snowflake: strong data governance, lighter ML-specifics',
        source: 'Qualitative comparison'
      }
    },
    {
      id: 'data-preparation',
      category: 'Data Preparation',
      title: 'Feature Engineering Capabilities',
      databricks: 'Feature Store, comprehensive transformations library, extensive preprocessing options',
      snowflake: 'SQL transformations, Snowpark for custom logic, moderate preprocessing capabilities',
      details: 'Native feature tooling improves reuse and consistency across models.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: native feature store | Snowflake: SQL-first approach',
        source: 'Product capabilities'
      }
    },
    {
      id: 'streaming-ml',
      category: 'Streaming AI',
      title: 'Streaming ML & Real-time Inference',
      databricks: 'Structured Streaming, Delta Live Tables, real-time feature computation, moderate latency (50-100ms)',
      snowflake: 'Snowpipe Streaming, moderate latency (100-200ms), external streaming processing often required',
      details: 'Both support streaming patterns; Databricks provides richer transformation options.',
      metrics: {
        type: 'performance',
        winner: 'databricks',
        description: 'Databricks: stronger for complex streaming transforms | Snowflake: simpler ingestion focus',
        source: 'Feature comparison'
      }
    },
    {
      id: 'cost-optimization',
      category: 'Operations',
      title: 'ML Infrastructure Cost',
      databricks: 'Optimized for large-scale training, photon engine reduces costs, higher up-front investment',
      snowflake: 'Serverless scaling, consumption-based pricing, separated compute and storage costs',
      details: 'TCO depends on workload stability, scale, and governance needs.',
      metrics: {
        type: 'cost',
        winner: 'conditional',
        description: 'Stable, ML-heavy: Databricks often economical | Variable, analytics-heavy: Snowflake simpler to control',
        source: 'Usage patterns and pricing models'
      }
    },
    {
      id: 'generative-ai-solutions',
      category: 'Generative AI',
      title: 'GenAI Solutions & Frameworks',
      databricks: 'Mosaic AI platform, DTLR for fine-tuning, retrieval-augmented generation APIs, LLM lifecycle management',
      snowflake: 'Cortex LLM functions, Document AI, no native fine-tuning, Arctic in early preview',
      details: 'Pre-built GenAI capabilities accelerate time to first value; depth differs by platform focus.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: end-to-end GenAI tooling | Snowflake: pragmatic built-ins for common use',
        source: 'Product capabilities'
      }
    },
    {
      id: 'gpu-acceleration',
      category: 'Hardware Optimization',
      title: 'GPU Optimization & Scaling',
      databricks: 'Native GPU cluster management, GPU-optimized libraries, GPU instance autoscaling',
      snowflake: 'Snowpark Container Services for GPU workloads, less integrated management',
      details: 'GPU support is available on both; Databricks integrates cluster/GPU management more tightly.',
      metrics: {
        type: 'performance',
        winner: 'databricks',
        description: 'Databricks: tighter GPU integration | Snowflake: containerized option via Snowpark',
        source: 'Product docs'
      }
    }
  ];
  
  export default aiCapabilityData;