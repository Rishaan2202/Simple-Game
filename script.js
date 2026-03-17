const button = document.getElementById('click-button');
const count = document.getElementById('click-count');
const resetButton = document.getElementById('reset-button');

let totalClickCount = 0;
let itemsOwned = [];

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
const shopContainer = document.querySelector('.shop-panel');

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
    {
        name: "Auto-Clicker",
        description: "Automatically clicks for you every second!",
        cost: 50,
        startingCost: 50,
    },
]

function buyItem(itemName) {
    let item = shopItems.find((i) => i.name === itemName);
    if (totalClickCount >= item.cost) {
        totalClickCount -= item.cost;
        count.textContent = totalClickCount;
        createShopItems();
        processItemPurchase(item);
    } else {
        alert(`You don't have enough money to buy ${item.name}!`);
    }
}

function createShopItems() {
    document.querySelectorAll('.shop-item').forEach((element) => {
        element.remove();
});

shopItems.forEach((item) => {
    const shopItem = document.createElement ('div');
    shopItem.className = "shop-item";

    shopItem.innerHTML = `
        <div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        </div>
        <button onclick="buyItem('${item.name}')">
            Buy for ₹${item.cost}
        </button>
    `;

    shopContainer.appendChild(shopItem);
});
}

createShopItems();

function processItemPurchase(item){
let amount = 1;


const itemInArray = itemsOwned.find((obj) => obj.name === item.name);
if (itemInArray) {
    itemInArray.amount++;
    console.log(`You already had ${item.name}, added 1 more!`);
    alert(`You already had ${item.name}, added 1 more!`);
    amount = itemInArray.amount;
}
else {
    itemsOwned.push({name: item.name, amount: 1});
    console.log(`You bought ${item.name}, Yay!`);
    alert(`You bought ${item.name}, Yay!`);
}
}