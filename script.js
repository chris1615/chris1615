let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let main=document.querySelector("main");
let winner="";
let para=null;

let turnO = true;
let count=0;
const winPatterns=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        
        if(turnO===true){
        box.innerText="O";
        console.log("person 1")
        turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
            console.log("person 2")
        }
        box.disabled=true;
        count++
        let isWinner=checkWin();
        if(count===9 && !isWinner){
            draw();
        }

    });
    
});
// const win = () => {
//     let para = document.createElement("p");
//     para.classList.add("para"); 
//     para.textContent = `Winner is ${winner}`; 
//     main.prepend(para); 
// }

const checkWin= () =>{
    for(let pattern of winPatterns){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!=""&&pos2!=""&&pos3!="")
    {
        if(pos1==pos2&&pos2==pos3)
        {
            winner=pos1;
    
            resetBtn.innerText="New game";
            // win();
            
            celebrateOnWin(winner);
            disablebutton();
            return true;
        }
    
    }

}
};
const celebrateOnWin = (winner) => {
    if(!para){
    para = document.createElement("p");
    para.classList.add("para");
    para.textContent = `Winner is ${winner}`;
    para.classList.add("celebrate"); 
    main.prepend(para); 
    
  }
}

  const resetgame=()=>//reset button
{  
    turnO=true;
    count=0;
    enablebutton();
    if(para)
    {
        para.remove();
        para=null;
        resetBtn.innerText="Reset game";
    }
    
    
    
    }



const disablebutton=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;

    }
}
const enablebutton=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";

    }
}
resetBtn.addEventListener("click",resetgame)

const draw=()=>{
    para = document.createElement("p");
    para.classList.add("para");
    para.textContent = `DRAW`;
    para.classList.add("celebrate"); 
    main.prepend(para); 

}
