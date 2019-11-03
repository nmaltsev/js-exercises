/*
For Atom N270 benchmarks:
function: `removeArrayItem1`, time: 0.025s
function: `removeArrayItem2`, time: 0.001s
function: `removeArrayItem3`, time: 0.001s
function: `removeArrayItem4`, time: 0.03s
*/

let $removeMethods = require('./deleting_array_elements');
let $helpers = require('./testhelpers');

let list = $helpers.generateList(2<<15); 
let item = $helpers.getRandomInt(0, 2<<15)

for(var methodName in $removeMethods) {
    let time = $helpers.pmeathure(function(testFunction){
        testFunction(list, item);
    }, $removeMethods[methodName]);
    console.log('function: `%s`, time: %ss', methodName, time/1000);
}
