// FABRICA DE COCHES SICLARO
console.log(`Bienvenidos a la fabrica de coches`);

function carTemplate() {
    return {
        carroceria: {
            carroceriaExterior: "",
            puertas: [],
            tapiceria: "",
            asientos: [],
        },

        chasis: {
            estructuraDelChasis: "",
            sistemaDeSuspension: "",
            ruedas: [],
            sistemaDeFrenos: "",
            sistemaDeDireccion: {
                volante: "",
                estructuraDeDireccion: "",
            },
            motor: "",
            sistemaDeEscape: "",
        },

        matricula: "",
    };
};