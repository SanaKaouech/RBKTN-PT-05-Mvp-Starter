import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import List from './components/List.jsx'

const App = () => {
  const [items, setItems] = useState([])
  const [currentItem, setCurrentItem] = useState({
    name: '',
    lastName: '',
    CIN : Number,
    skills: '',
  })
  useEffect(() => {
    getAllItems()
  }, [currentItem])
  const getAllItems = async () => {
    await axios.get('/api/items').then(response => setItems(response.data))
  }
  const handleAddItem = async () => {
    await axios.post('/api/items', {
      id: items.length + 1,
      ...currentItem
    }).then(() => {
      getAllItems()
    })
  }
  const handleUpdateItem = async () => {
    await axios.put('/api/items', currentItem).then(() => {
      getAllItems()
    })
  }

  const onChange = (event) => {
    setCurrentItem({
      ...currentItem,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div>
      <select onChange={(e) => {
        const item = items[e.target.value]
        setCurrentItem(item)
      }}>
        {items.map((item, index) => (
          <option key={index} value={index}>{item.name}</option>
        ))}
      </select>
      
      <input type="text" value={currentItem.name} name="name" onChange={onChange} placeholder="Enter your name" required />
      <input type="text" value={currentItem.lastName} name="lastName" onChange={onChange} placeholder="Enter your lastName" required />
      <input type="number" value={currentItem.CIN} name="CIN" onChange={onChange} placeholder="Enter your CIN" required />
      <input type="text" value={currentItem.skills} name="skills" onChange={onChange} placeholder="Enter your skills" required />
      
        <br/>
      <button onClick={handleAddItem}>Add CV</button>
      <button onClick={handleUpdateItem}>Update CV</button>
     
      <h1>Item List</h1>
      <List items={items} refreshList={getAllItems} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))