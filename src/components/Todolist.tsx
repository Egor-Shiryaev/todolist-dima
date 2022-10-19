import React from 'react';

type PropsType = {
    tasks: Array<task>
    title: string
    removeTask: (id: number) => void
}

type task = {
    id: number
    title: string
    isDone: boolean
}


function Todolist(props: PropsType) {

    const taskSJX = props.tasks.length
        ? props.tasks.map((t) =>
            <div key={t.id}>
                <span>{t.title}</span>
                <input type="checkbox" checked={t.isDone}/>
                <button onClick={() => props.removeTask(t.id)}>x</button>
            </div>
        ) : <span>The list is empty</span>
    // }


    return (
        <div>
            <h3>  {props.title} </h3>
            <ul>{taskSJX}</ul>
        </div>)
}


export default Todolist;




