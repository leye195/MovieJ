import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
  m_id: {
    type: String,
    required: "m_id is required"
  },
  title: {
    type: String,
    required: "title is required"
  },
  imgUrl: {
    type: String,
    required: "imgUrl is required"
  },
  link: {
    type: String,
    required: "link is required"
  }
});
//usernameField: 어떤 field를 username으로 설정할지 셋팅
const movieModel = mongoose.model("Movie", movieSchema);

export default movieModel;
