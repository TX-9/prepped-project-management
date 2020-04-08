import { Router } from "express"
import usersCtrl from "./users.controller"

const router = new Router();

router.route("/login").post(usersCtrl.login);

export default router
