const brain = require("brain.js");
const network = new brain.NeuralNetwork();

network.train([
    {input:[1,2],output:[0]},
    {input:[1,3],output:[1]},
    {input:[1,4],output:[0]},
    {input:[1,2],output:[0]},
    {input:[1,3],output:[1]},
    {input:[1,4],output:[0]},
    {input:[1,2],output:[0]},
    {input:[1,3],output:[0]},
    {input:[2,3],output:[0]},
    {input:[4,1],output:[1]},
    {input:[4,2],output:[1]},
]);

const output = network.run([2,3]);
console.log(`Prob ${output}`);   