import React from 'react'

const Task = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="w-full max-w-[500px] px-3">
                <div className="shadow p-5 rounded-2xl bg-white">
                    <input className='font-mono font-semibold text-lg border-[2px] border-black outline-0 h-[48px] px-3.5 rounded-3xl max-w-[438px] w-full' type="text" placeholder='Task Name' />
                    <div className="flex justify-center mt-5">
                        <button className='font-mono font-semibold text-base hover:bg-black hover:text-white transition-all duration-200 ease-linear border-[2px] w-fit border-black outline-0 rounded-4xl cursor-pointer px-7 py-2'>Add Task</button>
                    </div>
                    <div className="pt-3 font-mono font-semibold text-3xl">Tasks:-</div>
                </div>
            </div>
        </div>
    )
}

export default Task