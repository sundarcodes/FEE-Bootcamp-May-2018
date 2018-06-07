import { Batsman } from './../batsman';
import { Scorer } from './../scorer';
describe('Testing cricket problem', () => {
    let scorer: Scorer;
    let batsman1: Batsman;
    let batsman2: Batsman;
    beforeEach(() => {
        scorer = new Scorer();
        batsman1 = new Batsman('K L Rahul');
        batsman2 = new Batsman('Rohit Sharma');
        scorer.addBatsman(batsman1);
        scorer.addBatsman(batsman2);
    });
    it('should calculate score correctly', () => {
        scorer.calculateScore([1, 2, 0, 0, 4, 1, 6, 2, 1, 3]);
        expect(scorer.totalScore).toEqual(20);
        expect(batsman1.numberOfRuns).toEqual(4);
        expect(batsman2.numberOfRuns).toEqual(16);
    })
    it('should calculate score correctly', () => {
        scorer.calculateScore([1, 2, 0, 0, 4, 1, 6, 2, 1, 2]);
        expect(scorer.totalScore).toEqual(19);
        expect(batsman1.numberOfRuns).toEqual(3);
        expect(batsman2.numberOfRuns).toEqual(16);
    });
    it('should calculate score correctly when an empty array is passed', () => {
        scorer.calculateScore([]);
        expect(scorer.totalScore).toEqual(0);
        expect(batsman1.numberOfRuns).toEqual(0);
        expect(batsman2.numberOfRuns).toEqual(0);
    });
})