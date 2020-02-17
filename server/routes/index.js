import express from "express";
import passport from "passport";
import {
  getUserList,
  postSignUp,
  logout,
  getLoginSuccess,
  getLoginFailure,
  getFavMovie,
  postFavMovie,
  getUser,
  getInfo
} from "../controllers/userController";

const routes = express.Router();
//babel, es6 , passport applied
/**
 * User Info: Get /api/user/:id
 */
routes.get("/api/user/:id", getUser);
/**
 * User List: Get /api/users
 */
routes.get("/api/users", getUserList);
/**
 * Sign Up: Post /api/users
 */
routes.post("/api/users", postSignUp);
/**
 * Login: Post /api/users/login
 * body sample: {"email":"test","password":"test"}
 */
routes.post(
  "/api/login",
  passport.authenticate("local", {
    failureRedirect: "/api/loginFailure"
  }),
  (req, res) => {
    //console.log(req.user);
    res.redirect("/api/loginSuccess/" + req.user.id);
  }
);
/**
 * Login: Get /api/users/logout
 */
routes.get("/api/logout", logout);
routes.get("/api/loginSuccess/:id", getLoginSuccess);
routes.get("/api/loginFailure", getLoginFailure);
//routes.get("/api/u", getInfo);
/**
 * Favourite Movies
 */
routes.get("/api/fav/:id", getFavMovie);
routes.post("/api/fav", postFavMovie);
export default routes;
