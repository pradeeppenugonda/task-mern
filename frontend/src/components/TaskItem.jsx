import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/slices/taskSlice'

const TaskItem = ({ task }) => {
    const dispatch = useDispatch()

    return (
        <div className='task'>
            <div>
                {new Date(task.createdAt).toLocaleString('en-US')}
            </div>
            <h2>
                {task.text}
            </h2>
            <button onClick={() => {
                console.log(`Task ID to be Deleted >>> `, task)
                dispatch(deleteTask(task._id))
                }} className='close'>X</button>
        </div>
    )
}

export default TaskItem
