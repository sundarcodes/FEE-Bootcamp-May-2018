import { Player } from './player';
export class Batsman extends Player {
    private numberOfRunsScored: number;
    private numberOfBallsFaced: number
    constructor(name: string) {
        super(name);
        this.numberOfRunsScored = 0;
        this.numberOfBallsFaced = 0;
    }
    get numberOfRuns() {
        return this.numberOfRunsScored;
    }
    get numberOfBallsBatted() {
        return this.numberOfBallsFaced;
    }
    addRuns(run: number) {
        this.numberOfRunsScored += run;
    }
}