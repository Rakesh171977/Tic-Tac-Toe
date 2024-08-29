let boxex = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turnO = true;

const winPattern = [
 [0,1,2],
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8],
];

boxex.forEach((box) =>{
    box.addEventListener("click" , () => {
    if(turnO){
        box.innerText = "O"
        turnO = false;
    }

    else{
        box.innerText = "X"
        turnO = true;
    }

    box.disabled = true;               

    checkWinner();

    });

});

const disablebtn = () =>{
    for(let box of boxex){
        box.disabled = true;
    }
}

const showWinner = (winner) =>{
    msg.innerHTML = `Congratulation Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
}


const checkWinner = () =>{
    for(pattern of winPattern){
       let pos1 = boxex[pattern[0]].innerText ;
       let pos2 = boxex[pattern[1]].innerText ;
       let pos3 = boxex[pattern[2]].innerText;

       if(pos1 !="" && pos2 !="" && pos3 !=""){
        if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);
        }
       }
      
    }
}



const resetfun = () =>{
    turnO = true;
    msgcontainer.classList.add("hide");
    enableboxex();
}

const enableboxex = () =>{
    for(let box of boxex){
        box.disabled = false;
        box.innerText = "";
    }
}
resetbtn.addEventListener("click" , resetfun);