import z from "zod";

export const stepOneSchema = z.object({
	email: z.email(),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.max(100, "Password is too long")
		.regex(/[A-Z]/, "Password must contain at least one uppercase letter")
		.regex(/[a-z]/, "Password must contain at least one lowercase letter")
		.regex(/[0-9]/, "Password must contain at least one number")
		.regex(
			/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
			"Password must contain at least one special character",
		),
	confirmPassword: z.string(),
});

// Personal link
export const stepTwoSchema = z.object({
	workspaceName: z
		.string()
		.min(3, "Workspace name must be at least 3 characters")
		.max(50, "Workspace name is too long"),
});

// verification code
export const stepThreeSchema = z.object({
	code: z.string().length(6, "Verification code must be 6 characters"),
});
