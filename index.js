const submitButton = document.querySelector('submit')
const restartButton = document.querySelector('reset')
const startButton = document.querySelector('start')

const inputElement = document.querySelector('input')
const resultElement = document.querySelector('result-text')
const ulList = document.querySelector('ulList')

//Stwórz tablicę ze słowami
//utwórz mechanizm losujący słowo z tablicy
//porównaj słowo z inputa do wylosowanego słowa po kliknięciu  buttona
//stwórz mechanizm pozwalający na wyświetlenie liter które zostały 
//prawidłowo wskazane

const array = ['flower', 'cat', 'dog', 'ipad', 'macbook']

const randomWord = () => {
    const word = Math.floor(Math.random() * array.length)
    console.log(word)
}

startButton.addEventListener('click', randomWord)


