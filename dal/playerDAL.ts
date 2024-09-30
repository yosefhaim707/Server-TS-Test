import { Player } from "../models/Player";
import * as fs from "fs";
const players = require("../data/data.json")
const FILE: string = "../data/data.json";

export function getPlayers(): Player[] {
    let result: Player[] = [];
    for (let index = 0; index < players.length; index++) {
        const element = players[index];
        for (let index = 0; index < element.length; index++) {
            const singlePlayer = element[index];
            let playerObj: Player = {
                id: singlePlayer['_id'],
                playerName: singlePlayer['playerName'],
                age: singlePlayer['age'],
                position: singlePlayer['position'],
                twoPercent: singlePlayer['twoPercent'],
                threePercent: singlePlayer['threePercent'],
                games: singlePlayer['games'],
                team: singlePlayer['team'],
                season: singlePlayer['season'],
                points: singlePlayer['points']
            }
            result.push(playerObj);
        }
    };
    return result;
};


