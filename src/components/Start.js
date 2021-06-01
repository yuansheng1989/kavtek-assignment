import React from "react";
import { withRouter } from "react-router-dom";

const Start = (props) => {
  const handleStartClick = () => {
    props.history.push("/dashboard");
  };

  return (
    <div className="start">
      <button className="start_btn" onClick={handleStartClick}>
        Start Button
      </button>
    </div>
  );
};

export default withRouter(Start);
