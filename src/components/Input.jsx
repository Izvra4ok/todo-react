import React, {useState} from 'react';

const Input = ({addTask}) => {

    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    };

    const handleKeysPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("")
    };

    return (
        <div >
            <form style={{display: "flex", flexDirection: "row"}}onSubmit={handleSubmit}>
                <input className={"form-control"} type="text"
                       placeholder="My Todo" value={userInput}
                       onChange={handleChange}
                       onKeyDown={handleKeysPress}
                />
                <button style={{width: "100px", display: "inline"}} className={"btn-primary"}>Save</button>
            </form>
        </div>
    )
        ;
};

export default Input;