const functions = require('./functions');

//toBe (compares primitives)
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

//NOT toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

//toEqual (compares objects)
test('User should be Mike Walsh', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Mike',
        lastName: 'Walsh'
    });
});

//Self-enclosed test
test('Should be under amount 50', () => {
    const load1 = 20;
    const load2 = 25;

    expect(load1 + load2).toBeLessThan(50);
});

//Test regular expressions (regex)
test('Should be no a in borrow', () => {
    expect('borrow').not.toMatch(/a/);
});

//Test with arrays

/*test('Admin should be in username', () => {
    usernames = ['John', 'George', 'Bennet', 'Admin'];
    expect(usernames).toContain('admin');
});*/

//integrate with axios to test on webpage

test('User feteched name should be Patricia Lebsack', () => {
    //need to define number of assertions for async data
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Patricia Lebsack')
        });
});