import express from "express";
const routerAdmin = express.Router();
import restauratnController from "./controllers/restaurant.controller";

routerAdmin.get("/", restauratnController.goHome);

routerAdmin.get("/login", restauratnController.goLogin);

routerAdmin.get("/signup", restauratnController.goSignup);

export default routerAdmin;
