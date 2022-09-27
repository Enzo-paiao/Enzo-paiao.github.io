document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {


    let square = event.target;
    let postion = square.id;

    if (handleMove(postion)) {
        updateScore()
        setTimeout(() => {
            if (playerTime == 0){
            alert(" O Jogo Acabou - O Vencedor foi " + Escudo);
            }else {
                alert(" O Jogo Acabou - O Vencedor foi " + Espadas);
            }
        }, 10);
        

    }else if (chequeDraw()) {
        setTimeout(() => {
            alert("Empate! ")
        }, 10)
    };

    updateSquare(postion);
}

function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })

}

function restart() {
    let square = document.querySelectorAll(".square");

    square.forEach((square) => {
        let postion = square.id;
        let symbol = "";

        square.innerHTML = `<div class='${symbol}'></div>`
    });
}

function updateScore(){
    player1.innerHTML = `<span class="icon1">&#128737;</span>
    <span id="scoreP1">${scores[0].toString()}</span>`;
    player2.innerHTML = `<span class="icon2">&#9876;</span>
    <span id="scoreP2">${scores[1].toString()}</span>`;

    }