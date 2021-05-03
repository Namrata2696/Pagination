import React, { useState, useEffect, Fragment } from "react";
import Pagination from "../components/pagination";

function Dashboard(props) {
  let allDatas = [
    { name: "red", colour: "red" },
    { name: "yellow", colour: "yellow" },
    { name: "tomato", colour: "tomato" },
    { name: "grey", colour: "grey" },
    { name: "steelblue", colour: "steelblue" },
    { name: "blueviolet", colour: "blueviolet" },
    { name: "brown", colour: "brown" },
    { name: "chocolate", colour: "chocolate" },
    { name: "coral", colour: "coral" },
    { name: "teal", colour: "teal" },
  ];

  const [pageDatas, setPageDatas] = useState([]);

  const displayDatas = (data) => {
    setPageDatas(data);
  };

  return (
    <div className="container">
      <div className="content-item">
        {pageDatas.length > 0 &&
          pageDatas.map((item, index) => {
            return (
              <div
                className="color_box"
                style={{ backgroundColor: item.colour }}
              >
                <p>{item.name}</p>
              </div>
            );
          })}
      </div>
      <Pagination allData={allDatas} displayDatas={displayDatas} />
    </div>
  );
}

export default Dashboard;
