import { ChangeEventHandler, useState } from "react";

type TInputValue = HTMLInputElement["value"];

export const useRadioButtons = (name: string, defaultValue: TInputValue) => {
	const [value, setState] = useState(defaultValue);

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setState(e.target.value);
	};

	const inputProps = { name, type: "radio", onChange: handleChange };

	return [value, inputProps] as const;
};
