import User from "../models/users";
import Movie from "../models/movies";
import { generateToken, decodeToken } from "../token";
import Cookies from "universal-cookie";
export const getUserList = async (req, res) => {
  //console.log(req.session);
  await User.find((err, data) => {
    if (err) return res.status(500).send({ error: "database failure" });
    res.status(200).json(data);
  });
};
export const getUser = async (req, res) => {
  const {
    params: { name }
  } = req;
  try {
    const user = await User.findOne({ name });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).end();
  }
};
export const checkUser = async (req, res) => {
  console.log(req.headers);
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).end();
  } else {
    const decodedToken = decodeToken(token);
    return res.status(200).json({ user: decodedToken.user });
  }
  /*const cookies = new Cookies(req.headers.cookie);
  const token = decodeToken(cookies.cookies.atk);
  if (token.iat < 60 * 60) {
    const refreshToken = generateToken({ user: token.user });
    return res.status(200).json({ token: refreshToken, user: token.user });
  }*/
};
export const postSignUp = async (req, res) => {
  const { email, name, password } = req.body.params;
  //console.log(email, name);
  try {
    const user = await User({ name, email });
    await User.register(user, password); //User Object,password
    res.status(200).json({ error: 0, result: 1 });
  } catch (error) {
    //console.log(error);
    res.json({ error: 1, result: 0 });
  }
};
export const logout = async (req, res) => {
  req.logout();
  res.status(200).json({ error: 0, result: 1 });
};
export const getLoginSuccess = async (req, res) => {
  const {
    params: { id }
  } = req;
  const token = generateToken({ id });

  res.status(200).json({ success: 1, msg: "success", uid: id, token });
};
export const getLoginFailure = async (req, res) => {
  res.status(200).json({ success: 0, msg: "failure" });
};

export const getFavMovie = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(id).populate("favourites");
    res.status(200).json({ favourites: user.favourites });
  } catch (error) {
    res.status(400);
  }
};
export const postFavMovie = async (req, res) => {
  const {
    body: { uid, m_id, title, imgUrl, link }
  } = req;
  console.log(uid, m_id, title, imgUrl, link);
  try {
    const user = await User.findById(uid).populate("favourites");
    const movie = await Movie.findOne({ m_id: m_id });
    if (!movie) {
      const newMovie = await Movie.create({
        m_id,
        title,
        imgUrl,
        link
      });
      newMovie.save();
      user.favourites.push(newMovie.id);
      user.save();
    } else {
      let idx = -1;
      for (let i = 0; i < user.favourites.length; i++) {
        if (user.favourites[i].m_id === m_id) {
          idx = i;
          break;
        }
      }
      console.log(idx);
      if (idx !== -1) {
        user.favourites.splice(idx, 1);
        user.save();
        res.status(200).json({ success: 0 });
      } else {
        user.favourites.push(movie.id);
        user.save();
      }
    }
    res.status(200).json({ success: 1 });
  } catch (error) {
    res.status(400).json();
  }
};
export const postCancelFav = async (req, res) => {
  const {
    body: { uid, m_id }
  } = req;
  try {
    const user = await User.findById(uid).populate("favourites");
    user.favourites = user.favourites.filter(item => {
      if (item.m_id !== m_id) return item;
    });
    user.save();
    res.status(200).json();
  } catch (error) {
    res.status(400).json();
  }
};
