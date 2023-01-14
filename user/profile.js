import axios from "axios"
import { useState } from "react";
import { useRouter } from "next/router";

export default function profile() {
  const router = useRouter()
const [user, setUser]=useState({
  username:'',
  email:''
})
const getData= async ()=>{
  const profile = await axios.get('../api/data')
  setUser(profile.data)
}
const getLogout= async()=>{
  try{
    const logout = await axios.get('../api/auth/logout')
  }catch(error){
    console.log(error.message)
  }
  router.push('/login')
  
}
  return (
    <div className="counter-main">
        <div>  {JSON.stringify(user.username)}</div>
       <div>  {JSON.stringify(user.email)}</div>
         <button  onClick={()=>getData()} >get user credentials</button>
         <button onClick={()=>getLogout()} >logout</button>
    </div>
  )
}
