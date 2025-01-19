import React from 'react';

const SearchVendor = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      <div className="flex-1 w-full mx-auto px-4 md:px-8 py-4 md:py-6">
        {/* Main heading with button - Full width */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 w-full">
          <h1 className="text-xl md:text-2xl font-bold text-black">Vendor List</h1>
          <a href="/genrateRFQ" className="w-full sm:w-auto px-4 py-2 bg-[#f4d03f] text-white rounded-lg  text-center">
            Generate RFQ from BOQ
          </a>
        </div>

        {/* Content container - Full width */}
        <div className="space-y-6 md:space-y-8 w-full">
          {/* Search and filter section - Full width */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 w-full">
            <input
              type="text"
              placeholder="Search "
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-[#f8ede3]/[0.38]"
            />
            <select className="w-full md:w-[600px] bg-[#f8ede3]/[0.38] text-[#000000]/[0.58] p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option value="">Vendor Approved By</option>
              <option value="name">OICL</option>
              <option value="region">EIL</option>
              <option value="industry">ONGC</option>
              <option value="name">HPCL</option>
              <option value="name">SAIL</option>
              <option value="name">NTPC</option>
              <option value="name">PDIL</option>
              <option value="name">NALCO</option>
              <option value="name">BHEL</option>
              <option value="name">IOCL</option>
              <option value="name">BPCL</option>
              <option value="name">GAIL</option>
              <option value="name">OIL</option>
            </select>
          </div>

          {/* Filter section - Full width */}
          <div className="w-full">
            <h2 className="text-lg font-semibold text-black mb-3">Filter</h2>
            <div className="flex flex-col md:flex-row justify-between items-center bg-[#1c285e]/[0.62] p-4 md:h-[51px] w-full rounded-[40px] gap-4">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <span className="text-white font-medium whitespace-nowrap">Vendors</span>
                <select className="w-full md:w-64 p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white">
                  <option value="">Choose a filter option</option>
                  <option value="industry">Industry</option>
                  <option value="region">Region</option>
                  <option value="products">Products</option>
                </select>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <span className="text-white font-medium whitespace-nowrap">Location:</span>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <input
                    type="text"
                    placeholder="Select a type of state"
                    className="w-full md:w-48 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Select a type of city"
                    className="w-full md:w-48 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vendor listing section - Full width */}
          <div className="mt-8 w-full">
            <h2 className="text-xl font-semibold text-black mb-4">Available Vendors</h2>
            
            {/* Select all option */}
            <div className="mb-2">
              <label className="flex items-center">
                <input type="radio" name="selectAll" className="mr-2" />
                <span className="text-black font-medium">Select All</span>
              </label>
            </div>

            {/* Separator line */}
            <hr className="border-gray-200 mb-4" />

            {/* Vendor cards - Full width grid */}
            <div className="grid grid-cols-1 gap-4 w-full">
              {[1, 2, 3].map((index) => (
                <div key={index} className="border rounded-lg p-6 w-full bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <input type="radio" name={`vendor${index}`} />
                        <h3 className="text-lg font-semibold text-black">Kisan</h3>
                      </div>
                      <p className="text-sm text-black mb-1">Location: Mumbai, Maharashtra</p>
                      <p className="text-sm text-black">About: establish</p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View</button>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchVendor;
