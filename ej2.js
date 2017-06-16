function findInArray(array, value){
	for (var i = 0; i < array.length; i++) {
   		if (array[i] == value) {
   			return i;
   		}
    }
}

array1= ["hola", 2, 'mundo', "c", null];
valuee = "mundo";
console.log(findInArray(array1, valuee));