const prompt = require('prompt-sync')();
var drawBoard = (board) => {
    console.log('-------------------')
    console.log('| ', board.tl, ' | ', board.tm, ' | ', board.tr, ' |')
    console.log('-------------------')
    console.log('| ', board.ml, ' | ', board.mm, ' | ', board.mr, ' |');
    console.log('-------------------');
    console.log('| ', board.ll, ' | ', board.lm, ' | ', board.lr, ' |');
    console.log('-------------------');
}

var board = {
    'tl': ' ',
    'tm': ' ',
    'tr': ' ',
    'ml': ' ',
    'mm': ' ',
    'mr': ' ',
    'll': ' ',
    'lm': ' ',
    'lr': ' '
}

var isGameOver = (board) => {
    if (board.tl == board.tm && board.tl == board.tr && board.tl != ' ')
        return true
    if (board.ml == board.mm && board.ml == board.mr && board.ml != ' ')
        return true
    if (board.ll == board.lm && board.ll == board.lr && board.ll != ' ')
        return true
    if (board.tl == board.ml && board.tl == board.ll && board.tl != ' ')
        return true
    if (board.tm == board.mm && board.tm == board.lm && board.tm != ' ')
        return true
    if (board.tr == board.mr && board.tr == board.lr && board.tr != ' ')
        return true
    if (board.tl == board.mm && board.tl == board.lr && board.tl != ' ')
        return true
    if (board.tr == board.mm && board.tr == board.ll && board.tr != ' ')
        return true
    return false
}

var getValueFromComputer = () => {
    //Yet to write the logic
    return 'tm'
}

console.log('                      --------Game Started---------                       ');
console.log('----------------------------------***-------------------------------------');
console.log('RULE:- Only empty Positions (tl,tm,tr,ml,mm,mr,ll,lm,lr) are to be choosen');
console.log('----------------------------------***-------------------------------------');

while (!isGameOver(board)) {
    do {
        var uPos = prompt('Select unfilled position');
        console.log(uPos);
    } while ( board[uPos] != ' ');

    board[uPos] = 'x'
    drawBoard(board);
    if (!isGameOver(board)) {
        var cPos = getValueFromComputer()
        board[cPos] = 'o'
        drawBoard(board);
        if (isGameOver(board)) {
        console.log('computer won!');
        }
    } else {
        console.log('user won!');
    }
}
console.log('--------Game over-----------');
