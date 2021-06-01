import React from "react";
import { withRouter } from "react-router-dom";

const Dashboard = (props) => {
  const handleDashboardBtnClick = (e) => {
    props.history.push(`/pascal_triangle/${e.target.innerText}`);
  };

  return (
    <div>
      <p className="dashboard_title">Select Number For Parscal Triangle</p>
      <div className="dashboard_btn_line">
        <button onClick={handleDashboardBtnClick}>1</button>
        <button onClick={handleDashboardBtnClick} style={{ animationDuration: "0.8s" }}>2</button>
        <button onClick={handleDashboardBtnClick} style={{ animationDuration: "1.1s" }}>3</button>
      </div>
      <div className="dashboard_btn_line">
        <button onClick={handleDashboardBtnClick} style={{ animationDuration: "1.4s" }}>4</button>
        <button onClick={handleDashboardBtnClick} style={{ animationDuration: "1.7s" }}>5</button>
        <button onClick={handleDashboardBtnClick} style={{ animationDuration: "2s" }}>6</button>
      </div>
      <div className="dashboard_btn_line">
        <button onClick={handleDashboardBtnClick} style={{ animationDuration: "2.3s" }}>7</button>
        <button onClick={handleDashboardBtnClick} style={{ animationDuration: "2.6s" }}>8</button>
        <button onClick={handleDashboardBtnClick} style={{ animationDuration: "2.9s" }}>9</button>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
