"use strict";

class Calc {
	constructor() {
		this.calc = {};
	}

	calculate(str) {
		const strToArr = str.split(" ");

		this.calc.op = () => +strToArr[0] + +strToArr[2];

		return this.calc.op();
	}

	addMethod(op, fn) {
		this.calc[op] = fn;
	}
}

const calc = new Calc();

console.log(calc.calculate("1 + 1"));
calc.addMethod("*", (a, b) => a * b);
console.log(calc.calculate("2 * 2"));
