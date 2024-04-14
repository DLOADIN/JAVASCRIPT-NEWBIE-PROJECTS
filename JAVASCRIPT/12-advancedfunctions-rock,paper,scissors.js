let score = JSON.parse(localStorage.getItem
  ('score')) || {
    wins : 0,
    losses : 0,
    ties : 0,
  };
  updateScore();
  /*
  if(!score){
    
      score={
     wins : 0,
     losses : 0,
     ties : 0
    }
  }
  */

let isautoplaying = false;
let autoplayer
/*
const autoplay = () =>{
};*/
function autoPlay(){
  if(!isautoplaying){
    autoplayer=
    setInterval(()=>{
    const playMove= pickComputerMove()
    playGame(playMove)
  },1000);
  isautoplaying = true;
}else
clearInterval(autoplayer);
isautoplaying = false;
}

  const rockButton = document.querySelector('.js-rock-button')
  .addEventListener('click', ()=>
  playGame('rock'));

  const scissorsButton = document.querySelector('.js-scissors-button')
  .addEventListener('click', ()=>
  playGame('scissors'));

  const paperButton = document.querySelector('.js-paper-button')
  .addEventListener('click', ()=>
  playGame('paper'));

  document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
      playGame('rock');
    }
    console.log(event.key)
    if(event.key === 's'){
      playGame('scissors');
    }
    console.log(event.key)
    if(event.key === 'p'){
      playGame('paper');
    }
  })

  function playGame(playMove){
    let result = '';
    const computerMove = pickComputerMove();
    if(playMove === 'scissors'){
      if(computerMove === 'rock'){
        result='Lose';
      }
      else if(computerMove === 'paper'){
        result='Won';
      }
      else if(computerMove === 'scissors'){
        result='and the computer are on a draw result';
      } 
    }
    
    if(playMove === 'paper'){

      if(computerMove === 'rock'){
        result='Won';
      }
      else if(computerMove === 'paper'){
        result='and the computer are on a draw result';
      }
      else if(computerMove === 'scissors'){
        result='Lost';
      }
    }

    if(playMove === 'rock'){
      
      if(computerMove === 'rock'){
        result='and the computer are on a draw result';
      }
      else if(computerMove === 'paper'){
        result='lost';
      }
      else if(computerMove === 'scissors'){
        result='Won';
      }

     
    }
    if(result === 'Won'){
        score.wins += 1;
    }
    else if(result === 'lost'){
      score.losses +=1;
    }
    else if(result === 'and the computer are on a draw result'){
      score.ties +=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();
    /*
     alert(`You picked ${playMove}. The computer picked ${computerMove}.You ${result}
     Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`);
     */
  }
      function updateScore (){
      document.querySelector('.js-score').innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`  
      }


  let result = '';
function pickComputerMove(){
      let computerMove= ''; 
      const randomNumber = Math.random();
      if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove= 'rock';
      }
      
      else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove= 'paper';
      }

      else if(randomNumber >=2/3 && randomNumber < 1){
        computerMove= 'scissors';
      }
  return computerMove;
}  
