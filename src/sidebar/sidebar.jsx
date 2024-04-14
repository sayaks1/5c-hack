//sidebar.jsx

import React, { useState } from "react";
import "./sidebar.css";

function Sidebar({ activeSection, handleSectionClick }) {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="logo">
        <h2>7C Second Chance Market</h2>
      </div>
      {/* Horizontal line */}
      <hr className="separator" />
      {/* Sidebar menu */}
      <div className="menu">
        <button
          className={activeSection === "home" ? "active" : ""}
          onClick={() => handleSectionClick("home")}
        >
          Home
        </button>
        <button
          className={activeSection === "account" ? "active" : ""}
          onClick={() => handleSectionClick("account")}
        >
          Account
        </button>
        <button
          className={activeSection === "storefront" ? "active" : ""}
          onClick={() => handleSectionClick("storefront")}
        >
          My StoreFront
        </button>

        {/* Horizontal line */}
        <hr className="separator" />

        <button
          className={activeSection === "clothing" ? "active" : ""}
          onClick={() => handleSectionClick("clothing")}
        >
          Clothing
        </button>
       
        <button
          className={activeSection === "housing" ? "active" : ""}
          onClick={() => handleSectionClick("housing")}
        >
          Housing
        </button>
        <button
          className={activeSection === "appliances" ? "active" : ""}
          onClick={() => handleSectionClick("appliances")}
        >
          Appliances
        </button>
        <button
          className={activeSection === "wheels" ? "active" : ""}
          onClick={() => handleSectionClick("wheels")}
        >
          Wheels
        </button>
        <button
          className={activeSection === "furniture" ? "active" : ""}
          onClick={() => handleSectionClick("furniture")}
        >
          Furniture
        </button>
        <button
          className={activeSection === "tickets" ? "active" : ""}
          onClick={() => handleSectionClick("tickets")}
        >
          Tickets
        </button>
        <button
          className={activeSection === "miscellaneous" ? "active" : ""}
          onClick={() => handleSectionClick("miscellaneous")}
        >
          Giveaway
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
