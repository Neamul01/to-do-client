import React, { useState } from 'react';

const Home = () => {
    const [task, setTask] = useState('');

    const handleTaskSubmit = (event) => {
        const task = event.target.task.value;
        const description = event.description.value;
        const fullTask = { task, description };

        setTask(fullTask)
    }
    return (
        <div>
            <form onSubmit={e => handleTaskSubmit(e)}>
                <input type="text" name='task' placeholder='Task name' />
                <textarea name="description" id="description" placeholder='Input your task description' cols="30" rows="10"></textarea>
            </form>
            <div>
                <h2>Tasks</h2>
                <h3>{task.task}</h3>
                <p>{task.description}</p>
            </div>
        </div>
    );
};

export default Home;