import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import cors from "cors";

// import "./mongoose/schemas/user.mjs";
import "./auth/local-strategy";
import authRoutes from "./routes/auth";
// import profileRoutes from "./routes/profile.mjs";

dotenv.config();

export const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

async function connectToDb() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@morentapp.qyapd.mongodb.net/rent-a-car?retryWrites=true&w=majority&appName=MorentApp`
  );
}

connectToDb()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
