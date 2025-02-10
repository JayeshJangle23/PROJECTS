let userScore=0;
let computerScore=0;
const choice=document.querySelectorAll(".image");
const msg=document.querySelector("#msg");
const uScore=document.querySelector("#userScore");
const cScore=document.querySelector("#compScore");
const compGenerate=()=>{
    const options=["ROCK","PAPER","SCISSOR"];
    const a=Math.floor(Math.random()*3);
    return options[a];
}
const draw=()=>{
    console.log("DRAW");
    msg.innerText=" GAME IS DRAW ";
}
const compWinn=()=>{
    console.log("COMPUTER WINN");
    computerScore++;
    msg.innerText=" COMPUTER IS WINNER ";
    msg.style.backgroundColor="red";
    cScore.innerHTML=computerScore;
}
const userWinn=()=>{
    console.log("USER WINN");
    userScore++;
    msg.innerText=" USER IS WINNER ";
    msg.style.backgroundColor="green";
    uScore.innerHTML=userScore;
}
const playGame=(userId)=>{
    const comp=compGenerate();
    console.log(userId,comp);
    if(comp===userId){
        draw();
    }
    else if(comp==="ROCK" && userId==="SCISSOR"){
        compWinn();
    }
    else if(comp==="SCISSOR" && userId==="ROCK"){
        userWinn();
    }
    else if(comp==="PAPER" && userId==="ROCK"){
        compWinn();
    }
    else if(comp==="ROCK" && userId==="PAPER"){
        userWinn();
    }
    else if(comp==="PAPER" && userId==="SCISSOR"){
        userWinn();
    }
    else if(comp==="SCISSOR" && userId==="PAPER"){
        compWinn();
    }
};
choice.forEach((image)=>{
    image.addEventListener("click",()=>{
        const userId=image.getAttribute("id");
        playGame(userId);
    });
});