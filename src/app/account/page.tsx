"use client";

import Link from "next/link";

import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useUsers } from "@/service/users";
import { TextField, Button } from "@/lib/ui/elements";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Breadcrumb } from "@/client/components";
import { fontOpenSans } from "@/app/fonts";

const AccountPage: React.FC = () => {
	const [, currentUser, { updateUser }] = useUsers();
	const currentPath = usePathname(); // Получаем текущий путь
	const { t } = useTranslation();

	const formik = useFormik({
		initialValues: {
			firstName: currentUser?.firstName || "",
			lastName: currentUser?.lastName || "",
			email: currentUser?.email || "",
			address: currentUser?.address || "",
			currentPassword: "",
			newPassword: "",
			confirmPassword: ""
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required("First name is required"),
			lastName: Yup.string().required("Last name is required"),
			email: Yup.string().email("Invalid email").required("Email is required"),
			newPassword: Yup.string().min(6, "Password must be at least 6 characters"),
			confirmPassword: Yup.string().oneOf(
				[Yup.ref("newPassword"), null],
				"Passwords must match"
			)
		}),
		onSubmit: (values) => {
			updateUser({
				firstName: values.firstName,
				lastName: values.lastName,
				email: values.email,
				address: values.address,
				password: values.newPassword
			});
		}
	});

	return (
		<>
			<span
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "end",
					paddingBottom: 80
				}}
			>
				<Breadcrumb />
				<p>
					{t("office.welcome")}{" "}
					<span style={{ color: "var(--background-primary" }}>
						{formik.values.firstName} {formik.values.lastName}
					</span>
				</p>
			</span>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div style={{ width: "200px", marginRight: "40px" }}>
					<h3
						className={fontOpenSans.className}
						style={{ fontSize: 16, fontWeight: 500 }}
					>
						{t("office.manage")}
					</h3>
					<ul style={{ listStyle: "none", padding: "16px 0 20px 35px" }}>
						<MyLink href="/account" currentPath={currentPath}>
							{t("office.profile")}
						</MyLink>
						<MyLink href="/account/address-book" currentPath={currentPath}>
							{t("office.address")}
						</MyLink>
						<MyLink href="/account/payment-options" currentPath={currentPath}>
							{t("office.payment")}
						</MyLink>
					</ul>
					<h3
						className={fontOpenSans.className}
						style={{ fontSize: 16, fontWeight: 500 }}
					>
						{t("office.orders")}
					</h3>
					<ul style={{ listStyle: "none", padding: "18px 0 10px 35px" }}>
						<MyLink href="/account/returns" currentPath={currentPath}>
							{t("office.returns")}
						</MyLink>
						<MyLink href="/account/cancellations" currentPath={currentPath}>
							{t("office.cancel")}
						</MyLink>
					</ul>
					<h3
						className={fontOpenSans.className}
						style={{ fontSize: 16, fontWeight: 500 }}
					>
						{t("office.wishlist")}
					</h3>
				</div>

				<div
					style={{
						width: 870,
						padding: "40px 80px",
						boxShadow: "0px 1px 13px 0px rgba(0, 0, 0, 0.05)"
					}}
				>
					<h2
						style={{
							fontSize: 20,
							fontWeight: 500,
							marginBottom: 16,
							color: "var(--background-primary)"
						}}
					>
						{t("office.edit")}
					</h2>
					<form onSubmit={formik.handleSubmit}>
						<div style={{ display: "flex", gap: 50, marginBottom: 30 }}>
							<div
								style={{ display: "flex", flexDirection: "column", width: "100%" }}
							>
								<h4 style={{ marginBottom: 8 }}>{t("office.first")}</h4>
								<TextField
									name="firstName"
									placeholder={t("office.first")}
									value={formik.values.firstName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.errors.firstName}
								/>
							</div>
							<div
								style={{ display: "flex", flexDirection: "column", width: "100%" }}
							>
								<h4 style={{ marginBottom: 8 }}>{t("office.last")}</h4>
								<TextField
									name="lastName"
									placeholder={t("office.last")}
									value={formik.values.lastName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.errors.lastName}
								/>
							</div>
						</div>
						<div style={{ display: "flex", gap: 50, marginBottom: 28 }}>
							<div
								style={{ display: "flex", flexDirection: "column", width: "100%" }}
							>
								<h4 style={{ marginBottom: 8 }}>{t("office.email")}</h4>
								<TextField
									name="email"
									placeholder={t("office.email")}
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.errors.email}
								/>
							</div>
							<div
								style={{ display: "flex", flexDirection: "column", width: "100%" }}
							>
								<h4 style={{ marginBottom: 8 }}>{t("office.addr")}</h4>
								<TextField
									name="address"
									placeholder={t("office.addr")}
									value={formik.values.address}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.errors.address}
								/>
							</div>
						</div>
						<h4 style={{ marginBottom: 8 }}>{t("office.change")}</h4>
						<div style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}>
							<TextField
								name="currentPassword"
								type="password"
								placeholder={t("office.current")}
								value={formik.values.currentPassword}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</div>
						<div style={{ marginBottom: "20px" }}>
							<TextField
								name="newPassword"
								type="password"
								placeholder={t("office.newPassword")}
								value={formik.values.newPassword}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.errors.newPassword}
							/>
						</div>
						<div style={{ marginBottom: "20px" }}>
							<TextField
								name="confirmPassword"
								type="password"
								placeholder={t("office.confirmNew")}
								value={formik.values.confirmPassword}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.errors.confirmPassword}
							/>
						</div>
						<div style={{ display: "flex", justifyContent: "flex-end", gap: 32 }}>
							<Button type="secondary">{t("office.cancelBtn")}</Button>
							<Button>{t("office.saveBtn")}</Button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

const MyLink: React.FC<{
	href: string;
	currentPath: string;
	children: React.ReactNode;
}> = ({ href, currentPath, children }) => {
	const isActive = href === currentPath;

	return (
		<li style={{ marginBottom: "10px" }}>
			<Link href={href}>
				<span style={{ color: isActive ? "red" : "grey", cursor: "pointer" }}>
					{children}
				</span>
			</Link>
		</li>
	);
};

export default AccountPage;
