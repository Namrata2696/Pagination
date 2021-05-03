import React, { useState, useEffect, Fragment } from "react";

function Pagination(props) {
  const [allDatas, setAllDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const NO_RECORDS = 2;

  useEffect(() => {
    async function fetchData() {
      if (props.allData) {
        let data = [];
        setAllDatas(props.allData);
        props.allData.map((item, index) => {
          if (index < NO_RECORDS) {
            data.push(item);
          }
          return true;
        });

        var total = isInt(props.allData.length, NO_RECORDS);

        var totalpgs =
          total !== true
            ? parseInt(props.allData.length / NO_RECORDS) + 1
            : props.allData.length / NO_RECORDS;
        let pgs = [];
        for (var i = 1; i <= Number(totalpgs); i++) {
          pgs.push(i);
        }
        setTotalPage(pgs);
        props.displayDatas(data);
      }
    }
    fetchData();
  }, []);

  function isInt(len, display) {
    return len % display === 0;
  }

  const prevPage = () => {
    var page = currentPage - 1;
    console.log("prev:", page);
    setCurrentPage(page);
    var data = [];
    allDatas.map((item, index) => {
      if (index < page * NO_RECORDS && index >= (page - 1) * NO_RECORDS) {
        data.push(item);
      }
      return true;
    });
    props.displayDatas(data);
  };

  const nextPage = () => {
    var page = currentPage + 1;
    setCurrentPage(page);
    var data = [];
    allDatas.map((item, index) => {
      if (index < page * NO_RECORDS && index >= (page - 1) * NO_RECORDS) {
        data.push(item);
      }
      return true;
    });
    props.displayDatas(data);
  };

  const firstPage = () => {
    var page = 1;
    console.log("prev:", page);
    setCurrentPage(page);
    var data = [];
    allDatas.map((item, index) => {
      if (index < page * NO_RECORDS && index >= (page - 1) * NO_RECORDS) {
        data.push(item);
      }
      return true;
    });
    props.displayDatas(data);
  };

  const activePageClick = (page) => {
    setCurrentPage(page);
    var data = [];
    allDatas.map((item, index) => {
      if (index < page * NO_RECORDS && index >= (page - 1) * NO_RECORDS) {
        data.push(item);
      }
      return true;
    });
    console.log("all::", allDatas, data);
    props.displayDatas(data);
  };

  const lastPage = () => {
    var page = totalPage.length;
    setCurrentPage(page);
    var data = [];
    allDatas.map((item, index) => {
      if (index < page * NO_RECORDS && index >= (page - 1) * NO_RECORDS) {
        data.push(item);
      }
      return true;
    });
    props.displayDatas(data);
  };

  return (
    <Fragment>
      <div className="pagination">
        {currentPage !== 1 && (
          <button
            type="button"
            className={`page_btn radial-out btn btn-primary`}
            onClick={() => firstPage()}
          >
            {"<<"}
          </button>
        )}
        {currentPage !== 1 && (
          <button
            type="button"
            className={`page_btn radial-out btn btn-primary`}
            onClick={() => prevPage()}
          >
            {"<"}
          </button>
        )}
        {totalPage.length > 0 &&
          totalPage.map((item, index) => {
            return (
              <button
                type="button"
                key={index}
                title={item}
                className={`${
                  currentPage === item ? "active" : ""
                } page_btn radial-out btn btn-primary`}
                onClick={() => activePageClick(item)}
              >
                {item}
              </button>
            );
          })}
        {currentPage !== totalPage.length && (
          <button
            type="button"
            className={`page_btn radial-out btn btn-primary`}
            onClick={() => nextPage()}
          >
            {">"}
          </button>
        )}
        {currentPage !== totalPage.length && (
          <button
            type="button"
            className={`page_btn radial-out btn btn-primary`}
            onClick={() => lastPage()}
          >
            {">>"}
          </button>
        )}
      </div>
    </Fragment>
  );
}

export default Pagination;
