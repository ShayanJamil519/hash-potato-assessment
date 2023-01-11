import React from "react";
import "./StakingCard.css";

const StakingCard = ({ info, value }) => {
  return (
    <div className="StakingCard">
      <p>{info}</p>
      <h3>{value}</h3>
    </div>
  );
};

export default StakingCard;
