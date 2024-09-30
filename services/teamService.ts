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
    let positions: number[] = [0, 0, 0, 0, 0];
    let isDup: boolean = true;
    for (let index = 0; index < players.length; index++) {
        const element: Player = players[index];
        switch (element.position) {
            case 'PG':
                positions[0] ++;
                break;
            case 'SG':
                positions[1] ++;
                break;
            case 'SF':
                positions[2] ++;
                break;
            case 'PF':
                positions[3] ++;
                break;
            case 'C':
                positions[4] ++;
                break;
            default:
                break;
        }
    }
    for (let index = 0; index < positions.length; index++) {
        const element = positions[index];
        if (element > 1 || element < 1) {
            isDup = false;
        }
    }
    return isDup;
}