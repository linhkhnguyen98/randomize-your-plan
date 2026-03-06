import React, {useEffect, useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Restaurants.jsx';

const SubmitButton = ({items, setItems}) => {
    const [newItem, setNewItem] = useState("");
    const [open, setOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [editValue, setEditValue] = useState("");


    const handleSubmit = () => {
        const updatedItems = [...items, newItem];
        // setItems([...items, newItem]); // newTitle gets added to items here
        setItems(updatedItems); // then cleared
        localStorage.setItem('List of Restaurants', JSON.stringify(updatedItems));
        setNewItem("");
        setOpen(false);

    }
    // look for the items from localStorage and load them when first load the page/refresh
    useEffect(()=>{
        const data = localStorage.getItem('List of Restaurants');
        if(data){
            setItems(JSON.parse(data));
        }
    }, []);

    const startEdit = (id, currentValue) => {
        setEditingId(id);
        setEditValue(currentValue);
    };

    const saveEdit = (id) => {
        const updatedItems = items.map((item, i) => i === id ? editValue : item);
        setItems(updatedItems);
        localStorage.setItem('List of Restaurants', JSON.stringify(updatedItems));
        setEditingId(null); // Reset editingId back to null which swaps the input back to plain text
        setEditValue("");
    };

    const removeItem = (id) => {
    const updatedItems = items.filter((item, i) => i !== id);
    setItems(updatedItems);
    localStorage.setItem('List of Restaurants', JSON.stringify(updatedItems));
    };


    return (
        <table className='restaurant-table'>
            <thead>
                <tr className='restaurant-header'>
                    <th>Where to Eat</th>
                </tr>
                <tr className='restaurant-table-header'>
                    <th className='restaurant-list-header'>
                        <div className='list-title2'>List of Restaurants</div>
                    </th>
                </tr>
                <tr>
                    <td>
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
                            onChange={(e) => setNewItem(e.target.value)}
                            onKeyDown={(e) => {
                                if(e.key==="Enter")
                                    handleSubmit();
                            }}
                        />
                        <button onClick={handleSubmit} className='submit-button'>
                            submit
                        </button>
                        </Popup>
                    </td>
                </tr>
            </thead>
            {/* <tbody>
                {items.map((item, id) => (
                <tr key={id}>
                    <td>{item}</td>
                </tr>
                ))}
            </tbody> */}
            <tbody>
                {items.map((item, id) => (
                    <tr key={id}>
                        <td>
                            {editingId === id ? (
                                // if this row this being edited, show input field
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") saveEdit(id);
                                        if (e.key === "Escape") setEditingId(null);
                                    }}
                                    autoFocus
                                />
                            // if not show plain text
                            ) : (
                                item
                            )}
                        </td>
                         {/* Swap the button between edit and save */}
                        <td>
                            {editingId === id ? (
                                <button onClick={() => saveEdit(id)}>save</button>
                            ) : (
                                <button onClick={() => startEdit(id, item)}>edit</button>
                            )}
                            <button onClick={() => removeItem(id)}>remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SubmitButton