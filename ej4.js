
class Humano{
	constructor(name, old, color){
		this.name = name;
		this.old = old;
		this.color = color;
	}
	nombre() {
		return this.name;
	}

	edad(){
		return this.old;
	}

	colorcito(){
		return this.color;
	}

	toJSON(){
		JSON.stringify({ name : this.name, old : this.old, color: this.edad });
	}
}

var maria =  new Humano("Maria", 18, "rosa");
console.log(maria.nombre());
console.log(maria.edad());
console.log(maria.colorcito());
console.log(maria.toJSON());