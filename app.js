let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "blue"];

let started = false;
let level = 0;

let subH = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started");
        started = true;
        
        
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
};

function levelUp(){
    userSeq = [];
    level++;
    subH.innerHTML = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        subH.innerHTML = `Game Over ! Your score is <b>${level}</b> <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);  
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);                                         
}

let allBtns = document.querySelectorAll(".btn");

for(oneBtn of allBtns){
    oneBtn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}