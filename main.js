const PAIR_COUNT = 4;      //4對數字


//數字對的數列，一次生成1組數字對(11 22...)
function createCards() {
    const result = [];
    for (let i = 1; i <= PAIR_COUNT; i++) {
        result.push({ value: i, state: 'hidden'});
        result.push({ value: i, state: 'hidden'});
     }
    return result;
}

//洗牌的方式，由最後的指標開始，與小於等於指標的隨機一數交換位置
function shuffle(arr) {
    const cardCount = arr.length;
    for (let i = cardCount - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

//將數字放進格子內
function renderBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    for (let i = 0; i < cards.length; i++) {
        const cardEl = document.createElement('div');
        cardEl.classList.add('card');
        cardEl.textContent = cards[i].value;
        cardEl.dataset.index = i;
        board.appendChild(cardEl);
    }
}


let cards = createCards();
shuffle(cards);
console.table(cards);
renderBoard();