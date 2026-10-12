const PAIR_COUNT = 4;      //4對數字

function createCards() {
  const result = [];
  for (let i = 1; i <= PAIR_COUNT; i++) {
    result.push({ value: i, state: 'hidden'});
    result.push({ value: i, state: 'hidden'});
  }
  return result;
}

function shuffle(arr) {
  const cardCount = arr.length;
  for (let i = cardCount - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
    console.log('i =', i, 'j =', j);
  }
}

let cards = createCards();
shuffle(cards);
console.table(cards);