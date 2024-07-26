import { notFound } from "next/navigation";
import ProductSection from "@/sections/product";
import { defaultProducts } from "@/types/__mocks__";

interface ProductPageProps {
	params: { id: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
	const { id } = params;
	const product = defaultProducts.find((product) => product.id === id);

	if (!product) {
		notFound();
	}

	return <ProductSection id={id} />;
};

export default ProductPage;

export async function generateStaticParams() {
	const paths = defaultProducts.map((product) => ({
		id: product.id
	}));

	return paths;
}
