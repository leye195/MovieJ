import User from "../models/users";
import Movie from "../models/movies";
export const getUserList = async (req, res) => {
  console.log(req.session);
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
  //console.log(req.user);
  const {
    params: { id }
  } = req;
  //console.log(id);
  res.status(200).json({ success: 1, msg: "success", uid: id });
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
  try {
    const user = await User.findById(uid);
    const movie = await Movie.findOne({ m_id });
    console.log(user);
    console.log(movie);
    if (movie === null) {
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
      user.favourites.push(movie.id);
      user.save();
    }
    res.status(200).json({});
  } catch (error) {
    res.status(400);
  }
};
