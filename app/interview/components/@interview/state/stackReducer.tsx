import { Stack } from '@prisma/client';
import { useReducer } from 'react';

interface IState {
  selectedStackType: null | string;
  selectedStack: null | Stack;
}

const INITIAL_STATE: IState = {
	selectedStackType: null,
	selectedStack: null
};

const ACTION = {
	SELECT_STACK_TYPE: 'SELECT_STACK_TYPE',
	SELECT_STACK: 'SELECT_STACK'
};

export function stackReducer(
	state = INITIAL_STATE,
	action: { type: string; payload: any }
) {
	switch (action.type) {
	case ACTION.SELECT_STACK_TYPE:
		return {
			...state,
			selectedStackType: action.payload,
			selectedStack: null
		};
	case ACTION.SELECT_STACK:
		return {
			...state,
			selectedStack: action.payload
		};
	default:
		return state;
	}
}

export const selectStackType = (payload: string) => ({
	type: ACTION.SELECT_STACK_TYPE,
	payload
});

export const selectStack = (payload: Stack) => ({
	type: ACTION.SELECT_STACK,
	payload
});

export const useStack = () => {
	const [stackState, dispatch] = useReducer(stackReducer, INITIAL_STATE);

	return {
		stackState,
		selectStackType: (payload: string) => dispatch(selectStackType(payload)),
		selectStack: (payload: Stack) => dispatch(selectStack(payload))
	};
};
