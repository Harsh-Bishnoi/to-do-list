import React, { useState } from 'react';
import { Delete } from '../utils/icon';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");

    const handleCheckboxChange = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const addTask = () => {
        if (text.trim() !== "") {
            const newTask = {
                id: Date.now(),
                text: text,
                completed: false
            };
            setTasks([newTask, ...tasks]);
            setText("");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="w-full max-w-[500px] px-3">
                <div className="shadow p-5 rounded-2xl bg-white">
                    <input
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        className='font-mono font-semibold text-lg border-[2px] border-black outline-0 h-[48px] px-3.5 rounded-3xl max-w-[438px] w-full'
                        type="text"
                        placeholder='Task Name'
                    />
                    <div className="flex justify-center mt-5">
                        <button
                            onClick={addTask}
                            className='font-mono font-semibold text-base hover:bg-black hover:text-white transition-all duration-200 ease-linear border-[2px] w-fit border-black outline-0 rounded-4xl cursor-pointer px-7 py-2'>
                            Add Task
                        </button>
                    </div>
                    <div className="pt-3 font-mono font-semibold text-3xl">Tasks:-</div>
                    <ul className=''>
                        {tasks.map((item) => (
                            <div key={item.id} className="flex items-center pt-2 justify-between">
                                <div className='flex items-center gap-2'>
                                    <input
                                        className='w-4 h-4 cursor-pointer'
                                        type='checkbox'
                                        checked={item.completed}
                                        onChange={() => handleCheckboxChange(item.id)}
                                    />
                                    <li className={`font-mono font-semibold text-base ${item.completed ? 'line-through text-gray-500' : ''}`}>
                                        {item.text}
                                    </li>
                                </div>
                                <div className="delete-icon cursor-pointer" onClick={() => handleDelete(item.id)}>
                                    <Delete />
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Task;
