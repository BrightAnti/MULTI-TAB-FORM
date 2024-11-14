import React from "react";
import { useState, useEffect } from "react";

import ClearableInput from "./ClearableInput";
import Footer from "./Footer";

const glOptions = [
  "002 - Basic Salary",
  "GLA001 - Income Tax",
  "001 - Net Salary",
  "013 - Staff General Deduction GL",
  "012 - Staff General Earning GL",
  "003 - Tier 1 Saving",
  "004 - Tier 2 Saving",
  "005 - Tier 3 Savings",
];

function GeneralLedger({ formData }) {
  const [salary, setSalary] = useState(formData?.salary || "");
  const [netSalaryPayable, setNetSalaryPayable] = useState(
    formData?.netSalaryPayable || ""
  );
  const [shiftAllowance, setShiftAllowance] = useState(
    formData?.shiftAllowance || ""
  );
  const [incomeTax, setIncomeTax] = useState(formData?.incomeTax || "");
  const [operatingOvertime, setOperatingOvertime] = useState(
    formData?.operatingOvertime || ""
  );
  const [taxRelief, setTaxRelief] = useState(formData?.taxRelief || "");
  const [employeeContributionGl, setEmployeeContributionGl] = useState(
    formData?.employeeContributionGl || ""
  );
  const [employerContributionGl, setEmployerContributionGl] = useState(
    formData?.employerContributionGl || ""
  );
  const [employeeTotalPayable, setEmployeeTotalPayable] = useState(
    formData?.employeeTotalPayable || ""
  );
  const [employerTotalPayable, setEmployerTotalPayable] = useState(
    formData?.employerTotalPayable || ""
  );

  useEffect(() => {
    if (formData) {
      setSalary(formData.salary || "");
      setNetSalaryPayable(formData.netSalaryPayable || "");
      setShiftAllowance(formData.shiftAllowance || "");
      setIncomeTax(formData.incomeTax || "");
      setOperatingOvertime(formData.operatingOvertime || "");
      setTaxRelief(formData.taxRelief || "");
      setEmployeeContributionGl(formData.employeeContributionGl || "");
      setEmployerContributionGl(formData.employerContributionGl || "");
      setEmployeeTotalPayable(formData.employeeTotalPayable || "");
      setEmployerTotalPayable(formData.employerTotalPayable || "");
    }
  }, [formData]);

  // Handle changes for each field
  const handleSalaryChange = (value) => setSalary(value);
  const handleNetSalaryPayableChange = (value) => setNetSalaryPayable(value);
  const handleShiftAllowanceChange = (value) => setShiftAllowance(value);
  const handleIncomeTaxChange = (value) => setIncomeTax(value);
  const handleOperatingOvertimeChange = (value) => setOperatingOvertime(value);
  const handleTaxReliefChange = (value) => setTaxRelief(value);
  const handleEmployeeContributionGlChange = (value) =>
    setEmployeeContributionGl(value);
  const handleEmployerContributionGlChange = (value) =>
    setEmployerContributionGl(value);
  const handleEmployeeTotalPayableChange = (value) =>
    setEmployeeTotalPayable(value);
  const handleEmployerTotalPayableChange = (value) =>
    setEmployerTotalPayable(value);

  const handleReset = () => {
    // Check if any field has data
    const hasData = [
      salary,
      netSalaryPayable,
      shiftAllowance,
      incomeTax,
      operatingOvertime,
      taxRelief,
      employeeContributionGl,
      employerContributionGl,
      employeeTotalPayable,
      employerTotalPayable,
    ].some((value) => value !== "" && value !== null);

    if (hasData) {
      // Reset the fields to empty strings
      setSalary("");
      setNetSalaryPayable("");
      setShiftAllowance("");
      setIncomeTax("");
      setOperatingOvertime("");
      setTaxRelief("");
      setEmployeeContributionGl("");
      setEmployerContributionGl("");
      setEmployeeTotalPayable("");
      setEmployerTotalPayable("");
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
              <legend>Regular</legend>
            </fieldset>
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="Salary">Salary</label>
                <ClearableInput
                  value={salary}
                  onChange={handleSalaryChange}
                  placeholder="Search Gl"
                  options={glOptions}
                />
                <label htmlFor="netsalarypayable">Net Salary Payable</label>
                <ClearableInput
                  value={netSalaryPayable}
                  onChange={handleNetSalaryPayableChange}
                  placeholder="Search Gl"
                  options={glOptions}
                />
                <label htmlFor="shiftallowance">Shift Allowance</label>
                <ClearableInput
                  value={shiftAllowance}
                  onChange={handleShiftAllowanceChange}
                  placeholder="Search Gl"
                />
              </div>

              <div className="form-column">
                <label htmlFor="incomeTax">Income Tax</label>
                <ClearableInput
                  value={incomeTax}
                  onChange={handleIncomeTaxChange}
                  placeholder="Search Gl"
                  options={glOptions}
                />
                <label htmlFor="operatingovertime">Operating Overtime</label>
                <ClearableInput
                  value={operatingOvertime}
                  onChange={handleOperatingOvertimeChange}
                  placeholder="Search Gl"
                  options={glOptions}
                />
                <label htmlFor="taxrelief">Tax Relief</label>
                <ClearableInput
                  value={taxRelief}
                  onChange={handleTaxReliefChange}
                  placeholder="Search Gl"
                  options={glOptions}
                />
              </div>
            </div>
          </div>
          <div className="box-2">
            <fieldset className="divider">
              <legend>Mandatory</legend>
            </fieldset>

            <div className="form-row">
              <div className="form-column">
                <label htmlFor="Employee Contribution Gl">
                  Employee Contribution Gl
                </label>
                <ClearableInput
                  value={employeeContributionGl}
                  onChange={handleEmployeeContributionGlChange}
                  placeholder="Search Gl"
                  options={glOptions}
                />
                <label htmlFor="Employer Contribution Gl">
                  Employer Contribution Gl
                </label>
                <ClearableInput
                  value={employerContributionGl}
                  onChange={handleEmployerContributionGlChange}
                  placeholder="Search Gl"
                  options={glOptions}
                />
                <label htmlFor="Employee Total Payable">
                  Employee Total Payable
                </label>
                <ClearableInput
                  value={employeeTotalPayable}
                  onChange={handleEmployeeTotalPayableChange}
                  placeholder="Search Gl"
                  options={glOptions}
                />
              </div>

              <div className="form-column">
                <label htmlFor="Employee Contribution Gl">
                  Employee Contribution Gl
                </label>
                <ClearableInput
                  value={employeeContributionGl}
                  onChange={handleEmployeeContributionGlChange}
                  placeholder="Search Gl"
                  options={glOptions}
                />
                <label htmlFor="Employer Contribution Gl">
                  Employer Contribution Gl
                </label>
                <ClearableInput
                  value={employerContributionGl}
                  onChange={handleEmployerContributionGlChange}
                  placeholder="Search Gl"
                  options={glOptions}
                />
                <label htmlFor="Employer Total Payable">
                  Employer Total Payable
                </label>
                <ClearableInput
                  value={employerTotalPayable}
                  onChange={handleEmployerTotalPayableChange}
                  placeholder="Search Gl"
                  options={glOptions}
                />
              </div>
            </div>
            <div style={{ height: "40px" }}></div>
          </div>
        </div>
        <Footer handleReset={handleReset} />
      </form>
    </div>
  );
}

export default GeneralLedger;
