import isTypedArray from '../comp.se.200-lib/src/isTypedArray';

describe("isTypedArray function", () => {
    test("isTypedArra should return true when called with UintArray", () => {
        const a = new Uint16Array();
        const result = isTypedArray(a);
        expect(result).toBe(true);
    })

    test("isTypedArray should return false when called with unclassified array", () => {
        const result = isTypedArray([]);
        expect(result).toBe(false);
    })

})