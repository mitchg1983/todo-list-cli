// console.clear ();
// let earlyList = ['onion', "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon", "bacon"];
// let myList = JSON.parse(earlyList);
// console.log ('Your list is', myList);
// console.log ('Your list type is', typeof myList);


// let test = myList.slice(2, 5);

// console.log (test)



let testList = '["bacon", "headlights", "fantasia", "chair", "apple", "bacon", "headlights", "fantasia", "chair", "apple", "bacon", "headlights", "fantasia", "chair", "apple", "bacon", "headlights", "fantasia", "chair", "apple"]';
console.log (testList);
console.log (typeof testList);



let testParse = JSON.parse(testList);
console.log (testParse);
console.log (typeof testParse);

console.log (testParse.splice(1,2));