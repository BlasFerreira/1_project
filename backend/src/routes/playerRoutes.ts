//playerRoutes.ts
import { Router } from "express";
import { getAllPlayers, createPlayer } from "../controllers/playerController";

const router = Router();

router.get("/", getAllPlayers);
router.post("/", createPlayer);

export default router;
