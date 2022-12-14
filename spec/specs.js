//configuracion de jasmine
const Jasmine = require ('jasmine');//modulo de jasmine
const JasmineConsoleReporter = require('jasmine-console-reporter');//reportes de jasmine
const jasmine = new Jasmine();

let reporter = new JasmineConsoleReporter({//configturamos como queremos el reporte en la consola
    colors: 1,
    cleanStack: 3, //codigo no espageti, seco y directo y sin errores y muy detallado
    verbosity: 4,//texto en la terminal
    listStyle: 'indent', //para que este indentada la lista
    activity: false
});

jasmine.addReporter(reporter); //agreagamos el reporte al modulo

jasmine.showColors(true);
jasmine.loadConfigFile('./spec/jasmine.json');// esta ruta es rara............. no esta bien...
//llamamos a la configuracion de jasmine.json
jasmine.execute();//para que se ejecute