// console.log("EXUCUTED!");

// import moment from "moment";
// const currentTime = moment().format("YYY MM DD");
// console.log(currentTime);

// const person: string = "Qosim";
// const count: number = 100;

// architectural pattern: MVC, DI, MVP

// Design pattern: Middlesware, Decotar

import dotenv from "dotenv";
dotenv.config();

// console.log("PORT:", process.env.PORT);

// console.log("MONGO_URL:", process.env.MONGO_URL);

// CLUSTER => DATABASE => COLLECTION => DOCUMENT.
// CULUSTER ICHIDAGI MALUNOT DATABASE ICHIDAGI MALUMOT COLLECTION ICHIDAGI MALUMOT DOCUMENT DEYILADI.

import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB ishga tushdi");
    console.log(process.env.MONGO_URL);
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.info(`THE server shu portda successfuly boldi port: ${PORT}`);
      console.log(
        `Admin loyixamiz shu portda yuradi http://localhost:${PORT}/admin \n`
      );
    });
  })
  .catch((err) => console.log("MangoDB ishga tushmadi ", err));
