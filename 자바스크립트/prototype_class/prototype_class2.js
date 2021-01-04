// var Human = function(type){
//     this.type = type||"human"
// }

// Human.isHuman = function(human){
//     return human instanceof Human;
// }

// Human.prototype.breathe = function(){
//     alert("h-a-a-a-a")
// }

// var Zero = function(type, firstname, lastname){
//     Human.apply(this, arguments)
//     this.firstname = firstname
//     this.lastname = lastname
// }

// Zero.prototype = Object.create(Human.prototype)
// Zero.prototype.constructor = Zero
// Zero.prototype.sayName = function(){
//     alert(this.firstname+' '+this.lastname)
// }

// var oldZero = new Zero("human", "zero", "cho")
// console.log(Human.isHuman(oldZero))

class Human{
    constructor(type="human"){
        this.type = type
    }

    static isHuman(human){
        return human instanceof Human
    }

    breathe(){
        alert("h-a-a-a-a")
    }
}

class Zero extends Human{
    constructor(type, firstname, lastname){
        super(type)
        this.firstname = firstname
        this.lastname = lastname
    }

    sayName(){
        super.breathe()
        alert(`${this.firstname} ${this.lastname}`)
    }
}
const newZero = new Zero("human", "Zero", "Cho")
console.log(Human.isHuman(newZero))

//https://doitnow-man.tistory.com/132