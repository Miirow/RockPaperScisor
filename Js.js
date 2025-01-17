function getComputerChoice(){
    let computerChoice = "oui";
    let nombres = [1,2,3];
    let choix = nombres[Math.floor(Math.random()*nombres.length)];
    //let choix = 2;
    if (choix == 1){
      console.log("Computer : Pierre")
      computerChoice="pierre";
    }
    else if (choix == 2){
      console.log("Computer : Papier");
      computerChoice="papier";
    }
    else {
    console.log("Computer : Ciseaux");
    computerChoice="ciseaux";
    }
    return computerChoice;
}


function bouttonClick(choice) {
    userInput = choice;
    getHumanChoice();
  }


function getHumanChoice(){
    let humanChoice = "oui";
    if (userInput == "pierre"){
      console.log("Humain : Pierre")
      humanChoice="pierre";
    }
    else if (userInput == "papier"){
      console.log("Humain : Papier");
      humanChoice="papier";
    }
    else if (userInput == "ciseaux"){
    console.log("Humain : Ciseaux");
    humanChoice="ciseaux";
    }
    else{
      console.log("Tu connais pas le jeu ?")
    }
    return humanChoice;
}


function playRound(){
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  if(humanChoice == "pierre" && computerChoice == "pierre"){
    console.log("Egalité");
  }
  else if(humanChoice == "pierre" && computerChoice == "papier"){
    console.log("Perdu");
    computerScore += 1;
  }
  else if(humanChoice == "pierre" && computerChoice == "ciseaux"){
    console.log("Gagné");
    humanScore += 1;
  }


  else if(humanChoice == "papier" && computerChoice == "papier"){
    console.log("Egalité");
  }
  else if(humanChoice == "papier" && computerChoice == "ciseaux"){
    console.log("Perdu");
    computerScore += 1;
  }
  else if(humanChoice == "papier" && computerChoice == "pierre"){
    console.log("Gagné");
    humanScore += 1;
  }


  else if(humanChoice == "ciseaux" && computerChoice == "ciseaux"){
    console.log("Egalité");
  }
  else if(humanChoice == "ciseaux" && computerChoice == "pierre"){
    console.log("Perdu");
    computerScore += 1;
  }
  else if(humanChoice == "ciseaux" && computerChoice == "papier"){
    console.log("Gagné");
    humanScore += 1;
  }
  console.log("Humain :" + humanScore);
  console.log("Computer :" + computerScore);
}


function playGame(){
  while(humanScore < 3 && computerScore < 3){
    playRound();
  }
  if (humanScore == 3) {
      console.log("Vous avez gagné");
    } else {
      console.log("Vous avez perdu");
    }
}


function cacheBoutton(button) {
    button.style.display = "none";
    playGame();
  }