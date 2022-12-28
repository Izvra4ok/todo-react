import './App.css';
import Title from "./components/Title";
import Input from "./components/Input";
import List from "./components/List";
import {useEffect, useState} from "react";

const App = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
    }, [todos])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                userId: (Math.random()),
                id: (Math.ceil(Math.random() * 1000)),
                title: userInput,
                complete: false,
            }
            console.log(newItem)
            setTodos([...todos, newItem])
        }
    }


    const moreTask = async () => {
        let promise = await fetch("https://jsonplaceholder.typicode.com/todos")
            .then(promise => promise.json()
                .then(data => {
                    setTodos(data)
                    console.log(data)
                }))
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([...todos.map((todo) =>
            todo.id === id ? {...todo, complete: !todo.complete} : {...todo})])
    }

    return (
        <div className="App container">
            <Title todos={todos}/>
            <Input addTask={addTask} moreTask={moreTask}/>
            <List todos={todos}
                  removeTask={removeTask}
                  toggleTask={handleToggle}/>
        </div>
    );
}

export default App;
