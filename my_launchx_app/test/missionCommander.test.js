const MissionCommander = require('./../app/missionCommander');
const myMissionCommander = new MissionCommander("Woopa")

describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander objet', () => {
      const result = 1 + 2 
      expect(myMissionCommander.name).toBe("Woopa");
    });
  })
  