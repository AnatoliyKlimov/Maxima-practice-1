export type ArrayElement<MaybeArrayType> = MaybeArrayType extends readonly (infer ElementType)[]
	? ElementType extends unknown[]
	? ArrayElement<ElementType>
	: ElementType
	: MaybeArrayType;

export const unique = <T>(value: T[]) => Array.from(new Set<T>(value));

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const capitalizeFirstLetter = (str: string) =>
	str.charAt(0).toUpperCase() + str.slice(1);
