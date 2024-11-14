import "./Organisational.css";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function Organisational({ formData, setFormData }) {
  const [staffId, setStaffId] = useState(formData?.staffId || "");
  const [hireDate, setHireDate] = useState(formData?.hireDate || "");
  const [section, setSection] = useState(formData?.section || "");
  const [employeeType, setEmployeeType] = useState(
    formData?.employeeType || ""
  );
  const [location, setLocation] = useState(formData?.location || "");
  const [department, setDepartment] = useState(formData?.department || "");
  const [position, setPosition] = useState(formData?.position || "");
  const [division, setDivision] = useState(formData?.division || "");
  const [unit, setUnit] = useState(formData?.unit || "");
  const [taxOption, setTaxOption] = useState(formData?.taxOption || "");
  const [employmentStatus, setEmploymentStatus] = useState(
    formData?.employmentStatus || ""
  );
  const [overtimeExempt, setOvertimeExempt] = useState(
    formData?.overtimeExempt || false
  );
  const [salaryGrade, setSalaryGrade] = useState(formData?.salaryGrade || "");
  const [notch, setNotch] = useState(formData?.notch || "");
  const [currency, setCurrency] = useState(formData?.currency || "");
  const [salaryType, setSalaryType] = useState(formData?.salaryType || "");
  const [rate, setRate] = useState(formData?.rate || "");

  // Effect to update state if formData changes
  useEffect(() => {
    if (formData) {
      setStaffId(formData.staffId || "");
      setHireDate(formData.hireDate || "");
      setSection(formData.section || "");
      setEmployeeType(formData.employeeType || "");
      setLocation(formData.location || "");
      setDepartment(formData.department || "");
      setPosition(formData.position || "");
      setDivision(formData.division || "");
      setUnit(formData.unit || "");
      setTaxOption(formData.taxOption || "");
      setEmploymentStatus(formData.employmentStatus || "");
      setOvertimeExempt(formData.overtimeExempt || false);
      setSalaryGrade(formData.salaryGrade || "");
      setNotch(formData.notch || "");
      setCurrency(formData.currency || "");
      setSalaryType(formData.salaryType || "");
      setRate(formData.rate || "");
    }
  }, [formData]);
  const generateUniqueId = () => {
    if (!staffId) {
      const uniqueId = `ID-${Date.now()}`;
      setStaffId(uniqueId); // Set the generated staffId
    }
  };

  // Handle reset
  const handleReset = () => {
    setStaffId("");
    setHireDate("");
    setSection("");
    setEmployeeType("");
    setLocation("");
    setDepartment("");
    setPosition("");
    setDivision("");
    setUnit("");
    setTaxOption("");
    setEmploymentStatus("");
    setOvertimeExempt(false);
    setSalaryGrade("");
    setNotch("");
    setCurrency("");
    setSalaryType("");
    setRate("");
  };
  const handleSave = () => {
    const data = `
  Staff ID: ${staffId}
  Hire Date: ${hireDate}
  Section: ${section}
  Employee Type: ${employeeType}
  Location: ${location}
  Department: ${department}
  Position: ${position}
  Division: ${division}
  Unit: ${unit}
  Tax Option: ${taxOption}
  Employment Status: ${employmentStatus}
  Overtime Exempt: ${overtimeExempt}
  Salary Grade: ${salaryGrade}
  Notch: ${notch}
  Currency: ${currency}
  Salary Type: ${salaryType}
  Rate: ${rate}
`;

    // Create a Blob from the string
    const blob = new Blob([data], { type: "text/plain" });

    // Create an anchor element to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "OrganisationalDetails.txt";
    link.click();
  };

  return (
    <div className="container" style={{ lineHeight: "10px" }}>
      <form className="form" onSubmit={handleSave}>
        <div className="form-content">
          <div className="box-1">
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="staff-id">
                  Staff ID <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="staffId"
                  name="staffId"
                  value={staffId}
                  required
                  placeholder={staffId ? staffId : "AUTO GENERATE ID"}
                  disabled={staffId !== ""}
                  onClick={generateUniqueId}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#b9bbbe",
                    color: "black",
                  }}
                />
              </div>

              <div className="form-column">
                <label htmlFor="HireDate">
                  Hire Date <span className="required">*</span>
                </label>
                <input
                  type="date"
                  id="hireDate"
                  value={hireDate}
                  onChange={(e) => setHireDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <fieldset className="divider">
              <legend>Segments</legend>
            </fieldset>

            <div className="form-row">
              <div className="form-column">
                <label htmlFor="Section">Section</label>
                <select
                  id="section"
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                >
                  <option>Select Section</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>

                <label htmlFor="EmployeeType">
                  Employee Type <span className="required">*</span>
                </label>
                <select
                  id="employeeType"
                  value={employeeType}
                  onChange={(e) => setEmployeeType(e.target.value)}
                  required
                >
                  <option>Select Employee type</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>

                <label htmlFor="Location">Location</label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>Select Location</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              <div className="form-column">
                <label htmlFor="Department">
                  Department <span className="required">*</span>
                </label>
                <select
                  id="department"
                  required
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option>Select Department</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>

                <label htmlFor="Position">Position</label>
                <select
                  id="position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <option>Select Position</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>

                <div className="spacer"></div>
              </div>

              <div className="form-column">
                <label htmlFor="Division">Division</label>
                <select
                  id="division"
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                >
                  <option>Select Division</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>

                <label htmlFor="Unit">Unit</label>
                <select
                  id="unit"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <option>Select Unit</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>

                <div className="spacer"></div>
              </div>
            </div>
          </div>

          <div className="box-2">
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="TaxOption">
                  Tax Option <span className="required">*</span>
                </label>
                <select
                  id="taxOption"
                  value={taxOption}
                  required
                  onChange={(e) => setTaxOption(e.target.value)}
                >
                  <option>Select Tax Option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              <div className="form-column">
                <label htmlFor="EmploymentStatus">Employment Status </label>
                <select
                  id="employmentStatus"
                  value={employmentStatus}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                >
                  <option>Permanent</option>
                  <option value="Casual">Casual</option>
                  <option value="Probation">Probation</option>
                </select>
              </div>

              <div className="checkbox-column">
                <label htmlFor="overtimeExemptCheckbox">
                  <input
                    type="checkbox"
                    id="overtimeExemptCheckbox"
                    name="overtimeExemptCheckbox"
                    checked={overtimeExempt}
                    onChange={() => setOvertimeExempt(!overtimeExempt)}
                  />
                  Overtime Exempt
                </label>
              </div>
            </div>

            <fieldset className="divider">
              <legend>Salary Info </legend>
            </fieldset>

            <div className="form-row">
              <div className="form-column">
                <label htmlFor="SalaryGrade">
                  Salary Grade <span className="required">*</span>
                </label>
                <select
                  id="salaryGrade"
                  required
                  value={salaryGrade}
                  onChange={(e) => setSalaryGrade(e.target.value)}
                >
                  <option>Select Salary Grade</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>

                <label htmlFor="currency">Currency</label>
                <input
                  id="currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  disabled
                  style={{ height: "30px" }}
                />

                <div className="spacer"></div>
              </div>

              <div className="form-column">
                <label htmlFor="Notch">Notch</label>
                <select
                  id="notch"
                  value={notch}
                  onChange={(e) => setNotch(e.target.value)}
                >
                  <option>Select Notch</option>
                  <option value="">1</option>
                  <option value="">2</option>
                </select>

                <label htmlFor="SalaryType">Salary Type</label>
                <input
                  id="salaryType"
                  value={salaryType}
                  onChange={(e) => setSalaryType(e.target.value)}
                  disabled
                  style={{ height: "30px" }}
                />

                <div className="spacer"></div>
              </div>

              <div className="form-column">
                <label htmlFor="Rate">Rate</label>
                <input
                  type="number"
                  id="rate"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "30px" }}></div>
        <Footer handleReset={handleReset} />
      </form>
    </div>
  );
}

export default Organisational;
