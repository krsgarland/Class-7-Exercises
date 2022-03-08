//You will be given an array of drinks, 
//each drink being an object with two properties: name and price
//Create a function with the drinks array as an argument 
//return the drinks objects sorted by price in ascending order


drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10},
];

const sortDrinkByPrice = drinks.sort ((a, b) => b.drinks - a.drinks);
