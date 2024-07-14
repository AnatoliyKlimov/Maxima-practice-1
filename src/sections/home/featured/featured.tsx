import Image from "next/image";
import Link from "next/link";

import { fontInter } from "@/app/fonts";
import Caption from "@/lib/ui/components/Caption";

import ImagePlayStation5 from "@/images/playstation-5.png";
import ImageWoman from "@/images/woman.jpg";
import ImageSpeakers from "@/images/speakers.png";
import ImagePerfume from "@/images/perfume.png";

import styles from "./featured.module.css";

export const FeaturedSection: React.FC = () => {
	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Caption text="Featured" style={{ marginBottom: 17 }} />
			<div
				style={{
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "space-between",
					marginBottom: 60
				}}
			>
				<div>
					<h1
						className={fontInter.className}
						style={{
							display: "inline",
							fontSize: 36,
							fontWeight: 600,
							lineHeight: "48px",
							letterSpacing: "0.04em"
						}}
					>
						New Arrival
					</h1>
				</div>
			</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 270px)",
					gridTemplateRows: "repeat(2, 285px)",
					gridTemplateAreas: `
						"playstation playstation women women"
						"playstation playstation speakers perfume"
					`,
					gap: 30
				}}
			>
				<div className={styles.featuredBlock} style={{ gridArea: "playstation" }}>
					<Image
						src={ImagePlayStation5}
						alt="Playstation 5"
						draggable={false}
						style={{
							position: "absolute",
							bottom: 0,
							right: 40,
							height: 540,
							width: 511,
							objectFit: "cover"
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 16,
							zIndex: 1
						}}
					>
						<h2
							className={fontInter.className}
							style={{
								fontWeight: 600,
								letterSpacing: "0.03em"
							}}
						>
							PlayStation 5
						</h2>
						<p
							style={{
								fontSize: 14,
								lineHeight: "21px"
							}}
						>
							Black and White version of the PS5
							<br /> coming out on sale.
						</p>
						<Link href="#">Shop Now</Link>
					</div>
				</div>
				<div className={styles.featuredBlock} style={{ gridArea: "women" }}>
					<Image
						src={ImageWoman}
						alt="Woman"
						draggable={false}
						style={{
							position: "absolute",
							bottom: 0,
							right: 0,
							height: "100%",
							width: "auto",
							objectFit: "cover",
							transform: "scale(-1, 1)"
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 16,
							zIndex: 1
						}}
					>
						<h2
							className={fontInter.className}
							style={{
								fontWeight: 600,
								letterSpacing: "0.03em"
							}}
						>
							Women’s Collections
						</h2>
						<p
							style={{
								fontSize: 14,
								lineHeight: "21px"
							}}
						>
							Featured woman collections that <br />
							give you another vibe.
						</p>
						<Link href="#">Shop Now</Link>
					</div>
				</div>
				<div className={styles.featuredBlock} style={{ gridArea: "speakers" }}>
					<div
						style={{
							position: "absolute",
							inset: 0,
							filter: "blur(100px)",
							background: "rgba(217, 217, 217, 0.35)"
						}}
					></div>
					<Image
						src={ImageSpeakers}
						alt="Speakers"
						draggable={false}
						style={{
							position: "absolute",
							bottom: 0,
							right: 0,
							height: 260,
							width: 260,
							objectFit: "cover"
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 16,
							zIndex: 1
						}}
					>
						<h2
							className={fontInter.className}
							style={{
								fontWeight: 600,
								letterSpacing: "0.03em"
							}}
						>
							Speakers
						</h2>
						<p
							style={{
								fontSize: 14,
								lineHeight: "21px"
							}}
						>
							Amazon wireless speakers
						</p>
						<Link href="#">Shop Now</Link>
					</div>
				</div>
				<div className={styles.featuredBlock} style={{ gridArea: "perfume" }}>
					<div
						style={{
							position: "absolute",
							inset: 0,
							filter: "blur(100px)",
							background: "rgba(217, 217, 217, 0.35)"
						}}
					></div>
					<Image
						src={ImagePerfume}
						alt="Perfume"
						draggable={false}
						style={{
							position: "absolute",
							bottom: 10,
							right: 10,
							height: 250,
							width: 240,
							objectFit: "cover"
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 16,
							zIndex: 1
						}}
					>
						<h2
							className={fontInter.className}
							style={{
								fontWeight: 600,
								letterSpacing: "0.03em"
							}}
						>
							Perfume
						</h2>
						<p
							style={{
								fontSize: 14,
								lineHeight: "21px"
							}}
						>
							GUCCI INTENSE OUD EDP
						</p>
						<Link href="#">Shop Now</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
