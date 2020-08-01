describe("My FizzBuzz function", function() {

    beforeEach(function() {
        number = new FizzBuzz();
    });

    describe("Divisible", function() {
        it("should return FizzBuzz if divisible by 3 and 5", function() {
            let num = FizzBuzz(15);
            expect(num).toBe("FizzBuzz");
        });
    });

    describe("Divisible", function() {
        it("should return Fizz if divisible by 3", function() {
            let num = FizzBuzz(9);
            expect(num).toBe("Fizz");
        });
    });

    describe("Divisible", function() {
        it("should return Buzz if divisible by 5", function() {
            let num = FizzBuzz(10);
            expect(num).toBe("Buzz");
        });
    });

    describe("Divisible", function() {
        it("should return the number if it is not divisible by 3 or 5", function() {
            let num = FizzBuzz(13);
            expect(num).toBe(num);
        });
    });

});