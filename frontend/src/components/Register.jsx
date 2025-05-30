import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import {register, reset} from '../redux/slices/authSlice'
import Spinner from './commons/Spinner'


function Register() {

    const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' })
    const { name, email, password, password2 } = formData;
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth)

    useEffect(() => {
        if(isError) toast.error(message)
        if(isSuccess || user) navigate('/')
        dispatch(reset())
    }, [user, isLoading, isError, isSuccess, message, dispatch])
    const onChange = (e) => { 

        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(`Came to onSubmit for Form >>> 
            password >>> ${password}
            password2 >>> ${password2}`)
        if(password !== password2){
            toast.error('Passwords are different')
        }else{
            const userData = {name, email, password}
            dispatch(register(userData))
        }
     }

    return (
        isLoading ? <Spinner /> : <>
        <section className='heading'>
            <h1><FaUser /> Register</h1>
            <p> Please Create an account</p>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit} >
                <div className='form-group'>
                    <input type='text' className='form-control' id='name' name='name' value={name} placeholder='Enter Your Name' onChange={onChange} />
                </div>
                <div className='form-group'>
                    <input type='email' className='form-control' id='email' name='email' value={email} placeholder='Enter Your Email' onChange={onChange} />
                </div>
                <div className='form-group'>
                    <input type='password' className='form-control' id='password' name='password' value={password} placeholder='Enter Password' onChange={onChange} />
                </div>
                <div className='form-group'>
                    <input type='password' className='form-control' id='password2' name='password2' value={password2} placeholder='Confirm Password' onChange={onChange} />
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-block'> Submit </button>
                </div>
            </form>
        </section>
    </>
    )
}

export default Register
