import axios from 'axios';
import React from 'react';

const ListItem = ({ item, refreshList }) => {
  const handleDelete = async () => {
    await axios.delete('/api/items/' + item._id).then(() => refreshList())
  }

  return (

    <div>
      <span>{item.name}</span>
      <button onClick={handleDelete} >delete</button>
    </div>
  )
}

export default ListItem;