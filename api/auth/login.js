
import { sign } from "jsonwebtoken"
import { serialize } from "cookie"
export default function loginAutha(req, res) {
    const {email, pasword} = req.body

    if (email=== "leonel17@gmail.com" && pasword==="1234"){
       const token = sign(
        {
            exp:Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            email,
            username:'leonel17'
        },
        'secret'
       )
  
    const send = serialize('myToken', token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: "/",
    });
    res.setHeader('Set-Cookie', send)
        return res.status(200).json ({
          message: 'login successfull'
        })
};
    

  return res.status(401).json({
    error:"invalid email o password"
  })
}
