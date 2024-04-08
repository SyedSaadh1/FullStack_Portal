import { ALL_STACK, STACK } from './stack.contansts';

export default class TechnologyController {
	static getAllStackTypes() {
		return ALL_STACK;
	}

	static getStackByType(stackType: string) {
		return STACK[stackType];
	}
}
