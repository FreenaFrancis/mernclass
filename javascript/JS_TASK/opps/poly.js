class Animal{
    constructor(name){
        this.name = name
    }
    eats(){
        console.log(this.name+"eats food");
    }
}

// let an = new Animal('Dog')
// an.eats()

class Alligator extends Animal{
    eats(){
        super.eats()
        console.log(this.name+"eats fishes");
    }
}
let murpy = new Alligator('Murpy')
murpy.eats()
