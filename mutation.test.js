const { isPositive, isEven, hangIfTrue, crashIfZero } = require('./mutation');

test('isPositive retorna true para positivos', () => {
	expect(isPositive(5)).toBe(true); // matará o mutante
});

test('isEven retorna true para pares (mas não testa ímpares)', () => {
	expect(isEven(2)).toBe(true); // mutante pode sobreviver
});

test('hangIfTrue retorna true para false', () => {
	expect(hangIfTrue(false)).toBe(true); // mutação ativa trava a execução
});

test('crashIfZero retorna valor ou erro', () => {
	expect(() => crashIfZero(0)).toThrow(); // exceção ativada pelo mutante
});
