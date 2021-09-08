import React, { useState } from "react";
// import data from "../../../databases/data";
import { FaSearchLocation, FaTimes } from "react-icons/fa";

// const Search = (props) => {
//   const products = data;

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
      <div className="header--search">
        <form>
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
            className="search-data"
            aria-label="Search your items"
          />
          <div className="btn search--submit">
            {filteredData.length === 0 ? (
              <FaSearchLocation />
            ) : (
              <FaTimes id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </form>
      </div>

      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link}>
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </>

    // <div className="header--search">
    //   <form action="#">
    //     <input
    //       type="text"
    //       aria-label="Search your items"
    //       class="search-data"
    //       placeholder="Search Item"
    //     />

    //     <button
    //       onClick={() => onclick()}
    //       type="submit"
    //       className="btn search--submit"
    //     >
    //       Search
    //     </button>

    //     <div className="dataResult"></div>
    //   </form>
    // </div>
  );
}

export default SearchBar;