// Lister , a command line program to maintain & edit a list of to-do items!

const prompt = require('prompt-sync')();

//This will be how the user exits the program. Typing exit will set this to 0, and leave the main loop of Lister.
let running = 2;

//Functions

function displayList (anylist) {
    let text = '';
    for (i = 0; i < anylist.length; i++) {
        if (anylist[i] != 1 && anylist[i] != 2) {
            text += (i/5) + ". " + anylist[i] + "\n";
        }
    }
    return text
}



let myList = ["Bacon", 1, 1, 1, 1, "Egg", 1, 1, 1, 1, "Cheese", 1, 1, 1, 1, "Bagel", 1, 1, 1, 1,];
let listLength = myList.length / 5;
let myListName = ('My To-Do List');

console.clear ();
console.log ('Welcome to Lister, the world\'s best personal organizer.®');
console.log ('');
console.log ('Press ENTER to continue...');
prompt ('>');
running = 1;

while (running === 1) {
    console.log ('Your list,', myListName,',', 'currently has', listLength, 'items in it.');
    console.log ('Would you like to Complete items on your list, or Edit your list?');
    let userCommand = prompt ('>');
    
    if (userCommand === 'Edit' || userCommand === 'edit') {
        console.log ('You have chosen to remove an item from your list');
        console.log ('Type the number of the item you would like to remove.');
        console.log (displayList (myList));
        userCommand = prompt();
        remover = (userCommand * 5) - 1;
        myList.splice(remover, 5);
        listLength = myList.length / 5;
        console.log (displayList (myList));
    }
    
    //The user can complete items on their list here
    if (userCommand === 'Complete' || userCommand === 'complete') {
        console.log ('You have chosen to Complete an item on your list.');
        console.log ('Type the number of the item you would like to Complete.');
        console.log (displayList (myList));
        userCommand = prompt();
        choice = (userCommand * 5);
        let completedItem = myList[choice].toString();
        let newName = completedItem.strike();
        myList[choice] = newName;
        console.log (displayList (myList));
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