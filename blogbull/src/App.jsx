import { useState,useEffect } from 'react'
import{useDispatch} from '@reduxjs/toolkit'
import './App.css'
import authServices from './appwrite/auth'
import {login,logout} from './store/authSlice'

function App() {
  const  [loading,setloading] = useState(true)
  const  dispatch = useDispatch()
  
  useEffect(() => {
    authServices.getCurrentUser()
    .then((userdata)=>{
      if(userdata){
        dispatch(login({userdata}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setloading(false))
  }, [])
  
  return !loading ? (
    <div className=' min-h-screen'>

    </div>
  ): null
}

export default App
