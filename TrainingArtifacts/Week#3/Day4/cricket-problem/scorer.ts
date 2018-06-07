import { Batsman } from './batsman';
export class Scorer {
    playerOnStrike: Batsman | null;
    listOfBatsman: Array<Batsman>;
    totalScore: number;
    constructor() {
        this.totalScore = 0;
        this.playerOnStrike = null;
        this.listOfBatsman = [];
    }
    addBatsman(batsman: Batsman) {
        this.listOfBatsman.push(batsman);
    }

    changeStrike() {
        if (this.playerOnStrike === this.listOfBatsman[0]) {
            this.playerOnStrike = this.listOfBatsman[1];
        } else {
            this.playerOnStrike = this.listOfBatsman[0];
        }
    }
    calculateScore(arr: Array<number>) {
        // Computation Logic
        // 1. Check if the run scored is odd or even.
        // 2. If odd, update score of player on strike and change strike
        // 3. If even, update score of player on strike.
        // 4. Increment total score by the run scored.
        // 5. If number of balls bowled is a mutiple of six, change strike.
        this.playerOnStrike = this.listOfBatsman[0];
        arr.forEach((runScored, ballNumber) => {
            if (runScored % 2 === 1) {
                if (this.playerOnStrike) {
                    this.playerOnStrike.addRuns(runScored);
                    // Change strike
                    this.changeStrike();
                }
            } else {
                if (this.playerOnStrike) {
                    this.playerOnStrike.addRuns(runScored);
                }
            }
            this.totalScore += runScored;
            if ((ballNumber + 1) % 6 === 0) {
                this.changeStrike();
            }
        })
    }

    printScore() {
        console.log(`Total score: ${this.totalScore}`);
        this.listOfBatsman.forEach(batsman => {
            console.log(`${batsman.playerName} scored ${batsman.numberOfRuns}`);
        })
    }
}