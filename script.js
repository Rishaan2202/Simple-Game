const button = document.getElementById('click-button');
const count = document.getElementById('click-count');
const resetButton = document.getElementById('reset-button');

let totalClickCount = 0;

function buttonclick(){
    totalClickCount++
    count.textContent = totalClickCount;
}

button.addEventListener('click', function() {
    buttonclick();
});

function resetGame(){
    totalClickCount = 0;
    count.textContent = totalClickCount;
}

resetButton.addEventListener('click', resetGame);
