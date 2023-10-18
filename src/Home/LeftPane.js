import React from "react";
import { useState } from "react";

import logo from "../assets/WokpaLogo Landscape 5 2.png";
import discover from "../assets/discover-icon.png";
import top50 from "../assets/top50-icon.png";
import categories from "../assets/categories-icon.png";
import addyourpodcast from "../assets/mic-icon.png";
import dropdown from "../assets/dropdown-icon.png";
import love from "../assets/love-icon.png";
import list from "../assets/list-icon.png";
import add from "../assets/add-icon.png";
import playlist from "../assets/playlist-icon.png";
import recentlyplayed from "../assets/headphone-icon.png";
import subscription from "../assets/userlove-icon.png";
import podcatsers from "../assets/podcasters-icon.png";
import advertisers from "../assets/advertisers-icon.png";
import read from "../assets/read-icon.png";

const LeftPane = () => {
  const [isactive, setIsactive] = useState(1);

  const tabs = (tab) => {
    setIsactive(tab);
  };

  const [isContentVisible, setIsContentVisible] = useState(true);

  const toggleVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <>
      <div className="leftpane-container">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="top-categories">
            <ul>
              <li
                className={`tab-button ${isactive === 1 ? "active" : ""}`}
                onClick={() => tabs(1)}
              >
                <img src={discover} alt="logo" />
                <p>Discover</p>
              </li>

              <li
                className={`tab-button ${isactive === 2 ? "active" : ""}`}
                onClick={() => tabs(2)}
              >
                <img src={top50} alt="logo" />
                <p>Top 50 podcasts</p>
              </li>

              <li
                className={`tab-button ${isactive === 3 ? "active" : ""}`}
                onClick={() => tabs(3)}
              >
                <img src={categories} alt="logo" />
                <p>Categories</p>
              </li>

              <li
                className={`tab-button ${isactive === 4 ? "active" : ""}`}
                onClick={() => tabs(4)}
              >
                <img src={addyourpodcast} alt="logo" />
                <p>Add your podcast</p>
              </li>
            </ul>
          </div>

          <div className="library-categories">
            <div className="header" onClick={toggleVisibility}>
              <h5> Your Library </h5>

              <img src={dropdown} alt="logo" />
            </div>

            <div className="library-icons">
              <img src={love} alt="logo" />
              <img src={list} alt="logo" />
              <img src={add} alt="logo" />
            </div>

            {isContentVisible && (
              <ul>
                <li
                  className={`tab-button ${isactive === 5 ? "active" : ""}`}
                  onClick={() => tabs(5)}
                >
                  <img src={playlist} alt="logo" />
                  <p>Your playlist</p>
                </li>

                <li
                  className={`tab-button ${isactive === 6 ? "active" : ""}`}
                  onClick={() => tabs(6)}
                >
                  <img src={recentlyplayed} alt="logo" />
                  <p>Recently played</p>
                </li>

                <li
                  className={`tab-button ${isactive === 7 ? "active" : ""}`}
                  onClick={() => tabs(7)}
                >
                  <img src={subscription} alt="logo" />
                  <p>Subscription & Hosts</p>
                </li>
              </ul>
            )}
          </div>

          <hr />

          <div className="other-categories">
            <ul>
              <li
                className={`tab-button ${isactive === 8 ? "active" : ""}`}
                onClick={() => tabs(8)}
              >
                <img src={podcatsers} alt="logo" />
                <p>Wokpa for podcasters</p>
              </li>

              <li
                className={`tab-button ${isactive === 9 ? "active" : ""}`}
                onClick={() => tabs(9)}
              >
                <img src={advertisers} alt="logo" />
                <p>Wokpa for advertisers</p>
              </li>

              <li
                className={`tab-button ${isactive === 10 ? "active" : ""}`}
                onClick={() => tabs(10)}
              >
                <img src={read} alt="logo" />
                <p>Read our blogs</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftPane;
