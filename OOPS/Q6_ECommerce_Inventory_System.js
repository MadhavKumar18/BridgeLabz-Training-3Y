const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 4 },
    { id: 2, name: "Phone", category: "Electronics", price: 25000, stock: 12 },
    { id: 3, name: "Notebook", category: "Stationery", price: 80, stock: 3 },
    { id: 4, name: "Pen", category: "Stationery", price: 20, stock: 50 },
    { id: 5, name: "Chair", category: "Furniture", price: 2500, stock: 6 }
];

function getLowStockProducts(productList, threshold = 5) {
    return productList.filter(product => product.stock < threshold);
}

function sortProductsByPrice(productList) {
    return [...productList].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(productList) {
    return productList.reduce((total, product) => total + product.price * product.stock, 0);
}

function groupByCategory(productList) {
    return productList.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low-stock products:");
console.log(getLowStockProducts(products));

console.log("Products sorted by price (low to high):");
console.log(sortProductsByPrice(products));

console.log(`Total inventory value: ₹${calculateTotalInventoryValue(products)}`);

console.log("Products grouped by category:");
console.log(groupByCategory(products));
