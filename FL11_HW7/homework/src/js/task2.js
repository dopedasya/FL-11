let message={
	'start':'Do you want to play a game?',
	'cancel':'You did not become a billionaire, but can.',
	'diapoz1':'Choose a roulette pocket number from ',
	'diapoz2':' to ',
	'attemptCount':'Attempts left: ',
	'totalPrize':'Tota prize ',
	'possiblePrize':'Possible prize on current attempt: ',
	'winGuess':'Congratulation, you won!   Your prize is: ',
	'winGuess2':'. Do you want to continue?',
	'loseGuess':'Thank you for your participation. Your prize is: ',
	'again':'Do you want to play again?'
}

let onGame= true;
let begin=confirm(message['start']);
let totalCash=0;
let startCash=100;
let cash = new Array();
const attemptCount=3;
let attemptLeft;
let autoNumber;
const basicCashBonus =1;
let cashBonus=basicCashBonus;
const half = 2;
let minRange = 0;
const basicMaxRange = 8;
let maxRange = basicMaxRange;
let info;
let nxtln = '\n';
let humanNumber;
let humanWin=false;
let continueGame =true;
let rangeStep = 4;

if(begin){
	while(onGame){
		cash[0]=startCash*cashBonus;
		for(let i=1; i<attemptCount; i++){
			cash[i]=cash[i-1]/half;
		}
		autoNumber = Math.floor(minRange + Math.random()*(maxRange +1-minRange));
		for(let i = 0; i< attemptCount; i++){
			attemptLeft = attemptCount-i;
			info='';
			info=info+message['diapoz1']+minRange+message['diapoz2']+maxRange+nxtln;
			info=info+message['attemptCount']+attemptLeft+nxtln+message['totalPrize']+totalCash+' $ ';
			info=info+message['possiblePrize']+cash[i]+ ' $ ';
			humanNumber=+prompt(info);

			if(humanNumber===autoNumber){
				totalCash=totalCash+cash[i];
				humanWin=true;
				onGame=confirm(message['winGuess']+cash[i]+message['winGuess2']);
				break;
			}
		}

		if(!humanWin){
			alert(message['loseGuess']+totalCash+' $ ');

			onGame=confirm(message['again']);
		}
		if(onGame){
			if(humanWin){
				cashBonus+=cashBonus;
				maxRange=maxRange+rangeStep;
				humanWin=false;
			}else{
				cashBonus=basicCashBonus;
				maxRange=basicMaxRange;
				totalCash-=totalCash;
			}
		}else{
			alert(message['loseGuess']+totalCash+' $ ');
			cashBonus=basicCashBonus;
				maxRange=basicMaxRange;
				totalCash-=totalCash;
			onGame=confirm(message['again']);
		
		}
	}
}else{
	alert(message['cancel']);
}