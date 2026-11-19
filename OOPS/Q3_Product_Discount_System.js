function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }

    return this.price - (this.price * percent / 100);
};

const products = [
    new Product("Laptop", 60000),
    new Product("Headphones", 3000),
    new Product("Keyboard", 1500)
];

const discounts = [10, 20, 15];

products.forEach((product, index) => {
    const discountedPrice = product.applyDiscount(discounts[index]);
    console.log(
        `${product.name}: Original Price = ₹${product.price}, Discount = ${discounts[index]}%, New Price = ₹${discountedPrice.toFixed(2)}`
    );
});

console.log("Abstraction: The applyDiscount() method hides the discount calculation details. The user only needs to provide the discount percentage and receive the new price.");
