A();

function C() {
	console.log("C");
    d();
}

function E(f) {
	console.log("E");
	F();
//	var f = F();
}

function A() {
	console.log("A");
	B();
};

var C;

function G() {
	console.log("G");
	H();

	   function H() {
		console.log("H");
		I();
	};
}

var D = d;

function d() {
	console.log("D");
	E();
}

function I() {
	console.log("I");
	J();
	J();
}

function B() {
	console.log("B");
	C();
};

function F() {
	console.log("F");
	G();
};


 var rest = "KLMNOPQRSTUVWXYZ".split("");
      
for (var i=0; i<rest.length; i++) {
          function K(){
		// define the current function
		window[rest[i]] = function () {
			console.log(rest[i]);
			if (i < (rest.length-1)) {
				// TODO: call the next function
			}
		};
	};
}

function J() {
    
	J = function() {
		console.log("J");
            return K();
	};
    
};
var C = function () {
	console.log("C");
	D();
};

