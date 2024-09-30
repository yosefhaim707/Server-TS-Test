import { log } from "console";
import * as playerDAL from "../dal/playerDAL";
import { Player } from "../models/Player";

export function filterPlayers(position: string, twoPercent: number, threePercent: number, points: number): Player[] {
    return playerDAL.getPlayers().filter(player => player.position == position && player.twoPercent >= twoPercent && player.twoPercent >= threePercent && player.points >= points);
}