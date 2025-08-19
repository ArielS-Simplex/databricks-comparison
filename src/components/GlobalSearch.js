import React, { useState, useEffect } from 'react';

const GlobalSearch = ({ onClose, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Searchable content database
  const searchableContent = [
    // Platform Comparison
    {
      id: 'platforms-overview',
      category: 'Platform Comparison',
      title: 'Databricks vs Snowflake vs Microsoft Fabric',
      description: 'Side-by-side platform comparison',
      content: 'databricks snowflake microsoft fabric platform comparison analytics data warehouse lakehouse',
      route: { category: 'platform-compare', subcategory: 'platforms' }
    },
    {
      id: 'cost-comparison',
      category: 'Cost Analysis',
      title: 'Cost Comparison Tool',
      description: 'Cloud platform cost comparison',
      content: 'cost pricing roi calculator budget comparison databricks snowflake fabric dbu credits capacity units',
      route: { category: 'platform-compare', subcategory: 'roi-calculator' }
    },
    {
      id: 'performance-benchmarks',
      category: 'Performance',
      title: 'Performance Benchmarks',
      description: 'Performance benchmarks & metrics',
      content: 'performance benchmark throughput latency scalability etl ml analytics query speed',
      route: { category: 'platform-compare', subcategory: 'performance' }
    },
    {
      id: 'feature-comparison',
      category: 'Features',
      title: 'Feature Comparison',
      description: 'Feature-by-feature comparison',
      content: 'features capabilities machine learning data governance security api integration serverless',
      route: { category: 'platform-compare', subcategory: 'features' }
    },
    {
      id: 'case-studies',
      category: 'Case Studies',
      title: 'Case Study Library',
      description: 'Real implementation examples',
      content: 'case studies implementation examples financial retail manufacturing healthcare media energy fraud detection customer analytics predictive maintenance',
      route: { category: 'platform-compare', subcategory: 'case-studies' }
    },
    
    // Architecture
    {
      id: 'architecture-overview',
      category: 'Architecture',
      title: 'Architecture Overview',
      description: 'High-level architecture comparison',
      content: 'architecture overview technical design infrastructure components',
      route: { category: 'architecture', subcategory: 'overview' }
    },
    {
      id: 'databricks-architecture',
      category: 'Architecture',
      title: 'Databricks Architecture',
      description: 'Databricks technical details',
      content: 'databricks architecture spark delta lake unity catalog cluster management lakehouse',
      route: { category: 'architecture', subcategory: 'databricks' }
    },
    {
      id: 'snowflake-architecture',
      category: 'Architecture',
      title: 'Snowflake Architecture',
      description: 'Snowflake technical details',
      content: 'snowflake architecture virtual warehouse compute storage metadata cloud data sharing',
      route: { category: 'architecture', subcategory: 'snowflake' }
    },
    {
      id: 'fabric-architecture',
      category: 'Architecture',
      title: 'Microsoft Fabric Architecture',
      description: 'Microsoft Fabric technical details',
      content: 'microsoft fabric architecture onelake power bi azure synapse data factory',
      route: { category: 'architecture', subcategory: 'fabric' }
    },
    
    // Migration Guide
    {
      id: 'migration-guide',
      category: 'Migration',
      title: 'Migration Strategy & Timeline',
      description: 'Step-by-step migration guidance',
      content: 'migration guide strategy timeline nuvei decision planning assessment risk mitigation',
      route: { category: 'nuvei-migration', subcategory: 'guide' }
    },

    // Feature-specific content
    {
      id: 'machine-learning',
      category: 'Machine Learning',
      title: 'ML Capabilities',
      description: 'Machine learning and AI features',
      content: 'machine learning ML AI mlflow automl feature store model deployment training inference spark ml',
      route: { category: 'platform-compare', subcategory: 'features' }
    },
    {
      id: 'data-governance',
      category: 'Data Governance',
      title: 'Governance & Security',
      description: 'Data governance and security features',
      content: 'data governance security unity catalog rbac access control encryption compliance gdpr hipaa',
      route: { category: 'platform-compare', subcategory: 'features' }
    },
    {
      id: 'real-time-analytics',
      category: 'Real-time Analytics',
      title: 'Streaming & Real-time',
      description: 'Real-time analytics capabilities',
      content: 'real-time streaming analytics kafka structured streaming continuous processing event-driven',
      route: { category: 'platform-compare', subcategory: 'features' }
    }
  ];

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate search delay for better UX
    const searchTimeout = setTimeout(() => {
      const query = searchTerm.toLowerCase();
      const searchResults = searchableContent.filter(item => {
        return (
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.content.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
        );
      });

      // Sort by relevance (title matches first, then description, then content)
      searchResults.sort((a, b) => {
        const aTitle = a.title.toLowerCase().includes(query) ? 3 : 0;
        const aDesc = a.description.toLowerCase().includes(query) ? 2 : 0;
        const aContent = a.content.toLowerCase().includes(query) ? 1 : 0;
        const aScore = aTitle + aDesc + aContent;

        const bTitle = b.title.toLowerCase().includes(query) ? 3 : 0;
        const bDesc = b.description.toLowerCase().includes(query) ? 2 : 0;
        const bContent = b.content.toLowerCase().includes(query) ? 1 : 0;
        const bScore = bTitle + bDesc + bContent;

        return bScore - aScore;
      });

      setResults(searchResults);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [searchTerm]);

  const handleResultClick = (result) => {
    onNavigate(result.route.category, result.route.subcategory);
    onClose();
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <mark key={index} className="bg-yellow-200">{part}</mark> : part
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-96 overflow-hidden">
        {/* Search Input */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for features, platforms, case studies..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
            <button
              onClick={onClose}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-80 overflow-y-auto">
          {isLoading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}

          {!isLoading && searchTerm && results.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-500">No results found for "{searchTerm}"</p>
              <p className="text-sm text-gray-400 mt-1">Try different keywords or check your spelling</p>
            </div>
          )}

          {!isLoading && results.length > 0 && (
            <div className="py-2">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-sm font-medium text-gray-900">
                          {highlightText(result.title, searchTerm)}
                        </h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {highlightText(result.description, searchTerm)}
                      </p>
                    </div>
                    <div className="text-gray-400 ml-2">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {!searchTerm && (
            <div className="py-8 px-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Popular Searches</h3>
              <div className="grid grid-cols-2 gap-2">
                {['machine learning', 'cost comparison', 'databricks', 'snowflake', 'performance', 'case studies'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchTerm(term)}
                    className="text-left px-3 py-2 bg-gray-100 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;