import { useState } from "react";

function Button({ onClick, value }) {
    return (
        <button type="button" onClick={onClick}>{value}</button>
    );
}

function ListItem({ item, deleteElement }) {
    return (
        <>
            <input type="checkbox" />
            {item}
            <Button onClick={deleteElement} value="🗑️" />
        </>
    )
}

export default function ToDo() {
    const [toDoItems, setToDoItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleClick() {
        if (inputValue.trim() !== "") {
            setToDoItems([...toDoItems, inputValue]);
            setInputValue("");
        }
    }

    function deleteElement(index) {
        setToDoItems(toDoItems.filter((_, i) => i != index));
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const todoList = toDoItems.map((item, index) =>
        <li key={index}>
            <ListItem item={item} deleteElement={() => deleteElement(index)} />
        </li>
    );

    return (
        <>
            <input
                type="text"
                placeholder="Add new"
                id="value"
                value={inputValue}
                onChange={handleChange}
            />
            <Button value="Add" onClick={handleClick} />
            <ul>{todoList}</ul>
        </>
    );
}
