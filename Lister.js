// Lister , a command line program to maintain & edit a list of to-do items!

const prompt = require('prompt-sync')();

//This will be how the user exits the program. Typing exit will set this to 0, and leave the main loop of Lister.
let running = 2;

//Functions



//I decided to use one array to store most of the data for my list. I wasn't sure how much I wanted to "do" with the data;
//for example, I may want to be able to priorititze certain items, or categorize them. I ended up using five 'slots' for
//each item on my list. So the first item, Bacon, then has four free 'slots' next to it.
//
//This first function is written to test the functionality of my system. It will return to the user only certain items in
//out array. If I enter 'test' as the value for an element, in the next index after an item, this function will ignore it and
//move on to the next item.
//
//This might be some useless code currently, as I decided to instead move items out of this array completely.
//
//Using functions from the beginning, made it much easier later on to switch over to using multiple arrays.
function displayList (anylist) {
    let text = '';
    for (i = 0; i < anylist.length; i++) {
        if (anylist[i] != 1 && anylist[i + 1] != 'test') {
            text += (i/5) + ". " + anylist[i] + "\n";
        }
    }
    return text
}


//This function will display how many items are on the list. Similar to the previous function, it is written to ignore certain values.
//If I end up using this, I will likely re-write it to simply count by 5s through the length of the array. While this would not take
//long to do, currenlty what I have works and I'm scared of breaking anything. :)
function displayListLength (anylist) {
    let text = 0;
    for (i = 0; i < anylist.length; i++) {
        if (anylist[i] != 1) {
            text++;
        }
    }
    return text
}

//Starter values for important variables

let myList = '["Bacon", 1, 1, 1, 1, "Egg", 1, 1, 1, 1, "Cheese", 1, 1, 1, 1, "Bagel", 1, 1, 1, 1]';
let myListArray = JSON.parse(myList);
let myListName = ('My To-Do List');
let testSpliceOld = '["Make the list", 1, 1, 1, 1]';
let testSplice = JSON.parse(testSpliceOld);

//Starter or splash screen. Some art might have been nice here.
console.clear ();
console.log ('Welcome to Lister, the world\'s best personal organizer.®');
console.log ('');
console.log ('Press ENTER to continue...');
prompt ('>');
running = 1;


//Main code of the program.
//
//I thought I had a bug in here, but I had accidentally put a console.clear somewhere in my loop. Took me too long to find it.
while (running === 1) {
    console.log ('Your list,', myListName,',', 'currently has', displayListLength(myListArray), 'items in it.');
    console.log ('You have completed', displayListLength(testSplice), 'tasks so far!');
    console.log ('Please type one of the followig commands: Add, Complete, Edit, Rename, Clear, View');
    console.log ('Restore, or Done to check your completed list.');
    let userCommand = prompt ('>');

    
//This beginning code should act as a home of sort, for the user. I chose not to automatically display the list here in case
//it was very long. After this are the different actions the user can take.

    if (userCommand === 'Edit' || userCommand === 'edit') {
        console.log ('You have chosen to remove an item from your list');
        console.log ('Type the number of the item you would like to remove.');
        console.log (displayList (myListArray));
        remNum = Number(prompt());

        
        //Had an issue with 0 being entered as a value here. Wrote this code to address that.        
        if (remNum === 0) {
            myListArray.splice(0, 5);
            console.log (displayList (myListArray));
        }
        else {
            remover = (remNum * 5) - 1;
            myListArray.splice(remover, 5);
            console.log (displayList (myListArray));
        }
    }
    
    //This section of code took me longest, becuase it was here (late in the process) that I discovered
    //my data had been moved from an array to a string I think. I deleted some important code somewhere
    //and while everything kept working for a while, eventually it broke. JavaScript is quite
    //finicky when it comes to arrays and how you can write them.
    if (userCommand === 'Complete' || userCommand === 'complete') {
        console.clear ();
        console.log ('You have chosen to Complete an item on your list.');
        console.log ('Type the number of the item you would like to Complete.');
        console.log (displayList (myListArray));
        compNum = prompt('>');
        choice = (compNum * 5);
        let movSplice = myListArray.splice(choice,5);
        testSplice.push(movSplice[0], 1, 1, 1, 1);
    }
    
    if (userCommand === 'Restore' || userCommand === 'restore') {
        console.clear ();
        console.log ('You have chosen to Restore an item to your to-do list.');
        console.log ('Type the number of the item you would like to Restore.');
        console.log (displayList (myListArray));
        compNum = prompt('>');
        choice = (compNum * 5);
        let movSplice = testSplice.splice(choice,5);
        myListArray.push(movSplice[0], 1, 1, 1, 1);
    }
    
    if (userCommand === 'Rename' || userCommand === 'rename') {
        console.clear ();
        console.log ('You have chosen to Rename an item on your list.');
        console.log ('Type the number of the item you would like to Rename.');
        console.log (displayList (myListArray));
        userCommand = prompt('>');
        choice = (userCommand * 5);
        console.log ('Type the new name of the item.');
        reName = prompt('>');
        myListArray[choice] = reName;
        console.log (displayList (myListArray));
    }
    
    if (userCommand === 'Clear' || userCommand === 'clear') {
        console.log ('You have chosen to clear your list.');
        console.log ('Type in CLEAR to confirm, or anything else to CANCEL.');
        let clearList = prompt ('>');
        if (clearList === 'CLEAR') {
            console.log ('Your list has been cleared. Press ENTER to continue.')
            prompt ('>');
            myListArray = [];
        }
        else {
            console.log ('Action cancelled. Press ENTER to continue.');
            prompt ('>');
        }
    }
    
    if (userCommand === 'Add' || userCommand === 'add') {
        console.log ('You have chosen to Add an item to your list.');
        console.log ('Type in the name of your new item...');
        let newItem = prompt ('>');
        myListArray.push(newItem, 1, 1, 1, 1);
        console.clear ();
    }
    
    if (userCommand === 'View' || userCommand === 'view') {
        console.clear ();
        console.log(displayList(myListArray));
    }
    
    if (userCommand === 'Done' || userCommand === 'done') {
        console.clear();
        console.log ('Here\'s what you have completed so far...');
        console.log(displayList(testSplice));
    }
    //The user can exit the program here
    if (userCommand === 'Exit' || userCommand === 'exit') {
        running = 0;
    }
    
}




//This is the exit message to the user.
if (running === 0) {
    console.log ('Thanks for using Lister! See you next time.')
}
