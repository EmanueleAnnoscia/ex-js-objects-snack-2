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
function deepCopy (obj){
    //verifica se il parametro inserito sia effettivamente un oggetto
    if (obj === null || typeof obj !== "object") return obj;

    if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item));
  }

  const copy = {}

  for(let key in obj){
    if(obj.hasOwnProperty(key)){
        const value = obj[key];
    }
  }
}