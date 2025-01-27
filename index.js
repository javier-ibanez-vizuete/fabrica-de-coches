// FABRICA DE COCHES SICLARO
console.log(`Bienvenidos a la fabrica de coches`);
//##PREGUNTA SOBRE LA CARROCERIA
const askAboutBodyPanel = prompt(`
	Bienvenido a la fabrica de coches Siclaro Motor.
	De que Material Quiere que le hagamos la carroceria exterior?
	- Acero
	- Aluminio
	- Fibra de Carbono
	- Plastico reforzado
	- Materiales Compuestos
	- Magnesio
	Material Predeterminado: Fibra de Carbono.`);

let answerBodyPanel;
if (!askAboutBodyPanel || askAboutBodyPanel === null || askAboutBodyPanel === "" || askAboutBodyPanel === undefined) {
	answerBodyPanel = undefined;
}
if (
	askAboutBodyPanel === "acero" ||
	askAboutBodyPanel === "Acero" ||
	askAboutBodyPanel === "aluminio" ||
	askAboutBodyPanel === "Aluminio" ||
	askAboutBodyPanel === "fibra de carbono" ||
	askAboutBodyPanel === "Fibra de carbono" ||
	askAboutBodyPanel === "plástico reforzado" ||
	askAboutBodyPanel === "Plástico reforzado" ||
	askAboutBodyPanel === "materiales compuestos" ||
	askAboutBodyPanel === "Materiales Compuestos" ||
	askAboutBodyPanel === "magnesio" ||
	askAboutBodyPanel === "Magnesio"
) {
	answerBodyPanel = askAboutBodyPanel;
}

//## PREGUNTA SOBRE EL NUMERO DE PUERTAS
const askAboutDoorsNumber = prompt(`
	¿Cuantas Puertas desea en su Vehiculo?
	- ¿Desea que le hagamos el Vehiculo con 5 Puertas? 
	- o ¿lo prefiere con 3 puertas? 
	Numero de Puertas Predeterminado: 4
	`);

let answerDoorsNumber;
if (
	!askAboutDoorsNumber ||
	askAboutDoorsNumber === null ||
	askAboutDoorsNumber === "" ||
	askAboutDoorsNumber === undefined
) {
	answerDoorsNumber = undefined;
}

if (askAboutDoorsNumber <= 5 && askAboutDoorsNumber >= 3) {
	answerDoorsNumber = askAboutDoorsNumber;
}

//##PREGUNTA SOBRE EL CHASIS DE LAS PUERTAS
const askAboutDoorChassis = prompt(`
	¿De que material desea el chasis de las puertas?
	- Acero de alta resistencia.
	- Aluminio.
	- Aleaciones de Magnesio.
	- Materiales compuestos.
	- Fibra de Carbono.
	- Plasticos reforzados.
	Material Predeterminado: Fibra de Carbono
	`);
let answerDoorChassis;
if (
	!askAboutDoorChassis ||
	askAboutDoorChassis === null ||
	askAboutDoorChassis === "" ||
	askAboutDoorChassis === undefined
) {
	answerDoorChassis = undefined;
}

if (
	askAboutDoorChassis === "acero de alta resistencia" ||
	askAboutDoorChassis === "Acero de alta resistencia" ||
	askAboutDoorChassis === "aluminio" ||
	askAboutDoorChassis === "Aluminio" ||
	askAboutDoorChassis === "aleaciones de Magnesio" ||
	askAboutDoorChassis === "Aleaciones de Magnesio" ||
	askAboutDoorChassis === "materiales compuestos" ||
	askAboutDoorChassis === "Materiales compuestos" ||
	askAboutDoorChassis === "fibra de carbono" ||
	askAboutDoorChassis === "Fibra de carbono" ||
	askAboutDoorChassis === "plásticos reforzados" ||
	askAboutDoorChassis === "Plásticos reforzados"
) {
	answerDoorChassis = askAboutDoorChassis;
}

//##PREGUNTAS SOBRE LAS VENTANAS
const askAboutWindow = prompt(`
		¿De que Material quiere las ventanas?
		- Cristal Templado
		- Cristal Laminado
		- Cristal Electrocrómico.
		Material Predeterminado: Cristal Templado.
		`);

let answerWindow;
if (!askAboutWindow || askAboutWindow === "" || askAboutWindow === null || askAboutWindow === undefined) {
	answerWindow = undefined;
}

if (
	askAboutWindow === "cristal templado" ||
	askAboutWindow === "Cristal Templado" ||
	askAboutWindow === "cristal laminado" ||
	askAboutWindow === "Cristal Laminado" ||
	askAboutWindow === "cristal electrocrómico" ||
	askAboutWindow === "Cristal Electrocrómico"
) {
	answerWindow = askAboutWindow;
}

//##PREGUNTA NUMERO ASIENTOS
const askAboutSeatsNumber = prompt(`
	¿Cuantos asientos quieres instalar en el coche?
	- 2
	- 4
	- 5
	Numero de asientos predeterminado: 4`);

let answerSeatNumber;
if (
	!askAboutSeatsNumber ||
	askAboutSeatsNumber > 5 ||
	askAboutSeatsNumber < 2 ||
	askAboutSeatsNumber === null ||
	askAboutSeatsNumber === "" ||
	askAboutSeatsNumber === undefined
) {
	answerSeatNumber = undefined;
}

if (askAboutSeatsNumber >= 2 && askAboutSeatsNumber <= 5) {
	answerSeatNumber = Math.floor(askAboutSeatsNumber);
}

//##PREGUNTA MATERIAL ASIENTOS
const askAboutSeatMaterial = prompt(`
	¿De que material Quieres los asientos?
	- Cuero
	- Cuero Sintético
	- Tela
	- Alcántara
	- Malla Transpirable
	`);

let answerSeatMaterial;
if (
	!askAboutSeatMaterial ||
	askAboutSeatMaterial === "" ||
	askAboutSeatMaterial === null ||
	askAboutSeatMaterial === undefined
) {
	answerSeatMaterial = undefined;
}

if (
	askAboutSeatMaterial === "cuero" ||
	askAboutSeatMaterial === "Cuero" ||
	askAboutSeatMaterial === "cuero sintético" ||
	askAboutSeatMaterial === "Cuero Sintético" ||
	askAboutSeatMaterial === "tela" ||
	askAboutSeatMaterial === "Tela" ||
	askAboutSeatMaterial === "alcántara" ||
	askAboutSeatMaterial === "Alcántara" ||
	askAboutSeatMaterial === "malla transpirable" ||
	askAboutSeatMaterial === "Malla Transpirable"
) {
	answerSeatMaterial = askAboutSeatMaterial;
}

//#PLANTILLACOCHE
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
function manufactureDoorFrame(doorFrameMaterial = "Fibra de Carbono") {
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
	seatsNumber = 4,
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
// console.log(manufactureSuspensionSystem());

//#LLANTA
function manufactureWheelRim(wheelRimMaterial = "Titanio") {
	console.log(`Fabricando LLanta de ${wheelRimMaterial}...`);
	console.log(`(✅)LLanta de ${wheelRimMaterial} fabricada con éxito.`);
	return { llanta: wheelRimMaterial };
}
// console.log(manufactureWheelRim());

//#NEUMATICO
function manufactureWheelTire(tireSize = 15) {
	console.log(`Fabricando neumatico de ${tireSize}"...`);
	console.log(`(✅)Neumatico de ${tireSize}" fabricado con éxito.`);
	return { neumatico: tireSize + '"' };
}
// console.log(manufactureWheelTire());

//#RUEDA
function assembleWheel(wheelRimMaterial, tireSize) {
	const wheelRim = manufactureWheelRim(wheelRimMaterial);
	const wheelTire = manufactureWheelTire(tireSize);
	return { ...wheelRim, ...wheelTire };
}
// console.log(assembleWheel("Plastico", "17"));

//#SISTEMADESUSPENSION
function manufactureBrakesSystem(coche, typeOfBrakes = "ABS") {
	console.log(`Fabricando Sistema de Frenos ${typeOfBrakes}...`);
	console.log(`(✅)Sistema de Frenos ${typeOfBrakes} fabricado con éxito.`);
	coche.chasis.sistemaDeFrenos = typeOfBrakes;
	return coche.chasis.sistemaDeFrenos;
}
// console.log(manufactureBrakesSystem());

//#VOLANTE
function manufactureSteeringWheelSystem(coche, steeringWheelType = "Deportivo", steeringStructure = "Asistida") {
	console.log(`Fabricando Volante ${steeringWheelType}...`);
	coche.chasis.sistemaDeDireccion.volante = steeringWheelType;
	console.log(`(✅)Volante ${steeringWheelType} fabricado con éxito.`);

	console.log(`Fabricando Estructura de dirección ${steeringStructure}...`);
	coche.chasis.sistemaDeDireccion.estructuraDeDireccion = steeringStructure;
	console.log(`(✅)Estructura de Dirección ${steeringStructure} fabricada con éxito.`);

	console.log(`Ensamblando sistema de dirección con:
        - Volante: ${steeringWheelType}
        - Estructura de direccion: ${steeringStructure}
        `);
	return coche.chasis.sistemaDeDireccion;
}
// console.log(manufactureSteeringWheel());

//MOTOR
function manufactureEngine(coche, typeOfEngine = "Gasolina") {
	console.log(`Fabricando Motor de ${typeOfEngine}...`);
	console.log(`(✅)Motor de ${typeOfEngine} fabricado con éxito.`);
	coche.chasis.motor = typeOfEngine;
	return coche.chasis.motor;
}
// console.log(manufactureEngine());

//#SISTEMADEESCAPE
function manufactureExhaustSystem(coche, typeOfExhaustSystem = "4 Salidas") {
	console.log(`Fabricando Sistema de escape tipo ${typeOfExhaustSystem}...`);
	console.log(`(✅)Sistema de Escape tipo ${typeOfExhaustSystem} fabricado con éxito.`);
	coche.chasis.sistemaDeEscape = typeOfExhaustSystem;
	return coche.chasis.sistemaDeEscape;
}
// console.log(manufactureExhaustSystem());

//#CHASIS
function assembleChassis(
	coche,
	bodyChassisMaterial,
	typeOfSuspension,
	numberOfWheels = 4,
	wheelRimMaterial,
	tireSize,
	typeOfBrakes,
	steeringWheelType,
	steeringStructure,
	typeOfEngine,
	typeOfExhaustSystem
) {
	manufactureBodyChassis(coche, bodyChassisMaterial);

	manufactureSuspensionSystem(coche, typeOfSuspension);

	for (let index = 0; index < numberOfWheels; index++) {
		const wheel = assembleWheel(wheelRimMaterial, tireSize);
		coche.chasis.ruedas.push(wheel);
		console.log(`(✅)Rueda Ensamblada:`, wheel);
	}

	manufactureBrakesSystem(coche, typeOfBrakes);

	manufactureSteeringWheelSystem(coche, steeringWheelType, steeringStructure);

	manufactureEngine(coche, typeOfEngine);

	manufactureExhaustSystem(coche, typeOfExhaustSystem);
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
	steeringWheelType,
	steeringStructure,
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
		steeringWheelType,
		steeringStructure,
		typeOfEngine,
		typeOfExhaustSystem
	);

	generateLicensePlate(coche, country);

	console.log(`Coche Ensamblado:`, coche);
	return coche;
}

const coche1 = assembleCar(
	answerBodyPanel, //Material del chasis
	answerDoorsNumber, //Numero de Puertas
	answerDoorChassis, // Material del Chasis de las puertas
	answerWindow, // Material de las Ventanas
	answerSeatNumber, // Numero de Asientos
	answerSeatMaterial, // Material de los Asientos
	"Piel de Coco", // Material de la Tapiceria
	"Criptonita", //Material de la Estructura del Chasis
	"Hidráulica", // Tipo de suspension
	3, // Numero de Ruedas
	"Cera", // Material de las LLantas
	6, // Tamaño de los Neumaticos
	"ABS", // Tipo de sistema de Frenos
	"Clásico", // Tipo de Volante
	"Asistida", // Tipo de estructura de Direccion
	"Gasolina", // Tipo de Motor
	"Deportivo", // Tipo de Sistema de Escape
	"italy" // Pais de Matriculación "spain", "france", "portugal", italy"
);

console.log(coche1);
