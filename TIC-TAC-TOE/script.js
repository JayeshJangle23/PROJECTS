let but=document.querySelectorAll(".btn");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#newGame");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msgcontainer");
let turnO=true;
const resetbtn=()=>{
    turnO=true;
    enableButton();
    msgContainer.classList.add("hide");
}
let winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
but.forEach((button) => {
    button.addEventListener("click",()=>{
        if(turnO){
            button.innerText="O";
            turnO=false;
        }
        else{
            button.innerText="X";
            turnO=true;
        }
        button.disabled=true;
        checkWinner();
    })
});
const disableButton=()=>{
    for(b of but){
        b.disabled=true;
    }
}
const enableButton=()=>{
    for(b of but){
        b.disabled=false;
        b.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`CONGRATULATIONS ! WINNER IS ${winner}`;
    msgContainer.classList.remove("hide");
    disableButton();
};
const checkWinner=()=>{
    for(let pattern of winningPattern){
        let pos1=but[pattern[0]].innerText;        
        let pos2=but[pattern[1]].innerText;    
        let pos3=but[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("WINNER");
                showWinner(pos1);
            }
        }
    }
}
reset.addEventListener("click",resetbtn);
newGameBtn.addEventListener("click",resetbtn);