import axios from 'axios'
import { devAPIURL } from '../utils/constants'
const API_URL = devAPIURL+'/api/users/'

const register = async(userData) => {
    const response = await axios.post(API_URL, userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const logout = () => localStorage.removeItem('user');
 
const login = async(userData) => {
    const response = await axios.post(API_URL+'login', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const authService = {register, logout, login}

export default authService