import React, { useState } from 'react';
import glossaryData from '../data/glossaryData';

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
    <div>
      {/* Simplified gradient header with blue-to-purple gradient */}
      <div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg mb-4 text-center"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Data Engineering Glossary</h1>
        <p className="text-white/80">From Bits to Big Data: Interactive Guide to Data Engineering Terms</p>
      </div>
      
      {/* Search and filter controls with improved alignment */}
      <div className="bg-white p-6 rounded-t-lg shadow-md hover:shadow-xl transition-shadow mb-0">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search terms, definitions, examples..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setCategoryFilter(category.id)}
                className={`px-4 py-2 mx-2 my-1 rounded-lg transition-all duration-200 ${
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
      </div>
      
      {/* Glossary table - replaced grid with table layout */}
      <div className="bg-white shadow-lg rounded-b-lg overflow-x-auto mb-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
              <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Term</th>
              <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Definition</th>
              <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Example</th>
              <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">AWS</th>
              <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Azure</th>
              <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Other</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {filteredData.length > 0 ? (
              filteredData.map((item, idx) => (
                <tr 
                  key={item.term}
                  className={`hover:bg-blue-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{item.term}</span>
                      <span className="text-xs text-blue-600 mt-1">
                        {categories.find(c => c.id === item.category)?.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{item.definition}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{item.example}</td>
                  <td className="px-4 py-3">
                    {item.aws !== '-' ? (
                      <span className="inline-block px-2 py-1 text-xs bg-orange-50 text-orange-800 rounded-md">
                        {item.aws}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {item.azure !== '-' ? (
                      <span className="inline-block px-2 py-1 text-xs bg-blue-50 text-blue-800 rounded-md">
                        {item.azure}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {item.other !== '-' ? (
                      <span className="inline-block px-2 py-1 text-xs bg-purple-50 text-purple-800 rounded-md">
                        {item.other}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                  No terms found matching your criteria. Try adjusting your search or filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Using This Glossary</h2>
        <p className="text-gray-700">
          Use the search bar to find specific terms or examples. Filter by category to focus on specific areas of data engineering. Each term includes practical examples and platform-specific implementations where applicable.
        </p>
      </div>
    </div>
  );
};

export default DataEngineeringGlossary;