import React from "react";

const vendors = [
  {
    vendor: "Imtiq Vendor",
    region: "Jbr Tech Park, Karnataka, Bengaluru",
    email: "imtiq@letsworkwise.com",
    mobile: "2346455638",
    industry: "Pacific Industrial Supplies",
    products: "SCRD GATE VALVE, Temperature (T) Industry",
  },
  {
    vendor: "SK Advanced Assemblies",
    region: "Jbr Tech Park, Karnataka, Bengaluru",
    email: "imtiq.dev@letsworkwise.com",
    mobile: "2346455638",
    industry: "Pacific Industrial Supplies",
    products: "SCRD GATE VALVE, Temperature (T) Industry",
  },
  {
    vendor: "Perfect Marketings b2b",
    region: "Jbr Tech Park, Karnataka, Bengaluru",
    email: "b2b.partal@letsworkwise.com",
    mobile: "2346455638",
    industry: "Pacific Industrial Supplies",
    products: "SCRD GATE VALVE, Temperature (T) Industry",
  },
  {
    vendor: "Ajanta Mac Pvt Ltd",
    region: "Jbr Tech Park, Karnataka, Bengaluru",
    email: "imtiq.v@letsworkwise.com",
    mobile: "2346455638",
    industry: "Pacific Industrial Supplies",
    products: "SCRD GATE VALVE, Temperature (T) Industry",
  },
];

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-2xl font-bold text-black mb-6">Vendors List</h1>
        <div className="w-full overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full table-auto border-collapse bg-white">
            <thead className="bg-[#1c285e]/[0.76]">
              <tr className="divide-x divide-white/30">
                <th className="px-6 py-4 text-white font-semibold">Vendor</th>
                <th className="px-6 py-4 text-white font-semibold">Region</th>
                <th className="px-6 py-4 text-white font-semibold">Email</th>
                <th className="px-6 py-4 text-white font-semibold">Mobile No.</th>
                <th className="px-6 py-4 text-white font-semibold">Industry</th>
                <th className="px-6 py-4 text-white font-semibold">Products</th>
                <th className="px-6 py-4 text-white font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor, index) => (
                <tr
                  key={index}
                  className={`border-t ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4 text-black">{vendor.vendor}</td>
                  <td className="px-6 py-4 text-black">{vendor.region}</td>
                  <td className="px-6 py-4 text-black">{vendor.email}</td>
                  <td className="px-6 py-4 text-black">{vendor.mobile}</td>
                  <td className="px-6 py-4 text-black">{vendor.industry}</td>
                  <td className="px-6 py-4 text-black">{vendor.products}</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button className="text-black hover:text-blue-600">View</button>
                    <button className="text-black hover:text-red-600">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-end mt-4">
          <button className="px-6 py-2 bg-[#f4d03f] text-[f] hover:bg-yellow-500">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;