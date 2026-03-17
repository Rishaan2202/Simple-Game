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


//Shop
const shopItems = [
    {
        name: "Money",
        description: "Get money with money! +₹5 shipping charges",
        cost: 15,
        startingCost: 15,
    },
    {
        name: "iPad",
        description: "Pls gimme an iPad!!!",
        cost: 100,
        startingCost: 100,
    },
]

function createShopItems() {
    document.querySelectorAll('.shop-item').forEach((element) => {
        element.remove();
});
}

shopItems.forEach((item) => {
    const shopItem = document.createElement ('div');
    shopItem.className = "shop-item";

    shopItem.innerHTML = `
        <div>
        <h3>₹{item.name}</h3>
        <p>₹{item.description}</p>
        </div>
        <button onclick="buyItem('₹{item.name}')">
            Buy for ₹{item.cost}
        </button>
    `;

    shopContainer.appendChild(shopItem);
});
