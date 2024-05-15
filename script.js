// Troca de Telas
const screenLoading = document.querySelector('.container-loading').classList
const screenHome = document.querySelector('.container-home').classList
const screenGames = document.querySelector('section').classList

// Escolha do Jogo
const gameNormal = document.querySelector('#btn-jokenpo')
const gameBigBang = document.querySelector('#btn-jokenpo-bigbang')

//  Resultado
playP = null
playO = null
let playerScore = 0
let opponentScore = 0
let turns = 1

// Áudios
const winOne = new Audio('./assets/audio/win-normal.mp3')
const loseOne = new Audio('./assets/audio/lose-normal.mp3')
winOne.volume = 0.75
loseOne.volume = 0.25

const loadPage = setInterval(() => {
    clearInterval(loadPage)

    screenLoading.add('hidden')
    screenHome.remove('hidden')
}, 3500)

function normalGame() {
    const getUsername = document.querySelector('#username-home').value
    const changeUsername = document.querySelector('#n-username')
    const screenNormalGame = document.querySelector('.normal-game').classList

    if (getUsername == '') {
        alert('Escolha seu nome antes de iniciar!')
    }

    else {
        screenHome.add('hidden')
        screenNormalGame.remove('hidden')
        screenGames.remove('hidden')
        changeUsername.innerHTML = getUsername
    }
}

function playerNormal(player) {
    const imgPlayer = document.querySelector('#img-n-you')
    playP = player

    if (player === 'rock') {
        imgPlayer.src = './assets/img/rock.png'
    }

    if (player === 'paper') {
        imgPlayer.src = './assets/img/paper.png'
    }

    if (player === 'scissors') {
        imgPlayer.src = './assets/img/scissors.png'
    }

    machineNormal()
    resultNormal()
}

function machineNormal() {
    const imgOpponent = document.querySelector('#img-n-opponent')
    const options = ['rock', 'paper', 'scissors']
    const choice = Math.floor(Math.random() * 3)
    playO = options[choice]

    options.forEach((name, position) => {
        if (position === choice && name === 'rock') {
            imgOpponent.src = './assets/img/rock.png'
        }
        else if (position === choice && name === 'paper') {
            imgOpponent.src = './assets/img/paper.png'
        }
        else if (position === choice && name === 'scissors') {
            imgOpponent.src = './assets/img/scissors.png'
        }
    })
}

function resultNormal() {
    const imgResult = document.querySelector('#img-n-result')
    const playerPoint = document.querySelector('#player-point')
    const opponentPoint = document.querySelector('#opponent-point')
    const turnNow = document.querySelector('#turn-now')

    if (playP === playO) {
        imgResult.src = './assets/img/draw.png'
    }
    else if (playP === 'rock' && playO === 'scissors' || playP === 'paper' && playO === 'rock' || playP === 'scissors' && playO === 'paper') {
        imgResult.src = './assets/img/win.png'
        playerScore++
        playerPoint.textContent = playerScore
        winOne.play()
    } else {
        imgResult.src = './assets/img/lose.png'
        opponentScore++
        opponentPoint.textContent = opponentScore
        loseOne.play()
    }

    turns++
    turnNow.textContent = turns
}

function bigbangGame() {
    const getUsername = document.querySelector('#username-home').value
    const changeUsername = document.querySelector('#bbt-username')
    const screenBigBangGame = document.querySelector('.bigbang-game').classList

    if (getUsername == '') {
        alert('Escolha seu nome antes de iniciar!')
    }

    else {
        screenHome.add('hidden')
        screenBigBangGame.remove('hidden')
        screenGames.remove('hidden')
        changeUsername.innerHTML = getUsername
    }
}

function playerBigBang(player) {
    const imgPlayer = document.querySelector('#img-bbt-you')
    playP = player

    if (player === 'rock-bbt') {
        imgPlayer.src = './assets/img/rock-bbt.png'
        imgPlayer.style.backgroundColor = '#aeaeae'
    }

    if (player === 'paper-bbt') {
        imgPlayer.src = './assets/img/paper-bbt.png'
        imgPlayer.style.backgroundColor = '#FF0'
    }

    if (player === 'scissors-bbt') {
        imgPlayer.src = './assets/img/scissors-bbt.png'
        imgPlayer.style.backgroundColor = '#F00'
    }

    if (player === 'lizard-bbt') {
        imgPlayer.src = './assets/img/lizard-bbt.png'
        imgPlayer.style.backgroundColor = '#0F0'
    }

    if (player === 'spock-bbt') {
        imgPlayer.src = './assets/img/spock-bbt.png'
        imgPlayer.style.backgroundColor = '#DEB79D'
    }

    machineBigBang()
    resultBigBang()
}

function machineBigBang() {
    const imgOpponent = document.querySelector('#img-bbt-opponent')
    const options = ['rock-bbt', 'paper-bbt', 'scissors-bbt', 'lizard-bbt', 'spock-bbt']
    const choice = Math.floor(Math.random() * 5)
    playO = options[choice]

    options.forEach((name, position) => {
        if (position === choice && name === 'rock-bbt') {
            imgOpponent.src = './assets/img/rock-bbt.png'
            imgOpponent.style.backgroundColor = '#aeaeae'
        }
        else if (position === choice && name === 'paper-bbt') {
            imgOpponent.src = './assets/img/paper-bbt.png'
            imgOpponent.style.backgroundColor = '#FF0'
        }
        else if (position === choice && name === 'scissors-bbt') {
            imgOpponent.src = './assets/img/scissors-bbt.png'
            imgOpponent.style.backgroundColor = '#F00'
        }
        else if (position === choice && name === 'lizard-bbt') {
            imgOpponent.src = './assets/img/lizard-bbt.png'
            imgOpponent.style.backgroundColor = '#0F0'
        }
        else if (position === choice && name === 'spock-bbt') {
            imgOpponent.src = './assets/img/spock-bbt.png'
            imgOpponent.style.backgroundColor = '#DEB79D'
        }
    })
}

function resultBigBang() {
    const imgResult = document.querySelector('#img-bbt-result')
    const playerPoint = document.querySelector('#player-bbt-point')
    const opponentPoint = document.querySelector('#opponent-bbt-point')
    const turnNow = document.querySelector('#turn-bbt-now')

    if (playP === playO) {
        imgResult.src = './assets/img/draw.png'
    } else if (
        (playP === 'rock-bbt' && (playO === 'scissors-bbt' || playO === 'lizard-bbt')) ||
        (playP === 'paper-bbt' && (playO === 'rock-bbt' || playO === 'spock-bbt')) ||
        (playP === 'scissors-bbt' && (playO === 'paper-bbt' || playO === 'lizard-bbt')) ||
        (playP === 'lizard-bbt' && (playO === 'paper-bbt' || playO === 'spock-bbt')) ||
        (playP === 'spock-bbt' && (playO === 'rock-bbt' || playO === 'scissors-bbt'))
    ) {
        imgResult.src = './assets/img/win.png'
        playerScore++
        playerPoint.textContent = playerScore
        winOne.play()
    } else {
        imgResult.src = './assets/img/lose.png'
        opponentScore++
        opponentPoint.textContent = opponentScore
        loseOne.play()
    }

    turns++
    turnNow.textContent = turns
}

function back() {
    const screenNormalGame = document.querySelector('.normal-game').classList
    const screenBigBangGame = document.querySelector('.bigbang-game').classList

        screenHome.remove('hidden')
        screenNormalGame.add('hidden')
        screenBigBangGame.add('hidden')
        screenGames.add('hidden')

        resetScoreboard()
}

function resetScoreboard() {
    playerScore = 0
    opponentScore = 0
    turns = 1

    // Normal
    const imgResultNormal = document.querySelector('#img-n-result')
    const playerPointNormal = document.querySelector('#player-point')
    const opponentPointNormal = document.querySelector('#opponent-point')
    const turnNormal = document.querySelector('#turn-now')

    imgResultNormal.src = './assets/img/wait.png'
    playerPointNormal.textContent = playerScore
    opponentPointNormal.textContent = opponentScore
    turnNormal.textContent = turns

    // BigBang
    const imgResultBigBang = document.querySelector('#img-bbt-result')
    const playerPointBigBang = document.querySelector('#player-bbt-point')
    const opponentPointBigBang = document.querySelector('#opponent-bbt-point')
    const turnBigBang = document.querySelector('#turn-bbt-now')

    imgResultBigBang.src = './assets/img/wait.png'
    playerPointBigBang.textContent = playerScore
    opponentPointBigBang.textContent = opponentScore
    turnBigBang.textContent = turns
}

gameBigBang.addEventListener('click', bigbangGame)
gameNormal.addEventListener('click', normalGame)