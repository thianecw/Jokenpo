const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
    playGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playGame = (human, machine) => {
    console.log('human: ' + human + 'machine:  ' + machine)

    //EMPATE//
    if (human === machine) {
        result.innerHTML = "EMPATOU!"

        //VITÓRIA//
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML= humanScoreNumber
        result.innerHTML = "VOCÊ GANHOU"

        //DERROTA//
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "VOCÊ PERDEU"
    }
}
