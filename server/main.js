import express from "express";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoStore from "connect-mongo";
import mongoose from "mongoose";
import path from "path";
import passport from "passport";
import "./db";
import "./passport";
import route from "./routes/index";
dotenv.config();
const cookieStore = mongoStore(session);
const app = express();
let options = {
  secret: process.env.SECRET_KEY,
  resave: false, //계속 저장 false
  saveUninitialized: true, //session이 필요할때 사용 true
  store: new cookieStore({ mongooseConnection: mongoose.connection })
};

app.use(helmet());
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieparser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(session(options));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", route);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Express server has started on port:: " + port);
});
