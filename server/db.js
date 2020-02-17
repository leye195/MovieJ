import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
mongoose.connect(
  process.env.PRODUCTION ? process.env.HEROKU_DB_URL : process.env.LOCAL_DB_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  console.log("Connected to mongodb server");
});
