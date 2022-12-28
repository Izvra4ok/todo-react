import React from 'react';

const Item = ({task, id, removeTask, complete, toggleTask}) => {


    return (
        <div className={"item"} key={id}>
            <div onClick={() => toggleTask(id)} className={complete ? "item-text strike" : "item-text"}>
                <b>{id}</b> - {task}
            </div>
            <div className={"item-delete"} onClick={() => removeTask(id)}>X</div>
        </div>
    );
};

export default Item;