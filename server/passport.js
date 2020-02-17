import passport from "passport";
import User from "./models/users";
//strategy랑 필요한 것들을 넣어줌

//use static authenticate mode of model in LocalStrategy
passport.use(User.createStrategy()); //passport.use(new LocalStrategy(User.authenticate()));

//use static serialize and deserializ of model for passport session support
passport.serializeUser(User.serializeUser()); //쿠키에 user.id를 저장
passport.deserializeUser(User.deserializeUser()); //id를 식별자로 db 데이터와 비교
