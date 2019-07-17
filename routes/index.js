import { Router } from "express";

// Import Controllers
import testController from "../controllers";

const router = Router({ strict: true });

// @Route            >   GET  /api/test
// @Description      >   Testing Route
// @Access Control   >   Public
router.get("/test", testController);

export default router;
