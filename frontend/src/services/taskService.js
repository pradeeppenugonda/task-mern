import axios from 'axios'
import { devAPIURL } from '../utils/constants'
const API_URL = devAPIURL+'/api/tasks/'

const createTask = async(taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, taskData, config)
    return response.data
}

const getTasks = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

const deleteTask = async(id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL+id, config)
    console.log(`Response Data >>>  Delete Task `, response.data)
    return response.data
}


const taskService = {createTask, getTasks, deleteTask}

export default taskService