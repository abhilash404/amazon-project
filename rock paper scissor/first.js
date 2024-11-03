const  score={
  wins:0,
  loss:0,
  ties:0,
};

function pickcomputerove() {
  const moves= ['rock','paper','scissors'];
  const index= Math.floor(Math.random()*moves.length);
  return moves[index];
}

function playgame(playermov){
  const compmov= pickcomputerove();
  let playermovicon,computermovicon;
  switch (playermov) {
    case 'rock':
      playermovicon='✊';
      break;
    case 'paper':
      playermovicon='🤚';
      break;
    case 'scissors':
      playermovicon='✌️';
    default:
      break;
  }
  switch (compmov) {
    case 'rock':
      computermovicon='✊';
      break;
    case 'paper':
      computermovicon='🤚';
      break;
    case 'scissors':
      computermovicon='✌️';
    default:
      break;
  }
  let result= '';
  if(playermov==='scissors'){
    if(compmov==='rock'){
      result='loss';
    }
    else if (compmov==='paper') {
      result='win';
    }
    else if (compmov==='scissors'){
      result='tie';
    }
  }
  else if (playermov==='paper') {
    if(compmov==='scissors'){
      result='loss';
    }
    else if (compmov==='rock') {
      result='win';
    }
    else if (compmov==='paper'){
      result='tie';
    }
  }
  else if (playermov==='rock') {
    if(compmov==='paper'){
      result='loss';
    }
    else if (compmov==='scissors') {
      result='win';
    }
    else if (compmov==='rock'){
      result='tie';
    }
  }
  
  
  if (result==='win') {
    score.wins++;
    document.getElementById("msg").innerHTML="you win!!"
  }
  else if (result==='tie') {
    score.ties++;
    document.getElementById("msg").innerHTML="you tied"
  }
  else{
    score.loss++;
    document.getElementById("msg").innerHTML="you lost!!"
  }

  document.getElementById("score").innerHTML="wins: "+score.wins+" loss: "+score.loss+" ties= "+score.ties;
  document.getElementById("decision").innerHTML="you: "+playermovicon+" vs computer: "+computermovicon;
  
}

function reset(){
  score.wins=0;
  score.ties=0;
  score.loss=0;

  document.getElementById("score").innerHTML="wins: "+score.wins+" loss: "+score.loss+" ties= "+score.ties;
  document.getElementById("msg").innerHTML="phirse shuru kar"
  document.getElementById("decision").innerHTML="match shuru nahi hua";
}