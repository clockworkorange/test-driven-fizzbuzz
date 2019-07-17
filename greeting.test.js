// greeting.test.js
const greeting = guest => `Hello, ${guest}!`;

describe('greeting()', () => { //a test suite

    it('says hello', () => { //a test
        expect(greeting('Jest')).toBe('Hello, Jest!');
    });

});