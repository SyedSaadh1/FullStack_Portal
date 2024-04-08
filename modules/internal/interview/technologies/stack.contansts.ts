import { data } from './technologies.mock';

export const ALL_STACK = [...new Set(data.Stacks.map(stack => stack.type))];

export const STACK = data.Stacks.reduce((prev, curr) => {
	prev[curr.type] = [...(prev[curr.type] || []), curr];
	return prev;
}, {} as any);

// export const TOOL = {
// 	[STACK.FULLSTACK]: [
// 		{ name: 'MERN Stack', },
// 		{ name: 'MEAN Stack' },
// 		{ name: 'MEVN Stack' },
// 	]
// };
