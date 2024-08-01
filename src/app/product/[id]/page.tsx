import { ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import ProductSection from "@/client/sections/product";

import { defaultProducts } from "@/types/__mocks__";

interface ProductPageProps {
	params: { id: string };
}

export async function generateStaticParams() {
	return defaultProducts.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps, parent: ResolvingMetadata) {
	const product = defaultProducts.find((product) => product.id == params.id);

	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: product!.title,
		openGraph: {
			images: [product!.image ? product!.image : "", ...previousImages]
		}
	};
}

export default function ProductPage({ params }: ProductPageProps) {
	const product = defaultProducts.find((product) => product.id === params.id);

	if (!product) notFound();

	return <ProductSection id={params.id} />;
}
