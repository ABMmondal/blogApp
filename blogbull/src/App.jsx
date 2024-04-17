import { useState,useEffect } from 'react'
import{useDispatch} from 'react-redux'
import './App.css'
import authServices from './appwrite/auth'
imp //next day

function App() {
  const  [loading,setloading] = useState(true)
  const  dispatch = useDispatch()
  
  useEffect(() => {
    authServices.getCurrentUser()
    .then((userdata)=>{
      if(userdata){
        dispatch()
      }
    })
    .finally()
  }, [third])
  
  return (
    <>
      <h1>hii</h1>
    </>
  )
}

export default App
