import React, {useEffect, useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Restaurants.jsx';

const SubmitButton = ({items, setItems}) => {
    // const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [open, setOpen] = useState(false);


    const handleSubmit = () => {
        setItems([...items, newItem]); // newTitle gets added to items here
        setNewItem(""); // then cleared
        setOpen(false);

    }
    function handleNewItem(event) {
        // setNewItem(event.target.value); // this updates the input as you type
        // console.log(event);
        let itemArr = [...items, event.target.value];
        // itemArr.push(newItem);
        setNewItem(event.target.value);
        localStorage.setItem('List of Foods', JSON.stringify(itemArr));
    }

    useEffect(()=>{
        const data = localStorage.getItem('list');
        if(data){
            setItems(JSON.parse(data));
        }
    }, []);

    return (
        <table className='activities-table'>
        <tr className='activities-header'>
            Foods
        </tr>
        
        <tr className='activities-table-header'>
            <div className='activities-list-header'>
            <div className='list-title1'>List of Foods</div>
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
                onChange={handleNewItem} 
                onKeyDown={(e) => {
                    if(e.key==="Enter")
                        handleSubmit();
                }}
            />
            <button
            // type="submit"
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
    )
}

export default SubmitButton