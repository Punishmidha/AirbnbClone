import express from "express"
import { login, logOut, sighUp } from "../controllers/auth.controller.js"

const authRouter = express.Router()

// middleware
authRouter.post("/signup",sighUp)  // api/auth/signup
authRouter.post("/login",login)
authRouter.post("/logout",logOut)


export default authRouter