import React, { useState, useEffect } from 'react';

const Home = () => {
    const [task, setTask] = useState('');

    const handleTaskSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.task.value)
        const task = event.target.task.value;
        const description = event.target.description.value;
        const fullTask = { task, description };
        console.log(fullTask)

        setTask(fullTask)
        fetch('http://localhost:5000/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fullTask)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    useEffect(() => {
        fetch('http://localhost:5000/list')
            .then(res => res.json())
            .then(data => setTask(data))
    }, [task])
    // console.log(task)

    const handleDelete = id => {

    }
    return (
        <div>
            <form
                className='flex flex-col w-1/2 mx-auto'
                onSubmit={e => handleTaskSubmit(e)}
            >
                <label htmlFor="task" className='text-left'>Task name</label>
                <input className='bg-slate-400 mb-5 rounded-sm' type="text" name='task' placeholder='Task name' />
                <label
                    className='text-left'
                    htmlFor="description"
                >Input your task description</label>
                <textarea className='bg-slate-400 rounded-sm' name="description" id="description" placeholder='Input your task description' cols="20" rows="5"></textarea>
                <input type="submit" className='w-full bg-gray-700 rounded-md mt-8' value="Add" />
            </form>
            <button className='btn bg-slate-500 '>Complete</button>
            <div>
                <h2>Tasks</h2>
                {/* dint know why not working */}
                {
                    task?.map((t, index) => <div className='flex' key={index}>
                        <h3>{t.task} :</h3>
                        <p>{t.description}</p>
                        <button onClick={() => handleDelete(t._id)} className="btn">delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;