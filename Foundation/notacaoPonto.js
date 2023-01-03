console.log(Math.ceil(6.4));

const obj1 = {};
obj1.name = "Teste"
console.log(obj1.name);

function obj (name) {
    this.name = name
    this.exec = function() {
        console.log("Exec...")
    }
}

const obj2 = new obj("Piano");
const obj3 = new obj("Cajado");
console.log(obj2.name);
console.log(obj3.name);
obj3.exec();