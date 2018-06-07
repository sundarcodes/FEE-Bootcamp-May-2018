
export class Player {
    // name: string;
    // constructor(playerName: string) {
    //     this.name = playerName;
    // }
    constructor(private name: string) {

    }
    // getName(): string {
    //     return this.name;
    // }

    get playerName(): string {
        return this.name;
    }
}