// Lister , a command line program to maintain & edit a list of to-do items!

const prompt = require('prompt-sync')();

//This will be how the user exits the program. Typing exit will set this to 0, and leave the main loop of Lister.
let running = 1;

//Functions
//
//
//Display List function

function displayList (myList) {
    let itemNumber = 1; 
    for (const item of myList) { 
        console.log(itemNumber, '', item);
        itemNumber ++;
    }
    return
}


//Add in some art here as a splash screen?

//Draft text:     Hello! Welcome to Lister, the world's best personal organizer.®
//You currently have -0- lists active. Would you like to start a list?
//Type a name for your list.
//Display list, number of items in list, complete #/incomplete#
//Functions to:    add items, remove items, reorder them, edit them, complete items (items can be listed, done (but still listed) or removed), display them
//View lists, list the lists

//Splash & open

console.clear ();
console.log ('Welcome to Lister, the world\'s best personal organizer.®');
console.log ('');
console.log ('Press ENTER to continue...');
prompt ('>');

let myList = ["Bacon", 0, 0, 0, 0, "Egg", 0, 0, 0, 0, "Cheese", 0, 0, 0, 0, "Bagel", 0, 0, 0, 0, ];
let listLength = myList.length / 5;
let myListName = ('My To-Do List');

while (running === 1) {
    
    //Starting data for the list

    
    
    //Get info for lists and display it, prompt user for action
    console.log ('Your list,', myListName,',', 'currently has', listLength, 'items in it.');
    console.log ('Would you like to Manage your list, or Edit your list?');
    let userCommand = prompt ('>');
    
    
    //Invalid entry, if the user does not type a working command
    // if (userCommand != 'Manage' && userCommand != 'manage' && userCommand != 'Edit' && userCommand != 'edit' && userCommand != 'Exit' && userCommand != 'exit' && userCommand != 'Complete' && userCommand != 'complete') {
    //     console.clear ();
    //     console.log ('Invalid entry, please try again...');
    //     console.log ('');
    //     console.log ('Your list,', myListName,',', 'currently has', listLength, 'items in it.');
    //     console.log ('Would you like to Manage your list, Edit your list, or Exit?');
    //     userCommand = prompt ('>');
    // }
    
    //The user can manage/view their list here
    if (userCommand === 'Manage' || userCommand === 'manage') {
        userCommand = 0;
        console.clear ();
        console.log ('You have chosen to Manage your list');
        displayList (myList);
        console.log ('');
        console.log ('Would you like to Complete items on your list, Edit your list, or Exit?');
        userCommand = prompt ('>');
    }
    
    //The user can edit their list here
    if (userCommand === 'Edit' || userCommand === 'edit') {
        userCommand = 0;
        console.clear ();
        console.log ('You have chosen to Edit your list');
        userCommand = prompt ('>');
    }
    
    //The user can complete items on their list here
    if (userCommand === 'Complete' || userCommand === 'complete') {
        userCommand = 0;
        console.clear ();
        console.log ('You have chosen to Complete an item on your list.');
        displayList (myList);
        console.log ('Type the number of the item you would like to complete.');
        userCommand = prompt();
        remover = Number(userCommand) - 1;
        myList.splice(remover, 5);
        listLength = myList.length;
        console.clear();
        displayList (myList);
    }
        
        //The user can exit the program here
        if (userCommand === 'Exit' || userCommand === 'exit') {
            userCommand = 0;
            running = 0;
        }
        
        // else {
        //     userCommand = 0;
        //     console.clear ();
        //     console.log ('Invalid entry, please try again...');
        //     console.log ('');
        //     console.log ('Your list,', myListName,',', 'currently has', listLength, 'items in it.');
        //     console.log ('Would you like to Manage your list, Edit your list, or Exit?');
        //     userCommand = prompt ('>');
        // }
        
        
    
    
    
    //This is the exit message to the user.
    if (running === 0) {
        console.log ('Thanks for using Lister! See you next time.')
    }
}