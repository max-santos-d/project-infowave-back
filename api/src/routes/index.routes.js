import { Router } from "express";

import userRoutes from "./user.routes.js";
import userTypeRoutes from "./userType.routes.js";
import postRoutes from "./post.routes.js";
import postLikeRoutes from "./postLike.routes.js";

const router = Router();

router.use("/user", userRoutes);
router.use("/userType", userTypeRoutes);
router.use("/post", postRoutes);
router.use("/postLike", postLikeRoutes);

export default router;
