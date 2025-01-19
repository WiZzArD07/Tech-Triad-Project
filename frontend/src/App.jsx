import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./components/styles/indexs.css";
import RFQ_Management from "./pages/RFQ_Management";
import Layout from './components/Layout';
import VendorList from './components/VendorList';
import SearchVendor from './pages/SearchVendor';
import GenrateRFQ from './pages/GenrateRFQ';
import AddClause from './components/AddClause';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RFQ_Management />} />
          <Route path="/vendorlist" element={<VendorList />} />
          <Route path="/rfqmanagement" element={<RFQ_Management />} />
          <Route path="/searchvendor" element={<SearchVendor/>} />
          <Route path="/genrateRFQ" element={<GenrateRFQ/>} />
          <Route path="/addclause" element={<AddClause/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
