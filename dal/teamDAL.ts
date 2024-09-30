import { Team } from "../models/Team";;
const teams = require("../data/teams.json");
const FILE: string = "./data/teams.json";
import * as fs from "fs";





export function addTeam(team: Team): void {
    teams.push(team);
    fs.writeFileSync(FILE, JSON.stringify(teams));
}

