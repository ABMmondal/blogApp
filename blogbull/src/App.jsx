import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authServices from './appwrite/auth'
import {login,logout} from './store/authSlice'
import {Header}from './components/Header/Header'
import {Footer}from './components/Footer/Footer'


import {Outlet} from  'react-router-dom'



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
    <div className=' min-h-screen flex flex-wrap content-between bg-gray-300'>
      <div className=' w-full block'>
        <Header/>
        <main>
          {/* {outlet} */}
        </main>
        <Footer/>

      </div>

    </div>
  ): null
}

export default App
