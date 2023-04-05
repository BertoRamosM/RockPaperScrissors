function getComputerChroice(){

let choice = Math.floor((Math.random() * 3) + 1);

if(choice == 1){
    return `Computer plays rock`
}else if(choice == 2){
    return `Computer plays paper`
}else{
    return `Computer plays scrissors`
}


}



function playRound(playerSelection, ComputerSelection){
    computerSelection = getComputerChroice();
   

    playerSelection.toLowerCase();


if(playerSelection == `rock` && ComputerSelection == 1 || 
    playerSelection == `paper`  && ComputerSelection == 2 ||
    playerSelection == `scrissors` && ComputerSelection == 3){
        return `It's a tie!`;
    } else if (playerSelection == `rock` && ComputerSelection == 2){
        return `Computer wins, paper beats rock`;
    }else if(playerSelection == `rock` && ComputerSelection == 3){
        return `Player wins, rock beats scissors`;
    }else if(playerSelection == `paper` && ComputerSelection == 1){
        return `Player wins, paper beats rock`;
    }else if (playerSelection == `paper` && ComputerSelection == 3){
        return `Computer wins, scissors beats paper`;
    }else if (playerSelection == `scissors` && ComputerSelection == 1){
        return `Computer wins, rock beats scissors`;
    }else if(playerSelection == `scissors` && ComputerSelection == 2){
        return `Player wins, scissors beats paper`;
    }
}


console.log(playRound(playerChoice, computerSelection));
