describe("Math Functions", function() {
	var result; 


//add function

  it("should add numbers properly", function() {
  	result = add(2, 3);
  	expect(result).toBe(5);

  });


//subtract function

  it("should subtract numbers properly", function(){
  	result = subtract(2,3);
  	expect(result).toBe(-1);
  });


//multiply function

  it("should multiply numbers properly", function(){
	result = multiply(2,3);
	expect(result).toBe(6);
 });


//divide function

  it("should divide numbers properly", function(){
	result = divide(100,10);
	expect(result).toBe(10);
 });


//power function

  it("should take a base number and turn it to the power of the exponent properly", function(){
	result = power(10,2);
	expect(result).toBe(100);
 });


//test_add_1 function

  it("should add two numbers properly to equal 9", function(){
	result = add(5,4);
	expect(result).toBe(9);
 });


//test_add_2 function

  it("should add two numbers, take that result then add another number", function(){
	result = test_add_2();
	expect(result).toBe(12);
 });


//test_subtract_1 function

	it("should subtract two numbers properly to equal")






});	