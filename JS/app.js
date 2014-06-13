// (function(){

	function add(x, y) {
		return x + y;
	}


	function subtract(x,y) {
		return (x - y);
	}


	function multiply(x,y) {
		return (x * y);
	}

// //

	function divide(x,y) {
		return (x / y);
	}

// //

	function power(base, exponent) {
		if (exponent == 1){
			return base
		}
			return power (base, exponent -1) * base;
	}

// //

	function test_add_1(x,y) {
		var x = 5;
		var y = 4;
		return add(x, y);
	}

// //

	function test_add_2() {
		var x = 5;
		var y = 4;
		var z = 3;
		var q = add(x,y);
		return add(z, q);
	}

// //

	function test_subtract_1() {
		var x = 5;
		var y = 4;
		return subtract(x,y);
	}

//

	function test_subtract_2() {
		var x = 5;
		var y = 4;
		var z = 3;
		var q = subtract(x,y);
		return subtract(z,q);
	}

//Step 10.1
	var add1 = add(1, 2);
	console.log(add1);

//Step 10.2
	var add2 = 1 + add(2, 3));
	console.log(add2);

//Step 10.3
	var add3 = add(1,2) + add(3,4);
	console.log(add3);

//Step 10.4
	console.log(subtract(10, 9) );

//Step 10.5
	console.log(10 - subtract(19, 10) );

//Step 10.6
	console.log(subtract(20, 10 ) + subtract(19, 10 ));

//Step 10.7
	console.log(multiply(2, 3 ));

//Step 10.8
	console.log(2 * multiply(1, 3 ));

//Step 10.9
	console.log(multiply(1 , 2 ) + multiply(3, 4 ) );

//Step 10.10
	console.log(multiply)

// })();














