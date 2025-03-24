// Executive summary data for the AI Capability Matrix
// This data provides business-focused translations of technical capabilities
const executiveSummaryData = [
    {
      id: 'ml-frameworks',
      outcomes: ['innovation', 'time-to-market'],
      businessImpact: "Choice of ML platform directly impacts how quickly your data science team can develop and deploy AI solutions. The right platform reduces development time by 30-40% and increases model quality.",
      recommendation: 'databricks',
      reasonDatabricks: "you prioritize AI innovation and have dedicated data science resources",
      reasonSnowflake: "you need simpler operations and have analytics-focused teams rather than AI specialists",
      investmentImplications: "Databricks requires higher upfront investment in both platform costs and technical expertise, but delivers faster development cycles and more powerful AI capabilities. Snowflake offers lower barriers to entry for teams without specialized ML expertise.",
      caseStudy: "A financial services firm reduced fraud model development time by 60% by standardizing on Databricks, enabling them to respond to new fraud patterns in days rather than weeks.",
      roi: "30-40% reduction in total development costs for ML projects"
    },
    {
      id: 'model-serving',
      outcomes: ['time-to-market', 'cost-reduction'],
      businessImpact: "The deployment architecture determines how quickly AI models reach production and how efficiently they can be scaled and maintained, directly impacting both time-to-market and operational costs.",
      recommendation: 'conditional',
      reasonDatabricks: "your teams are building complex AI applications with frequent updates",
      reasonSnowflake: "you need simpler deployment with more serverless operations",
      investmentImplications: "Databricks provides more comprehensive MLOps capabilities but requires more specialized knowledge. Snowflake's approach is more accessible but less comprehensive for complex ML workloads.",
      caseStudy: "A retail company using Databricks was able to deploy 3x more personalization models in the same timeframe compared to their previous solution, resulting in a 12% increase in conversion rates.",
      roi: "25-35% reduction in model deployment and maintenance costs"
    },
    {
      id: 'vector-search',
      outcomes: ['innovation', 'time-to-market'],
      businessImpact: "Vector operations are essential for modern AI applications including semantic search, recommendation systems, and retrieval augmented generation with LLMs. The right platform accelerates time-to-market for these emerging AI capabilities.",
      recommendation: 'conditional',
      reasonDatabricks: "you're building complex AI applications integrated with your ML pipelines",
      reasonSnowflake: "you need simpler vector operations integrated with your existing data warehouse",
      investmentImplications: "Both platforms offer vector capabilities, but with different performance characteristics and integration patterns. The choice impacts how easily teams can implement modern AI features.",
      caseStudy: "A media company implemented semantic search for content discovery using vector embeddings, resulting in 30% higher engagement with recommended content.",
      roi: "40-50% faster implementation of semantic search and AI-powered recommendations"
    },
    {
      id: 'llm-integration',
      outcomes: ['innovation', 'risk-reduction'],
      businessImpact: "As generative AI becomes central to business innovation, your platform's LLM capabilities directly impact the speed, cost, and governance of GenAI applications that will drive future competitive advantage.",
      recommendation: 'databricks',
      reasonDatabricks: "you're building custom, fine-tuned LLM applications or need end-to-end LLM workflows",
      reasonSnowflake: "you primarily need to integrate with existing LLM APIs rather than custom model development",
      investmentImplications: "Databricks offers more comprehensive LLM capabilities but at higher cost and complexity. This investment pays off for companies building differentiated AI capabilities rather than using off-the-shelf models.",
      caseStudy: "A healthcare provider fine-tuned LLMs for medical documentation using Databricks, resulting in 70% reduction in documentation time for physicians while maintaining higher accuracy than generic models.",
      roi: "60-70% reduction in custom LLM development and deployment time"
    },
    {
      id: 'ml-monitoring',
      outcomes: ['risk-reduction', 'cost-reduction'],
      businessImpact: "AI governance and monitoring directly impacts regulatory compliance, model performance, and risk management. Poor governance leads to model drift, underperformance, and potential regulatory issues.",
      recommendation: 'databricks',
      reasonDatabricks: "you operate in regulated industries or need comprehensive ML governance",
      reasonSnowflake: "you have simpler ML use cases with less stringent governance requirements",
      investmentImplications: "Databricks' unified ML governance requires upfront investment but dramatically reduces compliance overhead and improves model reliability. Snowflake requires more custom development for comprehensive ML monitoring.",
      caseStudy: "A banking institution implemented Databricks' MLflow tracking to monitor model drift across 200+ models, reducing model-related incidents by 80% and streamlining regulatory reporting.",
      roi: "70-80% reduction in compliance overhead for regulated ML applications"
    },
    {
      id: 'data-preparation',
      outcomes: ['time-to-market', 'cost-reduction'],
      businessImpact: "Feature engineering is typically 70-80% of ML development effort. The right platform dramatically reduces this time and enables feature reuse across models and teams.",
      recommendation: 'databricks',
      reasonDatabricks: "you're building multiple ML models that can benefit from shared features",
      reasonSnowflake: "your ML needs are primarily centered around SQL-based analytics",
      investmentImplications: "Databricks' Feature Store represents upfront investment but provides ongoing efficiency gains through feature reuse and consistent feature engineering across teams.",
      caseStudy: "An insurance company reduced time-to-market for new risk models by 50% by implementing a centralized feature store in Databricks, enabling cross-team feature reuse.",
      roi: "50-60% reduction in feature engineering time across the organization"
    },
    {
      id: 'streaming-ml',
      outcomes: ['innovation', 'time-to-market'],
      businessImpact: "Real-time AI enables immediate action on emerging patterns and events, critical for applications in fraud detection, predictive maintenance, and real-time personalization.",
      recommendation: 'databricks',
      reasonDatabricks: "you need complex streaming ML pipelines with real-time model updates",
      reasonSnowflake: "you have simpler streaming requirements with less emphasis on low latency",
      investmentImplications: "Databricks provides more comprehensive streaming ML capabilities but requires more specialized knowledge. The investment delivers significant advantages for time-sensitive use cases.",
      caseStudy: "An e-commerce platform implemented real-time fraud detection with Databricks, reducing fraud losses by 35% while decreasing false positives by 20%.",
      roi: "2-3x higher throughput for streaming analytics workloads"
    },
    {
      id: 'cost-optimization',
      outcomes: ['cost-reduction'],
      businessImpact: "ML infrastructure costs can grow rapidly with model complexity and data volume. Your platform choice significantly impacts both immediate costs and long-term TCO for AI initiatives.",
      recommendation: 'conditional',
      reasonDatabricks: "you have predictable, large-scale ML workloads and technical resources to optimize",
      reasonSnowflake: "you have variable workloads and prioritize operational simplicity over absolute cost",
      investmentImplications: "Databricks tends to have better economics for sustained, intensive ML workloads but requires more tuning. Snowflake offers more predictable costs with less optimization overhead.",
      caseStudy: "A manufacturing firm reduced ML infrastructure costs by 40% by migrating from cloud VMs to optimized Databricks clusters, while improving model training speed.",
      roi: "30-50% reduction in total infrastructure costs for large-scale ML projects"
    },
    {
      id: 'generative-ai-solutions',
      outcomes: ['innovation', 'time-to-market'],
      businessImpact: "Pre-built generative AI frameworks determine time-to-market for increasingly critical AI applications like chatbots, content generation, and knowledge retrieval systems.",
      recommendation: 'databricks',
      reasonDatabricks: "you're building custom GenAI applications requiring fine-tuning or specialized capabilities",
      reasonSnowflake: "you need simple integration of existing models with your data warehouse",
      investmentImplications: "Databricks' comprehensive GenAI ecosystem requires higher investment but delivers significantly faster development cycles for sophisticated GenAI applications.",
      caseStudy: "A professional services firm built a RAG-based knowledge assistant on Databricks that delivered $3M annual savings through improved knowledge worker productivity.",
      roi: "50-60% reduction in GenAI application development time"
    },
    {
      id: 'gpu-acceleration',
      outcomes: ['cost-reduction', 'time-to-market'],
      businessImpact: "GPU acceleration is essential for deep learning and LLM fine-tuning. The right platform optimizes GPU utilization, directly reducing training costs and accelerating model development.",
      recommendation: 'databricks',
      reasonDatabricks: "you're doing significant deep learning or LLM fine-tuning requiring GPU resources",
      reasonSnowflake: "you have limited GPU workloads or rely primarily on pre-trained models",
      investmentImplications: "Databricks' native GPU management provides better utilization and cost efficiency for GPU-intensive workloads, which can represent significant portions of AI project budgets.",
      caseStudy: "A media company reduced LLM fine-tuning costs by 45% through Databricks' optimized GPU management compared to their previous infrastructure.",
      roi: "40-50% better GPU utilization, translating to proportional cost savings for training"
    }
  ];
  
  export default executiveSummaryData;