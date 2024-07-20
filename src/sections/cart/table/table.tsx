"use client";

import Link from "next/link";
import Image from "next/image";

import { Button, TextField } from "@/lib/ui/elements";
import { useCart, useProducts } from "@/service";

import { cartMaxQuantity, TProduct } from "@/types";

import IconClose from "@/images/icons/close.svg";

import styles from "./table.module.css";

export const TableSection: React.FC = () => {
	const [cart, { updateProductQuantity, deleteProduct, clearCart }] = useCart();
	const [products] = useProducts({ ids: cart.map((product) => product.id) });

	const cartProducts = (products as TProduct[]).map((product, index) => ({
		...product,
		quantity: cart[index].quantity
	}));

	return (
		<section style={{ width: "100%" }}>
			<table className={styles.table}>
				<thead>
					<tr className={styles.tableRow}>
						<th className={styles.tableCell}>Product</th>
						<th className={styles.tableCell}>Price</th>
						<th className={styles.tableCell}>Quantity</th>
						<th className={styles.tableCell}>Subtotal</th>
					</tr>
				</thead>
				<tbody>
					{cartProducts &&
						cartProducts.map((product) => (
							<tr className={styles.tableRow} key={`cart-product-${product.id}`}>
								<td className={styles.tableCell}>
									<div>
										<Image
											width={0}
											height={0}
											src={product.image}
											alt={product.title}
											sizes="100vw"
											priority
											style={{
												width: 50,
												height: 44,
												objectFit: product.imageFit || "contain"
											}}
										/>
										<Link href={`/product/${product.id}`}>{product.title}</Link>
										<Button
											type="icon"
											onClick={() => deleteProduct({ id: product.id })}
											className={styles.deleteCartProductBtn}
											style={{
												position: "absolute",
												top: 0,
												padding: 4,
												backgroundColor: "red"
											}}
										>
											<Image src={IconClose} alt="" />
										</Button>
									</div>
								</td>
								<td className={styles.tableCell}>
									<div>${product.price}</div>
								</td>
								<td className={styles.tableCell}>
									<div>
										<TextField
											as="secondary"
											type="number"
											min={1}
											max={cartMaxQuantity}
											required
											value={product.quantity}
											onChange={(e) => {
												let value = Number(e.target.value);

												if (value < 1) value = 1;
												else if (value > cartMaxQuantity)
													value = cartMaxQuantity;

												updateProductQuantity({
													id: product.id,
													quantity: value
												});
											}}
											style={{ width: 72 }}
										/>
									</div>
								</td>
								<td className={styles.tableCell}>
									<div>${product.quantity * product.price}</div>
								</td>
							</tr>
						))}
					{cartProducts.length == 0 && (
						<tr className={styles.tableRow}>
							<td className={styles.tableCell}>No data</td>
						</tr>
					)}
				</tbody>
			</table>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				<Button as={Link} href="#" type="secondary">
					Return To Shop
				</Button>
				<Button type="secondary" onClick={() => clearCart()}>
					Clear Cart
				</Button>
			</div>
		</section>
	);
};
