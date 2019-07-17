import { Router } from "express";

// Import Controllers
import { authUser, getAuthUser } from "../controllers/auth";

// Import Auth Middleware
import isAuth from "../middleware/auth";

const router = Router({ strict: true });

// @Route            >   POST  /api/auth
// @Description      >   Authenticate User
// @Access Control   >   Private
router.post("/", authUser);

// @Route            >   GET  /api/auth-user
// @Description      >   Get Authenticated User
// @Access Control   >   Private
router.get("/user", isAuth, getAuthUser);

export default router;
