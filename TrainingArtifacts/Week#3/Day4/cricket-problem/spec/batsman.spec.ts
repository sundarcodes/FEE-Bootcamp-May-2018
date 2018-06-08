import { Batsman } from './../batsman';
describe('Testing Batsman class', () => {
    it('should be able to create a Batsman class', () => {
        const batsman = new Batsman('Sachin');
        expect(batsman).toBeDefined();
    });
    it('should be able to return number of runs', () => {
        const batsman = new Batsman('Dravid');
        expect(batsman.numberOfRuns).toEqual(0);
    });
    it('should be able to return number of balls batted', () => {
        const batsman = new Batsman('Ganguly');
        expect(batsman.numberOfBallsBatted).toEqual(0);
    });
    it('should be able to add Runs to the batsman', () => {
        const batsman = new Batsman('Laxman');
        batsman.addRuns(5);
        expect(batsman.numberOfRuns).toEqual(5);
    })
})