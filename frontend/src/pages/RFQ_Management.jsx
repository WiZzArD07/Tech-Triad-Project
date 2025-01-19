import React, { useState, useEffect } from "react";
import VendorList from "../components/VendorList";
import AddClause from "../components/AddClause"; // Add this import

const App = () => {
  const [project, setProject] = useState("");
  const [products, setProducts] = useState([
    {
      name: "SPECIAL TEMPERATURE ELEMENTS",
      specifications: "",
      size: "",
      quantity: "",
      unit: "",
      tdsFile: null,
      qapFile: null,
      comments: "",
      selectedVendors: 3,
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const addMoreProducts = () => {
    setProducts([
      ...products,
      {
        name: "",
        specifications: "",
        size: "",
        quantity: "",
        unit: "",
        tdsFile: null,
        qapFile: null,
        comments: "",
        selectedVendors: 0,
      },
    ]);
  };

  useEffect(() => {
    // Fetch initial data if required
    console.log("Component mounted or products updated", products);
  }, [products]);

  return (
    <div className="min-h-screen bg-white">
      {/* Responsive Header */}
      <div className="bg-white text-white p-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
        {/* Navigation - Full width on mobile, 1/3 on desktop */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <a href="#" className="text-black px-4 py-2 font-bold hover:underline hover:font-extrabold no-underline">
            Manage Group RFQ
          </a>
          <a href="/create-rfq" className="text-gray-800 px-4 py-2 ml-2 font-bold hover:underline hover:font-extrabold no-underline">
            Create RFQs
          </a>
        </div>

        {/* Project Selector - Centered on all screens */}
        <div className="w-full lg:w-auto lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 flex items-center justify-center">
          <label className="text-sm font-bold mr-2 text-black whitespace-nowrap">
            Select Project
          </label>
          <select
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-64 bg-white border border-gray-300 rounded py-1 px-3 text-gray-700 focus:outline-none"
          >
            <option value="">Select</option>
            <option value="Project A">Project A</option>
            <option value="Project B">Project B</option>
          </select>
        </div>
      </div>

      {/* Responsive Main Content */}
      <div className="p-4 lg:p-6">
        {/* Scrollable Container */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1000px] space-y-4">
            {products.map((product, index) => (
              <div key={index} className="border border-gray-300 rounded-lg">
                {/* Product Header - Responsive text sizes */}
                <div className="flex bg-[#1c285e]/[0.76] text-white rounded-t-lg">
                  <div className="flex-[1.2] p-3 lg:p-4 text-xs lg:text-sm font-semibold border-r border-white flex items-center justify-center">
                    <span>Product Name</span>
                  </div>
                  <div className="flex-[1.8] p-3 lg:p-4 text-xs lg:text-sm font-semibold border-r border-white flex items-center justify-center">
                    <span>Specifications</span>
                  </div>
                  <div className="flex-1 p-3 lg:p-4 text-xs lg:text-sm font-semibold border-r border-white flex items-center justify-center">
                    <span>Technical Datasheet</span>
                  </div>
                  <div className="flex-1 p-3 lg:p-4 text-xs lg:text-sm font-semibold border-r border-white flex items-center justify-center">
                    <span>Quality Assurance Plan</span>
                  </div>
                  <div className="flex-1 p-3 lg:p-4 text-xs lg:text-sm font-semibold border-r border-white flex items-center justify-center">
                    <span>Selected Vendors</span>
                  </div>
                  <div className="flex-1 p-3 lg:p-4 text-xs lg:text-sm font-semibold border-r border-white flex items-center justify-center">
                    <span>Add Comments</span>
                  </div>
                  <div className="flex-1 p-3 lg:p-4 text-xs lg:text-sm font-semibold border-r border-white flex items-center justify-center">
                    <span>Add Variant & Clause</span>
                  </div>
                  <div className="flex-1 p-3 lg:p-4 text-xs lg:text-sm font-semibold flex items-center justify-center">
                    <span>Remove</span>
                  </div>
                </div>

                {/* Product Content - Responsive spacing */}
                <div className="flex bg-[#f8ede3]/[0.38] border-b border-gray-200">
                  {/* Product sections with responsive padding */}
                  <div className="flex-[1.2] p-3 lg:p-4 border-r border-gray-200">
                    <span className="text-black">{product.name}</span>
                  </div>

                  {/* Specifications */}
                  <div className="flex-[1.8] p-3 lg:p-4 border-r border-gray-200">
                    <input
                      type="text"
                      placeholder="Grade, Materials and Others"
                      value={product.specifications}
                      onChange={(e) => handleInputChange(index, "specifications", e.target.value)}
                      className="w-full bg-white border rounded p-2 mb-2"
                    />
                    <div className="grid grid-cols-3 gap-2">
                      <input type="text" placeholder="Size" className="w-full bg-white border rounded p-2" />
                      <input type="text" placeholder="Unit" className="w-full bg-white border rounded p-2" />
                      <input type="text" placeholder="Quantity" className="w-full bg-white border rounded p-2" />
                    </div>
                  </div>

                  {/* Technical Datasheet */}
                  <div className="flex-1 p-3 lg:p-4 border-r text-black border-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>

                  </div>

                  {/* QAP Upload */}
                  <div className="flex-1 p-3 lg:p-4 border-r text-black border-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>

                  </div>

                  {/* Selected Vendors - Modified to text link */}
                  <div className="flex-1 p-3 lg:p-4 border-r border-gray-200 flex items-center justify-center">
                    <a 
                      href="/vendorlist" 
                      className="text-[#1c285e]/[0.94] hover:underline font-medium"
                    >
                      View
                    </a>
                  </div>

                  {/* Comments */}
                  <div className="flex-1 p-3 lg:p-4 border-r text-black border-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  </div>

                  {/* Variants - Reorganized */}
                  <div className="flex-1 p-3 lg:p-4 border-r border-gray-200 flex flex-col items-center justify-center space-y-2">
                    <button 
                      onClick={() => handleInputChange(index, "selectedVendors", product.selectedVendors + 1)}
                      className="bg-[#1c285e]/[0.94] text-white px-3 py-1.5 rounded text-xs flex items-center gap-1 w-28"
                    >
                      <span className="text-lg">+</span>
                      <span>Add Variant</span>
                    </button>
                    <a 
                      href="/addclause"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1c285e]/[0.94] text-white px-3 py-1.5 rounded text-xs flex items-center gap-1 w-28 justify-center"
                    >
                      <span className="text-lg">+</span>
                      <span>Add Clause</span>
                    </a>
                  </div>

                  {/* Remove */}
                  <div className="flex-1 p-3 lg:p-4 text-black flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons - Responsive spacing */}
        <div className="flex justify-end mt-6">
          <button
            onClick={addMoreProducts}
            className="w-full sm:w-auto bg-[#1c285e]/[0.76] text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add More Products
          </button>
        </div>

        {/* Terms Section - Responsive padding */}
        <div className="mt-8 px-2 lg:px-4">
          <h2 className="text-lg font-bold mb-2">Suggested Terms</h2>
          <ul className="list-disc pl-5">
            <li>
              Manufacturing Clearance: All items shall be manufactured after
              providing you with manufacturing clearance.
            </li>
            <li>
              Inspection: Materials will be inspected at your works by approved
              Third Party Inspection Agency (TPIA).
            </li>
          </ul>

          {/* Terms and Conditions Section */}
          <div className="mt-8 bg-[#f8ede3]/[0.38] p-4 lg:p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Terms and Conditions</h3>
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-gray-900 font-medium">Manufacturing Clearance: All items shall be manufactured after providing you with manufacturing clearance</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-gray-900 font-medium">Inspection: Materials will be Inspected at your works by approved Third Party Inspection Agency (TPIA) as per Approved QAP only.</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-gray-900 font-medium">Materials: All materials shall be dispatched to us by the vendor without any extra charges</span>
                </label>
                
              <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-gray-900 font-medium">Testing Certificates: The Manufacturing Test certificate, Internal Inspection Report by TPIA & All materials Test Certificate shall be dispatched by the vendor to our Office along with the materials without any extra charges. All Testing shall be carried out as per approved QAP/ITP</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-gray-900 font-medium">Other Important Original Documents: All Original documents including Tax Invoice, E-Way Bill, IRN & IVR along with Material Test Certificate, Manufacturer's Test Certificate, Internal Inspection Report to be courier to our Office</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-gray-900 font-medium">Warranty: The material are to be guaranteed by you against defective design, material and workmanship for a period of 18 months from the date of receipt of material or 12 months from the date of commissioning whichever is earlier. Any defect found during the course of guarantee period, must be replaced/rectified free of cost within 5 days of receipt of such information, in case you fail to attend the same, it will be done through other sources and all expenses incurred towards such replacement/rectification will be borne by you.</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-gray-900 font-medium">Quantity Variation: The quantities indicated in this may vary due to engineering & Actual site requirement. We reserve our right to change the size/quantities due to such change without any increase in prices. Any decreases in your prices shall be passed to our company.</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-gray-900 font-medium">Shortage & Rejection: In case any shortage/rejection is observed at the time of delivery of goods at final destination, such items shall be replaced within seven (7) days from the date of receipt of any such notice from our end</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-gray-900 font-medium">Order Cancellation: Our company reserves the right to cancel the order due to non-satisfactory performance of the vendor without any prior notice</span>
              </label>
            </div>
            
            {/* Upload Terms Section */}
            <div className="mt-8 border-t pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Upload Your Terms (Optional)</h4>
              <div className="bg-white border border-gray-300 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      id="terms-file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                    />
                    <label
                      htmlFor="terms-file"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded text-sm cursor-pointer flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      Choose File
                    </label>
                    <span className="text-sm text-gray-500">No file chosen</span>
                  </div>
                  <span className="text-xs text-gray-400">Supported: PDF, DOC, DOCX (Max: 5MB)</span>
                </div>
              </div>
            </div>

            {/* Contact Information Form */}
            <div className="mt-8 border-t pt-6">

              <div className="space-y-4">
                {/* First Row */}
                <div className="flex gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      placeholder="Enter contact person name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                    />
                  </div>
                </div>
                
                {/* Second Row */}
                <div className="flex gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter contact number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter company name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                    />
                  </div>
                </div>

                {/* Third Row */}
                <div className="flex gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      RFQ Type (Optional)
                    </label>
                    <select
                      className="w-full border bg-white border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-600"
                    >
                      <option value="">Select RFQ type</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Reverse Auction
                    </label>
                    <select
                      className="w-full border bg-white border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-600"
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-black font-medium text-gray-700 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>Procurement End Date

                      

                    </label>
                    <input
                      type="date"
                      className="w-full border bg-white border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-600"
                    />
                  </div>
                </div>

                {/* Fourth Row */}
                <div className="flex gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Location (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter delivery location"
                      className="w-full border bg-white border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-2">
                    {/* Empty div for alignment */}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  <button className="bg-[#f4d03f]  text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
                    Create RFQ
                  </button>
                  <button className="bg-[#f4d03f] text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;