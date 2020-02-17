import express from "express";
import passport from "passport";
import { generateToken } from "../token";
import {
  getUserList,
  postSignUp,
  logout,
  getLoginSuccess,
  getLoginFailure,
  getFavMovie,
  postFavMovie,
  getUser,
  checkUser
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

routes.get("/api/check", checkUser);
/**
 * Login: Post /api/users/login
 * body sample: {"email":"test","password":"test"}
 */
routes.post(
  "/api/login",
  passport.authenticate("local", {
    session: false,
    failureRedirect: "/api/loginFailure"
  }),
  (req, res) => {
    const { user } = req;
    const token = generateToken({ user });
    /*res.cookie("atk", token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true
    });*/
    res.status(200).json({ success: 1, msg: "success", user, token });
    //res.redirect("/api/loginSuccess/" + req.user.id);
  }
);
/**
 * Login: Get /api/users/logout
 */
routes.get("/api/logout", logout);
routes.get("/api/loginSuccess/:id", getLoginSuccess);
routes.get("/api/loginFailure", getLoginFailure);

/**
 * Favourite Movies
 */
routes.get("/api/fav/:id", getFavMovie);
routes.post("/api/fav", postFavMovie);
export default routes;
