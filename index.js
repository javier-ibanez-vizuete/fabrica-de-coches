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
}

//--------GENERAR UNA MATRICULA--------
function generateRandomLetter() {
	const abcdario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numeroAleatorio = Math.floor(Math.random() * 26);
	return abcdario[numeroAleatorio];
}

function generateRandomNumberInRange(min = 0, max = 9999) {
	const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomNumber.toString().padStart(max.toString().length, "0");
}

const generatedLicensePlateBox = new Set();

function generateSpanishLicensePlate(coche = {}, country) {
	//EL = {} TENGO QUE RETIRARLO
	const licensePlateNumbers = generateRandomNumberInRange(0, 9999);
	const licensePlateLetters = generateRandomLetter() + generateRandomLetter() + generateRandomLetter();
	const licensePlate = `${licensePlateNumbers} ${licensePlateLetters}`;
	if (generatedLicensePlateBox.has(licensePlate)) {
		console.log(`La Matricula ${licensePlate} ya existe. Generando nueva matricula...`);
		return generateSpanishLicensePlate(coche, country);
	}
	if (!generatedLicensePlateBox.has(licensePlate)) {
		generatedLicensePlateBox.add(licensePlate);
		coche.matricula = licensePlate + `(${country})`;
		return coche.matricula;
	}
}
// console.log(generateSpanishLicensePlate());

function generatePortugueseLicensePlate(coche = {}, country) {
	//EL = {} TENGO QUE RETIRARLO
	const licensePlateNumbers = generateRandomNumberInRange(0, 99);
	const leftLicensePlateLetters = generateRandomLetter() + generateRandomLetter();
	const rightLicensePlateLetters = generateRandomLetter() + generateRandomLetter();
	const licensePlate = `${leftLicensePlateLetters} ${licensePlateNumbers} ${rightLicensePlateLetters}`;
	if (generatedLicensePlateBox.has(licensePlate)) {
		console.log(`La Matricula ${licensePlate} ya existe. Generando nueva matricula...`);
		return generateSpanishLicensePlate(coche, country);
	}
	if (!generatedLicensePlateBox.has(licensePlate)) {
		generatedLicensePlateBox.add(licensePlate);
		coche.matricula = licensePlate + `(${country})`;
		return coche.matricula;
	}
}
// console.log(generatePortugueseLicensePlate());

function generateFrenchLicensePlate(coche = {}, country) {
	//EL = {} TENGO QUE RETIRARLO
	const licensePlateNumbers = generateRandomNumberInRange(0, 999);
	const leftLicensePlateLetters = generateRandomLetter() + generateRandomLetter();
	const rightLicensePlateLetters = generateRandomLetter() + generateRandomLetter();
	const licensePlate = `${leftLicensePlateLetters}-${licensePlateNumbers}-${rightLicensePlateLetters}`;
	if (generatedLicensePlateBox.has(licensePlate)) {
		console.log(`La Matricula ${licensePlate} ya existe. Generando nueva matricula...`);
		return generateSpanishLicensePlate(coche, country);
	}
	if (!generatedLicensePlateBox.has(licensePlate)) {
		generatedLicensePlateBox.add(licensePlate);
		coche.matricula = licensePlate + `(${country})`;
		return coche.matricula;
	}
}
// console.log(generateFrenchLicensePlate());

function generateItalyLicensePlate(coche = {}, country) {
	//EL = {} TENGO QUE RETIRARLO
	const licensePlateNumbers = generateRandomNumberInRange(0, 999);
	const leftLicensePlateLetters = generateRandomLetter() + generateRandomLetter();
	const rightLicensePlateLetters = generateRandomLetter() + generateRandomLetter();
	const licensePlate = `${leftLicensePlateLetters} ${licensePlateNumbers}${rightLicensePlateLetters}`;
	if (generatedLicensePlateBox.has(licensePlate)) {
		console.log(`La Matricula ${licensePlate} ya existe. Generando nueva matricula...`);
		return generateSpanishLicensePlate(coche, country);
	}
	if (!generatedLicensePlateBox.has(licensePlate)) {
		generatedLicensePlateBox.add(licensePlate);
		coche.matricula = licensePlate + `(${country})`;
		return coche.matricula;
	}
};
// console.log(generateItalyLicensePlate());

function generateLicensePlate(coche = {}, country = "spain") {
    	//EL = {} TENGO QUE RETIRARLO
    if (!country || country === null || country === "") {
        coche.matricula = "Sin Asignar";
        return `Pais incorrecto. Los paises disponibles son: "spain", "portugal", "france", "italy"`;
    }

    if (country === "spain") {
        return generateSpanishLicensePlate(coche, country);
    }

    if (country === "portugal") {
        return generatePortugueseLicensePlate(coche, country);
    }

    if (country === "france") {
        return generateFrenchLicensePlate(coche, country);
    }

    if (country === "italy") {
        return generateItalyLicensePlate(coche, country);
    }
    coche.matricula = "Sin Asignar";
    return `Pais incorrecto. Los paises disponibles son: "spain", "portugal", "france", "italy"`;
};
// console.log(generateLicensePlate(undefined, "spain"));
// console.log(generateLicensePlate(undefined, "portugal"));
// console.log(generateLicensePlate(undefined, "france"));
// console.log(generateLicensePlate(undefined, "italy"));
// console.log(generateLicensePlate(undefined, "zarandonga"));
// console.log(generateLicensePlate(undefined, undefined));
// console.log(generateLicensePlate(undefined, ""));
