import { serialize } from "cookie"

export default function logout(req, res) {
    const {myToken}  = req.cookies; 
    if(!myToken){
        return res.status(401).json({error:"not credentials"})
    }
    const send = serialize('myToken', null,{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 0,
        path: "/",
    });
    res.setHeader('Set-Cookie', send)
        return res.status(200).json ({
          message: 'logout successfull'
        })
}
