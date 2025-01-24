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
}
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
}
// console.log(generateLicensePlate(undefined, "spain"));
// console.log(generateLicensePlate(undefined, "portugal"));
// console.log(generateLicensePlate(undefined, "france"));
// console.log(generateLicensePlate(undefined, "italy"));
// console.log(generateLicensePlate(undefined, "zarandonga"));

// --------- FABRICACION DEL COCHE -----------
//#MARCODEPUERTA
function manufactureDoorFrame(doorFrameMaterial = "Titanio") {
	console.log(`Fabricando Marco de Puerta de ${doorFrameMaterial}...`);
	console.log(`(✅)Marco de Puerta de ${doorFrameMaterial} fabricado con éxito.`);
	return { MarcoDePuerta: doorFrameMaterial };
}

//#VENTANA
function manufactureWindow(windowMaterial = "Cristal Templado") {
	console.log(`Fabricando Ventana de ${windowMaterial}...`);
	console.log(`(✅)Ventana de ${windowMaterial} fabricada con éxito.`);
	return { Ventana: windowMaterial };
}

//#PUERTA
function assembleDoor(doorFrameMaterial, windowMaterial) {
	const doorFrame = manufactureDoorFrame(doorFrameMaterial);
	const window = manufactureWindow(windowMaterial);
	console.log(`Ensamblando Puerta con:
        - Marco de ${Object.values(doorFrame)}
        - Ventana de ${Object.values(window)}
        `);
	return { ...doorFrame, ...window };
}
// console.log(assembleDoor("Plastico", "Goma"));

//#ASIENTO
function manufactureSeat(seatMaterial = "Piel") {
	console.log(`Fabricando Asiento de ${seatMaterial}...`);
	console.log(`(✅)Asiento de ${seatMaterial} fabricado con éxito.`);
	return { Asiento: seatMaterial };
}
// const asiento = manufactureSeat();
// console.log(asiento);

//#TAPICERIA
function manufactureUpholstery(coche = {}, upholsteryMaterial = "Piel Sintetica") {
	//EL = {} TENGO QUE RETIRARLO
	console.log(`Fabricando Tapiceria de ${upholsteryMaterial}...`);
	console.log(`(✅)Tapiceria de ${upholsteryMaterial} fabricada con éxito.`);
	coche.carroceria.tapiceria = upholsteryMaterial;
	return coche.carroceria.tapiceria;
}
// console.log(manufactureUpholstery());

//#ESTRUCTURACARROCERIA
function manufactureBodyPanel(coche = {}, bodyPanelMaterial = "Fibra de Carbono") {
	//EL = {} TENGO QUE RETIRARLO
	console.log(`Fabricando Carroceria Exterior de ${bodyPanelMaterial}...`);
	console.log(`(✅)Carroceria Exterior de ${bodyPanelMaterial} fabricada con éxito.`);
	coche.carroceria.carroceriaExterior = bodyPanelMaterial;
	return coche.carroceria.carroceriaExterior;
}
// console.log(manufactureBodyPanel());

//#CARROCERIA
function assembleCarBody(
	coche,
	bodyPanelMaterial,
	doorsNumber = 4,
	doorFrameMaterial,
	windowMaterial,
	seatsNumber = 5,
	seatMaterial,
	upholsteryMaterial
) {
	manufactureBodyPanel(coche, bodyPanelMaterial);

	for (let index = 0; index < doorsNumber; index++) {
		const door = assembleDoor(doorFrameMaterial, windowMaterial);
		coche.carroceria.puertas.push(door);
		console.log(`(✅)Puerta Ensamblada:`, door);
	}

	for (let index = 0; index < seatsNumber; index++) {
		const seat = manufactureSeat(seatMaterial);
		coche.carroceria.asientos.push(seat);
		console.log(`(✅)Asiento Ensamblado`);
	}

	manufactureUpholstery(coche, upholsteryMaterial);
	return coche.carroceria;
}
// console.log(assembleCarBody());

//#ESTRUCTURADELCHASIS
function manufactureBodyChassis(coche, bodyChassisMaterial = "Fibra de Carbono") {
	console.log(`Fabricando estructura de chasis de ${bodyChassisMaterial}...`);
	console.log(`(✅)Estructura de chasis de ${bodyChassisMaterial} fabricada con éxito.`);
	coche.chasis.estructuraDelChasis = bodyChassisMaterial;
	return coche.chasis.estructuraDelChasis;
}
// console.log(manufactureBodyChassis());

//#SISTEMA DE SUSPENSION
function manufactureSuspensionSystem(coche, typeOfSuspension = "Neumatica") {
	console.log(`Fabricando sistema de Suspensión ${typeOfSuspension}...`);
    console.log(`(✅)Sistema de Suspensión ${typeOfSuspension} fabricado con éxito.`);
    coche.chasis.sistemaDeSuspension = typeOfSuspension;
    return coche.chasis.sistemaDeSuspension;
}
console.log(manufactureSuspensionSystem());

