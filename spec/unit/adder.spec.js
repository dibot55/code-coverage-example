const adder = require('../../services/adder');

describe("Test de division", function(){ //nombre del bloque de test
    let _numberA;
    let _numberB;//se declaran las variables en los test con guion bajo _nombredelavariable

    it("Deberia devolver la suma entre numberA y number B", function(){//prueba individual
        _numberA = 6;
        _numberB = 7;

        const result = adder.add(_numberA, _numberB);
        //se llama al .js y luego se envian los datos a la funcion dentro del .js
        
        expect(result).toEqual(13);//esperamos que el resultado sea 13
    });
})