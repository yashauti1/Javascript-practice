//create an object representing a car with properties like make,model,year. add a method to the car object to start the engine

let car={
    make:"toyota",
    model:"Camry",
    year:2022,
}

car.startEngine=function(){
    console.log("engine Started");
}

car.startEngine();