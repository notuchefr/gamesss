let lastvalue = "O";
let display = document.getElementById("display");
display.textContent = "player 1's turn to play";

let buttons = document.querySelectorAll(".box");
for (let button of buttons){
    button.addEventListener("click", () =>{
        if (button.textContent !== ""){
            return;
        }
        if (lastvalue === "O"){
            button.textContent= "X";
            lastvalue = "X";
            display.textContent = "player 2's turn to play"
            checkStatus();
        }
            else{
                button.textContent = "O";
                lastvalue = "O"
                display.textContent = "player 1's turn to play";
                checkStatus();

            }
            
        
    });
}
let restartButton = document.getElementById("controlbutton");
restartButton.addEventListener("click", ()=>{
    window.location.href = "index.html";
});
