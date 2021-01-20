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

let ROCK_IMG_SRC;
let PAPER_IMG_SRC;
let SCISSORS_IMG_SRC;

let player_div;
let result_div;
let computer_div;

let rock_img;
let paper_img;
let scissors_img;

let player_img;
let result_h1;
let computer_img;

const COMPUTER_CHOICES = ['rock', 'paper', 'scissors'];
const messages = {
    'win': {
        'text': 'You won!',
        'color': 'blue'
    },
    'tie': {
        'text': 'Tie!',
        'color': 'black'
    },
    'lose': {
        'text': 'You lost!',
        'color': 'red'
    }
};

// Need to be used at end of html file
const onStartChallange3SetUp = () =>{
    //const variables
    player_div = document.getElementById("challange3_player");
    result_div = document.getElementById("challange3_result");
    computer_div = document.getElementById("challange3_computer");

    ROCK_IMG_SRC = document.getElementById("rock").src;
    PAPER_IMG_SRC = document.getElementById("paper").src;
    SCISSORS_IMG_SRC = document.getElementById("scissors").src;

    //const choose images
    rock_img = document.createElement('img');
    rock_img.setAttribute('id', 'rock');
    rock_img.setAttribute('onclick', 'playRPS(this)');
    rock_img.src = ROCK_IMG_SRC;

    paper_img = document.createElement('img');
    paper_img.setAttribute('id', 'paper');
    paper_img.setAttribute('onclick', 'playRPS(this)');
    paper_img.src = PAPER_IMG_SRC;

    scissors_img = document.createElement('img');
    scissors_img.setAttribute('id', 'scissors');
    scissors_img.setAttribute('onclick', 'playRPS(this)');
    scissors_img.src = SCISSORS_IMG_SRC;

    //const result images
    player_img = document.createElement('img');
    player_img.style = "-webkit-box-shadow: 0px 0px 10px 6px rgba(0,85,255,1)";

    result_h1 = document.createElement('h1');
    result_h1.setAttribute('id', 'result_h1');
    result_h1.style.cursor = 'pointer';
    result_h1.setAttribute('onclick', 'restartChallange3()');

    computer_img = document.createElement('img');
    computer_img.style = "-webkit-box-shadow: 0px 0px 10px 6px rgba(255,0,0,1)";
}

const restartChallange3 = () => {
    removeImages();
    setUpStartingImages();
}

const setUpStartingImages = () => {
    player_div.appendChild(rock_img);
    result_div.appendChild(paper_img);
    computer_div.appendChild(scissors_img);
}

const playRPS = (playerChoice) => {
    let computerChoice = document.getElementById(COMPUTER_CHOICES[Math.floor(Math.random() * ((2 - 0 + 1) + 0))]);
    let result = computeWinner(playerChoice.id, computerChoice.id);
    let finalMessage = computeMessage(result);
    
    removeImages();
    setUpResult(playerChoice, computerChoice, finalMessage);
}

const setUpResult = (playerChoice, computerChoice, finalMessage) => {
    player_img.setAttribute('id', playerChoice.id);
    player_img.setAttribute('src', playerChoice.src);
    computer_img.setAttribute('id', computerChoice.id);
    computer_img.setAttribute('src', computerChoice.src);

    result_h1.innerHTML = "";
    let textResponse = document.createTextNode(finalMessage.text);
    result_h1.style.color = finalMessage.color;
    result_h1.appendChild(textResponse);

    player_div.appendChild(player_img);
    result_div.appendChild(result_h1);
    computer_div.appendChild(computer_img);
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
    if(JSON.stringify(result)==JSON.stringify([1, 0]))
        return  messages['win'];
    else if(JSON.stringify(result)==JSON.stringify([1, 1]))
        return  messages['tie'];
    else if(JSON.stringify(result)==JSON.stringify([0, 1]))
        return  messages['lose'];
}


const removeImages = () => {
    player_div.innerHTML = "";
    result_div.innerHTML = "";
    computer_div.innerHTML = "";
}

//Challange 4

let allButtons = [];
let buttonsBSClasses = [];
const BUTTON_COLOR_CLASSES = {
    'blue' : 'btn-primary',
    'red' : 'btn-danger',
    'yellow' : 'btn-warning',
    'green' : 'btn-success',
    '0' : 'btn-primary',
    '1' : 'btn-danger',
    '2' : 'btn-warning',
    '3' : 'btn-success'
}

// Need to be used at end of html file
const onStartChallange4SetUp = () =>{
    allButtons = document.getElementsByTagName('button');

    for(let i = 0; i < allButtons.length; i++){
        buttonsBSClasses.push(getButtonBSClass(allButtons[i].className));
    }
}

const buttonColorChange = (button) => {
    removeButtonsBSClasses();
    
    if(button.value == 'reset'){
        resetAllButtonsBSClasses();
    }
    else if(button.value == 'random'){
        setRandomBSClassesForAllButtons();
    }
    else{
        setAllButtonsBSClass(BUTTON_COLOR_CLASSES[button.value]);
    }
}

const getButtonBSClass = (className) => {
    let type = className.substring(className.indexOf('-')-3, className.length);
    return type;
}

const removeButtonsBSClasses = () => {
    for(let i = 0; i < allButtons.length; i++){
        removeClassByPrefix(allButtons[i], 'btn-')
    }
}

const removeClassByPrefix = (el, prefix) => {
    let regx = new RegExp('\\b' + prefix + '.*?\\b', 'g');
    el.className = el.className.replace(regx, '');
}

const setAllButtonsBSClass = (buttonBSClass) => {
    for(let i = 0; i < allButtons.length ; i++){
        allButtons[i].classList.add(buttonBSClass);
    }
}

const setRandomBSClassesForAllButtons = () => {
    for(let i = 0; i < allButtons.length ; i++){
        allButtons[i].classList.add(BUTTON_COLOR_CLASSES[Math.floor(Math.random() * 4)]);
    }
}

const resetAllButtonsBSClasses = () => {
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.add(buttonsBSClasses[i]);
    }
}

