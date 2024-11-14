import React, { useState } from "react";
import "./Personal.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Footer from "./Footer";
import { FiCamera } from "react-icons/fi";

function Personal() {
  // State to manage form data
  const initialFormState = {
    title: "",
    otherNames: "",
    firstName: "",
    gender: "",
    lastName: "",
    dob: "",
    maritalStatus: "",
    email: "",
    phone: "",
    digitalAddress: "",
    address: "",
    country: "",
    nationality: "",
    nationalID: "",
    profileImage: null,
  };

  const [formData, setFormData] = useState(initialFormState);

  const [imagePreview, setImagePreview] = useState(null);

  const handleReset = () => {
    // Check if the form has data
    const hasData = Object.values(formData).some(
      (value) => value !== "" && value !== null
    );

    if (hasData) {
      setFormData(initialFormState);
      setImagePreview(null);
      alert("Your data has been reset successfully");
    } else {
      alert("No data to reset");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (phone) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: phone,
    }));
  };

  const handleSubmit = (e) => {
    // Format the form data into a string
    const employeeData = `
  Title: ${formData.title}
  Other Names: ${formData.otherNames}
  First Name: ${formData.firstName}
  Gender: ${formData.gender}
  Last Name: ${formData.lastName}
  Date of Birth: ${formData.dob}
  Marital Status: ${formData.maritalStatus}
  Email: ${formData.email}
  Phone: ${formData.phone}
  Digital Address: ${formData.digitalAddress}
  Home Address: ${formData.address}
  Country: ${formData.country}
  Nationality: ${formData.nationality}
  National ID: ${formData.nationalID}
  Profile Image: ${formData.profileImage ? "Image selected" : "No image"}
`;

    // Create a Blob object to download as a .txt file
    const blob = new Blob([employeeData], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "employee_details.txt"; // File name
    link.click();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="box-1">
            <div className="form-row">
              <div className="form-column">
                <label>Title</label>
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                >
                  <option>Select Title</option>
                  <option>Mr.</option>
                  <option>Mrs</option>
                </select>

                <label>Other Names</label>
                <input
                  type="text"
                  placeholder="Enter Other Names"
                  name="otherNames"
                  value={formData.otherNames}
                  onChange={handleChange}
                />
              </div>

              <div className="form-column">
                <label>
                  First Name<span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <label>
                  Gender <span className="required">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="form-column">
                <label>
                  Last Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />

                <label>
                  Date of Birth <span className="required">*</span>
                </label>
                <input
                  type="date"
                  required
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-column">
                <label>
                  Marital Status <span className="required">*</span>
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  required
                  style={{ width: "32%" }}
                >
                  <option value="" disabled>
                    Select Marital Status
                  </option>
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </div>
            </div>

            <fieldset className="divider">
              <legend>Contact Info</legend>
            </fieldset>

            <div className="form-row">
              <div className="form-column">
                <label>
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-column">
                <label style={{ marginBottom: "5px" }}>
                  Phone <span className="required">*</span>
                </label>
                <PhoneInput
                  name="phone"
                  max="10"
                  inputStyle={{ height: "25px" }}
                  defaultCountry="gh"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  disableDialCodePrefill
                  disableDialCodeAndPrefix
                />
              </div>

              <div className="form-column">
                <label>Digital Address</label>
                <input
                  type="text"
                  placeholder="Enter Digital Address"
                  name="digitalAddress"
                  value={formData.digitalAddress}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-column">
                <label>Home Address</label>
                <textarea
                  placeholder="Enter Home Address"
                  name="address"
                  className="home-address"
                  style={{
                    height: "70px",
                    marginBottom: "20px",
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontFamily: "Poppins,San-serif",
                  }}
                  value={formData.address}
                  onChange={handleChange}
                  onFocus="2px solid #441aee"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="box-2">
            <div className="form-row">
              <div className="form-column">
                <label>
                  Country <span className="required">*</span>
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  <option>Ghana</option>
                  <option>Togo</option>
                </select>
              </div>

              <div className="form-column">
                <label>
                  Nationality<span className="required">*</span>
                </label>
                <select
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Nationality</option>
                  <option value="Ghanaian">Ghanaian</option>
                  <option value="American">American</option>
                  <option value="British">British</option>
                  <option value="Canadian">Canadian</option>
                  <option value="Nigerian">Nigerian</option>
                  <option value="Indian">Indian</option>
                  <option value="Australian">Australian</option>
                  <option value="South African">South African</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-column">
                <label>National ID</label>
                <input
                  style={{ width: "40%" }}
                  type="text"
                  placeholder="Enter National ID"
                  name="nationalID"
                  value={formData.nationalID}
                  onChange={handleChange}
                />
              </div>
            </div>
            <fieldset className="divider">
              <legend>Employee Image</legend>
            </fieldset>
            <div className="form-row">
              <div className="image">
                <label>Profile Picture</label>
                <label className="upload-btn">
                  <FiCamera
                    style={{
                      color: "white",
                      marginRight: 10,
                      fontSize: "2em",
                    }}
                  />
                  Upload Image
                  <input type="file" onChange={handleImageChange} />
                </label>
              </div>
            </div>
            {imagePreview && (
              <div className="image-preview">
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  style={{
                    maxWidth: "200px",
                    maxHeight: "100px",
                    marginBottom: "0",
                  }}
                />
                <div className="image-buttons">
                  <button
                    onClick={() =>
                      document.querySelector('input[type="file"]').click()
                    }
                    style={{
                      marginTop: "10px",
                      marginRight: "5px",
                    }}
                  >
                    Change
                  </button>
                  <button
                    onClick={handleRemoveImage}
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer handleReset={handleReset} handleCancel={handleCancel} />
      </form>
    </div>
  );
}

export default Personal;
