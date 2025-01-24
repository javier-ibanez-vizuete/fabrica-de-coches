
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

// ----------- GENERANDO UNA MATRICULA ---------------
function generateRandomLetter() {
	const abcdario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numeroAleatorio = Math.floor(Math.random() * 26);
	return abcdario[numeroAleatorio];
}

function generateRandomNumberInRange(min = 0, max = 9999) {
	const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
	return numeroAleatorio.toString().padStart(max.toString().length, "0");
}

const matriculasGeneradas = new Set();

function generateUniqueSpanishLicensePlate(coche, country) {
	const numerosMatricula = generateRandomNumberInRange(0, 9999);
	const letrasMatricula = generateRandomLetter() + generateRandomLetter() + generateRandomLetter();
	const matriculaUnica = `${numerosMatricula} ${letrasMatricula}`;
	if (matriculasGeneradas.has(matriculaUnica)) {
		console.log(`La matricula ${matriculaUnica} ya existe. Generando nueva matricula...`);
		return generateUniqueSpanishLicensePlate(coche, country);
	}

	matriculasGeneradas.add(matriculaUnica);
	console.log(`La matricula generada es: ${matriculaUnica}`);
	coche.matricula = matriculaUnica + `(${country})`;
	return coche.matricula;
}

function generateLicensePlate(coche, country = "spain") {
	if (!country) {
		coche.matricula = "Sin asignar";
		return `Pais Incorrecto. Los paises disponibles son: "spain", "portugal", "france", "italy"`;
	}

	if (country === "spain") {
		return generateUniqueSpanishLicensePlate(coche, country);
	}

	coche.matricula = "Sin asignar";
	return `${country} no es un Pais valido. Los paises disponibles son: "spain", "portugal", "france", "italy"`;
}

// ------------------ FABRICACION DEL COCHE -------------------

//#MARCODEPUERTA
function manufacturedoorFrame(doorFrameMaterial = "Titanio") {
	console.log(`Fabricando marco de puerta de ${doorFrameMaterial}`);
	return { doorFrame: doorFrameMaterial };
}

//#VENTANA
function manufactureWindow(windowMaterial = "Cristal Templado") {
	console.log(`Fabricando Ventana de ${windowMaterial}`);
	return { windowDoor: windowMaterial };
}

//#PUERTA
function assembleDoor(doorFrameMaterial, windowMaterial) {
	const doorFrame = manufacturedoorFrame(doorFrameMaterial);
	const windowDoor = manufactureWindow(windowMaterial);
	return { ...doorFrame, ...windowDoor };
}

//#ASIENTO
function manufactureseat(seatMaterial = "Piel") {
	console.log(`Fabricando asiento de ${seatMaterial}...`);
	return { seatMaterial: seatMaterial };
}

//#TAPICERIA
function manufactureUpholstery(coche, upholsteryMaterial = "Piel Sintentica") {
	console.log(`Fabricando Tapiceria de ${upholsteryMaterial}...`);
	coche.carroceria.tapiceria = upholsteryMaterial;
	return coche.carroceria.tapiceria;
}

//#ESTRUCTURACARROCERIA
function manufactureBodyPanel(coche, bodyPanelMaterial = "Fibra de Carbono") {
	console.log(`Fabricando Carroceria exterior de ${bodyPanelMaterial}`);
	coche.carroceria.carroceriaExterior = bodyPanelMaterial;
	return coche.carroceria.carroceriaExterior;
}

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

	for (let i = 0; i < doorsNumber; i++) {
		const puerta = assembleDoor(doorFrameMaterial, windowMaterial);
		coche.carroceria.puertas.push(puerta);
		console.log(`Puerta ensamblada:`, puerta);
	}

	for (let i = 0; i < seatsNumber; i++) {
		const asiento = manufactureseat(seatMaterial);
		coche.carroceria.asientos.push(asiento);
		console.log(`Asiento ensamblado:`, asiento);
	}

	manufactureUpholstery(coche, upholsteryMaterial);
	return coche.carroceria;
}

//#ESTRUCTURADELCHASIS
function manufactureBodyChassis(coche, bodyChassisMaterial = "Fibra de Carbono") {
	console.log(`Fabricando estructura de chasis de ${bodyChassisMaterial}...`);
	coche.chasis.estructuraDelChasis = bodyChassisMaterial;
	return coche.chasis.estructuraDelChasis;
}

//#CHASIS
function assembleChassis(
	coche,
	bodyChassisMaterial,
	typeOfSuspension,
	numberOfWheels = 4,
	wheelRimMaterial,
	tireSize,
	typeOfBrakes,
	typeOfSteeringWheel,
	typeOfEngine,
	typeOfExhaustSystem
) {
	manufactureBodyChassis(coche, bodyChassisMaterial);

	for (let i = 0; i < numberOfWheels; i++) {
		const wheel = {
			wheelRim: wheelRimMaterial,
			tireSize: `${tireSize}"`
		};
		coche.chasis.ruedas.push(wheel);
		console.log(`Rueda ensamblada:`, wheel);
	}

	coche.chasis.sistemaDeSuspension = typeOfSuspension;
	coche.chasis.sistemaDeFrenos = typeOfBrakes;
	coche.chasis.sistemaDeDireccion.volante = typeOfSteeringWheel;
	coche.chasis.motor = typeOfEngine;
	coche.chasis.sistemaDeEscape = typeOfExhaustSystem;

	return coche.chasis;
}

//#COCHE
function assembleCar(
	bodyPanelMaterial,
	doorsNumber,
	doorFrameMaterial,
	windowMaterial,
	seatsNumber,
	seatMaterial,
	upholsteryMaterial,
	bodyChassisMaterial,
	typeOfSuspension,
	numberOfWheels,
	wheelRimMaterial,
	tireSize,
	typeOfBrakes,
	typeOfSteeringWheel,
	typeOfEngine,
	typeOfExhaustSystem,
	country
) {
	const coche = carTemplate();

	assembleCarBody(
		coche,
		bodyPanelMaterial,
		doorsNumber,
		doorFrameMaterial,
		windowMaterial,
		seatsNumber,
		seatMaterial,
		upholsteryMaterial
	);

	assembleChassis(
		coche,
		bodyChassisMaterial,
		typeOfSuspension,
		numberOfWheels,
		wheelRimMaterial,
		tireSize,
		typeOfBrakes,
		typeOfSteeringWheel,
		typeOfEngine,
		typeOfExhaustSystem
	);

	generateLicensePlate(coche, country);

	console.log(`Coche ensamblado:`, coche);
	return coche;
}

// EJEMPLO DE USO
const coche1 = assembleCar(
	"Adamantium",
	3,
	"Titanio",
	"Plástico",
	2,
	"Piel de Anaconda",
	"Piel de Coco",
	"Criptonita",
	"Hidráulica",
	3,
	"Cera",
	6,
	"ABS",
	"Clásico",
	"Aceite Coipesol",
	"2 Salidas",
	"spain"
);

console.log(`Coche1 ensamblado:`, coche1);
