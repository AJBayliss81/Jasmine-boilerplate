describe("Calculator", function() {

    beforeEach(function() {
        calc = new Calculator;
    });
    
    describe("Addition tests", function() {
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

    describe("Subtraction tests", function() {
        it("should return 18", function() {
            calc.add(31);
            calc.subtract(13);
            expect(calc.value).toBe(18);
        });
        it("should return 35", function() {
            calc.add(42);
            calc.subtract(7);
            expect(calc.value).toBe(35);
        });
    });

    describe("Multiplication tests", function() {
        it("should return 52", function() {
            calc.add(13);
            calc.multiply(4);
            expect(calc.value).toBe(52);
        });
        it("should return 48", function() {
            calc.add(6);
            calc.multiply(8);
            expect(calc.value).toBe(48);
        });
    });

    describe("Division tests", function() {
        it("should return 9", function() {
            calc.add(27);
            calc.divide(3);
            expect(calc.value).toBe(9);
        });
        it("should return 16", function() {
            calc.add(48);
            calc.divide(3);
            expect(calc.value).toBe(16);
        });
    });
});
