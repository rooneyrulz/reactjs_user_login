import { Router } from "express";

// Import Controllers
import { getUsers, signUpUser, getUser, deleteUser } from "../controllers/user";

const router = Router({ strict: true });

// @Route            >   GET  /api/users
// @Description      >   Get All Users
// @Access Control   >   Public
router.get("/users", getUsers);

// @Route            >   POST  /api/user/signup
// @Description      >   Signup Users
// @Access Control   >   Public
router.post("/user/signup", signUpUser);

// @Route            >   GET  /api/user/:id
// @Description      >   Get User By Id
// @Access Control   >   Public
router.get("/user/:id", getUser);

// @Route            >   DELETE  /api/user/:id
// @Description      >   Delete User
// @Access Control   >   Private
router.delete("/user/:id", deleteUser);

export default router;
