describe("Calculator", function() {

    // Create a new instance everytime the function works - to avoid the errors
    // Set running total back to 0
    beforeEach(function() {
        calc = new Calculator;
    });

    // Create new instance
    var calc = new Calculator;

    describe("Addition function", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });

        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });

        it("should return an error if we don't supply two numbers", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});