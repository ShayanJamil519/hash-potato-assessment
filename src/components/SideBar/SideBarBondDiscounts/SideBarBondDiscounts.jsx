import React from "react";
import "./SideBarBondDiscounts.css";

const SideBarBondDiscounts = ({ bondName, bondPercentage }) => {
  return (
    <div className="SideBarBondDiscounts__Container">
      <h3>{bondName}</h3>
      <p>{bondPercentage}</p>
    </div>
  );
};

export default SideBarBondDiscounts;
