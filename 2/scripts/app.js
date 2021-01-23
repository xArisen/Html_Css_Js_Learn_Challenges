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

//Challange5
const randomCardPossiblities = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const CARDS = {
    '2': {
        'value': '2',
        'img' : './blackjack_assets/images/2.png'
    },
    '3': {
        'value': '3',
        'img' : './blackjack_assets/images/3.png'
    },
    '4': {
        'value': '4',
        'img' : './blackjack_assets/images/4.png'
    },
    '5': {
        'value': '5',
        'img' : './blackjack_assets/images/5.png'
    },
    '6': {
        'value': '6',
        'img' : './blackjack_assets/images/6.png'
    },
    '7': {
        'value': '7',
        'img' : './blackjack_assets/images/7.png'
    },
    '8': {
        'value': '8',
        'img' : './blackjack_assets/images/8.png'
    },
    '9': {
        'value': '9',
        'img' : './blackjack_assets/images/9.png'
    },
    '10': {
        'value': '10',
        'img' : './blackjack_assets/images/10.png'
    },
    'J':{
        'value': '10',
        'img' : './blackjack_assets/images/J.png'
    },
    'Q':{
        'value': '10',
        'img' : './blackjack_assets/images/Q.png'
    },
    'K':{
        'value': '10',
        'img' : './blackjack_assets/images/K.png'
    },
    'A':{
        'value': '1',
        'extraValue': '11',
        'img' : './blackjack_assets/images/A.png'
    }
}
let playerTurn = true;
let playerScoreAnchor = "";
let computerScoreAnchor = "";
let winCounterAnchor = "";
let loseCounterAnchor = "";
let drawCounterAnchor = "";

let gameStateAnchor = "";
let gameStartTitle = document.createElement('h4');
let gameWinTitle = document.createElement('h4');
let gameLoseTitle = document.createElement('h4');
let gameDrawTitle = document.createElement('h4');

let hitButton = "";
let standButton = "";
let dealButton = "";

const cardSpawnSound = './blackjack_assets/sounds/swish.m4a';
const winSound = './blackjack_assets/sounds/cash.mp3';
const loseSound = './blackjack_assets/sounds/aww.mp3';

const onStartChallange5SetUp = () =>{
    playerScoreAnchor = document.getElementById('player_score_value');
    computerScoreAnchor = document.getElementById('computer_score_value');
    winCounterAnchor = document.getElementById('win_counter');
    loseCounterAnchor = document.getElementById('lose_counter');
    drawCounterAnchor = document.getElementById('draw_counter');
    gameStateAnchor = document.getElementById('game_state');

    let textStartTitle = document.createTextNode("Let's play");
    gameStartTitle.appendChild(textStartTitle);

    let textWinTitle = document.createTextNode("You won!");
    gameWinTitle.style.color = 'green';
    gameWinTitle.appendChild(textWinTitle);

    let textLoseTitle = document.createTextNode("You lost!");
    gameLoseTitle.style.color = 'red';
    gameLoseTitle.appendChild(textLoseTitle);

    let textDrawTitle = document.createTextNode("Draw!");
    gameDrawTitle.appendChild(textDrawTitle);

    hitButton = document.getElementById('hitButton');
    standButton = document.getElementById('standButton');
    dealButton = document.getElementById('dealButton');

    restartGame();
}

const playBlackjack = () => {
    let randomCard = CARDS[randomCardPossiblities[Math.floor(Math.random()*randomCardPossiblities.length)]];
    if(playerTurn){
        standButton.disabled = false;
        spawnCardForPlayer(randomCard);
        addCardToCounter(randomCard, playerScoreAnchor);
        checkPlayerScore();
    }
    else{
        hitButton.disabled = true;
        standButton.disabled = true;
        spawnCardForComputer(randomCard);
        addCardToCounter(randomCard, computerScoreAnchor);
        checkComputerScore();
    }
}
const createCard = (randomCard) => {
    let img = document.createElement('img');
    img.setAttribute('src', randomCard.img);
    
    let div = document.createElement('div');
    div.setAttribute('class', 'card')
    div.appendChild(img);

    return div;
}

const spawnCardForPlayer = (randomCard) =>{
    document.getElementById('player_cards').appendChild(createCard(randomCard));
    new Audio(cardSpawnSound).play();
}

const spawnCardForComputer = (randomCard) =>{
    document.getElementById('computer_cards').appendChild(createCard(randomCard));
    new Audio(cardSpawnSound).play();
}

//TODO As adds 1 or 11 value
const addCardToCounter = (randomCard, scoreAnchor) =>{
    if(Number(randomCard.value) == 1){
        if(Number(scoreAnchor.innerHTML) + Number(randomCard.extraValue) <= 21){
            scoreAnchor.innerHTML = Number(scoreAnchor.innerHTML) + Number(randomCard.extraValue);
        }
        else{
            scoreAnchor.innerHTML = Number(scoreAnchor.innerHTML) + Number(randomCard.value);
        }
    }
    else{
        scoreAnchor.innerHTML = Number(scoreAnchor.innerHTML) + Number(randomCard.value);
    }
}

const setComputerTurn = () => {
    playerTurn = false;
    playBlackjack();
}

const restartGame = () => {
    playerTurn = true;
    restartPlayerTable();
    restartComputerTable();

    gameStateAnchor.innerHTML = "";
    gameStateAnchor.appendChild(gameStartTitle);

    hitButton.disabled = false;
    standButton.disabled = true;
    dealButton.disabled = true;
}

const restartPlayerTable = () =>{
    playerScoreAnchor.innerHTML = 0;
    playerScoreAnchor.style.color = 'white';
    document.getElementById('player_cards').innerHTML = "";
}
const restartComputerTable = () => {
    computerScoreAnchor.innerHTML = 0;
    computerScoreAnchor.style.color = 'white';
    document.getElementById('computer_cards').innerHTML = "";
}

const checkPlayerScore = () => {
    if(Number(playerScoreAnchor.innerHTML) > 21)
    {
        playerScoreAnchor.innerHTML = "BUST";
        playerScoreAnchor.style.color = 'red';
        setComputerTurn();
    }
    else if(Number(playerScoreAnchor.innerHTML) == 21)
    {
        setComputerTurn();
    }
}

const checkComputerScore = () => {
    if(Number(computerScoreAnchor.innerHTML) > 21)
    {
        computerScoreAnchor.innerHTML = "BUST";
        computerScoreAnchor.style.color = 'red';
        chooseWinner();
    }
    else if(Number(computerScoreAnchor.innerHTML) == 21)
    {
        chooseWinner();
    }
    else if(Number(computerScoreAnchor.innerHTML) < 18){
        setTimeout(() => {  playBlackjack(); }, 1000);
    }
    else{
        chooseWinner();
    }
}

const chooseWinner = () => {
    if(playerScoreAnchor.innerHTML == computerScoreAnchor.innerHTML){
        draw();
    }
    else if(computerScoreAnchor.innerHTML == "BUST" || (Number(playerScoreAnchor.innerHTML) > Number(computerScoreAnchor.innerHTML))){
        playerWin();
    }
    else{
        computerWin();
    }
    dealButton.disabled = false;
}

const draw = () => {
    gameStateAnchor.innerHTML = "";
    gameStateAnchor.appendChild(gameDrawTitle);
    drawCounterAnchor.innerHTML = Number(drawCounterAnchor.innerHTML) + 1;
}

const playerWin = () => {
    gameStateAnchor.innerHTML = "";
    gameStateAnchor.appendChild(gameWinTitle);
    winCounterAnchor.innerHTML = Number(winCounterAnchor.innerHTML) + 1;
    new Audio(winSound).play();
}

const computerWin = () => {
    gameStateAnchor.innerHTML = "";
    gameStateAnchor.appendChild(gameLoseTitle);
    loseCounterAnchor.innerHTML = Number(loseCounterAnchor.innerHTML) + 1;
    new Audio(loseSound).play();
}