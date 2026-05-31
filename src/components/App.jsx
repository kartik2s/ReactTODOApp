import React, { useState } from "react";
import TodoItem from "./TodoItem.jsx";

function App() {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const value = event.target.value;
        setInputText(value);
    }

    function handleClick() {
        setItems(prevValue => {
            return [...prevValue, inputText]
        });
        setInputText("");
    }
    
    function deleteItem(id){
        setItems(prevValue =>{
            return prevValue.filter((item, index) =>{
                return index !== id;
            })
        })
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" placeholder="Add Your Task"
                    onChange={handleChange} value={inputText}
                />
                <button onClick={handleClick}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((item, index) => (
                        <TodoItem
                            key={index}
                            id={index}
                            text={item}
                            onChecked= {deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App;