import React, {useState} from 'react';
import Todolist from './components/Todolist';

function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: 'JS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'JS', isDone: true},
    ]);
    let [filter, setFilter] = useState('all');

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    let taskForTodolist = tasks;
    if (filter === 'complited') {
        taskForTodolist = tasks.filter(t => t.isDone === true);
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}
            />
        </div>
    );
}

export default App;
