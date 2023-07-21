const car = {
    brand: 'BMW',
    color: 'Black',
    numberOfKilometers: 0,
    printCarInfo(){
        return `${this.color}, ${this.brand}, ${this.numberOfKilometers}km`
    },
    drive(amount){
        this.numberOfKilometers += amount;
    },
    carReview: [],
    addCarReview(date){
        this.carReview.push(date)
    },
    showCarReview(){
        return this.carReview.join('-');
    }
}

console.log(car.printCarInfo());
car.drive(-200000);
console.log(car.printCarInfo());
car.addCarReview('1998');
car.addCarReview('2001');
console.log(car.showCarReview());