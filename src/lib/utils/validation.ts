export const validatePhone = (phone: string): string | null => {
	const phoneRegex = /^\+?[1-9]\d{1,14}$/; 
	if (!phoneRegex.test(phone)) {
		return "Invalid phone number.";
	}
	return null;
};

export const validatePassword = (password: string): string | null => {
	if (password.length < 6) {
		return "Password must be at least 6 characters long.";
	}
	return null;
};
