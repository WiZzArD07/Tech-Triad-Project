import React, { useState } from 'react';

function App() {
  const [clauses, setClauses] = useState([]);
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const handleAddClause = () => {
    setClauses([...clauses, { message, file }]);
    setMessage('');
    setFile(null);
  };

  const handleRemoveClause = (index) => {
    const updatedClauses = [...clauses];
    updatedClauses.splice(index, 1);
    setClauses(updatedClauses);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg w-[1000px] min-h-[500px]">
      <div className="px-16 py-6 pb-16 relative">
        <div className="border-b border-gray-300 pb-3 mb-6">
          <h1 className="text-2xl font-bold text-center text-black tracking-wide">PLC System</h1>
        </div>
        
        <div className="flex justify-start space-x-4 mb-4">
          <a href="#" className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition text-sm no-underline">
            Clauses
          </a>
          <a href="#" className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition text-sm no-underline">
            Add Bulk Clauses
          </a>
        </div>

        <div className="w-full p-3 border border-gray-300 rounded-md mb-3">
          <p className="text-gray-500 text-xs">Message placeholder...</p>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition text-xs flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              Attach File
            </button>
            {file && <span className="text-xs text-gray-500">{file.name}</span>}
          </div>
          <button className="px-4 py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 transition text-xs">
            Add
          </button>
        </div>

        <div className="border-b border-gray-300 mb-4"></div>
        
        <h2 className="text-lg font-semibold text-black mb-3">List of Clauses</h2>
        
        <div className="space-y-3 max-h-[200px] overflow-y-auto">
          <div className="border border-gray-200 rounded-md p-3">
            <div className="flex justify-between items-start mb-1.5">
              <div>
                <span className="font-medium text-sm text-black">Message: </span>
                <span className="text-gray-700 text-sm">This is my first Clause</span>
              </div>
              <div className="flex space-x-2">
                <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600">
                  Update
                </button>
                <button className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600">
                  Remove
                </button>
              </div>
            </div>
            <div>
              <span className="font-medium text-sm text-black">Files: </span>
              <span className="text-gray-600 text-sm">document1.pdf</span>
            </div>

            <div className="mt-3">
              <div className="mb-1.5">
                <span className="font-medium text-sm text-black">Message: </span>
                <span className="text-gray-700 text-sm">This</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-sm text-black">Files: </span>
                  <span className="text-gray-600 text-sm">document.pdf</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600">
                    Update
                  </button>
                  <button className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <button className="px-8 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition text-sm font-semibold">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;





