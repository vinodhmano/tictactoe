const prompt = require('prompt-sync')();
var drawBoard = (board) => {
    console.log('-------------------')
    console.log('| ', board.tl, ' | ', board.tm, ' | ', board.tr, ' |');
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
        return true;
    if (board.ml == board.mm && board.ml == board.mr && board.ml != ' ')
        return true;
    if (board.ll == board.lm && board.ll == board.lr && board.ll != ' ')
        return true;
    if (board.tl == board.ml && board.tl == board.ll && board.tl != ' ')
        return true;
    if (board.tm == board.mm && board.tm == board.lm && board.tm != ' ')
        return true;
    if (board.tr == board.mr && board.tr == board.lr && board.tr != ' ')
        return true;
    if (board.tl == board.mm && board.tl == board.lr && board.tl != ' ')
        return true;
    if (board.tr == board.mm && board.tr == board.ll && board.tr != ' ')
        return true;
    return false;
}

var getValueFromComputer = () => {
    if(board.mm == ' ') {
        return 'mm'
    }

    //Condition to return tl
    if (board.tl == ' ' &&
        ((board.tm == board.tr && (board.tm == 'x' || board.tm == 'o')) ||
        (board.ml == board.ll && (board.ml == 'x' || board.ml == 'o')) ||
        (board.mm == board.lr && (board.mm == 'x' || board.mm == 'o')))
    ) 
    return 'tl';

    //Condition to return tm
    if (board.tm == ' ' &&
        ((board.tl == board.tr && (board.tl == 'x' || board.tl == 'o')) ||
        (board.mm == board.lm && (board.mm == 'x' || board.mm == 'o')))
    )
    return 'tm';

    //Condition to return tr
    if (board.tr == ' ' &&
        ((board.tm == board.tl && (board.tm == 'x' || board.tm == 'o')) ||
        (board.mr == board.lr && (board.mr == 'x' || board.mr == 'o')) ||
        (board.mm == board.ll && (board.mm == 'x' || board.mm == 'o')))
    )
    return 'tr';

    //Condition to return ml
    if (board.ml == ' ' &&
        ((board.tl == board.ll && (board.tl == 'x' || board.tl == 'o')) ||
        (board.mm == board.mr && (board.mm == 'x' || board.mm == 'o')))
    ) 
    return 'ml';

    //Condition to return mm
    if (board.mm == ' ' &&
        ((board.tm == board.lm && (board.tm == 'x' || board.tm == 'o')) ||
        (board.ml == board.mr && (board.ml == 'x' || board.ml == 'o')) ||
        (board.tl == board.lr && (board.tl == 'x' || board.tl == 'o')) ||
        (board.tr == board.ll && (board.tr == 'x' || board.tr == 'o')))
    ) 
    return 'mm';

    //Condition to return mr
    if (board.mr == ' ' &&
        ((board.tr == board.lr && (board.tr == 'x' || board.tr == 'o')) ||
        (board.mm == board.ml && (board.mm == 'x' || board.mm == 'o')))
    ) 
    return 'mr';

    //Condition to return ll
    if (board.ll == ' ' &&
        ((board.lm == board.lr && (board.lm == 'x' || board.lm == 'o')) ||
        (board.ml == board.tl && (board.ml == 'x' || board.ml == 'o')) ||
        (board.mm == board.tr && (board.mm == 'x' || board.mm == 'o')))
    ) 
    return 'll';

    //Condition to return lm
    if (board.lm == ' ' &&
        ((board.ll == board.lr && (board.ll == 'x' || board.ll == 'o')) ||
        (board.mm == board.tm && (board.mm == 'x' || board.mm == 'o')))
    )
    return 'lm';

    //Condition to return lr
    if (board.lr == ' ' &&
        ((board.lm == board.ll && (board.lm == 'x' || board.lm == 'o')) ||
        (board.mr == board.tr && (board.mr == 'x' || board.mr == 'o')) ||
        (board.mm == board.tl && (board.mm == 'x' || board.mm == 'o')))
    )
    return 'lr';

    if(((board.tm == board.tr) && board.tm == ' ') && ((board.ml == board.mr) && board.ml == ' ') && ((board.ll == board.lm) && board.ll == ' '))
    return 'tr';

    if(((board.tl == board.tm)  && board.tl == ' ') && ((board.ml == board.mr) && board.ml == ' ') && ((board.lm == board.lr) && board.lm == ' '))
    return 'tl';
}

console.log('                      --------Game Started---------                       ');
console.log('----------------------------------***-------------------------------------');
console.log('RULE:- Only empty Positions (tl,tm,tr,ml,mm,mr,ll,lm,lr) are to be choosen');
console.log('----------------------------------***-------------------------------------');

while (!isGameOver(board)) {
    do {
        var uPos = prompt('Select unfilled position: ');
    } while ( board[uPos] != ' ');

    board[uPos] = 'x'
    drawBoard(board);
    if (!isGameOver(board)) {
        var cPos = getValueFromComputer()
        console.log(`computer selected: ${cPos}`);
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
