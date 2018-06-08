import { Scorer } from './../scorer';
import { Batsman } from '../batsman';
describe('Testing scorer class', () => {
    it('should be able to create a scorer object', () => {
        const scorer = new Scorer();
        expect(scorer).toBeDefined();
    });
    it('should be able to add batsman to list', () => {
        const scorer = new Scorer();
        expect(scorer.listOfBatsman.length).toEqual(0);
        const batsman = new Batsman('Sehwag');
        scorer.addBatsman(batsman);
        expect(scorer.listOfBatsman.length).toEqual(1);
        expect(scorer.listOfBatsman[0]).toEqual(batsman);
    });
    it('should be able to change strike', () => {
        const scorer = new Scorer();
        const batsman1 = new Batsman('Gambhir');
        const batsman2 = new Batsman('Dhoni');
        scorer.addBatsman(batsman1);
        scorer.addBatsman(batsman2);
        const newPlayerOnStrike = scorer.changeStrike(batsman1);
        expect(newPlayerOnStrike).toEqual(batsman2);
    });
    it('should call change strike during calculation of score', () => {
        const scorer = new Scorer();
        const batsman1 = new Batsman('Raina');
        const batsman2 = new Batsman('Jadeja');
        scorer.addBatsman(batsman1);
        scorer.addBatsman(batsman2);
        spyOn(scorer, "changeStrike");
        scorer.calculateScore([2, 3, 4, 5, 5, 6, 0, 1]);
        expect(scorer.changeStrike).toHaveBeenCalled();
    })
})