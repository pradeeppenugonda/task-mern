import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTasks, reset } from '../redux/slices/taskSlice';
import Spinner from './commons/Spinner';
import TaskItem from './TaskItem';

const TaskList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { tasks, isLoading, isError, message } = useSelector(state => state.tasks)

    useEffect(() => {
        if (isError) console.log(`Mesage >> `, message)
        dispatch(getTasks())
        return () => dispatch(reset())
    }, [navigate, isError, message, dispatch])
    return (
        isLoading ? <Spinner /> : <>
            {tasks.length > 0 &&
                <div className='tasks'>
                    {tasks.map(task => <TaskItem key={task._id} task={task} />)}
                </div>}
        </>
    )
}

export default TaskList
