// FABRICA DE COCHES SICLARO
console.log(`Bienvenidos a la fabrica de coches`);
//##PREGUNTA SOBRE LA CARROCERIA
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

function generateSpanishLicensePlate(coche, country) {
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

function generatePortugueseLicensePlate(coche, country) {
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

function generateFrenchLicensePlate(coche, country) {
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

function generateItalyLicensePlate(coche, country) {
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

function generateLicensePlate(coche, country = "spain") {
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
function manufactureSeat(seatMaterial = "Cuero Sintético") {
	console.log(`Fabricando Asiento de ${seatMaterial}...`);
	console.log(`(✅)Asiento de ${seatMaterial} fabricado con éxito.`);
	return { Asiento: seatMaterial };
}
// const asiento = manufactureSeat();
// console.log(asiento);

//#TAPICERIA
function manufactureUpholstery(coche, upholsteryMaterial = "Cuero Natural") {
	console.log(`Fabricando Tapiceria de ${upholsteryMaterial}...`);
	console.log(`(✅)Tapiceria de ${upholsteryMaterial} fabricada con éxito.`);
	coche.carroceria.tapiceria = upholsteryMaterial;
	return coche.carroceria.tapiceria;
}
// console.log(manufactureUpholstery());

//#ESTRUCTURACARROCERIA
function manufactureBodyPanel(coche, bodyPanelMaterial = "Fibra de Carbono") {
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
function manufactureSuspensionSystem(coche, typeOfSuspension = "Hidráulica") {
	console.log(`Fabricando sistema de Suspensión ${typeOfSuspension}...`);
	console.log(`(✅)Sistema de Suspensión ${typeOfSuspension} fabricado con éxito.`);
	coche.chasis.sistemaDeSuspension = typeOfSuspension;
	return coche.chasis.sistemaDeSuspension;
}
// console.log(manufactureSuspensionSystem());

//#LLANTA
function manufactureWheelRim(wheelRimMaterial = "Fibra de Carbono") {
	console.log(`Fabricando LLanta de ${wheelRimMaterial}...`);
	console.log(`(✅)LLanta de ${wheelRimMaterial} fabricada con éxito.`);
	return { llanta: wheelRimMaterial };
}
// console.log(manufactureWheelRim());

//#NEUMATICO
function manufactureWheelTire(tireSize = "R16") {
	console.log(`Fabricando neumatico ${tireSize}...`);
	console.log(`(✅)Neumatico ${tireSize} fabricado con éxito.`);
	return { neumatico: tireSize };
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

//#SISTEMA DE DIRECCION
function manufactureSteeringWheelSystem(
	coche,
	steeringWheelType = "Deportivo",
	steeringStructure = "Asistida Eléctrica"
) {
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
function manufactureEngine(coche, typeOfEngine = "Hidrógeno") {
	console.log(`Fabricando Motor de ${typeOfEngine}...`);
	console.log(`(✅)Motor de ${typeOfEngine} fabricado con éxito.`);
	coche.chasis.motor = typeOfEngine;
	return coche.chasis.motor;
}
// console.log(manufactureEngine());

//#SISTEMADEESCAPE
function manufactureExhaustSystem(coche, typeOfExhaustSystem = "Doble") {
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

// console.log(coche1);
const customizedCars = [];
function customCarMaker() {
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
	if (
		!askAboutBodyPanel ||
		askAboutBodyPanel === null ||
		askAboutBodyPanel === "" ||
		askAboutBodyPanel === undefined
	) {
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
		Material Predeterminado: Cuero Sintético
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

	//##PREGUNTA SOBRE LA TAPICERIA
	const askAboutUpholstery = prompt(`
		¿Material de la Tapiceria?
		- Cuero Natural
		- Cuero Sintético
		- Tela
		- Alcántara
		- Plástico
		Material Predeterminado: Cuero Natural
		`);

	let answerUpholsteryMaterial;
	if (
		!askAboutUpholstery ||
		askAboutUpholstery === "" ||
		askAboutUpholstery === null ||
		askAboutUpholstery === undefined
	) {
		answerUpholsteryMaterial = undefined;
	}

	if (
		askAboutUpholstery === "cuero natural" ||
		askAboutUpholstery === "Cuero Natural" ||
		askAboutUpholstery === "cuero sintético" ||
		askAboutUpholstery === "Cuero Sintético" ||
		askAboutUpholstery === "tela" ||
		askAboutUpholstery === "Tela" ||
		askAboutUpholstery === "alcántara" ||
		askAboutUpholstery === "Alcántara" ||
		askAboutUpholstery === "plástico" ||
		askAboutUpholstery === "Plástico"
	) {
		answerUpholsteryMaterial = askAboutUpholstery;
	}

	//##PREGUNTA ESTRUCTURA CHASSIS
	const askAboutBodyChassis = prompt(`
		¿De que Material quieres la estructura de tu chassis?
		- Acero
		- Aluminio
		- Aleación de Magnesio
		- Fibra de Carbono
		- FRP (Plastico Reforzado con Fibra de Vidrio)
		Material Predeterminado: Fibra de Carbono
		`);

	let answerBodyChassis;
	if (
		!askAboutBodyChassis ||
		askAboutBodyChassis === "" ||
		askAboutBodyChassis === null ||
		askAboutBodyChassis === undefined
	) {
		answerBodyChassis = undefined;
	}

	if (
		askAboutBodyChassis === "acero" ||
		askAboutBodyChassis === "Acero" ||
		askAboutBodyChassis === "aluminio" ||
		askAboutBodyChassis === "Aluminio" ||
		askAboutBodyChassis === "aleación de magnesio" ||
		askAboutBodyChassis === "Aleación de Magnesio" ||
		askAboutBodyChassis === "fibra de carbono" ||
		askAboutBodyChassis === "Fibra de Carbono" ||
		askAboutBodyChassis === "frp" ||
		askAboutBodyChassis === "FRP"
	) {
		answerBodyChassis = askAboutBodyChassis;
	}

	//##PREGUNTA SOBRE SISTEMA DE SUSPENSIÓN
	const askAboutSuspensionSystem = prompt(`
		¿Que tipo de suspension deseas instalar?
		- Independiente
		- Dependiente
		- Hidráulica
		- Hidroneumática
		- Electrónica
		Suspension predeterminada: Hidráulica
		`);

	let answerSuspension;
	if (
		!askAboutSuspensionSystem ||
		askAboutSuspensionSystem === "" ||
		askAboutSuspensionSystem === null ||
		askAboutSuspensionSystem === undefined
	) {
		answerSuspension = undefined;
	}

	if (
		askAboutSuspensionSystem === "independiente" ||
		askAboutSuspensionSystem === "Independiente" ||
		askAboutSuspensionSystem === "dependiente" ||
		askAboutSuspensionSystem === "Dependiente" ||
		askAboutSuspensionSystem === "hidráulica" ||
		askAboutSuspensionSystem === "Hidráulica" ||
		askAboutSuspensionSystem === "hidroneumática" ||
		askAboutSuspensionSystem === "Hidroneumática" ||
		askAboutSuspensionSystem === "electrónica" ||
		askAboutSuspensionSystem === "Electrónica"
	) {
		answerSuspension = askAboutSuspensionSystem;
	}

	//##PREGUNTA SOBRE NUMERO DE RUEDAS
	const askAboutWheelsNumber = prompt(`
			¿Cuantas ruedas quieres Instalar?
			- 4
			- 5 (4 Instaladas + 1 de repuesto)
			Ruedas Instaladas predeterminada: 4
			`);

	let answerWheelsNumber;
	if (!askAboutWheelsNumber || askAboutWheelsNumber < 4 || askAboutWheelsNumber > 5) {
		answerWheelsNumber = undefined;
	}

	if (askAboutWheelsNumber >= 4 && askAboutWheelsNumber <= 5) {
		answerWheelsNumber = Math.floor(askAboutWheelsNumber);
	}

	//##PREGUNTA SOBRE MATERIAL DE LAS LLANTAS
	const askAboutWheelRimMaterial = prompt(`
		¿Material para las LLantas?
		- Acero
		- Aleación de Aluminio
		- Aleación de Magnesio
		- Fibra de Carbono
		- Plasticos reforzados
		- Acero Cromado
		Material Predeterminado: Fibra de Carbono
		`);

	let answerWheelRimMaterial;
	if (
		!askAboutWheelRimMaterial ||
		askAboutWheelRimMaterial === "" ||
		askAboutWheelRimMaterial === null ||
		askAboutWheelRimMaterial === undefined
	) {
		answerWheelRimMaterial = undefined;
	}

	if (
		askAboutWheelRimMaterial === "acero" ||
		askAboutWheelRimMaterial === "Acero" ||
		askAboutWheelRimMaterial === "aleación de aluminio" ||
		askAboutWheelRimMaterial === "Aleación de Aluminio" ||
		askAboutWheelRimMaterial === "aleación de magnesio" ||
		askAboutWheelRimMaterial === "Aleación de Magnesio" ||
		askAboutWheelRimMaterial === "fibra de carbono" ||
		askAboutWheelRimMaterial === "Fibra de Carbono" ||
		askAboutWheelRimMaterial === "plásticos reforzados" ||
		askAboutWheelRimMaterial === "Plásticos reforzados" ||
		askAboutWheelRimMaterial === "acero cromado" ||
		askAboutWheelRimMaterial === "Acero Cromado"
	) {
		answerWheelRimMaterial = askAboutWheelRimMaterial;
	}

	//##PREGUNTA TAMAÑO NEUMATICO
	const askAboutWheelTireSize = prompt(`
		¿Que tamaño de neumaticos quieres?
		- R15C
		- R16
		- R17
		- R20
		Tamaño de Neumáticos predeterminado: R16
		`);

	let answerWheelTireSize;
	if (
		!askAboutWheelTireSize ||
		askAboutWheelTireSize === "" ||
		askAboutWheelTireSize === null ||
		askAboutWheelTireSize === undefined
	) {
		answerWheelTireSize = undefined;
	}

	if (
		askAboutWheelTireSize === "R15C" ||
		askAboutWheelTireSize === "R16" ||
		askAboutWheelTireSize === "R17" ||
		askAboutWheelTireSize === "R20"
	) {
		answerWheelTireSize = askAboutWheelTireSize;
	}

	//##PREGUNTA SOBRE SISTEMA DE FRENO
	const askAboutBrakeSystem = prompt(`
			¿Que sistema de frenos quieres que instalemos?
			- Disco
			- Tambor
			- Hidráulico
			- de Mano
			- ABS
			`);

	let answerBrakeSystem;
	if (
		!askAboutBrakeSystem ||
		askAboutBrakeSystem === "" ||
		askAboutBrakeSystem === null ||
		askAboutBrakeSystem === undefined
	) {
		answerBrakeSystem = undefined;
	}

	if (
		askAboutBrakeSystem === "disco" ||
		askAboutBrakeSystem === "Disco" ||
		askAboutBrakeSystem === "tambor" ||
		askAboutBrakeSystem === "Tambor" ||
		askAboutBrakeSystem === "hidráulico" ||
		askAboutBrakeSystem === "Hidráulico" ||
		askAboutBrakeSystem === "de mano" ||
		askAboutBrakeSystem === "de Mano" ||
		askAboutBrakeSystem === "ABS"
	) {
		answerBrakeSystem = askAboutBrakeSystem;
	}

	//##PREGUNTAS SOBRE EL VOLANTE
	const askAboutSteeringWheelType = prompt(`
		¿Que tipo de Volante quiere instalar al Coche?
		- Estandar
		- Deportivo
		- Multifuncional
		Volante instalado predeterminado: Deportivo
		`);

	let answerSteeringWheelType;
	if (
		!askAboutSteeringWheelType ||
		askAboutSteeringWheelType === "" ||
		askAboutSteeringWheelType === null ||
		askAboutSteeringWheelType === undefined
	) {
		answerSteeringWheelType = undefined;
	}

	if (
		askAboutSteeringWheelType === "estandar" ||
		askAboutSteeringWheelType === "Estandar" ||
		askAboutSteeringWheelType === "deportivo" ||
		askAboutSteeringWheelType === "Deportivo" ||
		askAboutSteeringWheelType === "multifuncional" ||
		askAboutSteeringWheelType === "Multifuncional"
	) {
		answerSteeringWheelType = askAboutSteeringWheelType;
	}

	//##PREGUNTAS SOBRE LA ESTRUCTURA DE DIRECCION
	const askAboutSteeringWheelStructure = prompt(`
		¿Que tipo de sistema de direccion quieres instalar?
		- Mecánica
		- Asistida Hidráulica
		- Asistida Electrohidráulica
		- Asistida Electrica
		Tipo de Direccion Predeterminada: Asistida Eléctrica
		`);

	let answerSteeringWheelStructure;
	if (
		!askAboutSteeringWheelStructure ||
		askAboutSteeringWheelStructure === "" ||
		askAboutSteeringWheelStructure === null ||
		askAboutSteeringWheelStructure === undefined
	) {
		answerSteeringWheelStructure = undefined;
	}

	if (
		askAboutSteeringWheelStructure === "mecánica" ||
		askAboutSteeringWheelStructure === "Mecánica" ||
		askAboutSteeringWheelStructure === "asistida hidráulica" ||
		askAboutSteeringWheelStructure === "Asistida Hidráulica" ||
		askAboutSteeringWheelStructure === "asistida electrohidráulica" ||
		askAboutSteeringWheelStructure === "Asistida Electrohidráulica" ||
		askAboutSteeringWheelStructure === "asistida eléctrica" ||
		askAboutSteeringWheelStructure === "Asistida Eléctrica"
	) {
		answerSteeringWheelStructure = askAboutSteeringWheelStructure;
	}

	//##PREGUNTAS SOBRE EL TIPO DE MOTOR
	const askAboutMotorType = prompt(`
		¿Que tipo de motor quieres instalar en el coche?
		- Gasolina
		- Diésel
		- GLP
		- Eléctrico
		- Hidrógeno
		Tipo de Motor Predeterminado: Hidrógeno
		`);

	let answerMotorType;
	if (
		!askAboutMotorType ||
		askAboutMotorType === "" ||
		askAboutMotorType === null ||
		askAboutMotorType === undefined
	) {
		answerMotorType = undefined;
	}

	if (
		askAboutMotorType === "gasolina" ||
		askAboutMotorType === "Gasolina" ||
		askAboutMotorType === "diésel" ||
		askAboutMotorType === "Diésel" ||
		askAboutMotorType === "glp" ||
		askAboutMotorType === "GLP" ||
		askAboutMotorType === "eléctrico" ||
		askAboutMotorType === "Eléctrico" ||
		askAboutMotorType === "hidrógeno" ||
		askAboutMotorType === "Hidrógeno"
	) {
		answerMotorType = askAboutMotorType;
	}

	//##PREGUNTAS SOBRE SISTEMA DE ESCAPE
	const askAboutExhaustSystem = prompt(`
		¿Que tipo de sistema de escape quieres instalar en el coche?
		- Simple
		- Doble
		- De alto flujo
		- Con catalizador
		Escape predeterminado: Doble
		`);

	let answerExhaustSystem;
	if (
		!askAboutExhaustSystem ||
		askAboutExhaustSystem === "" ||
		askAboutExhaustSystem === null ||
		askAboutExhaustSystem === undefined
	) {
		answerExhaustSystem = undefined;
	}

	if (
		askAboutExhaustSystem === "simple" ||
		askAboutExhaustSystem === "Simple" ||
		askAboutExhaustSystem === "doble" ||
		askAboutExhaustSystem === "Doble" ||
		askAboutExhaustSystem === "de alto flujo" ||
		askAboutExhaustSystem === "De alto flujo" ||
		askAboutExhaustSystem === "con catalizador" ||
		askAboutExhaustSystem === "Con catalizador"
	) {
		answerExhaustSystem = askAboutExhaustSystem;
	}

	//##PREGUNTAS SOBRE EL PAIS DE MATRICULACIÓN
	const askAboutLicensePlate = prompt(`
		¿Para que pais quiere matricular el Coche?
		- spain
		- portugal
		- france
		- italy
		Matriculacion predeterminada: spain
		`);

	let answerlicensePlate;
	if (
		!askAboutLicensePlate ||
		askAboutLicensePlate === "" ||
		askAboutLicensePlate === null ||
		askAboutLicensePlate === undefined
	) {
		answerlicensePlate = undefined;
	}

	if (
		askAboutLicensePlate === "spain" ||
		askAboutLicensePlate === "Spain" ||
		askAboutLicensePlate === "portugal" ||
		askAboutLicensePlate === "Portugal" ||
		askAboutLicensePlate === "france" ||
		askAboutLicensePlate === "France" ||
		askAboutLicensePlate === "italy" ||
		askAboutLicensePlate === "Italy"
	) {
		answerlicensePlate = askAboutLicensePlate.toLowerCase();
	}

	const coche1 = assembleCar(
		answerBodyPanel, //Material del chasis
		answerDoorsNumber, //Numero de Puertas
		answerDoorChassis, // Material del Chasis de las puertas
		answerWindow, // Material de las Ventanas
		answerSeatNumber, // Numero de Asientos
		answerSeatMaterial, // Material de los Asientos
		answerUpholsteryMaterial, // Material de la Tapiceria
		answerBodyChassis, //Material de la Estructura del Chasis
		answerSuspension, // Tipo de suspension
		answerWheelsNumber, // Numero de Ruedas
		answerWheelRimMaterial, // Material de las LLantas
		answerWheelTireSize, // Tamaño de los Neumaticos
		answerBrakeSystem, // Tipo de sistema de Frenos
		answerSteeringWheelType, // Tipo de Volante
		answerSteeringWheelStructure, // Tipo de estructura de Direccion
		answerMotorType, // Tipo de Motor
		answerExhaustSystem, // Tipo de Sistema de Escape
		answerlicensePlate // Pais de Matriculación "spain", "france", "portugal", italy"
	);
	customizedCars.push(coche1);

	return coche1;
}

console.log(customCarMaker());
console.log(customCarMaker());
console.log(customCarMaker());


// TENGO DUDAS DE SI LO HE HECHO BIEN AQUI O NO (¿QUIERO QUE CADA VEZ QUE SE CREE UN COCHE CON LOS PROMPTS SE GUARDE EN ALGUN SITIO)

console.log(customizedCars);
