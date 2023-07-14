import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import List from './components/List.jsx'
//import Admin from './components/Admin.jsx'


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
  
       <h1 id='titre'> Generate your curriculum vitae </h1>
      <br></br>
      <select onChange={(e) => {
        const item = items[e.target.value]
        setCurrentItem(item)
      }}>
        {items.map((item, index) => (
          <option key={index} value={index}>{item.name}</option> 
        ))}
        <br /><br />
      </select>
      
      
      <input id='but' type="text" value={currentItem.name} name="name" onChange={onChange} placeholder="Enter your name" required />   <br />

      <input type="text" value={currentItem.lastName} name="lastName" onChange={onChange} placeholder="Enter your last Name" required /> <br /> <br />

      <input type="text" value={currentItem.Adress} name="Adress" onChange={onChange} placeholder="Enter your Adress" required /> <br /> <br />

      <input type="number" value={currentItem.CIN} name="CIN" onChange={onChange} placeholder="Enter your CIN" required /> <br /> <br />

      <textarea  value={currentItem.skills} name="skills" onChange={onChange} placeholder="Enter your skills" required rows="10" cols="50"/> <br /> <br />
      
        <br/>
      <button onClick={handleAddItem}>Add CV</button> 

      <button onClick={handleUpdateItem}>Update CV</button> <br /> <br /> <br />
     
      <h5 id='abal'>CV List : </h5>
      <List  items={items} refreshList={getAllItems} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
