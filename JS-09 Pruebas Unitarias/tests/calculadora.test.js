const calculadora = require("../calculadora")


//console.log(calculadora.suma);

//Prueba unitaria
/*
test('Debe sumar número a + b', () => {
    expect(calculadora.suma(10,10)).toBe(20);
})

test('Debe restar número a - b', () => {
    expect(calculadora.resta(100,50)).toBe(50);
})

test('Debe multiplicar número a * b', () => {
    expect(calculadora.multiplicacion(5,2)).toBe(10);
})

test('Debe dividir número a / b', () => {
    expect(calculadora.division(50,2)).toBe(25);
})
*/

test('Realiza pruebas para toda la calculadora', () => {
    expect(calculadora.resta(100,50)).toBe(50);
    expect(calculadora.suma(100,50)).toBe(150);
    expect(calculadora.multiplicacion(50,2)).toBe(100);
    expect(calculadora.division(100,50)).toBe(2);
})