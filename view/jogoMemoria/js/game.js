const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    'pena',
    'maca',
    'flor',
    'cogumelo',
    'arara',
    'laranja',
    'nuvem',
    'banana',
];
const letras = [
    'pena',
    'maca',
    'flor',
    'cogumelo',
    'arara',
    'laranja',
    'nuvem',
    'banana',
];

const createElement = (tag, className) => {
 const element = document.createElement(tag);
 element.className = className;
 return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const enabledCards = document.querySelectorAll('.enabled-card');

    if (enabledCards.length == 16){
        clearInterval(this.loop);
        setTimeout(() => { alert(`Parabéns ${spanPlayer.innerHTML}, você completou o jogo da memória! Seu tempo foi de: ${timer.innerHTML} segundos.`); }, 500);
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');
    
    if (firstCharacter == secondCharacter){

        firstCard.firstChild.classList.remove('disabled-card');
        secondCard.firstChild.classList.remove('disabled-card');
        
        firstCard.firstChild.classList.add('enabled-card');
        secondCard.firstChild.classList.add('enabled-card');
        
        firstCard = '';
        secondCard = '';
        
        checkEndGame();
        
    } else {
        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            
            firstCard = '';
            secondCard = '';
            
        }, 500);
        
        
    }
}  

const revealCard = ({ target }) => {
    
    if (target.parentNode.className.includes('reveal-card')){
        return;
    }
    
    if (firstCard == ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
        firstCard.firstChild.classList.add('disabled-card');
        
    } else if (secondCard == ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
        secondCard.firstChild.classList.add('disabled-card');
        
        checkCards();
        
    }
    
    
}

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../imagens/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click' , revealCard);
    card.setAttribute('data-character', character)
    
    return card;
}

const createCards = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../imagens/sinais/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click' , revealCard);
    card.setAttribute('data-character', character)
    
    return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters];

    const Characters = duplicateCharacters.sort(() => Math.random() - 0.5);

    Characters.forEach((character) => {
        
        const card = createCard(character);
        grid.appendChild(card);

    });

    const duplicateLetters = [ ...letras];

    const Letras = duplicateLetters.sort(() => Math.random() - 0.5);

    Letras.forEach((character) => {
        
        const card = createCards(character);
        grid.appendChild(card);

    });
}

const startTimer = () => {

    this.loop = setInterval(() => {

        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;

    }, 1000);

}

window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();

}


