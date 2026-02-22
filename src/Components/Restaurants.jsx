import React, {useState} from 'react'
import './Restaurants.css'
import SubmitButton from './SubmitButton.jsx';
import RandomizeButton from './RandomizeButton.jsx';

const Restaurants = () => {
    const [items, setItems] = useState([]);

    return (
      <div className='restaurant-box'>
          <SubmitButton items={items} setItems={setItems}/>
          <RandomizeButton items={items}/>
      </div>
    )
}

export default Restaurants