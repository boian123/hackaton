import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv"
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

import connectDB from "./helpers/database"
import auth from "./routes/authRoutes";
import user from "./routes/userRoutes";





app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials',1)

  // Pass to next layer of middleware
  next();
});


connectDB();


app.set("port", process.env.PORT || 4000);






app.use("/", auth);
app.use("/", user);


const port = process.env.PORT;
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
