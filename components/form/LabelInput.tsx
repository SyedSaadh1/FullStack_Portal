import React from 'react';
import { Input, InputProps } from '../ui/input';

import { LabelProps } from '@radix-ui/react-label';

export interface LabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputProps: InputProps;
  labelProps: LabelProps;
}

const LabelInput = React.forwardRef<HTMLDivElement, LabelInputProps>(
	({ labelProps, inputProps }) => {
		return (
			<div className="flex flex-col gap-2">
				<label {...labelProps} />
				<Input {...inputProps} />
			</div>
		);
	}
);
LabelInput.displayName = 'LabelInput';

export { LabelInput };
