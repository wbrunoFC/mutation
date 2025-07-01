// 1. Killed – mutação simples que será pega pelo teste
function isPositive(n) {
	return n > 0;
}

// 2. Survived – mutação vai escapar do teste fraco
function isEven(n) {
	return n % 2 === 0;
}

// 3. No coverage – sem nenhum teste
function multiply(a, b) {
	return a * b;
}

// 4. Timeout – mutação poderá causar loop infinito
function hangIfTrue(cond) {
	if (cond) {
		while (true) {} // Mutação aqui trava o processo
	}
	return true;
}

// 5. Runtime error – mutação pode gerar exceção não tratada
function crashIfZero(n) {
	return n === 0 ? foo.bar.baz : n; // erro se n == 0
}

// 6. Compile error – mutação pode tornar o código inválido
function invalidSyntax() {
	return eval('return ===;'); // não pode ser parseado corretamente
}

// 7. Ignored – função ignorada manualmente
function ignoredFunction() {
	return 42;
}

module.exports = {
	isPositive,
	isEven,
	multiply,
	hangIfTrue,
	crashIfZero,
	invalidSyntax,
	ignoredFunction,
};
