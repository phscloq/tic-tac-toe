



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
    const gameEndDiv = document.getElementById('gameEnd');
    const gameEndText = document.getElementById('gameEndText');
    const endText = document.createElement('p');
    
    const button1 = document.getElementById('buttonx');
    const button2 = document.getElementById('buttono');
    

    let playerTurn = 1;
    let player1Count = 0;
    let player2Count = 0;
    let gameWin=false;
    let gameEnd = false;
    let vsComp = false;

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
                        if(vsComp==true){
                        winnerSign = checkWinner(gameBoard.getBoard());
                    if(winnerSign == 'X' || winnerSign == 'O'){
                       console.log(`Hurra! Player ${winnerSign} wins`);
                    
                          gameWin=true;
                          gameEnd=true;
                          displayController.gameStatus();
                    }
                        if(gameEnd==false){
                        displayController.randomMove();}
                    }}
                    winnerSign = checkWinner(gameBoard.getBoard());
                    if(winnerSign == 'X' || winnerSign == 'O'){
                       console.log(`Hurra! Player ${winnerSign} wins`);
                    
                          gameWin=true;
                          gameEnd=true;
                          displayController.gameStatus();
                    }
                    if(player1Count == 5 && player2Count == 4){
                        console.log(player1Count);
                        endText.innerHTML= "It's a TIE everyone."
                        gameEndText.appendChild(endText);
                        gameWin=true;
                        gameEnd=true;
                        displayController.gameStatus();
                    }
                    console.log(gameBoard.getBoard());}
                    
            });})}
/* END Cell Section */
//check winner function
const checkWinner = (board) =>{



    //check rows
    for(let i=0; i<3; i++){
        if(board[i][0]==board[i][1] && board[i][1]==board[i][2]){
      
           if(i==0){cells[i].style.backgroundColor = 'red';
           cells[i+1].style.backgroundColor = 'red';
           cells[i+2].style.backgroundColor = 'red';}
           else if(i==1){
            cells[i+2].style.backgroundColor = 'red';
           cells[i+3].style.backgroundColor = 'red';
           cells[i+4].style.backgroundColor = 'red';
           }
           else{
            cells[i+4].style.backgroundColor = 'red';
            cells[i+5].style.backgroundColor = 'red';
            cells[i+6].style.backgroundColor = 'red';
           }
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
    displayController.beginGame();
       
        if(button.innerText == "Player X"){
            
            button.classList.add('selected');
            button.classList.remove('notselected');
      
            button2.classList.remove('selected');
            button2.classList.add('notselected');
            //reset the game
           
       
            vsComp=false;
            playerTurn = 1;
            gameWin=false;
      

        }
        else if(button.innerText == "Player O"){
            button.classList.add('selected');
            button.classList.remove('notselected');
            
            button1.classList.remove('selected');
            button1.classList.add('notselected');
             //reset the game
            vsComp=true;
            playerTurn = 1;
            gameWin=false;
            displayController.randomMove();
      
        }
})
}) 
//end of player select button function
function gameStatus(){

gameEndDiv.classList.remove('hidden');
if(winnerSign == 'X' || winnerSign == 'O'){
        endText.innerHTML= `The winner is Player ${winnerSign}`;
        console.log("Its not a null");
        gameEndText.appendChild(endText);
    }



/* endText.innerText=`The winner is Player ${winnerSign}`; */
}

function resetGame(){
   
 console.log("resetGame function Started")
    gameBoard.resetBoard();
    cells.forEach(cell=>{
        cell.innerHTML='';
        cell.style.backgroundColor = '#fff';
    })
    button1.classList.remove('selected')
    button2.classList.remove('selected')
    button1.classList.remove('notselected')
    button2.classList.remove('notselected')
    gameEndDiv.classList.add('hidden');
    console.log("resetGame function Ended")
    player1Count=0;
    player2Count=0;
    gameEnd=false;
}

function randomMove(){
  
    let available = [];
    if(playerTurn==1 && gameWin!=true){
    console.log("Random move çağrıldı");
    let checkBoard = gameBoard.getBoard();
 for (let i=0; i<3; i++){
    for (let j=0; j<3; j++){
        if(checkBoard[i][j]!='X' && checkBoard[i][j]!='O'){
            available.push({i, j});
        }
    }
 } 
 console.log(gameWin);
 
    console.log(available);
        let move = available[Math.floor(Math.random() * (available.length))];
        let num =0;
        let x = [move.i];
        let y = [move.j];
        console.log(move);
        console.log(y);
        console.log("The choosen x: "+x+" and y: "+ y );
        if(x==0){
            num = y;
            
        }
        else if (x==1){
            num = parseInt(x) + parseInt(y) + 2;
        }
        else if(x==2){
             num = parseInt(x)+parseInt(y)+4;
        }

  
        console.log("num is " + num);
        gameBoard.setBoard(x, y, 'X');
        cells[num].innerText='X';
        player1Count += 1;
        playerTurn=2;

        
    }
}


return {checkWinner, beginGame, resetGame, gameStatus, randomMove};
})();

