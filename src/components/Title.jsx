import React from 'react';

const Title = ({todos,changeTheme}) => {
    return (
        <div style={{textAlign: "center"}}>
            <h1 className={"display-1"}>Todo</h1>
            <h3 className={"display-3"}>Количество задач - {todos.length}</h3>
        </div>
    );
};

export default Title;













