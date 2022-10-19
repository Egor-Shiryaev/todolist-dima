import React from 'react';

type PropsType = {
    tasks: Array<task>
    title: string
    removeTask: Function

}

type task = {
    id: number,
    title: string,
    isDone: boolean
}


function Todolist(props: PropsType) {
    return <div>
        <h3>  {props.title} </h3>
        {props.tasks.map((t) =>
            <div>{t.id} {t.title}
                <input type="checkbox" checked={t.isDone}/>
                <button onClick={() => {props.removeTask(t.id)}}>x</button>
            </div>
        )}
    </div>
}





export default Todolist;




