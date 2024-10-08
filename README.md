# Maxima-practice-1
Maxima practice group 1

[![ci](https://github.com/AnatoliyKlimov/Maxima-practice-1/actions/workflows/ci.yml/badge.svg)](https://github.com/AnatoliyKlimov/Maxima-practice-1/actions/workflows/ci.yml)

## Стайлгайд
1. В целом по файлу .prettierrc
2. Имена компонентов в CamelCase, как и их файлы
	```javascript
	// ./MyComponent.tsx
	export const MyComponent: React.FC<IMyComponentProps> = (...)

	export default MyComponent;

	// ./MyComponent.module.css
	.myComponent {
	    display: block;
	}

	// ./index.ts
	export { default } from "./MyComponent";
	export * from "./MyComponent";
	```
3. Имена всего остального в lowerCamelCase, их файлы в kebab-case
	```javascript
	// ./lib/utils/some-util.ts
	export const someUtil = (...)

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
	- Импорты типов
	- (пустая строка)
	- Импорты картинок
	- (пустая строка)
	- Локальные импорты (в текущей директории, напр. из "./style.css")
	```javascript
	// Пример
	import { useState } from "react";
	import Image from "next/image";

	import MyComponent from "@/components/MyComponent";

	import { MyType } from "@/types";

	import MyImage from "@/images/image.png";
	import MyImage2 from "@/images/image2.png";

	import styles from "./page.module.css";
	```
