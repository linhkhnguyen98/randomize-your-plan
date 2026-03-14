import React, {useState} from 'react'
import './Activities.css'
import SubmitButtonFood from './SubmitButtonFood.jsx';
import RandomizeButton from './RandomizeButton.jsx';

const Restaurants = () => {
    const [items, setItems] = useState([]);

    return (
      <div className='activies-box'>
          <SubmitButtonFood items={items} setItems={setItems}/>
          <RandomizeButton items={items}/>
      </div>
    )
}

export default Restaurants