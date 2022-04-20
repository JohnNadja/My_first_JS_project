const MissionCommanderJS = require('./app/missionCommander');
const carlo = new MissionCommanderJS("Carlo")
console.log(carlo.name)


console.log("")
const MissionCommanderJava = require('./app/missionCommander');
const Fer = new MissionCommanderJava("Fer")
console.log(Fer.name)

console.log("")
const MissionCommanderFront = require('./app/missionCommander');
const Juan = new MissionCommanderFront("Juan Rodrigo")
console.log(Juan.name)