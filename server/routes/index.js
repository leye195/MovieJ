import User from "../models/users";
import express from "express";
import passport from "passport";
const routes = express.Router();
//babel, es6 , passport applied
/**
 * Users: Get /api/users
 */
routes.get("/api/users", (req, res) => {
  let users = User;
  console.log(req.session);
  users.find((err, data) => {
    if (err) return res.status(500).send({ error: "database failure" });
    res.json(data);
  });
});
/**
 * Sign Up: Post /api/users
 */
routes.post("/api/users", async (req, res) => {
  const { email, name, password } = req.body.params;
  console.log(email, name);
  try {
    const user = await User({ name, email });
    await User.register(user, password); //User Object,password
    res.json({ error: 0, result: 1 });
  } catch (error) {
    console.log(error);
    res.json({ error: 1, result: 0 });
  }
});
/**
 * Login: Post /api/users/login
 * body sample: {"email":"test","password":"test"}
 */
routes.post(
  "/api/login",
  passport.authenticate("local", {
    successRedirect: "/api/loginSuccess",
    failureRedirect: "/api/loginFailure"
  })
);
/**
 * Login: Get /api/users/logout
 */
routes.get("/api/logout", (req, res) => {
  req.logout();
  res.json({ error: 0, result: 1 });
});
routes.get("/api/loginSuccess", (req, res) => {
  console.log("success");
  console.log(req.user);
  res.json({ success: 1, msg: "success", user: req.user });
});
routes.get("/api/loginFailure", (req, res) => {
  res.json({ success: 0, msg: "failure" });
});

export default routes;
