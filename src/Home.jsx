import { useState } from 'react';

function Home() {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    function handleAdd() {
        if (text.trim() === "") {
            alert("Please Enter A Task.");
            return;
        }
        setList([...list, { text: text, completed: false }]);
        setText("");
    }

    function handleDelete(indexToDelete) {
        const updateList = list.filter((_, index) => index !== indexToDelete);
        setList(updateList);
        return;
    }

    function handleToggle(indexToToggle) {
        const updateList = list.map((item, index) => {
            if (index === indexToToggle) {
                return { ...item, completed: !item.completed };
            }
            return item;
        })
        setList(updateList);
    }



    return (
        <>
            <h1>ToDo List</h1>
            <input value={text} placeholder='Add a todo' onChange={(e) => setText(e.target.value)}></input>
            <button onClick={handleAdd}>Add Task</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" checked={item.completed} onChange={() => handleToggle(index)} />
                        <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                            {item.text}
                        </span>
                        <button onClick={() => handleDelete(index)}> Delete </button>
                    </li>
                ))}

            </ul>

        </>
    );
}

export default Home;