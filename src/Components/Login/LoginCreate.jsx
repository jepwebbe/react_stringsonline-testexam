import React from 'react'
import { useForm } from 'react-hook-form'
import { useLoginStore } from './useLoginStore'
import { useNavigate } from "react-router-dom"
import appService from '../App/Appservices/AppService'
// Component begun, doesn't work, work in progress
const LoginCreate = () => {
    const navigate = useNavigate();

    const {setLoggedIn, loggedIn, username, userInfo} = useLoginStore()

    const { register, handleSubmit } = useForm();

    const onSubmit = (submitdata) => {
        const fetchResult = async () => {
            try {
                const response = await appService.Create(submitdata.username, submitdata.password)
                if(response.data){
                    response.data.user.user_id = response.data.user_id
                    setLoggedIn(true, response.data.username, response.data.access_token, response.data.user)
                    navigate("/login")
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchResult()
    }
    const handleLogout = () => {
        setLoggedIn(false, "", "")
        navigate("/")
    }
  return (
  <>
  {!loggedIn ? (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", {required: true})} type="text" autoComplete="username" placeholder="brugernavn"/>
        <input {...register("password", {required: true})} type="password" autoComplete="password" placeholder="kodeord"/>
        <button>Opret</button>
    </form>
    
  )
  : (<>
  <h3>{username} er logget in</h3>
  <button onClick={() => handleLogout()}>Log ud</button>
  </>)}
  </>
  )
}

export default LoginCreate
