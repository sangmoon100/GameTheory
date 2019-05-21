var origBoard = Array.from(Array(9).keys());

function emptySquares() {
    // user impl
    return origBoard.filter(s => typeof s == 'number');
}

function checkWin(Board, player) {
    // game by game
    // user impl
    
    return false;
}

function minimax(newBoard, player) {
    // depth Setting
    var availSpots = emptySquares();
    
    // Wining Condition Check
    if( checkWin(newBoard, player)) {
        return {score: -10};
    } else if (checkWin(newBoard, aiPlayer)) {
        return {score: 20};
    } else if (availSpots.length === 0) {
        return {score: 0};
    }
    var moves = [];
    // Main Start.
    // loop for depth as Move Generator
    for (var i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;
        
        if (player == aiPlayer) {
            var result = minimax(newBoard, huPlayer);
            move.score = result.score;
        } else {
            var result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }
        
        newBoard[availSpots[i]] = move.index;
        
        moves.push(move);
    }
    
    // Select Best
    var bestMove;
    if(player === aiPlayer) {
        var bestScore = -10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        var bestScore = 10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    // Main End.
    
    return moves[bestMove];
}