import React from "react";
import ListItem from "./ListItem.jsx";
import axios from "axios";

const List = (props) => {
  return (
    <div >
      <p id='listcv'>There are {props.items.length} CV. </p>
      {props.items.map((item, index) => (
        <div key={index}> <br />
          <ListItem item={item} refreshList={props.refreshList} /> <br />
        </div>
      ))}
    </div>
  )
};

export default List;
