describe("My whatCanIDrink function", function() {
    
    beforeEach(function() {
        drink = new whatCanIDrink();
    });

    describe("Check age", function() {
        it("should not return a drink if age is called as whatCanIDrink(-3)", function() {
            let age = whatCanIDrink(-3);
            expect(age).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
    });

    describe("Check age", function() {
        it("should return Toddy if whatCanIDrink(12)", function() {
            let age = whatCanIDrink(12);
            expect(age).toBe("Drink Toddy");
        });
    });

    describe("Check age", function() {
        it("should return Coke if whatCanIDrink(16)", function() {
            let age = whatCanIDrink(16);
            expect(age).toBe("Drink Coke");
        });
    });
    
    describe("Check age", function() {
        it("should return Beer if whatCanIDrink(19)", function() {
            let age = whatCanIDrink(19);
            expect(age).toBe("Drink Beer");
        });
    });
    
    describe("Check age", function() {
        it("should return Whiskey if whatCanIDrink(35)", function() {
            let age = whatCanIDrink(35);
            expect(age).toBe("Drink Whiskey");
        });
    });
    
    describe("Check age", function() {
        it("should not return a drink if age is called as whatCanIDrink(135)", function() {
            let age = whatCanIDrink(135);
            expect(age).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
    });
});