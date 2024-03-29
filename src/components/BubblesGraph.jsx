import React from "react";
import Diamond from "../imgs/diamond.svg";
import Eye from "../imgs/eye.svg";

const BubblesGraph = () => {
  return (
    <div className="bubbles item-center">
      <p className="timeline">Timeline</p>
      <div className="time-period">
        <span>1W</span>
        <span>1M</span>
        <span className="active">3M</span>
        <span>1Y</span>
        <span>All</span>
      </div>
      <div className="all-bubles item-center">
        <div className="outer-center-circle">
          <div className="pink first">
            <p>Investment</p>
            <p className="updown">$12,875</p>
          </div>
          <div className="pink second"></div>
          <div className="center-div item-center">
            <div className="innermost">
              <p>Investment</p>
              <p className="updown">$12,875</p>
            </div>
          </div>
          <div className="yellow"></div>
          <div className="purple purple1"></div>
          <div className="purple purple2"></div>
          <div className="purple purple3"></div>
          <div className="purple purple4"></div>

          <div className="blue blue1"></div>
          <div className="blue blue2"></div>
          <div className="blue blue3">
            <p>Investment</p>
            <p className="updown">$12,875</p>
          </div>
          <div className="blue blue4"></div>
          <div className="blue blue5"></div>
        </div>
        <div className="pink third">
          <p>Investment</p>
          <p className="updown">$12,875</p>
        </div>
        <div className="pink forth">
          <p>Investment</p>
          <p className="updown">$12,875</p>
        </div>
      </div>
      <div className="data">
        <div>
          <div className="white-box">
            <img src={Diamond} alt="Diamond" />
          </div>
          <span className="title">TREND GOOD</span>
          <span>204</span>
        </div>
        <div>
          <div className="white-box">
            <img src={Eye} alt="Eye" />
          </div>
          <span className="title">SHOPPING VIEWS</span>
          <span>65,540</span>
        </div>
        <div>
          <div className="white-box">
            <img src={Diamond} alt="Chart" />
          </div>
          <span className="title">STORE DYNAMICS</span>
          <span>324</span>
        </div>
      </div>
    </div>
  );
};

export default BubblesGraph;
