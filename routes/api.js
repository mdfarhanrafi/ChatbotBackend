import { Router } from "express";
import ChatController from "../Controller/chatcontroller.js";
const router = Router()

router.post("/chat/", ChatController.Chat)


export default router;