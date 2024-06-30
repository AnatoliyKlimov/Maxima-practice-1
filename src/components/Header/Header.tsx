import Link from "next/link";
import Image from "next/image";

import { fontInter } from "@/app/fonts";
import Navigation from "@/components/Navigation";
import Search from "@/lib/ui/components/Search";

import ImageWishlist from "@/images/icons/wishlist.svg";
import ImageCart from "@/images/icons/cart.svg";
import ImageUser from "@/images/icons/user.svg";

export const Header: React.FC = () => {
	return (
		<div className="container-wrapper">
			<div
				className="container"
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: 40
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
						paddingBottom: 16,
						borderBottom: "0.5px solid var(--border)"
					}}
				>
					<Link href="/">
						<h1
							className={fontInter.className}
							style={{
								fontSize: 24,
								fontWeight: 800,
								letterSpacing: "0.03em",
								lineHeight: "24px"
							}}
						>
							Exclusive
						</h1>
					</Link>
					<Navigation />
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 24
						}}
					>
						<Search
							placeholder="What are you looking for?"
							inputStyle={{
								minWidth: 162
							}}
						/>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 16
							}}
						>
							<Link href="/wishlist" style={{ display: "flex" }}>
								<Image src={ImageWishlist} alt="Wishlist" draggable={false} />
							</Link>
							<Link href="/cart" style={{ display: "flex" }}>
								<Image src={ImageCart} alt="Cart" draggable={false} />
							</Link>
							<Link href="/cabinet" style={{ display: "flex" }}>
								<Image src={ImageUser} alt="User" draggable={false} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
