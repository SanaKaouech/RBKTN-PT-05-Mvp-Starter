import React from "react";
import ListItem from "./ListItem.jsx";
import axios from "axios";

const List = (props) => {
  return (
    <div>
      <h4> List Component </h4>
      There are {props.items.length} items.
      {props.items.map((item, index) => (
        <div key={index}>
          <ListItem item={item} refreshList={props.refreshList} />
        </div>
      ))}
    </div>
  )
};

export default List;
