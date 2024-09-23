// Task 1: Create an Inventory of Product Objects

let inventory = [
{ 
    name: 'CaramelLatte',
    price: 8,
    quantity: 12, 
},

{ 
    name: 'ColdBrew',
    price: 10,
    quantity: 18, 
},

{ 
    name: 'Macchiato',
    price: 5,
    quantity: 7, 
},

{ 
    name: 'Americano',
    price: 9,
    quantity: 13, 
},

];

// Task 2: Create an Orders Array of Orders Objects

let orders = []

// NOTE: order objects will be added in Task 3

// Task 3: Create a Function to Place an Order

function placeOrder (name, itemsOrdered) {
    for (let item of itemsOrdered){
        const product = inventory.find (product => product.name === item.name);
// Testing if item exists 
        if (!product) {
            console.log ('ERROR: ITEM DOES NOT EXIST');
            return };
// Testing if there is enough stock
         if (item.quantity >= inventory.quantity) {
             console.log ('ERROR: NOT ENOUGH STOCK');
             return };
         }
// Once valid, subtracting the valid products from the inventory
const product = inventory.find (product => product.name === itemsOrdered.name);
itemsOrdered.forEach(item => {if (product)
    item.quantity -= inventory.quantity;
});
console.log (`Successfully placed an order for ${name}.`)
orders.push ({
    customer: name,
    products: itemsOrdered,
    status: 'pending'
});

}

console.log (placeOrder("Ash", [
    {name:"MatchaLatte", quantity: 3 },
]))
// should log name based error msg 

console.log (placeOrder("Misty", [
    {name:'Americano', quantity: 34},
    {name:'ColdBrew', quantity: 3}
]))
// should log success msg




