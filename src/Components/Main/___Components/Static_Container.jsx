import React from "react";
import Filter_cont from "./Filter_cont";

const Static_Container = ({ statistic_container_className, item_left }) => {
  return (
    <div className={statistic_container_className}>
      <span> {item_left} items left </span>
      <Filter_cont className="filter_desktop" />
      <span> Clear Completed </span>
    </div>
  );
};

export default Static_Container;
