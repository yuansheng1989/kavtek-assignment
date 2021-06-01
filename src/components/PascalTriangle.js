import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const PascalTriangle = (props) => {
  const [pascalTriangle, setPascalTriangle] = useState([]);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    setPascalTriangle(getPascalTriangle(props.match.params.n));
  }, [props.match.params.n]);

  const getPascalTriangle = (n) => {
    const result = [];

    if (n === 0) {
      return result;
    }

    for (let i = 0; i < n; i++) {
      result[i] = [];
      result[i][0] = 1;
      result[i][i] = 1;
      for (var j = 1; j < i; j++) {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }

    return result;
  };

  const handleTriangleClose = () => {
    props.history.push("/dashboard");
  };

  const handleTriangleBtnClick = (x, y) => {
    setX(x);
    setY(y);
  };

  const getBtnColor = (i) => {
    return i % 2 === 0 ? "#00b7ff" : "#55ff00"
  };

  return (
    <div className="pascal_triangle">
      <div className="pascal_triangle_info">
        <div>
          <button className="close_btn" onClick={handleTriangleClose}>Close</button>
        </div>
        <div>
          <p>
            Current X Y:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X{x}&nbsp;Y{y}
          </p>
        </div>
      </div>
      <div>
        {pascalTriangle.map((arr, index) => {
          return (
            <div key={index} style={{display: "flex", justifyContent:"center"}}>
              {arr.map((el, subIndex) => {
                return (
                  <button
                    className="triangle_btn"
                    key={subIndex}
                    onClick={() => handleTriangleBtnClick(subIndex, index)}
                    style={{backgroundColor: getBtnColor(subIndex)}}
                  >
                    {el}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(PascalTriangle);
