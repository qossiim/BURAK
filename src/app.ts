import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdnim";

/** 1-Entrance */

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** 2-sessions */

/** 3-Views */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-routers */
app.use("/admin", routerAdmin); // SSR: EJS

app.use("/", router); // SPA: REACT

export default app;
