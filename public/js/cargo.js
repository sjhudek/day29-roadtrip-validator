var exports = module.exports = {};

// product and cargo objects
const productList = [];

const Product = function (prod_id, name, count, cost, weight, description, imgUrl) {
    this.prod_id = prod_id;
    this.name = name;
    this.count = count;
    this.cost = cost;
    this.weight = weight;
    this.description = description;
    this.imgUrl = imgUrl;
    this.totalPrice = (this.count * this.cost);
    this.totalWeight = (this.count * this.weight);
}

const luggageProduct = new Product(0, 'Trunki: The Original Ride-On Suitcase', 1, 40, 3.75,
    `Family vacations and sleepovers just got even more fun with Trunki
The award-winning British design takes the stress out of traveling with kids and encourages responsibility and imaginative play at home.`, 'https://images-na.ssl-images-amazon.com/images/I/81-APOKXYQL._SX522_.jpg');
productList.push(luggageProduct);

var footWarmer = new Product(1, 'ThermaCell Rechargeable Heated Insole', 1, 79, 1, `This footwarmer offers convenient remote control operation, no wires or external batteries. And up to 2500 hours of toasty heat to warm cold feet.`, "https://images-na.ssl-images-amazon.com/images/I/91muien4EHL._SY717_.jpg")
productList.push(footWarmer);

var headphones = new Product(2, 'High-Performance Active Noise-Cancelling Headphones', 1, 180, 1, `High-performance, active noise-cancelling technology`, "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1450736581%2Fakg-headphones-travelgiftsrndup2015.jpg%3Fitok%3DsDttb7ZV&w=800&q=85")
productList.push(headphones);

var compressedTowel = new Product(3, 'Compressed Towels', 2, 15, 1, `Never find yourself without a warm towel again.`, `https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2Fnoliquids0315-compressed-towels.jpg%3Fitok%3D5dcm7cnp&w=800&q=85`)
productList.push(compressedTowel);

exports.createCargoParts = function () {
    return (productList);
}

exports.runningCostTotal = function (cargoCart) {
    let totalCost = null;

    cargoCart.forEach(function (cargoItem) {
        totalCost += cargoItem.totalPrice();
    })

    return (totalCost);
}

exports.runningWeightTotal = function (cargoCart) {
    let totalWeight = null;

    cargoCart.forEach(function (cargoItem) {
        totalWeight += cargoItem.totalWeight();
    })

    return (totalWeight);
}

exports.valdateValues = function (currentVal, newVal) {
    if (200 >= (currentVal + newVal)) {
        return (true);
    }
    return (false);
}
