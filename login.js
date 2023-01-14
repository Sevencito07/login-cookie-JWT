import React from "react"
import axios from "axios"
import { useRouter } from "next/router"

export default function login() {
    const router =  useRouter()
    const handelSubmit= async (e)=>{
        e.preventDefault()
     const formData = new FormData(e.target)
     const formDatos = Object.fromEntries(formData)
     const res = await axios.post('/api/auth/login', formDatos)
      
     if(res.status === 200){
        router.push('/user/profile')
     }
    }
     
  return (
    <form onSubmit={handelSubmit} >
        <input name="email" type='email' placeholder="@email.com" />
        <input name="pasword" type="password"  placeholder="*******" />
        <button>send</button>
    </form>
  )
}
