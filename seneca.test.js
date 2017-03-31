/* eslint no-undef: ["off"] */

const seneca = require('./seneca.js');

/**
 * Tests for seneca.isValidEmail()
 */
describe("seneca.isValidEmail()", () => {
    test("simple myseneca address", () => {
        const simpleEmail = "someone@myseneca.ca";
        expect(seneca.isValidEmail(simpleEmail)).toBe(true);
    });
    test("simple myseneca faculty address", () => {
        const simpleEmail = "some.one@senecacollege.ca";
        expect(seneca.isValidEmail(simpleEmail)).toBe(true);
    });
    test("old style of seneca address e.g. 'some.one@senecac.on.ca' ", () => {
        const simpleEmail = "some.one@senecac.on.ca";
        expect(seneca.isValidEmail(simpleEmail)).toBe(true);
    });
    test("valid address containing leading and trailing spaces", () => {
        const simpleEmail = " someone@myseneca.ca ";
        expect(seneca.isValidEmail(simpleEmail)).toBe(false);
    });
    test("null is being passed", () => {
        const simpleEmail = null;
        expect(seneca.isValidEmail(simpleEmail)).toBe(false);
    });
    test("number is being passed", () => {
        const simpleEmail = 1;
        expect(seneca.isValidEmail(simpleEmail)).toBe(false);
    });
});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe("seneca.formatSenecaEmail()", () => {
    // error output
    const error = "Error!";
    test("a valid name e.g. 'Dmytro Sych' ", () => {
        const name = "Dmytro Sych";
        expect(seneca.formatSenecaEmail(name)).toBe("dsych@myseneca.ca");
    });
    test("name does not contain space delimiter", () => {
        const name = "mshaw";
        expect(seneca.formatSenecaEmail(name)).toBe(error);
    });
    test("pass null for name", () => {
        const name = null;
        expect(seneca.formatSenecaEmail(name)).toBe(error);
    });
    test("name contains trailing spaces", () => {
        const name = " Dmytro Sych ";
        expect(seneca.formatSenecaEmail(name)).toBe(error);
    });
    test("name is a number", () => {
        const name = 1;
        expect(seneca.formatSenecaEmail(name)).toBe(error);
    });
});
