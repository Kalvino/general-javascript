const rewire = require("rewire")
const has_path = rewire("./has-path")
const hasPath = has_path.__get__("hasPath")
// @ponicode
describe("hasPath", () => {
    test("0", () => {
        let result = hasPath(["Michael", "Jean-Philippe", "Pierre Edouard", "Jean-Philippe"], "http://placeimg.com/640/480", "Jean-Philippe")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = hasPath(["Jean-Philippe", "Anas", "Anas", "Edmond"], "http://placeimg.com/640/480", "Michael")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = hasPath("Anas", "http://placeimg.com/640/480", "Anas")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = hasPath("Edmond", "http://placeimg.com/640/480", "Anas")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = hasPath(["Anas", "Anas", "George", "Michael"], "http://placeimg.com/640/480", "Pierre Edouard")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = hasPath("", "", "")
        expect(result).toMatchSnapshot()
    })
})
