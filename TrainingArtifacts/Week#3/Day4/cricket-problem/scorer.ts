import { Batsman } from './batsman';
export class Scorer {
    listOfBatsman: Array<Batsman>;
    totalScore: number;
    constructor() {
        this.totalScore = 0;
        this.listOfBatsman = [];
    }
    addBatsman(batsman: Batsman) {
        this.listOfBatsman.push(batsman);
    }

    // changeStrike() {
    //     if (playerOnStrike === this.listOfBatsman[0]) {
    //         playerOnStrike = this.listOfBatsman[1];
    //     } else {
    //         playerOnStrike = this.listOfBatsman[0];
    //     }
    // }
    changeStrike(currentPlayerOnStrike: Batsman) {
        let newPlayerOnStrike: Batsman;
        if (currentPlayerOnStrike === this.listOfBatsman[0]) {
            newPlayerOnStrike = this.listOfBatsman[1];
        } else {
            newPlayerOnStrike = this.listOfBatsman[0];
        }
        return newPlayerOnStrike;
    }
    calculateScore(arr: Array<number>) {
        // Computation Logic
        // 1. Check if the run scored is odd or even.
        // 2. If odd, update score of player on strike and change strike
        // 3. If even, update score of player on strike.
        // 4. Increment total score by the run scored.
        // 5. If number of balls bowled is a mutiple of six, change strike.
        let playerOnStrike = this.listOfBatsman[0];
        arr.forEach((runScored, ballNumber) => {
            if (runScored % 2 === 1) {
                if (playerOnStrike) {
                    playerOnStrike.addRuns(runScored);
                    // Change strike
                    playerOnStrike = this.changeStrike(playerOnStrike);
                }
            } else {
                if (playerOnStrike) {
                    playerOnStrike.addRuns(runScored);
                }
            }
            this.totalScore += runScored;
            if ((ballNumber + 1) % 6 === 0) {
                if (playerOnStrike) {
                    playerOnStrike = this.changeStrike(playerOnStrike);
                }
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