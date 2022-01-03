// Things I want to grab in the HTML
let cells = document.querySelectorAll('.cells');
// console.log(cells);
let $rows = $('.row');
let $table = $('.table');
// console.log($table);

// Creating my variables
let player = "X";
let winning = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
]
// console.log(winning);

// Functions
function checkForWinner() {
    for(let i = 0; i < winning.length; i++) {
        if(winning[i][0].innerHTML == "X" && winning[i][1].innerHTML == "X" && winning[i][2].innerHTML == "X") console.log("X is the winner");
        if(winning[i][0].innerHTML == "O" && winning[i][1].innerHTML == "O" && winning[i][2].innerHTML == "O") console.log("O is the winner");
    }
}


// Adding event listener for every move
cells.forEach(cell => {
    cell.addEventListener('click', function() {
        // console.log("This is working");
        if(cell.innerHTML == '') {
            cell.innerHTML = player;
            if(player == "X") player = "O";
            else if(player == "O") player = "X";
            checkForWinner();
        }
    })
})
