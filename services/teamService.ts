import * as teamsDal from '../dal/teamDAL';
import { Player } from '../models/Player';
import { Team } from '../models/Team';

export function addToTeam(players: Player[]): Team {
    if (isValid(players)) {
        const team: Team = {
            teamName: players[0].playerName,
            players: players
        }
        teamsDal.addTeam(team);
        return team;
    }
    throw new Error('Invalid request')
}

function isValid(players: Player[]): boolean {
    let positions: object = {'PG': 0, 'SG': 0, 'SF': 0, 'PF': 0, 'C': 0};
    for (let index = 0; index < players.length; index++) {
        const element = players[index];
        
    }
}