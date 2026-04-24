import bcrypt from "bcryptjs";

function hashPassword(password: string): string {
	const salt = bcrypt.genSaltSync(10);
	return bcrypt.hashSync(password, salt);
}

function verifyPassword(password: string, hashedPassword: string): boolean {
	return bcrypt.compareSync(password, hashedPassword);
}

export { hashPassword, verifyPassword };
