import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Personal from "./components/Personal";
import Organisational from "./components/Organisational";
import GeneralLedger from "./components/GeneralLedger";
import PaymentInfo from "./components/PaymentInfo";
import OtherInfo from "./components/OtherInfo";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    personal: { field1: "", field2: "" },
    organisational: { field1: "", field2: "" },
    salaryInfo: { field1: "", field2: "" },
    generalLedger: { field1: "", field2: "" },
    paymentInfo: { field1: "", field2: "" },
    otherInfo: { field1: "", field2: "" },
  });

  return (
    <Router>
      <Header />
      <Tabs />
      <div className="tab-content">
        <Routes>
          <Route
            path="/personal"
            element={
              <Personal
                formData={formData.personal}
                setFormData={setFormData}
              />
            }
          />
          <Route
            path="/organisational"
            element={
              <Organisational
                formData={formData.organisational}
                setFormData={setFormData}
              />
            }
          />

          <Route
            path="/general-ledger"
            element={
              <GeneralLedger
                formData={formData.generalLedger}
                setFormData={setFormData}
              />
            }
          />
          <Route
            path="/other-info"
            element={
              <OtherInfo
                formData={formData.otherInfo}
                setFormData={setFormData}
              />
            }
          />
          <Route
            path="/payment-info"
            element={
              <PaymentInfo
                formData={formData.paymentInfo}
                setFormData={setFormData}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
