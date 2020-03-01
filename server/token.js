import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const jwtSecret = process.env.TOKEN_SECRET_KEY;
//첫번째 파라미터는 토큰에 넣을 데이터, 두번째는 비밀 키, 세번째는 옵션, 네번째는 콜백함수
export const generateToken = payload => {
  return jwt.sign(payload, jwtSecret, { expiresIn: "7d" });
};
//jwt 디코딩
export const decodeToken = token => {
  return jwt.verify(token, jwtSecret);
};
/*const jwtMiddleware = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next();
  try {
    const decoded = decodeToken(token);
    if (Date.now() / 1000 - decoded.iat > 60 * 60 * 24) {
      const { _id, profile } = decoded;
      const freshToken = await generateToken({ _id, profile });
      res.cookies("access_token", freshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
      });
    }
  } catch (error) {
    req.user = null;
  }
  return next();
};*/
