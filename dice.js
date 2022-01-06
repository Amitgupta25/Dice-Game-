let player1 = 0
let player2 = 0
let player1turn = true

const player1dice = document.getElementById("player1dice")
const player2dice = document.getElementById("player2dice")
const player1score = document.getElementById("player1score")
const player2score = document.getElementById("player2score")
const resetbtn = document.getElementById("resetbtn")
const rollbtn = document.getElementById("rollbtn")
const message = document.getElementById("message")

rollbtn.addEventListener("click",function(){
    const randomnum = Math.floor(Math.random()  *6 )+1
    
    if(player1turn){
        player1dice.textContent =randomnum
        message.textContent = "Player 2 Turn"
        player1 =  player1 + randomnum
        player1score.textContent = player1

    }
    else{
        player2dice.textContent =randomnum
        message.textContent = "Player 1 Turn"
        player2 =  player2 + randomnum
        player2score.textContent = player2
        
    }
    if(player1>=30){
        message.textContent = "Player1 Win 🤩"
    }

    else if(player2>=30){
        message.textContent = "Player2 Win 🤩"
    }

    player1turn =!player1turn

   
})
resetbtn.addEventListener("click",function(){
    player1.textContent = 0
    player2.textContent = 0
    player1score.textContent = 0
    player2score.textContent = 0
    player1dice.textContent = '-'
    player2dice.textContent = '-'
    message.textContent = "Player 1 Turn"
    
})