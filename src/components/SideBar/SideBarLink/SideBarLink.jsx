import React from "react";
import "./SideBarLink.css";

const SideBarLink = ({ title, icon, altText }) => {
  return (
    <div className="SideBarLink__Container">
      <img src={icon} alt={altText} />
      <p>{title}</p>
    </div>
  );
};

export default SideBarLink;
