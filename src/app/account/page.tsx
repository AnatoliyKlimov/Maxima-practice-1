"use client";

import React from "react";
import { useUsers } from "@/service/users";
import { TextField, Button } from "@/lib/ui/elements";
import { useFormik } from "formik";
import * as Yup from "yup";

const AccountPage: React.FC = () => {
	const [, currentUser, { updateUser }] = useUsers();

	const formik = useFormik({
		initialValues: {
			name: currentUser?.name || "",
			username: currentUser?.username || "",
			password: ""
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Имя обязательно"),
			username: Yup.string().required("Имя пользователя обязательно"),
			password: Yup.string().required("Пароль обязателен")
		}),
		onSubmit: (values) => {
			// Обновляем пользователя, отправляя только те данные, которые изменены
			updateUser({
				name: values.name,
				username: values.username,
				password: values.password
			});
		}
	});

	return (
		<div>
			<h2>Личный кабинет</h2>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					name="name"
					placeholder="Имя"
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.name}
				/>
				<TextField
					name="username"
					placeholder="Имя пользователя"
					value={formik.values.username}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.username}
				/>
				<TextField
					name="password"
					type="password"
					placeholder="Новый пароль"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.password}
				/>
				<Button type="submit">Сохранить изменения</Button>
			</form>
		</div>
	);
};

export default AccountPage;
