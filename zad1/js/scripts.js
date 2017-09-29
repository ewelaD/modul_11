function Phone(brand, price, color, system) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.system = system;
};
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". Mobile operating system for this brand is: " + this.system + ".");
};
var iPhone6S = new Phone("Apple", 2250, "silver", "iOS 11");
iPhone6S.printInfo();
var iPhone7 = new Phone("Apple", 2689, "black", "iOS 10");
iPhone7.printInfo();
var lgG6 = new Phone("LG", 1899, "white" ,"Android 7.0 Nougat");
lgG6.printInfo();
var sonyXZs = new Phone("Sony", 2199, "blue", "Google Android");
sonyXZs.printInfo();