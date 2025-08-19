// Executive summary data for the AI Capability Matrix (concise, qualitative)
const executiveSummaryData = [
    {
      id: 'ml-frameworks',
      outcomes: ['innovation', 'time-to-market'],
  businessImpact: "Platform choice affects speed to deliver AI and ongoing maintainability.",
      recommendation: 'databricks',
  reasonDatabricks: "you prioritize AI innovation and have data science talent",
  reasonSnowflake: "you prefer simpler ops with analytics-focused teams",
  investmentImplications: "Databricks: higher upfront skill/platform investment; Snowflake: simpler to onboard, narrower ML scope.",
  caseStudy: "Financial services standardized on Databricks to accelerate fraud model iteration.",
  roi: null
    },
    {
      id: 'model-serving',
      outcomes: ['time-to-market', 'cost-reduction'],
  businessImpact: "Serving approach impacts release cadence and run costs.",
      recommendation: 'conditional',
  reasonDatabricks: "you build complex AI with frequent updates",
  reasonSnowflake: "you prefer serverless simplicity",
  investmentImplications: "Databricks: deeper MLOps, more expertise; Snowflake: simpler orchestration, fewer knobs.",
  caseStudy: "Retail teams increased release cadence with unified pipelines.",
  roi: null
    },
    {
      id: 'vector-search',
      outcomes: ['innovation', 'time-to-market'],
  businessImpact: "Vector features enable search/recommendations and RAG use cases.",
      recommendation: 'conditional',
  reasonDatabricks: "you need ML-pipeline integration",
  reasonSnowflake: "you want SQL-first integration in the warehouse",
  investmentImplications: "Choose based on developer workflow and hosting strategy.",
  caseStudy: "Media teams launched semantic search atop existing pipelines.",
  roi: null
    },
    {
      id: 'llm-integration',
      outcomes: ['innovation', 'risk-reduction'],
  businessImpact: "LLM tooling affects build speed, cost, and governance.",
      recommendation: 'databricks',
  reasonDatabricks: "you fine-tune or need end-to-end LLM workflows",
  reasonSnowflake: "you primarily call managed LLMs",
  investmentImplications: "Databricks: deeper LLM stack; Snowflake: simpler integration.",
  caseStudy: "Healthcare teams streamlined documentation with platform-managed LLM flow.",
  roi: null
    },
    {
      id: 'ml-monitoring',
      outcomes: ['risk-reduction', 'cost-reduction'],
  businessImpact: "Governance reduces drift, downtime, and audit effort.",
      recommendation: 'databricks',
  reasonDatabricks: "you need ML-specific governance and lineage",
  reasonSnowflake: "you have straightforward BI/analytics ML",
  investmentImplications: "Databricks: built-in ML governance; Snowflake: augment with external tools.",
  caseStudy: "Banking teams centralized model tracking and lineage.",
  roi: null
    },
    {
      id: 'data-preparation',
      outcomes: ['time-to-market', 'cost-reduction'],
  businessImpact: "Feature stores improve reuse and consistency.",
      recommendation: 'databricks',
  reasonDatabricks: "you benefit from cross-model feature reuse",
  reasonSnowflake: "you rely on SQL-first pipelines",
  investmentImplications: "Databricks: feature store; Snowflake: SQL transformations + Snowpark.",
  caseStudy: "Insurance teams standardized core features for reuse.",
  roi: null
    },
    {
      id: 'streaming-ml',
      outcomes: ['innovation', 'time-to-market'],
  businessImpact: "Streaming ML supports real-time decisions.",
      recommendation: 'databricks',
  reasonDatabricks: "you need complex transformations and low-latency",
  reasonSnowflake: "you focus on ingestion and simpler transforms",
  investmentImplications: "Databricks: richer streaming; Snowflake: simpler ingestion paths.",
  caseStudy: "E-commerce reduced fraud by acting on events in near real-time.",
  roi: null
    },
    {
      id: 'cost-optimization',
      outcomes: ['cost-reduction'],
  businessImpact: "Cost control depends on workload patterns and governance.",
      recommendation: 'conditional',
  reasonDatabricks: "you optimize sustained ML workloads",
  reasonSnowflake: "you prefer predictable, serverless operations",
  investmentImplications: "Databricks: tuning yields savings; Snowflake: simpler controls, clear billing.",
  caseStudy: "Manufacturing teams consolidated training on optimized clusters.",
  roi: null
    },
    {
      id: 'generative-ai-solutions',
      outcomes: ['innovation', 'time-to-market'],
  businessImpact: "Pre-built GenAI features compress build time.",
      recommendation: 'databricks',
  reasonDatabricks: "you fine-tune or orchestrate end-to-end",
  reasonSnowflake: "you integrate existing models with warehouse data",
  investmentImplications: "Databricks: deeper stack; Snowflake: fast start with managed services.",
  caseStudy: "Knowledge assistants deployed quickly using existing corpora.",
  roi: null
    },
    {
      id: 'gpu-acceleration',
      outcomes: ['cost-reduction', 'time-to-market'],
  businessImpact: "GPU management impacts training speed and cost.",
      recommendation: 'databricks',
  reasonDatabricks: "you run deep learning or LLM fine-tuning",
  reasonSnowflake: "you mostly use managed models",
  investmentImplications: "Databricks: tighter GPU integration; Snowflake: containerized path.",
  caseStudy: "Media teams improved training throughput with optimized clusters.",
  roi: null
    }
  ];
  
  export default executiveSummaryData;