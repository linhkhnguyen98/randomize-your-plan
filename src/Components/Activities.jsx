import React, {useState} from 'react'
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import './Activities.css'
import './SubmitButton.jsx';
import SubmitButton from './SubmitButton.jsx';
import RandomizeButton from './RandomizeButton.jsx';

const Activities = () => {
  const [items, setItems] = useState([]);

    return (
      <div className='activies-box'>
          <SubmitButton items={items} setItems={setItems}/>
          <RandomizeButton items={items}/>
      </div>
    )
}

export default Activities