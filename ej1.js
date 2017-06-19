var i = 0;
var x;
var cont;
var n;
var text = "";

function Timer(){
	x = setInterval(myPrint(), 2000);
}

function myPrint(n){
	while(i < n){
			if(i%2 == 0){
			  cont = i;
			}
		i++;
	}
	return cont;
}
Timer();
console.log(myPrint(10));