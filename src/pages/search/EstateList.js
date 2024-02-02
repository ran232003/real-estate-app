import React from "react";
import EstateItem from "./components/EstateItem";
const dummy = [1, 2, 3, 4, 5, 6];
const EstateList = (props) => {
  console.log(props.estates);
  return (
    <div className="EstateListMain">
      <div className="estate-header">
        <h1>Estate Results</h1>
        <hr />
      </div>
      <div className="estate-list">
        {props.estates.length > 0 ? (
          props.estates.map((item) => {
            return <EstateItem estate={item} />;
          })
        ) : (
          <h3>No Results</h3>
        )}
      </div>
    </div>
  );
};

export default EstateList;
