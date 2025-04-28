import express from 'express'
import userController from '../controllers/user.controller.js'

const router = express.Router();

router.get("/protected", async(req, res) => {
    console.log("GET PROTECTED")
});

router.post("/register", userController.saveEntity);

router.post("/login", userController.loginEntity);

export default router