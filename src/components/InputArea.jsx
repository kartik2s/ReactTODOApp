import React, {useState} from "react";

function InputArea(props) {

    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const value = event.target.value;
        setInputText(value);
    }

    return (
        <div className="form">
            <input type="text" placeholder="Add Your Task"
                onChange={handleChange} value={inputText}
            />
            <button onClick={() =>{
                props.onAdd(inputText);
                
            }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;