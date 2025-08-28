//oggetto di riferimento per esercizio
const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
	restaurant: {
		name: "Hyur's Burgers",
		welcomeClient: () => {
			console.log("Benvenuto!");
		},
		address: {
			street: 'Main Street',
			number: 123,
			showAddress: () => {
				console.log("Main Street 123");
			}
		},
		isOpen: true,
	}
}

//funzione

//type of metodo per riconoscere il valore di un eleemnto

function deepCopy(obj){

	if(Array.isArray(obj) === true){
		return obj.map(item => deepCopy(item))
	};

	if(typeof obj !== 'object' || obj === null){
		return obj
	};
	const copy = {};

	for (const key in obj){
		const value = obj[key]
		if (typeof value !== 'object'){
			copy[key] = value
		}else{
			copy[key] = deepCopy (value)
		}
	}
	return copy;
}


const chefCopy = deepCopy(chef)

//per completezza si dovrebbe fare il controllo se l'oggetto in analisi sia arry od oggetto vero proprio e in questo caso si utilizzerà Array.isArray(arrayDaControllare) e restituirà un true o false e di conseguenza il controllo se è true return array