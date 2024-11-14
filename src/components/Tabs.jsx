import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Tabs.css";

function Tabs() {
  const location = useLocation();

  return (
    <div>
      <div className="tabs">
        <Link
          to="/personal"
          className={`tab ${location.pathname === "/personal" ? "active" : ""}`}
        >
          Personal
        </Link>
        <Link
          to="/organisational"
          className={`tab ${
            location.pathname === "/organisational" ? "active" : ""
          }`}
        >
          Organisational
        </Link>
        <Link
          to="/payment-info"
          className={`tab ${
            location.pathname === "/payment-info" ? "active" : ""
          }`}
        >
          Payment Info
        </Link>
        <Link
          to="/other-info"
          className={`tab ${
            location.pathname === "/other-info" ? "active" : ""
          }`}
        >
          Other Info
        </Link>
        <Link
          to="/general-ledger"
          className={`tab ${
            location.pathname === "/general-ledger" ? "active" : ""
          }`}
        >
          General Ledger
        </Link>
      </div>
    </div>
  );
}

export default Tabs;
