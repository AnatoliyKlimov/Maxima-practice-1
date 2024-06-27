# Maxima-practice-1
Maxima practice group 1

[![ci](https://github.com/AnatoliyKlimov/Maxima-practice-1/actions/workflows/ci.yml/badge.svg)](https://github.com/AnatoliyKlimov/Maxima-practice-1/actions/workflows/ci.yml)

## Стайлгайд
1. В целом по файлу .prettierrc
2. Имена компонентов в CamelCase, как и их файлы
	```javascript
		// ./MyComponent.tsx
		export default const MyComponent: React.FC<IMyComponentProps> = (...)

		// ./MyComponent.module.css
		.my-component {
			display: block;
		}

		// ./index.ts
		export { default } from "./MyComponent";
		export * from "./MyComponent";
	```
3. Имена всего остального в lowerCamelCase, их файлы в kebab-case
	```javascript
		// ./lib/utils/some-util.ts
		export default const someUtil = (...)

		// ./lib/utils/index.ts
		export * from "./some-util";
	```
3. Порядок импортов:
	- Импорты из react, next, etc...
		- Импортировать сам React без необходимости не нужно
	- (пустая строка)
	- Импорты из шрифтов
	- Импорты из компонентов
	- Импорты из lib/store/auth/etc...
	- (пустая строка)
	- Локальные импорты (в текущей директории, напр. из "./style.css")
	```javascript
		// Пример
		import { useState } from "react";
		import Image from "next/image";

		import MyComponent from "@/components/MyComponent";

		import styles from "./page.module.css";
	```
