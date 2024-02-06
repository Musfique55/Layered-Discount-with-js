const first100price = 100;
const second100price =90;
const above200price =70;

function layerDiscount(quantity){
    if(quantity <= 100){
        const total = first100price * 100;
        return total;
    } else if(quantity <= 200){
        const firstHundred = first100price * 100;
        const remainingQuantity = quantity - 100;
        const secondHundred = remainingQuantity * second100price;
        const total = secondHundred + firstHundred;
        return total;
    } else {
        const firstHundred = first100price * 100;
        const secondHundred = second100price * 100;
        const remaining = quantity - 200;
        const total = (remaining * above200price) + firstHundred + secondHundred;
        return total;
    }
}

console.log(layerDiscount(210));