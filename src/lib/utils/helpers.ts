export type ArrayElement<MaybeArrayType> = MaybeArrayType extends readonly (infer ElementType)[]
	? ElementType extends unknown[]
		? ArrayElement<ElementType>
		: ElementType
	: MaybeArrayType;

export const unique = <T>(value: T[]) => Array.from(new Set<T>(value));

export const capitalize = (str: string) => str.slice(0, 1).toUpperCase() + str.slice(1);
