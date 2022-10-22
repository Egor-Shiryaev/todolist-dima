import React, {useState} from 'react';
import Todolist, {TaskType} from './components/Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML & CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ]);

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);}

    function addTask(title:string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)}

    let [filter, setFilter] = useState<FilterValuesType>('all')
    let taskForTodolist = tasks;
    if (filter === 'completed') {
        taskForTodolist = tasks.filter(t => t.isDone === true);}
    if (filter === 'active') {
        taskForTodolist = tasks.filter(t => t.isDone === false);}

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
