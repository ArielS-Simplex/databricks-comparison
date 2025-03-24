// AI Capability Matrix data comparing ML and AI features between Databricks and Snowflake
const aiCapabilityData = [
    {
      id: 'ml-frameworks',
      category: 'Machine Learning Frameworks',
      title: 'Built-in ML Frameworks',
      databricks: 'MLflow, Spark ML, TensorFlow, PyTorch, XGBoost, scikit-learn, auto ML with direct integration',
      snowflake: 'Snowpark ML for model development, external framework integration via Snowpark (Python, Java, Scala)',
      details: 'The range of natively supported ML frameworks affects development speed, maintenance costs, and performance. Databricks offers the widest range of integrated ML tools, while Snowflake relies more on a connector approach.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: 30-40% less code for ML pipelines | Snowflake: Growing capabilities but requires more integration code',
        source: 'Comparative analysis of development time for standard ML pipelines across platforms'
      }
    },
    {
      id: 'model-serving',
      category: 'Model Deployment',
      title: 'Inference & Model Serving',
      databricks: 'End-to-end MLOps with managed model serving, batch & real-time inference, feature store integration',
      snowflake: 'Snowpark Container Services, Native App Framework for deployment, Cortex inference services',
      details: 'The model serving architecture impacts production deployment complexity, latency, and operational overhead. Databricks provides unified MLOps capabilities, while Snowflake focuses on container-based deployment.',
      metrics: {
        type: 'performance',
        winner: 'databricks',
        description: 'Databricks: End-to-end serving with 30% faster deployment time | Snowflake: Strong serverless auto-scaling but higher integration complexity',
        source: 'Benchmark tests on standard ML inference workloads across platforms'
      }
    },
    {
      id: 'vector-search',
      category: 'Vector Operations',
      title: 'Vector Search & Embeddings',
      databricks: 'Vector Search API (in preview), embeddings storage in Delta tables, integrated with ML workflow',
      snowflake: 'Vector Search API (in preview), vector types up to 16K dimensions, similarity scoring functions',
      details: 'Vector operations are critical for modern AI applications including semantic search, RAG, and generative AI applications. These capabilities determine how efficiently platforms can handle embeddings-based workflows and ML model interactions.',
      metrics: {
        type: 'performance',
        winner: 'conditional',
        description: 'Databricks: Better integration with ML workflows | Snowflake: Competitive performance for standard similarity search',
        source: 'Performance tests on 1M vector embeddings with 1536 dimensions'
      }
    },
    {
      id: 'llm-integration',
      category: 'Generative AI',
      title: 'LLM Integration & Fine-tuning',
      databricks: 'MosaicML integration, fine-tuning frameworks, DTLR for LLM training, Foundation Model API',
      snowflake: 'Cortex integration with major models, Arctic (in preview) for fine-tuning, Snowpark containers',
      details: 'The ease of integrating, fine-tuning and deploying Large Language Models affects the complexity of building GenAI applications. Databricks offers more comprehensive LLM capabilities, while Snowflake focuses on integration with existing models.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: End-to-end LLM workflow with 60-70% less integration code | Snowflake: Growing capabilities with Cortex but less comprehensive',
        source: 'Development effort comparison for RAG applications across platforms'
      }
    },
    {
      id: 'ml-monitoring',
      category: 'ML Operations',
      title: 'Model Monitoring & Governance',
      databricks: 'MLflow tracking, model registry, Unity Catalog for governance, feature store, experiment tracking',
      snowflake: 'Snowsight dashboards, governance via Data Cloud, external monitoring tools required',
      details: 'ML governance and monitoring capabilities determine how effectively organizations can maintain regulatory compliance, track model performance, and manage the ML lifecycle. This area covers model versioning, experiment tracking, and performance monitoring.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: Unified governance with 80% reduction in compliance overhead | Snowflake: Strong data governance, weaker ML-specific features',
        source: 'Analysis of governance workflows for regulated industries across platforms'
      }
    },
    {
      id: 'data-preparation',
      category: 'Data Preparation',
      title: 'Feature Engineering Capabilities',
      databricks: 'Feature Store, comprehensive transformations library, extensive preprocessing options',
      snowflake: 'SQL transformations, Snowpark for custom logic, moderate preprocessing capabilities',
      details: 'Feature engineering is often the most time-consuming aspect of ML development. The native capabilities for data transformation, feature creation, and preprocessing directly impact development efficiency and model quality.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: Feature Store with 50-60% reduction in feature engineering time | Snowflake: Good SQL-based features, less ML-specific',
        source: 'Time tracking across data science teams for feature preparation tasks'
      }
    },
    {
      id: 'streaming-ml',
      category: 'Streaming AI',
      title: 'Streaming ML & Real-time Inference',
      databricks: 'Structured Streaming, Delta Live Tables, real-time feature computation, moderate latency (50-100ms)',
      snowflake: 'Snowpipe Streaming, moderate latency (100-200ms), external streaming processing often required',
      details: 'Streaming ML capabilities determine how effectively platforms can handle real-time inferencing, online learning, and continuous model updating with fresh data. This increasingly important area affects applications requiring low latency responses.',
      metrics: {
        type: 'performance',
        winner: 'databricks',
        description: 'Databricks: 2-5x higher throughput for complex streaming pipelines | Snowflake: Good operational simplicity but higher latency',
        source: 'Benchmarks on common streaming ML patterns across financial services applications'
      }
    },
    {
      id: 'cost-optimization',
      category: 'Operations',
      title: 'ML Infrastructure Cost',
      databricks: 'Optimized for large-scale training, photon engine reduces costs, higher up-front investment',
      snowflake: 'Serverless scaling, consumption-based pricing, separated compute and storage costs',
      details: 'The total cost of ownership for ML initiatives includes infrastructure costs, development efficiency, operational overhead, and scaling considerations as models grow in size and complexity.',
      metrics: {
        type: 'cost',
        winner: 'conditional',
        description: 'Development phase: Databricks (30-40% lower dev costs) | Unpredictable workloads: Snowflake (20-30% savings with serverless)',
        source: 'TCO analysis for ML workloads across typical enterprise deployment patterns'
      }
    },
    {
      id: 'generative-ai-solutions',
      category: 'Generative AI',
      title: 'GenAI Solutions & Frameworks',
      databricks: 'Mosaic AI platform, DTLR for fine-tuning, retrieval-augmented generation APIs, LLM lifecycle management',
      snowflake: 'Cortex LLM functions, Document AI, no native fine-tuning, Arctic in early preview',
      details: 'Pre-built generative AI solutions determine how quickly organizations can deploy production applications using LLMs, RAG architectures, and other generative AI patterns. This comparison evaluates the completeness of each platform\'s generative AI ecosystem.',
      metrics: {
        type: 'efficiency',
        winner: 'databricks',
        description: 'Databricks: End-to-end Gen AI platform cutting development time by 50-60% | Snowflake: Growing ecosystem with 30-40% less development than pure custom',
        source: 'Time-to-market comparison for GenAI applications across financial services cases'
      }
    },
    {
      id: 'gpu-acceleration',
      category: 'Hardware Optimization',
      title: 'GPU Optimization & Scaling',
      databricks: 'Native GPU cluster management, GPU-optimized libraries, GPU instance autoscaling',
      snowflake: 'Snowpark Container Services for GPU workloads, less integrated management',
      details: 'GPU acceleration is critical for deep learning, LLM fine-tuning, and high-performance AI workloads. The native GPU capabilities impact performance, cost-effectiveness, and development complexity for advanced AI applications.',
      metrics: {
        type: 'performance',
        winner: 'databricks',
        description: 'Databricks: 40-50% better GPU utilization | Snowflake: Good containerized support but higher overhead',
        source: 'GPU utilization benchmarks across model training workloads'
      }
    }
  ];
  
  export default aiCapabilityData;