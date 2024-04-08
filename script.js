let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");


// Winning Patterns Array 

const winPatterns = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6],
]


// Initial Turn O

let turnO = true ;


// Access and Control boxes

boxes.forEach ((box) => {
     box.addEventListener("click" , () => {
        console.log("clicked");
        
        if (turnO) {    // player O
            box.innerText = "O";
            turnO = false;   
        }
        else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true  

        checkWinner (); 
     })
})



const checkWinner = () => {
    for (let pattern of winPatterns) {             
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText; 
        
        if (pos1Val != ""  &&  pos2Val != ""  &&  pos3Val != "") { 
              if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner" , pos1Val);
                
                showWinner (pos1Val);   
              }
        }
        
    }
}


//Function for Show winner

const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes ();
}


// BOX disabled

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}


