/*GAME RULES:
-The game has two players, playing in rounds.
-in each turn a player rolls a  die as many times as he wishes, each result get 
 added to his round scores.
 but if the player roles a 1, all his round score get lost. After that, it is athe 
 next player's turn.
 the first player to rich 100 points on global score wins the game.

*/

/*
CODDING CHALLANGE
1. A player looses his entire score when he rolls two in a row. After that, it is the next players turn.
 (Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning scores so that they can change the predefined score of 100.
 (Hint: You can read that value with the .value property in javascript.)
3.Add another dice to the game so that there are two dice now. A player losses hicurrent score when one of them is a 1.
(hint: You will need a css to position the dice)
*/

var scores, roundScore,activePlayer,gameplaying, lastDice ;
init();

//console.log(dice);

//setter
//document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';

//getter


//Annonimous function- A function with no name
document.querySelector('.btn-roll').addEventListener('click',function(){
      
     // disable buttons when there is a winner.
    if(gameplaying){
    	 //get random number
   var dice1=Math.floor(Math.random()*6)+1;  
   var dice2=Math.floor(Math.random()*6)+1;
  //display the result
    document.getElementById('dice-1').style.display='block';
     document.getElementById('dice-2').style.display='block';
     document.getElementById('dice-1').src='dice-'+dice1+'.png';
    document.getElementById('dice-2').src='dice-'+dice2+'.png';
    /*
    if (dice==6 && lastDice==6){
      scores[activePlayer]=0;
       document.querySelector('#score-'+activePlayer).textContent='0';
       nextPlayer();
    }
else 
 lastDice=dice;

 */
 if(dice1!==1&&dice2!==1){
    // perform the summation
    roundScore += dice1+dice2;
    
    document.querySelector('#current-'+activePlayer).textContent=roundScore;
}
    else{
        //next player}
nextPlayer();

  }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	// to disabble buttons when there is a winner
	if(gameplaying){
    
    //add CURRENT score to global score
scores[activePlayer] +=roundScore;

  //update the UI

document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
 var input=document.querySelector('.final-score').value;
 var winningScore;
   if(input){
    winningScore=input;
   }else{
    winningScore=100;
   }

  //Check if the player won the game
  if(scores[activePlayer]>=winningScore){
  	document.querySelector('#name-'+activePlayer).textContent='WINNER!';
  	document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
  	document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');  
  	document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    gameplaying=false;
  }else
  {
  nextPlayer();
}

	}
});

document.querySelector('.btn-new').addEventListener('click', init);



 function nextPlayer(){
 activePlayer===0 ? activePlayer=1 : activePlayer=0;
        roundScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

document.getElementById('dice-1').style.display='none';
document.getElementById('dice-2').style.display='none';
 }

 function init(){
 scores=[0,0];
roundScore=0;
activePlayer=0;
gameplaying=true;
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.getElementById('dice-1').style.display='none';
document.getElementById('dice-2').style.display='none';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


 }