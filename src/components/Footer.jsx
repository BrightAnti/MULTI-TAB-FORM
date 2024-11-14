import React from "react";
import "./Footer.css";
import { AiOutlineSave } from "react-icons/ai";
import { AiOutlineRedo } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

function Footer({ handleReset, handleCancel, onSave }) {
  return (
    <div className="form-footer">
      <p className="note">
        All fields marked with an asterisk (<span className="required">*</span>)
        are required.
      </p>
      <div className="button-group">
        {/* Cancel Button */}
        <button
          type="button"
          className="cancel-btn"
          onClick={handleCancel} // Pass function directly
        >
          <IoIosClose style={{ fontSize: "25px" }} />
          Cancel
        </button>

        {/* Reset Button */}
        <button
          type="button"
          className="reset-btn"
          onClick={handleReset} // Pass function directly
        >
          <AiOutlineRedo />
          Reset
        </button>

        {/* Save Button (submit the form) */}
        <button
          type="submit" // Updated to type "button" to prevent accidental form submission
          className="save-btn"
          onClick={onSave} // Pass onSave function as prop to handle the save action
        >
          <AiOutlineSave /> Save
        </button>
      </div>
    </div>
  );
}

export default Footer;
