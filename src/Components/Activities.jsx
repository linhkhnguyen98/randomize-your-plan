import React, {useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Activities.css'

const Activities = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [open, setOpen] = useState(false);
  const [randomItem, setRandomItem] = useState("");

  const handleSubmit = () => {
    setItems([...items, newItem]); // newTitle gets added to items here
    setNewItem(""); // then cleared
    setOpen(false);
  }
function handleNewItem(event) {
  setNewItem(event.target.value); // this updates the input as you type
  // console.log(event);
}
const handleRandom = () => {
  const randomIndex = Math.floor(Math.random() * items.length);
  setRandomItem(items[randomIndex]);
}

    return (
      <div className='activies-box'>
          <table className='activities-table'>
            <tr className='activities-header'>
              Things to do
            </tr>
            
            <tr className='activities-table-header'>
              <div className='activities-list-header'>
                <div className='list-title1'>List of Things</div>
              </div>
            </tr>
            <tr>
              <Popup 
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                trigger={<button>add</button>}
                position="center">
                <input 
                  type="text"
                  className='input-box'
                  value={newItem}
                  onChange={handleNewItem} />
                <button
                onClick={handleSubmit}
                className='submit-button'
                >
                  submit
                </button>
              </Popup>
            </tr>
            <tbody>
              {items.map((item, id) => (
                <tr key={id}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleRandom}>Pick Random</button>
          <p>{randomItem}</p>
      </div>
    )
}

export default Activities