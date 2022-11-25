



const gameBoard = (()=>{

    let board = [[1,2,3], [4,5,6], [7,8,9]];
    const getBoard = ()=> {return board;}
    const setBoard = (x,y,player) => {
        board[x][y] = player;
    }
    const resetBoard = () =>{     
        console.log("resetBoard function Started")  
         board = [[1,2,3], [4,5,6], [7,8,9]];
    }
    return {getBoard, setBoard, resetBoard};
    
})();

const displayController = (()=>{
    const buttons = document.querySelectorAll('button');
    const cells = document.querySelectorAll('.cells');
    let playerTurn = 1;
    let player1Count = 0;
    let player2Count = 0;
    let gameWin=false;
    let newGame = true;


const beginGame = () =>{
        cells.forEach(cell=>{
           
                cell.addEventListener('click', () =>{ if(gameWin != true){
                    console.log(gameWin);
                    console.log("Clicked");
                    const x = cell.getAttribute('x');
                    const y = cell.getAttribute('y');
                   
                    if(playerTurn==1 && cell.innerHTML==''){
                    cell.innerHTML=('X');
                        if(cell.getAttribute('x')==0){
                            gameBoard.setBoard(x,y,"X");
                        }
                        else if(x==1){
                            gameBoard.setBoard(x,y,"X");
                        }
                        else{
                            gameBoard.setBoard(x,y,"X");
                        }
                        player1Count += 1;
                        playerTurn=2;
                    }
                    else if(playerTurn==2 && cell.innerHTML==''){
                        cell.innerHTML='O';
                        if(cell.getAttribute('x')==0){
                            gameBoard.setBoard(x,y,"O");
                        }
                        else if(x==1){
                            gameBoard.setBoard(x,y,"O");
                        }
                        else{
                            gameBoard.setBoard(x,y,"O");
                        }
                        player2Count += 1;
                        playerTurn=1;
                    }
                    let winnerSign = checkWinner(gameBoard.getBoard());
                    if(winnerSign == 'X' || winnerSign == 'O'){
                       console.log(`Hurra! Player ${winnerSign} wins`);
                    
                          gameWin=true;
                          displayController.gameStatus();
                    }
                    console.log(gameBoard.getBoard());}
                    /* if(player1Count>=3 || player2Count>=3){
                        console.log("checking winner");
                    console.log(checkWinner());}
            */
            });})}
/* END Cell Section */
//check winner function
const checkWinner = (board) =>{



    /* const board = gameBoard.getBoard; */
    //check rows
    for(let i=0; i<3; i++){
        if(board[i][0]==board[i][1] && board[i][1]==board[i][2]){
      
           
            cells[i].style.backgroundColor = 'red';
            cells[i+1].style.backgroundColor = 'red';
            cells[i+2].style.backgroundColor = 'red';
            return board[i][0];
            
          
        }
        else if(board[0][i]==board[1][i] && board[1][i]==board[2][i]){
        
            cells[i].style.backgroundColor = 'red';
            cells[i+3].style.backgroundColor = 'red';
            cells[i+6].style.backgroundColor = 'red';
            return board[0][i];


        }
       
    }
    if(board[0][0]==board[1][1] && board[1][1]==board[2][2]){
        
        cells[0].style.backgroundColor = 'red';
        cells[4].style.backgroundColor = 'red';
        cells[8].style.backgroundColor = 'red';
        return board[0][0];

      
    }
    else if(board[0][2]==board[1][1] && board[1][1]==board[2][0]){
        
        cells[2].style.backgroundColor = 'red';
        cells[4].style.backgroundColor = 'red';
        cells[6].style.backgroundColor = 'red';
        return board[0][2];


    }
    else{
        return null;
    }




}
/* END Check Winner Section */

//player select button function

buttons.forEach(button => {
button.addEventListener('click', ()=>{
        beginGame();
        if(button.innerText == "Player X"){
            
            button.classList.add('selected');
            button.classList.remove('notselected');
            const button2 = document.getElementById('buttono');
            button2.classList.remove('selected');
            button2.classList.add('notselected');
            //reset the game
            displayController.resetGame();
       
            console.log("Game Reset");
            playerTurn = 1;
            gameWin=false;
      

        }
        else if(button.innerText == "Player O"){
            button.classList.add('selected');
            button.classList.remove('notselected');
            const button2 = document.getElementById('buttonx');
            button2.classList.remove('selected');
            button2.classList.add('notselected');
             //reset the game
             displayController.resetGame();
       
             console.log("Game Reset");
            playerTurn = 2;
            gameWin=false;
        }
})
}) 
//end of player select button function


function resetGame(){
 console.log("resetGame function Started")
    gameBoard.resetBoard();
    cells.forEach(cell=>{
        cell.innerHTML='';
        cell.style.backgroundColor = '#fff';
    })
    console.log("resetGame function Ended")
}
return {checkWinner, beginGame, resetGame};
})();

