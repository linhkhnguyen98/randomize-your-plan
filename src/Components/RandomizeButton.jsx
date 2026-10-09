import React, {useState} from 'react'
import './Restaurants.css';

const RandomizeButton = ({items}) => {
    const [randomItem, setRandomItem] = useState("");

    const handleRandom = () => {
        const randomIndex = Math.floor(Math.random() * items.length);
        setRandomItem(items[randomIndex]);
    }
    return(
        <div className='randomize-button'>
            <button onClick={handleRandom}>Pick Random</button>
            <p>{randomItem}</p>

            <button>Delete All</button>
        </div>
    )
}

export default RandomizeButton