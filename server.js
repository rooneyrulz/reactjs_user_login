import { createServer } from "http";
import express from "express";
import logger from "morgan";

//  Import MongoDB Connection
import db from "./config/db";

// Import Routes
import testRoute from "./routes";
import signUpRoute from "./routes/user";
import authRoute from "./routes/auth";

const app = express();
const server = createServer(app);

// Use Mongo Connection
db();

// Use Http-Logger Middleware
app.use(logger("dev"));

// Use Express Middleware Functions for Parsing JSON Body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, X-Requested-With, Accept, Authorization, x-auth-token"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT POST PATCH GET DELETE");
    return res.status(200).json({});
  }
  next();
});

// Implement Routes
app.use("/api", testRoute);
app.use("/api", signUpRoute);
app.use("/api/auth", authRoute);

// Setup Port
app.set("port", process.env.PORT || 5000);

// Listening to Server
server.listen(app.get("port"), () =>
  console.log(`server listening on port ${app.get("port")}`)
);
