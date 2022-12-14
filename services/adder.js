//funcion que suma dos variables
function adder(){
    this.add = function (numberA, numberB){
        return numberA + numberB; //retorna la suma de los numeros
    };
};

module.exports = new adder(); //exportamos la clase adder aunque en realidad se exporta el this.add