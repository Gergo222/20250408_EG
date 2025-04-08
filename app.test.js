const {sum, osszefuz, getGrade} = require("./app")


test("add 4 + 5 to equal 9", () => {
    expect(sum(4, 5)).toBe(9)
})

test("concat apple and orange we get 'apple - orange'", () => {
    expect(osszefuz("apple", "orange")).toBe("apple - orange")
})

test("get 4 grade for 65 point", () => {
    expect(getGrade(100, 65)).toBe(4)
})

test("get 5 grade for 85 points", () => {
    expect(getGrade(100, 85)).toBe(5)
})
test("get specific grade", ()=> {
    expect(getGrade(100, 10)).toBe(1)
    expect(getGrade(100, 41)).toBe(2)
    expect(getGrade(100, 55)).toBe(3)
})