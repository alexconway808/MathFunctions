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
			return power (base, exponent -1) * base;
	}

// //

	function test_add_1(x,y) {
		var x = 5;
		var y = 4;
		return add(x, y);
	}

// //

	function test_add_2(x,y,z) {
		var x = 5;
		var y = 4;
		var z = 3;
		var q = add(x,y);
		return z + q;
	}

// //

	function test_subtract_1(x,y) {
		var x = 5;
		var y = 4;
	}

//

	function test_subtract_2(x,y,z) {
		var x = 5;
		var y = 4;
		var z = 3;
		var q = subtract(x,y);
		return z - q;
	}

//Step 10.1
	console.log(add(1, 2) );

//Step 10.2
	console.log(1 + add(2, 3));

//Step 10.3
	console.log(add(1, 2, 3, 4) );

//Step 10.4
	console.log(subtract(10, 9) );

//Step 10.5
	console.log(10 - subtract(19, 10) );

// })();














