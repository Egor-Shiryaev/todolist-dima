import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from '../App';

type PropsType = { tasks: Array<TaskType>, title: string,
    removeTask: (id: string) => void,
    addTask: (title: string) => void,
    changeFilter: (value: FilterValuesType) => void,
}
export type TaskType = { id: string, title: string, isDone: boolean
}

function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const taskSJX = props.tasks.length
        ? props.tasks.map((t) =>
            <li key={t.id}>
                <span>{t.title}</span>
                <input type="checkbox" checked={t.isDone}/>
                <button onClick={() => props.removeTask(t.id)}>x</button>
            </li>
        ) : <span>The list is empty</span>

    const onNewTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)}

    const onKeyPressHendler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.charCode === 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        }}

    const addTask = () => {props.addTask(newTaskTitle)
        setNewTaskTitle('')}

const onAllClickHendler=()=>{props.changeFilter('all')}
const onActiveClickHendler=()=>{props.changeFilter('active')}
const onCompletedClickHendler=()=>{props.changeFilter('completed')}

    return (
        <div>
            <h3>  {props.title} </h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onNewTitleChange}
                       onKeyPress={onKeyPressHendler}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>{taskSJX}</ul>
            <button onClick={onAllClickHendler}>all</button>
            <button onClick={onActiveClickHendler}>active</button>
            <button onClick={onCompletedClickHendler}>completed</button>
        </div>)
}

export default Todolist;




