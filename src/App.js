import './App.css';
import Title from "./components/Title";
import Input from "./components/Input";
import List from "./components/List";
import {useState} from "react";

const App = () => {

    const [todos, setTodos] = useState([]);

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: (Math.random()),
                task: userInput,
                complete: false,
            }
            setTodos([...todos, newItem])
        }
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
            <Input addTask={addTask}/>
            <List todos={todos}
                  removeTask={removeTask}
                  toggleTask={handleToggle}/>
        </div>
    );
}

export default App;
