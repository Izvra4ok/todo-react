import React from 'react';
import Item from "./Item";

const List = ({todos, removeTask, toggleTask}) => {
    return (
        <div className={"list"}>
            {todos.map(todo =>
                <Item key={todo.id}
                      task={todo.title}
                      complete={todo.complete}
                      id={todo.id}
                      removeTask={removeTask}
                      toggleTask={toggleTask}/>)}
        </div>
    );
};

export default List;