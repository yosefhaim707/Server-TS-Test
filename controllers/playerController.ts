import { Player } from "../models/Player";
import { Request, Response} from "express";
import * as playerService from "../services/playerService";

export async function getFilterPlayers(req: Request, res: Response): Promise<void> {
    try {
        const { position, threePercent, twoPercent, points } = req.body;
        const players: Player[] = await playerService.filterPlayers(position, twoPercent, threePercent, points);
        res.status(201).json(players);
    } catch (error) {
        res.status(401).send('incorrect req')
    }
}