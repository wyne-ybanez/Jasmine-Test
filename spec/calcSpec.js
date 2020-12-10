describe("Calculator", function() {
    describe("Addition tests", function() {
        it ("should return 42", function () {
            expect(addition(20,22)).toBe(42)
        })
        it ("should return 26", function () {
            expect(addition(7, 19)).toBe(26)
        })
        it ("should return an error if we don't supply two numbers", function() {
            // takes the window argument because Alert() is a window method
            spyOn(window, "alert")
            addition("Hitchhikers", "Guide")
            // checks if "Error!" was used for calling the function
            expect(window.alert).toHaveBeenCalledWith("Error!")

        })
    })
})