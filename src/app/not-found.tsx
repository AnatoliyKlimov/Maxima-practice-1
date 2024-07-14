import Link from "next/link";
import Image from "next/image";
import ImageWishlist from "@/images/icons/wishlist.svg";

function NotFoundPage() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "48px 0"
			}}
		>
			<h2 style={{
				fontWeight: "500",
				fontSize: "110px",
				lineHeight: "115px",
				marginTop: "140px",
			}}>
				 404 Not found</h2>
			
			<p 
				style={{
					fontSize: "16px",
					lineHeight: "24px",
					padding: "40px 0 80px",
				}}>
				Your visited page not found. You may go home page
			</p>

			<Link href="/" style={{ 
				borderRadius: "4px",
				background: "#db4444",
				color: "#fff",
				padding: "16px 48px",
				marginBottom: "140px"
			}}>
				Back to home page
			</Link>
		</div>
	);
}

export default NotFoundPage;
