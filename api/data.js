import jwt from "jsonwebtoken";

export default function profileHandler(req, res) {
  const { myToken} = req.cookies;
  
  if (!myToken) {
    return res.status(401).json({ error: "Not logged in" });
  }

  const { email, username} = jwt.verify(myToken, "secret");
  return res.status(200).json({ email, username });
}