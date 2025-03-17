let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winpat = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame = () => {
    enableboxs();
    turnO = true;
    boxes.innerText = "";
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if (turnO == true){
            box.innerHTML = "O";
            turnO = false;
        }else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwin();
    })
});
const disableboxs = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxs = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner =(winner)=>{
    msg.innerText = "congratulations,Player "+winner+" wins"
    msgcontainer.classList.remove("hide");
    disableboxs();
}
const checkwin = () => {
    let isDraw = true; 
    for (let pat of winpat) {
        let pos1 = boxes[pat[0]].innerHTML;
        let pos2 = boxes[pat[1]].innerHTML;
        let pos3 = boxes[pat[2]].innerHTML;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("Player " + pos1 + " wins");
                showWinner(pos1);
                return; 
            }
        }
    }
    for (let box of boxes) {
        if (box.innerHTML === "") {
            isDraw = false; 
            break;
        }
    }
    if (isDraw) {
        showDraw();
    }
};
const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msgcontainer.classList.remove("hide");
    disableboxs();
};
newgame.addEventListener("click",(resetgame));
reset.addEventListener("click",(resetgame));