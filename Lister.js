// Lister , a command line program to maintain & edit a list of to-do items!

const prompt = require('prompt-sync')();

//This will be how the user exits the program. Typing exit will set this to 0, and leave the main loop of Lister.
let running = 2;

//Functions

function displayList (anylist) {
    let text = '';
    for (i = 0; i < anylist.length; i++) {
        if (anylist[i] != 1 && anylist[i] != 'test' && anylist[i + 1] != 'test') {
            text += (i/5) + ". " + anylist[i] + "\n";
        }
    }
    return text
}

function displayListLength (anylist) {
    let text = 0;
    for (i = 0; i < anylist.length; i++) {
        if (anylist[i] != 1 && anylist[i] != 'test') {
            text++;
        }
        if (anylist[i] === 'test'){
            text = text - 1;
        }
    }
    return text
}



let myList = '["Bacon", 1, 1, 1, 1, "Egg", 1, 1, 1, 1, "Cheese", 1, 1, 1, 1, "Bagel", 1, 1, 1, 1]';
let myListArray = JSON.parse(myList);
let listLength = myList.length / 5;
let myListName = ('My To-Do List');
let compList = [];

console.clear ();
console.log ('Welcome to Lister, the world\'s best personal organizer.®');
console.log ('');
console.log ('Press ENTER to continue...');
prompt ('>');
running = 1;

while (running === 1) {
    console.log ('Your list,', myListName,',', 'currently has', displayListLength(myListArray), 'items in it.');
    console.log ('Please type one of the followig commands: Add, Complete, Edit, Rename, Clear, View');
    let userCommand = prompt ('>');
    
    if (userCommand === 'Edit' || userCommand === 'edit') {
        console.log ('You have chosen to remove an item from your list');
        console.log ('Type the number of the item you would like to remove.');
        console.log (displayList (myList));
        remNum = Number(prompt());
        console.log ('You have chosen number', remNum);
        
        //Had an issue with 0 being entered as a value here. Wrote this code to address that.        
        if (remNum === 0) {
            myList.splice(0, 5);
            console.log (displayList (myList));
        }
        else {
            remover = (remNum * 5) - 1;
            myList.splice(remover, 5);
            console.log (displayList (myList));
        }
    }
    
    if (userCommand === 'Complete' || userCommand === 'complete') {
        console.log ('You have chosen to Complete an item on your list.');
        console.log ('Type the number of the item you would like to Complete.');
        console.log (displayList (myList));
        compNum = prompt();
        choice = (compNum * 5);

        let tempComp = myList.slice(choice, 5)
        console.log (tempComp);


        // compList.push(tempComp);

        // console.log (compList)

        // console.log (compList);
        // compList = compList.concat(myList.slice(choice, 5));
        // console.log (compList);
        // console.log (myList.slice(choice, 5));





        // let completedItem = (myList[choice]).toString();
        // let newName = completedItem + '  ***DONE!';
        // myList[choice] = newName;
        // myList[choice + 1] = 'test';
        // console.log (displayList (myList));
    }
    
    if (userCommand === 'Rename' || userCommand === 'rename') {
        console.log ('You have chosen to Rename an item on your list.');
        console.log ('Type the number of the item you would like to Rename.');
        console.log (displayList (myList));
        userCommand = prompt('>');
        choice = (userCommand * 5);
        console.log ('Type the new name of the item.');
        reName = prompt('>');
        myList[choice] = reName;
        console.log (displayList (myList));
    }
    
    if (userCommand === 'Clear' || userCommand === 'clear') {
        console.log ('You have chosen to clear your list.');
        console.log ('Type in CLEAR to confirm, or choose another action. (Complete, Edit, Rename');
        let clearList = prompt ('>');
        if (clearList === 'CLEAR') {
            myList = [];
        }
    }
    
    if (userCommand === 'Add' || userCommand === 'add') {
        console.log ('You have chosen to Add an item to your list.');
        console.log ('Type in the name of your new item...');
        let newItem = prompt ('>');
        myList.push(newItem, 1, 1, 1, 1)
    }
    
    if (userCommand === 'View' || userCommand === 'view') {
        console.clear();
        console.log(displayList(myList));
    }
    
    
    
    //The user can exit the program here
    if (userCommand === 'Exit' || userCommand === 'exit') {
        running = 0;
    }
    
    //This is the exit message to the user.
    if (running === 0) {
        console.log ('Thanks for using Lister! See you next time.')
    }
}