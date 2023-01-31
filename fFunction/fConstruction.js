function Car (maxSpeed = 200, delta = 5) {
    //atributo privado
    let currentSpeed = 0

    //metodo publico
    this.acceleration = function () {
        if (currentSpeed + delta <= maxSpeed) {
            currentSpeed += delta
        } else {
            currentSpeed = maxSpeed
        }
    }

    //metodo publico 
    this.getcurrentSpeed = function () {
        return currentSpeed
    }
} 

const gol = new Car 
uno.acceleration()
console.log(uno.getcurrentSpeed())

const ferrari = new Car(350, 20)
ferrari.acceleration()
ferrari.acceleration()
ferrari.acceleration()
console.log(ferrari.getcurrentSpeed())
 