//Challange1
const ageInDays = function() {
    let birthYear = prompt('What is your birth year?');

    if(document.getElementById('ageInDays')){
        deleteResult();
    }

    let lifeDurationInDays = (new Date().getFullYear() - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textResponse = document.createTextNode('You are ' + lifeDurationInDays + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textResponse);
    document.getElementById('challange1_result').appendChild(h1);

    //or

    //let documentResultPlaceholder = document.getElementById('challange1_result');
    //documentResultPlaceholder.innerHTML = lifeDurationInDays;
}

const deleteResult = function() {
    document.getElementById('ageInDays').remove();
}

//Challange2
const generateCat = function() {
    const CAT_IMG_SRC = 'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?cs=srgb&dl=pexels-francesco-ungaro-96938.jpg&fm=jpg';

    let img = document.createElement('img');
    img.setAttribute('src', CAT_IMG_SRC);

    let div = document.createElement('div');
    div.setAttribute('class', 'img_package')
    div.appendChild(img);
    document.getElementById('challange2_result').appendChild(div);
}

//Challange3
const restartChallange3 = () => {
    const ROCK_IMG_SRC = "https://images.pexels.com/photos/861034/pexels-photo-861034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    const PAPER_IMG_SRC = "https://images.pexels.com/photos/479444/pexels-photo-479444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    const SCISSORS_IMG_SRC = "https://images.pexels.com/photos/4226910/pexels-photo-4226910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    
    document.getElementById("rock").src = ROCK_IMG_SRC;
    document.getElementById("paper").src = PAPER_IMG_SRC;
    document.getElementById("scissors").src = SCISSORS_IMG_SRC;
}

const playRPS = (playerSelect) => {
    const COMPUTER_CHOICES = ['rock', 'paper', 'scissors'];
    const winner_div = document.getElementById("challange3_winner");
    const result_div = document.getElementById("challange3_result");
    const loser_div = document.getElementById("challange3_loser");
    let computerChoice = COMPUTER_CHOICES[Math.floor(Math.random() * ((2 - 0 + 1) + 0))];
    let playerChoice = playerSelect.id;
    let result = computeWinner(playerChoice, computerChoice);
    let finalMessage = computeMessage(result);
    console.log(result);
    console.log(finalMessage);
}

const computeWinner = (playerChoice, computerChoice) => {
    if(playerChoice == computerChoice) {
        return [1, 1];
    }
    else{
        if((playerChoice == "rock") && (computerChoice == "paper")){
            return [0, 1];
        }
        else if((playerChoice == "rock") && (computerChoice == "scissors"))
        {
            return [1, 0];
        }
        else if((playerChoice == "paper") && (computerChoice == "rock"))
        {
            return [1, 0];
        }
        else if((playerChoice == "paper") && (computerChoice == "scissors"))
        {
            return [0, 1];
        }
        else if((playerChoice == "scissors") && (computerChoice == "paper"))
        {
            return [1, 0];
        }
        else if((playerChoice == "scissors") && (computerChoice == "rock"))
        {
            return [0, 1];
        }
    }
}

const computeMessage = (result) => {
    const messages = {
        'win': {
            'text': 'You won!',
            'colour': 'green'
        },
        'tie': {
            'text': 'Tie!',
            'colour': 'yellow'
        },
        'lose': {
            'text': 'You lost',
            'colour': 'red'
        }
    };

    if(JSON.stringify(result)==JSON.stringify([1, 0]))
        return  messages['win'];
    else if(JSON.stringify(result)==JSON.stringify([1, 1]))
        return  messages['tie'];
    else if(JSON.stringify(result)==JSON.stringify([0, 1]))
        return  messages['lose'];
}