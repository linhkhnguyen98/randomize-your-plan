import React, {useEffect, useState} from 'react'
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Activities.css';

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
    }, [setItems]);

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
        <table className='activities-table'>
            <thead>
                <tr>
                    <th className='activities-header'>Where to Eat</th>
                </tr>
                <tr className='activities-table-header'>
                    <th className='activities-list-header'>List of Restaurants</th>
                </tr>
                <tr>
                    {/* <td>
                        <Popup 
                        open={open}
                        onOpen={() => setOpen(true)}
                        onClose={() => setOpen(false)}
                        trigger={<button>Add Your Decisions</button>}
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
                    </td> */}
                    <td className='addButton-noBorder'>
                        <button onClick={() => setOpen(!open)}>
                            Add Your Decisions
                        </button>

                        {open && (
                            <>
                                        {/* clicking the overlay closes the popup */}
                                <div className="overlay" onClick={() => setOpen(false)} />
                                <div className="popup-container">
                                    <input
                                        type="text"
                                        className='input-box'
                                        value={newItem}
                                        autoFocus
                                        onChange={(e) => setNewItem(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") handleSubmit();
                                            if (e.key === "Escape") setOpen(false);
                                        }}
                                    />
                                    <button onClick={handleSubmit} className='submit-button'>
                                        Submit
                                    </button>
                                </div>
                            </>
                        )}
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
                        <td className="button-cell">
                            {editingId === id ? (
                                <button className='save-noBorder' onClick={() => saveEdit(id)}>save</button>
                            ) : (
                                <button className='edit-noBorder' onClick={() => startEdit(id, item)}>edit</button>
                            )}
                            <button className='remove-noBorder' onClick={() => removeItem(id)}>remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SubmitButton