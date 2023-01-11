import React from "react";
import "./SideBarMobile.css";
import SideBarLink from "../SideBarLink/SideBarLink";
import SideBarBondDiscounts from "../SideBarBondDiscounts/SideBarBondDiscounts";
import {
  SideBarBonds,
  SideBarLinksBottom,
  SideBarLinksTop,
  SocialLinks,
} from "../../data";

const SideBarMobile = () => {
  return (
    <div className="sidebarMobile__container ">
      {/* Logo Container */}
      <div className="logo__container">
        <img src="/assets/logo.png" alt="Vault Pass Logo" />
        <h1>VAULT PASS</h1>
      </div>
      {/* SideBarTop Links Container */}
      {SideBarLinksTop.map((link) => (
        <SideBarLink
          key={link.title}
          title={link.title}
          icon={link.icon}
          altText={link.iconAltText}
        />
      ))}
      {/* SideBarBonds */}
      <div className="SideBarBondsContainer">
        <h1>Bond Discounts</h1>
        {SideBarBonds.map((bond, i) => (
          <SideBarBondDiscounts
            key={i}
            bondName={bond.bondName}
            bondPercentage={bond.bondPercentage}
          />
        ))}
      </div>
      {/* SideBarBottom Links Container */}
      {SideBarLinksBottom.map((link) => (
        <SideBarLink
          key={link.title}
          title={link.title}
          icon={link.icon}
          altText={link.iconAltText}
        />
      ))}
      {/* SideBarSocialIcons */}
      <div className="SocialIcons__Container">
        {SocialLinks.map((social) => (
          <img src={social.src} alt={social.altText} />
        ))}
      </div>
    </div>
  );
};

export default SideBarMobile;
