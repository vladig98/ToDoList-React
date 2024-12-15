import { useState } from "react";
import { Button } from "./Button";
import { ListItem } from "./ListItem";

export default function ToDo() {
    const [toDoItems, setToDoItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleAddClick() {
        if (inputValue.trim()) {
            setToDoItems([...toDoItems, inputValue]);
            setInputValue("");
        } else {
            alert("Please enter a task!");
        }
    }

    function handleDelete(index) {
        setToDoItems(toDoItems.filter((_, i) => i !== index));
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <>
            <label htmlFor="taskInput" style={{ display: "none" }}>Add a new task</label>
            <input
                id="taskInput"
                type="text"
                placeholder="Add new task"
                value={inputValue}
                onChange={handleInputChange}
            />
            <Button value="Add" onClick={handleAddClick} />
            <ul>
                {toDoItems.map((item, index) => (
                    <li key={index}>
                        <ListItem item={item} onDelete={() => handleDelete(index)} />
                    </li>
                ))}
            </ul>
        </>
    );
}