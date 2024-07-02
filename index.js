let rockEle=document.getElementById('rock');
let sciEle = document.getElementById('scissor');
let paperEle=document.getElementById('paper');
let youPickedEle = document.getElementById('youPicked');
let compPickedEle = document.getElementById('compPicked');
let yourScoreEle = document.getElementById('your');
let compScoreEle=document.getElementById('computer');
let ansEle = document.getElementById('yay');
let youCount=0;
let compCount=0;

rockEle.addEventListener('click' , ()=>{
  let str="";
 let compMove = ComputerMove();
   youPickedEle.textContent="You Picked : Rock";
 if(compMove=="paper"){
    compPickedEle.textContent="Computer Picked : " + compMove;
    compCount++;
    str="You Lose"
 }
 else if(compMove=="scissors"){
  compPickedEle.textContent="Computer Picked : " + compMove;
  youCount++;
  str="You Won"
 }
 else{
  compPickedEle.textContent="Computer Picked : " + compMove;
  str="You Tie"
 }

 yourScoreEle.textContent="Your Score : " + youCount;
 compScoreEle.textContent="Computer Score : "+ compCount;

 ansEle.textContent=str;
});

function ComputerMove() {
  
  let a = Math.round(Math.random()*3);

  if(a==0){
         return "rock";
  }
  else if(a==1){
         return "scissors"
  }
    else{
            return "paper";
    }
  
}


paperEle.addEventListener('click' , ()=>{
  let str="";
  let compMove = ComputerMove();
    youPickedEle.textContent="You Picked : Paper";
  if(compMove=="paper"){
     compPickedEle.textContent="Computer Picked : " + compMove;
     str="You Tie";
  }
  else if(compMove=="scissors"){
   compPickedEle.textContent="Computer Picked : " + compMove;
   compCount++;
   str="You Lose";
  }
  else{
   compPickedEle.textContent="Computer Picked : " + compMove;
   youCount++;
   str="You Won"
  }
 
  yourScoreEle.textContent="Your Score : " + youCount;
  compScoreEle.textContent="Computer Score : "+ compCount;
  ansEle.textContent=str;
 });


 sciEle.addEventListener('click' , ()=>{
  let str="";
  let compMove = ComputerMove();
    youPickedEle.textContent="You Picked : Scissors";
  if(compMove=="paper"){
     compPickedEle.textContent="Computer Picked : " + compMove;
    youCount++;
    str="You Won";
  }
  else if(compMove=="scissors"){
   compPickedEle.textContent="Computer Picked : " + compMove;
   str="You Lose"
  }
  else{
   compPickedEle.textContent="Computer Picked : " + compMove;
   compCount++;
   str="You Tie"
  }
 
  yourScoreEle.textContent="Your Score : " + youCount;
  compScoreEle.textContent="Computer Score : "+ compCount;
  ansEle.textContent=str;
 });



