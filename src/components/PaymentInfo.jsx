import React, { useState, useEffect } from "react";
import "./PaymentInfo.css";
import { MdDeleteForever } from "react-icons/md";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { IoClose } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import Swal from "sweetalert2";
import Footer from "./Footer";

function PaymentInfo() {
  const [showModal, setShowModal] = useState(false);
  const [paymentOption, setPaymentOption] = useState("Bank");
  const [isDefault, setIsDefault] = useState(false);
  const [formData, setFormData] = useState({
    bank: "",
    branch: "",
    accountNumber: "",
    paymentBasis: "",
    serviceProvider: "",
    mobileNumber: "",
    note: "",
  });

  const [phone, setPhone] = useState("");
  const [paymentOptions, setPaymentOptions] = useState([]);

  // Load payment options from localStorage when the component mounts
  useEffect(() => {
    const storedOptions = localStorage.getItem("paymentOptions");
    if (storedOptions) {
      setPaymentOptions(JSON.parse(storedOptions));
    }
  }, []);

  // Save payment options to localStorage whenever the state changes
  useEffect(() => {
    if (paymentOptions.length > 0) {
      localStorage.setItem("paymentOptions", JSON.stringify(paymentOptions));
    } else {
      localStorage.removeItem("paymentOptions"); // Clear from localStorage if the list is empty
    }
  }, [paymentOptions]);

  const handlePhoneChange = (phone) => {
    setPhone(phone);
    setFormData((prevData) => ({
      ...prevData,
      mobileNumber: phone,
    }));
  };

  const handleAddOptionClick = () => {
    setShowModal(true);
    setPaymentOption("Bank"); // Default to Bank when adding a new option
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPaymentOption("Bank"); // Reset to "Bank" when closing the modal
    setFormData({
      bank: "",
      branch: "",
      accountNumber: "",
      paymentBasis: "",
      serviceProvider: "",
      mobileNumber: "",
      note: "",
    });
    setIsDefault(false);
  };

  const handlePaymentOptionChange = (event) => {
    console.log("Payment option changed to:", event.target.value); // Debug log
    setPaymentOption(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset amount input when changing payment basis
    if (name === "paymentBasis") {
      setFormData({ ...formData, paymentBasis: value, amount: "" });
    }
  };

  const handleDeleteOption = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete the item after confirmation
        const updatedOptions = paymentOptions.filter((_, i) => i !== index);
        setPaymentOptions(updatedOptions);

        Swal.fire({
          title: "Deleted!",
          text: "Your record has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const isAddButtonDisabled = () => {
    if (paymentOption === "Bank") {
      return !(
        formData.bank &&
        formData.branch &&
        formData.accountNumber &&
        formData.paymentBasis &&
        formData.amount
      );
    } else if (paymentOption === "Mobile Money") {
      return !(formData.serviceProvider && formData.mobileNumber);
    }
    return true;
  };
  // Handle adding payment option
  const handleAddPaymentOption = () => {
    // Validate based on the payment type (Bank or Mobile Money)
    if (paymentOption === "Bank") {
      if (
        !formData.bank ||
        !formData.branch ||
        !formData.accountNumber ||
        !formData.paymentBasis
      ) {
        Swal.fire({
          title: "Error!",
          text: "Please fill in all required fields for Bank payment.",
          icon: "error",
        });
        return;
      }

      const newOption = {
        paymentOption: "Bank",
        bank: formData.bank,
        branch: formData.branch,
        accountNumber: formData.accountNumber,
        paymentBasis: formData.paymentBasis,
        serviceProvider: formData.serviceProvider,
        mobileNumber: "",
        note: formData.note,
        isDefault,
      };

      setPaymentOptions((prevOptions) => [newOption, ...prevOptions]);
      handleCloseModal();
    } else if (paymentOption === "Mobile Money") {
      if (
        !formData.mobileNumber ||
        !formData.serviceProvider ||
        formData.paymentBasis
      ) {
        Swal.fire({
          title: "Error!",
          text: "Please fill in all required fields for Mobile Money payment.",
          icon: "error",
        });
        return;
      }

      const newOption = {
        paymentOption: "Mobile Money",
        bank: "", // No bank information needed for Mobile Money
        branch: "",
        accountNumber: "",
        paymentBasis: "",
        serviceProvider: formData.serviceProvider,
        mobileNumber: formData.mobileNumber,
        note: formData.note,
        isDefault,
      };

      setPaymentOptions((prevOptions) => [newOption, ...prevOptions]);
      handleCloseModal();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Invalid payment type.",
        icon: "error",
      });
    }
  };
  return (
    <>
      <div className="container">
        <div className="form-content">
          <button className="add-option-btn" onClick={handleAddOptionClick}>
            + Add Option
          </button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Payment Option</th>
                <th>Service Provider</th>
                <th>Branch</th>
                <th>Account #</th>
                <th>Payment Basis</th>
                <th>Value</th>
                <th>Default</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paymentOptions.length > 0 ? (
                paymentOptions.map((option, index) => (
                  <tr key={index}>
                    <td>{option.paymentOption}</td>
                    <td>{option.serviceProvider || "N/A"}</td>
                    <td>{option.branch || "N/A"}</td>
                    <td>{option.accountNumber}</td>
                    <td>{option.paymentBasis}</td>
                    <td>{option.note}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={option.isDefault}
                        readOnly
                      />
                    </td>
                    <td>
                      <button onClick={() => handleDeleteOption(index)}>
                        <MdDeleteForever
                          style={{ color: "red", outline: "none" }}
                        />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="no-records">No records to display</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Footer
        // handleReset={handleReset}
        // handleCancel={handleCancel}
        // onSave={handleSave}
        />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-header">Add Payment Info</h2>
            <div className="modal-form">
              <div className="modal-row">
                <div>
                  <label>Payment Option</label>
                  <select
                    value={paymentOption}
                    onChange={handlePaymentOptionChange}
                  >
                    <option value="Bank">Bank</option>
                    <option value="Mobile Money">Mobile Money</option>
                  </select>
                </div>
                <div
                  className="checkbox-container"
                  style={{
                    display: "flex", // Use flexbox layout
                    alignItems: "center", // Vertically center the checkbox and label
                    flexDirection: "row", // Optional: space between checkbox and label
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isDefault}
                    onChange={() => setIsDefault(!isDefault)}
                    style={{ fontSize: "17px" }}
                  />

                  <label
                    htmlFor="defaultCheckbox"
                    style={{
                      marginLeft: "8px",
                      marginTop: "7px",
                      fontSize: "17px",
                    }}
                  >
                    Default
                  </label>
                </div>
              </div>

              {/* Conditional Fields Based on Payment Option */}
              {paymentOption === "Bank" && (
                <>
                  <div className="modal-row">
                    <div>
                      <label>
                        Bank<span className="required">*</span>
                      </label>
                      <select
                        name="bank"
                        value={formData.bank}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Bank
                        </option>
                        <option value="ghanaCommercialBank">
                          Ghana Commercial Bank
                        </option>
                        <option value="ecobank">Ecobank</option>
                        <option value="stanbicBank">Stanbic Bank</option>
                        <option value="absaBank">Absa Bank</option>
                        <option value="accessBank">Access Bank</option>
                        <option value="uba">
                          United Bank for Africa (UBA)
                        </option>
                        <option value="fidelityBank">Fidelity Bank</option>
                        <option value="zenithBank">Zenith Bank</option>
                        <option value="nationalInvestmentBank">
                          National Investment Bank (NIB)
                        </option>
                        <option value="calBank">CAL Bank</option>
                        <option value="societeGenerale">
                          Société Générale
                        </option>
                      </select>
                    </div>
                    <div>
                      <label>
                        Branch <span className="required">*</span>
                      </label>
                      <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Branch
                        </option>
                        <option value="Accra Mall Branch">
                          Accra Mall Branch (Access Bank)
                        </option>
                        <option value="Osu Branch">
                          Osu Branch (Access Bank)
                        </option>
                        <option value="Kumasi Branch">
                          Kumasi Branch (GCB)
                        </option>
                        <option value="Takoradi Branch">
                          Takoradi Branch (GCB)
                        </option>
                        <option value="Cape Coast Branch">
                          Cape Coast Branch (Ecobank)
                        </option>
                        <option value="Ashaiman Branch">
                          Ashaiman Branch (Ecobank)
                        </option>
                        <option value="Ho Branch">
                          Ho Branch (Stanbic Bank)
                        </option>
                        <option value="Tema Branch">
                          Tema Branch (Stanbic Bank)
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-row">
                    <div>
                      <label>
                        Account Number<span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter Account No."
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label>
                        Payment Basis<span className="required">*</span>
                      </label>
                      <select
                        name="paymentBasis"
                        value={formData.paymentBasis}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Payment Basis
                        </option>
                        <option value="fixed">Fixed Amount</option>
                        <option value="percentage">Percentage Of Net</option>
                      </select>
                    </div>
                    <div>
                      <label
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        {formData.paymentBasis === "fixed"
                          ? "Fixed Amount"
                          : formData.paymentBasis === "percentage"
                          ? "Percentage Of Net"
                          : "N/A"}
                        <span className="required">*</span>
                      </label>
                      <input
                        type="number"
                        name="amount"
                        disabled={!formData.paymentBasis}
                        value={formData.amount}
                        onChange={handleChange}
                        required
                        placeholder={
                          formData.paymentBasis === "fixed"
                            ? "0.00"
                            : formData.paymentBasis === "percentage"
                            ? "0.00"
                            : ""
                        }
                      />
                    </div>
                  </div>
                </>
              )}

              {paymentOption === "Mobile Money" && (
                <>
                  <div className="modal-row">
                    <div>
                      <label>
                        Service Provider<span className="required">*</span>
                      </label>
                      <select
                        value={formData.serviceProvider}
                        onChange={handleChange}
                        name="serviceProvider"
                      >
                        <option>Select Service Provider</option>
                        <option>MTN</option>
                        <option>Telecel</option>
                        <option>AT</option>
                      </select>
                    </div>
                    <div>
                      <label>
                        Mobile Number<span className="required">*</span>
                      </label>
                      <PhoneInput
                        name="phone"
                        max="10"
                        inputStyle={{ height: "25px" }}
                        defaultCountry="gh"
                        placeholder="Phone"
                        value={phone}
                        required
                        onChange={handlePhoneChange}
                        disableDialCodePrefill
                        disableDialCodeAndPrefix
                      />
                    </div>
                    <div>
                      <label>
                        Payment Basis<span className="required">*</span>
                      </label>
                      <select
                        name="paymentBasis"
                        value={formData.paymentBasis}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select Payment Basis
                        </option>
                        <option value="fixed">Fixed Amount</option>
                        <option value="percentage">Percentage Of Net</option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-row">
                    <div>
                      <label
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "90%",
                        }}
                      >
                        {formData.paymentBasis === "fixed"
                          ? "Fixed Amount"
                          : formData.paymentBasis === "percentage"
                          ? "Percentage Of Net"
                          : "N/A"}
                        <span className="required">*</span>
                      </label>
                      <input
                        type="number"
                        name="amount"
                        disabled={!formData.paymentBasis}
                        value={formData.amount}
                        onChange={handleChange}
                        required
                        style={{ width: "53%" }}
                        placeholder={
                          formData.paymentBasis === "fixed"
                            ? "0.00"
                            : formData.paymentBasis === "percentage"
                            ? "0.00"
                            : ""
                        }
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="modal-row">
                <div>
                  <label>Note</label>
                  <textarea
                    style={{
                      height: "70px",
                      width: "100%",
                      padding: "5px",
                    }}
                    placeholder="Note"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <button
                  className="modal-btn close-btn"
                  onClick={handleCloseModal}
                >
                  <IoClose style={{ fontSize: "20px" }} /> Close
                </button>
                <button
                  type="submit"
                  className={`modal-btn ${
                    isAddButtonDisabled() ? "disabled" : ""
                  }`}
                  onClick={handleAddPaymentOption}
                  disabled={isAddButtonDisabled()}
                >
                  <FaSave />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentInfo;
