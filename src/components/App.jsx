import React, { useState } from "react";
import TodoItem from "./TodoItem.jsx";
import InputArea from "./InputArea.jsx";

function App() {

    const [items, setItems] = useState([]);

    function handleClick(inputText) {
        setItems(prevValue => {
            return [...prevValue, inputText]
            setInputText(""); 
        });
    }

    function deleteItem(id) {
        setItems(prevValue => {
            return prevValue.filter((item, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea onAdd = {handleClick} />
            <div>
                <ul>
                    {items.map((item, index) => (
                        <TodoItem
                            key={index}
                            id={index}
                            text={item}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App;