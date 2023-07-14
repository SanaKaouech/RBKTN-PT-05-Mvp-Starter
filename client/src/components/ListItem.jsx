import axios from 'axios';
import React from 'react';

const ListItem = ({ item, refreshList }) => {
  const handleDelete = async () => {
    await axios.delete('/api/items/' + item._id).then(() => refreshList())
  }

  return (

    <div id='list'> 
      <span>

      <p> Name : {item.name} </p>

      <p> Last Name : {item.lastName}</p>

      <p> Adress : {item.Adress}</p>

      <p> CIN : {item.CIN}</p>

      <p> Skills : {item.skills} </p>

      </span >

      <button id='del'onClick={handleDelete} >delete</button> 
    </div>
  )
}

export default ListItem;