import React from 'react';

const GenrateRFQ = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 p-8">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-black mb-8">Magic Search</h1>

      {/* Review Products Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-black mb-6">Review Products</h2>

        {/* Product Name Section - Now Above */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name:
          </label>
          <select className="w-full p-3 bg-white h-12 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white">
            <option value="">Select Product</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Separator Line */}
        <hr className="border-gray-200 mb-6" />

        {/* Three Column Layout */}
        <div className="grid grid-cols-3 gap-6">
          {/* First Column - Product Specification */}
          <div className="space-y-4">
            {/* Product Specification */}
            <div>
              <label className="block text-sm font-medium bg-white text-gray-700 mb-1">
                Product Specification
              </label>
              <input
                type="text"
                className="w-full p-2 h-10 border bg-white rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter specification"
              />
            </div>

            {/* Product Size */}
            <div>
              <label className="block text-sm bg-white font-medium text-gray-700 mb-1">
                Product Size
              </label>
              <input
                type="text"
                className="w-full p-2 h-10 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter size"
              />
            </div>

            {/* Quantity and Unit in single row with consistent spacing */}
            <div className="flex items-center space-x-6">
              <div className="w-1/2">
                <label className="block text-sm bg-white font-medium text-gray-700 mb-1">
                  Product Quantity
                </label>
                <input
                  type="number"
                  className="w-full p-2 bg-white h-10 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter quantity"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm bg-white font-medium text-gray-700 mb-1">
                  Product Unit
                </label>
                <input
                  type="text"
                  className="w-full p-2 bg-white h-10 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter unit"
                />
              </div>
            </div>

            {/* Product Name Dropdown - Full Width */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name:
              </label>
              <select className="w-full bg-white p-2 h-10 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-gray-700">
                <option value="valve_ball" className="py-2">Valve ball with specification pn16/40 size 40nb end rf make microstep</option>
                <option value="valve_ball_1" className="py-2">Valve Ball Type 1 - PN16/40</option>
                <option value="valve_ball_2" className="py-2">Valve Ball Type 2 - PN40/80</option>
                <option value="valve_ball_3" className="py-2">Valve Ball Type 3 - PN80/100</option>
              </select>
            </div>
          </div>

          {/* Second Column - File Section Only */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              File Section:
            </label>
            <div className="border rounded-lg focus-within:ring-2 focus-within:ring-blue-500 bg-gray-50 h-[168px]">
              <input
                type="file"
                className="w-full h-full p-4 cursor-pointer"
              />
            </div>
          </div>

          {/* Third Column - Comments and Vendor List */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium bg-white text-gray-700 mb-1">
                Product Comments
              </label>
              <textarea
                className="w-full p-2 h-10 border bg-white rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Enter comments"
              />
            </div>

            <div>
              <label className="block text-sm font-medium bg-white text-gray-700 mb-1">
                Vendor List
              </label>
              <select className="w-full p-2 h-10 border bg-white rounded-lg focus:ring-2 focus:ring-blue-500">
                <option value="">Select Vendor</option>
                {/* Add vendor options here */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenrateRFQ;
