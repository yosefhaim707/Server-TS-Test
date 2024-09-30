import express, { Router } from "express";
import { getFilterPlayers } from "../controllers/playerController";

const router: Router = express.Router();

router.post("/filter", getFilterPlayers)


export default router;

