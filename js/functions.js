// this function is to check when the game is won
function checkifgameiswon(first, second, third){
    if (display.textContent.includes("won the game")){
        return;
    }
    if(
        buttons[first].textContent === "X" &&
        buttons[second].textContent === "X" &&
        buttons[third].textContent === "X"  

   ) {
    disableButtonsWenGameIsWon("player 1");
    return;
   }
    else if(
        buttons[first].textContent === "O" &&
        buttons[second].textContent === "O" &&
        buttons[third].textContent === "O" 
     ){
        disableButtonsWenGameIsWon("player 2");
        return;
    }
    else{
        checkDraw();
    }
}

function checkStatus(){
    // check i f the game has been won horizontally
    checkifgameiswon(0, 1, 2);
    checkifgameiswon(3, 4, 5);
    checkifgameiswon(6, 7, 8);
    
    // check if the game has been won vertically
    checkifgameiswon(0, 3, 6);
    checkifgameiswon(1, 4, 7);
    checkifgameiswon(2, 5, 8);

    // check if the game is won diagonally
    checkifgameiswon(0, 4, 8);
    checkifgameiswon(2, 4, 6);

}

function disableButtonsWenGameIsWon(player){
    for (let button of buttons){
        if (button.textContent === ""){
            button.toggleAttribute("disabled");
        }
    }
    display.textContent = player + " won the game";
}
function checkDraw (){
    for (let button of buttons){
        if (button.textContent === ""){
            return
        }
    }
    display.textContent = "it is a Draw game"; 
}


