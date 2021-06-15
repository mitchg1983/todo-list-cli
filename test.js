let myList = ["Bacon", 1, 1, 1, 1, "Egg", 1, 1, 1, 1, "Cheese", 1, 1, 1, 1, "Bagel", 1, 1, 1, 1,];


function displayList (myList) {
    let text = '';
    
    for (i = 0; i < myList.length; i++) {
        if (myList[i] != 1 && myList[i] != 2) {
            text += myList[i] + ", ";
        }
    }
    return text
}


console.log (displayList (myList));



// if (myList[i] != 1) {
//     text += myList[i] + ", ";
// }