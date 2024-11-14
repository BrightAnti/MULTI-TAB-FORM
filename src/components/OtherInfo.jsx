import React, { useState, useEffect } from "react";
import "./OtherInfo.css";
import Footer from "./Footer";

function OtherInfo({ formData }) {
  // Set initial state values using formData, if available
  const [payroll, setPayroll] = useState(formData?.payroll || "");
  const [salaryPercentage, setSalaryPercentage] = useState(
    formData?.salaryPercentage || ""
  );
  const [payslipNote, setPayslipNote] = useState(formData?.payslipNote || "");

  // Effect to update state if formData changes
  useEffect(() => {
    if (formData) {
      setPayroll(formData.payroll || "");
      setSalaryPercentage(formData.salaryPercentage || "");
      setPayslipNote(formData.payslipNote || "");
    }
  }, [formData]);

  const handlePayrollChange = (value) => {
    setPayroll(value);
  };

  const handleSalaryPercentageChange = (value) => {
    setSalaryPercentage(value);
  };

  const handlePayslipNoteChange = (value) => {
    setPayslipNote(value);
  };

  // Reset function to clear all fields
  const handleReset = () => {
    // Check if the form has data
    const hasData = [payroll, salaryPercentage, payslipNote].some(
      (value) => value !== "" && value !== null
    );

    if (hasData) {
      // Reset the form data to initial values
      setPayroll("");
      setSalaryPercentage("");
      setPayslipNote("");

      // Show alert after reset
      alert("Your data has been reset successfully");
    } else {
      alert("No data to reset");
    }
  };

  return (
    <div className="container">
      <form className="form">
        <div className="form-content">
          <div className="box-1">
            <fieldset className="divider">
              <legend>Salary Info</legend>
            </fieldset>
            <div className="form-row">
              <div className="form-column">
                <label>Payroll Hours</label>
                <select
                  value={payroll}
                  onChange={(e) => handlePayrollChange(e.target.value)}
                >
                  <option value="">Select Payroll Hours</option>
                  <option value="security worker">Security Worker</option>
                  <option value="salary worker">Salary Worker</option>
                </select>
              </div>

              <div className="form-column">
                <label htmlFor="incomeTax">Percentage of Basic Salary</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={salaryPercentage}
                  onChange={(e) => handleSalaryPercentageChange(e.target.value)}
                  onWheel={(e) => e.target.blur()}
                  style={{ textAlign: "right" }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <label>Payslip Note</label>
                <textarea
                  placeholder="Note"
                  value={payslipNote}
                  onChange={(e) => handlePayslipNoteChange(e.target.value)}
                  style={{
                    width: "100%",
                    height: "70px",
                    marginBottom: "20px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    fontSize: "16px",
                    resize: "none",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="box-2"></div>
        </div>

        <Footer handleReset={handleReset} />
      </form>
    </div>
  );
}

export default OtherInfo;
