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
	expect(result).toBe(1);
 });



  

});	