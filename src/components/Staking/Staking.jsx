import React, { useState } from "react";
import "./Staking.css";
import StakingCard from "./StakingCard/StakingCard";
import SideBarMobile from "../SideBar/SideBarMobile/SideBarMobile";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { StakingCardData } from "../data";

const Staking = () => {
  const [isMobileSideBarOpen, setIsMobileSideBarOpen] = useState(false);

  function toggleMenu() {
    setIsMobileSideBarOpen(!isMobileSideBarOpen);
  }

  return (
    <div className="staking__container">
      <div className="Buttons__Container">
        <div className="hamburger">
          {isMobileSideBarOpen ? (
            <AiOutlineClose
              onClick={() => {
                toggleMenu();
              }}
            />
          ) : (
            <FiMenu
              onClick={() => {
                toggleMenu();
              }}
            />
          )}
        </div>
        <div className="buy_wallet__BtnsContainer">
          <button className="buyBtn">Buy PASS</button>
          <button className="walletBtn">Connect Wallet</button>
        </div>
      </div>

      {isMobileSideBarOpen === true ? (
        <SideBarMobile />
      ) : (
        <>
          <h1 className="title">Epoch Staking</h1>
          {/* StakingCardsContainer */}
          <div className="StakingCard__Container">
            {StakingCardData.map((data, i) => (
              <StakingCard
                info={data.stakingInfo}
                value={data.stakingValue}
                key={i}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Staking;
