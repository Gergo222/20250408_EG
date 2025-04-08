const {sum, osszefuz, getGrade, addXTimes, arrayContains, arrayElement, convertItemsToString, mapArrayElements, getRandomByChance} = require("./app")


test("add 4 + 5 to equal 9", () => {
    expect(sum(4, 5)).toBe(9)
    expect(sum(3, 3)).toBeGreaterThan(3)
    expect(sum(3, 3)).toBeLessThan(10)
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

test("adding 2, 5 times to 10 equals 20", ()=>{
    expect(addXTimes(10, 2, 5)).toBe(20)
})

test("array contains 'apple'", ()=>{
    const tomb = ["apple", "orange", "banana"]

    expect(arrayContains(tomb, "apple")).toBeTruthy()
    expect(arrayContains(tomb, "egg")).toBeFalsy()
})

test("array length will be 1 longer after add", ()=>{
    const tomb = [1, 150, 2];
    expect(arrayElement([...tomb], 99)).toHaveLength(tomb.length + 1)
})

test("adding null will not incrase array length", ()=>{
    const tomb = [1, 150, 2]
    expect(arrayElement([...tomb], null)).toHaveLength(tomb.length)
})

test("mapped array first element is string", () => {
    const tomb = [1, 2, 3]
    const mapped = mapArrayElements(tomb)

    expect(mapped[0]).toStrictEqual('1')
})

test("get true or false by x chance", ()=>{
    expect(getRandomByChance(0)).toBeFalsy()
    expect(getRandomByChance(100)).toBeTruthy()
    expect(typeof getRandomByChance()).toBe("boolean")
})
