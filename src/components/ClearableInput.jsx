import React, { useState, useEffect } from "react";
import "./ClearableInput.css";

function ClearableInput({ placeholder, options, value, onChange }) {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Reset filtered options when input value changes or is cleared
    if (value) {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [value, options]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue); // Pass the change to the parent component
  };

  const handleClear = () => {
    onChange(""); // Reset value in parent component
    setShowDropdown(false);
  };

  const handleSelect = (option) => {
    onChange(option); // Pass the selected option to the parent component
    setShowDropdown(false);
  };

  return (
    <div className="clearable-input-container">
      <input
        type="text"
        className="clearable-input"
        value={value}
        onChange={handleChange}
        onFocus={() => value && setShowDropdown(true)}
        placeholder={placeholder}
      />
      {value && (
        <span className="clear-button" onClick={handleClear}>
          X
        </span>
      )}

      {showDropdown && (
        <div className="dropdown">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                className="dropdown-option"
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="dropdown-option">
              No matches found{" "}
              <span className="clear-button" onClick={handleClear}>
                X
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ClearableInput;
