import Link from "next/link";

import Select from "@/lib/ui/elements/Select";

export const TopHeader: React.FC = () => {
	return (
		<div className="container-wrapper" style={{ background: "#000" }}>
			<div
				className="container"
				style={{
					display: "flex",
					justifyContent: "center",
					position: "relative",
					padding: "12px 0",
					fontSize: 14,
					lineHeight: "21px",
					color: "#fff"
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 8
					}}
				>
					<span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
					<Link
						href="#"
						style={{
							fontWeight: 600,
							lineHeight: "24px",
							textDecoration: "underline"
						}}
					>
						Shop Now!
					</Link>
				</div>
				<div
					style={{
						display: "inline-flex",
						position: "absolute",
						right: 0
					}}
				>
					<Select
						options={[
							{
								key: "lang-select-eng",
								text: "English",
								value: "eng"
							},
							{
								key: "lang-select-rus",
								text: "Russian",
								value: "rus"
							},
							{
								key: "lang-select-chn",
								text: "Chinese",
								value: "chn"
							}
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
