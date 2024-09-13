import { Router } from "express";

import {deleted, index, show, store, update} from '../controller/user.controller.js';

const routes = Router();

routes.post("/", store);
routes.get("/", index);
routes.get("/:id", show);
routes.patch("/:id", update);
routes.delete("/:id", deleted);

export default routes;
