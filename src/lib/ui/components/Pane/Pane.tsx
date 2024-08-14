import Image from "next/image";
import { Dropdown, DropDownProps, Flex } from "antd";

import { Button } from "@/lib/ui/elements";

import type { TBaseComponent } from "@/types";

import IconMenu from "@/images/icons/menu-dots.svg";

import styles from "./Pane.module.css";

interface IPaneProps extends TBaseComponent {
	dropdown?: DropDownProps;
}

/** @public */
export const Pane: React.FC<IPaneProps> = ({ dropdown, style, children }) => {
	return (
		<div
			style={{
				position: "relative",
				padding: 24,
				backgroundColor: "#fff",
				borderRadius: 16,
				...style
			}}
		>
			{dropdown && (
				<Dropdown {...dropdown}>
					<Flex
						style={{
							position: "absolute",
							top: 24,
							right: 24
						}}
					>
						<Button
							type="icon"
							className={styles.dropdownButton}
							style={{
								alignItems: "center",
								height: 24,
								width: 24,
								padding: 0,
								backgroundColor: "transparent",
								borderRadius: 4
							}}
						>
							<Image src={IconMenu} alt="" style={{ transform: "rotate(90deg)" }} />
						</Button>
					</Flex>
				</Dropdown>
			)}
			{children}
		</div>
	);
};

/** @alias */
export default Pane;
