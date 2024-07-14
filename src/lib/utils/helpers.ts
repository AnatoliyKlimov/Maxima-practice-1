export type ArrayElement<MaybeArrayType> = MaybeArrayType extends readonly (infer ElementType)[]
	? ElementType extends unknown[]
		? ArrayElement<ElementType>
		: ElementType
	: MaybeArrayType;

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
