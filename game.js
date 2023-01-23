function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let computerGuess = Math.floor(Math.random()*100);
    let guess;
    let recusiveAsyncReadLine = function(){
        readline.question('Guess the number (0-100): ', number =>{
            guess = Number(number);
            if(guess<=100 && guess >=0){
                if(guess == computerGuess){
                    console.log('You guess it!');
                }else if(guess<computerGuess){
                    console.log(('Too Low!'));
                }else if(guess>computerGuess){
                    console.log('Too High!');
                }
                }else{
                    console.log('Invalid input! Try again...');
                    recusiveAsyncReadLine();
                }
            });
        }
    recusiveAsyncReadLine();
}
guessANumber(5)