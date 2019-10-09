let UserScore = 0;
let CompScore = 0;
let amb = 9;
const User_Score_spam = document.getElementById('user-score');
const Comp_Score_span = document.getElementById('computer-score');
const Show_result_p = document.querySelector('.results > p');
const User_Choice_rock = document.getElementById('r');
const User_Choice_paper = document.getElementById('p');
const User_Choice_scissor = document.getElementById('s');

const u = "User".fontsize(3).fontcolor('red').sub();
const c = "comp".fontsize(3).fontcolor('red').sub();

function computer_Selection(){         // for getting the computer player to make decision
  computer_choices = ['r','p','s'];        //creting a array
  const random_computer = Math.floor(Math.random()*3);        // getting the random value and use floor for Integer values..
  return computer_choices[random_computer];     // values comes like r p s for making the decessions
}
function change(value){
  if (value == "r") return "Rock";
  else if (value == "p") return "Paper";
  else return "Scissor";
}
function win(user,computer){
  UserScore++;
  User_Score_spam.innerHTML = UserScore;
  Show_result_p.innerHTML =  `${change(user)}${u} Wins from the ${change(computer)}${c}.You win` ;
  console.log("You win");
  document.getElementById(user).classList.add('green');
  setTimeout(function(){document.getElementById(user).classList.remove('green');},600)

}
function loose(user,computer){
  CompScore++;
  Comp_Score_span.innerHTML = CompScore;
  Show_result_p.innerHTML =  `${change(user)}${u} looses from the ${change(computer)}${c}.You Lost` ;
  console.log("You lost");
  document.getElementById(user).classList.add('red');
  setTimeout(function(){document.getElementById(user).classList.remove('red');},600)

}
function draw(user,computer){
  Show_result_p.innerHTML = "Draw";
  console.log("Draw");
  document.getElementById(user).classList.add('grey');
  setTimeout(function(){document.getElementById(user).classList.remove('grey');},600)

}

function game(User_input){
    let computer_value = computer_Selection();

    console.log(User_input+computer_value);
    switch (User_input + computer_value) {
      case "rs":
      case "pr":
      case "sp":

      win(User_input,computer_value);
        break;

      case "rp":
      case "ps":
      case "sr":

      loose(User_input,computer_value);
        break;

      case "rr":
      case "pp":
      case "ss":

      draw(User_input,computer_value);
        break;
    }
}

function main(){
    User_Choice_rock.addEventListener('click',function(){
      game("r");
    })
    User_Choice_paper.addEventListener('click',function(){
      game("p");
    })
    User_Choice_scissor.addEventListener('click',function(){
      game("s");
    })
}
main();
