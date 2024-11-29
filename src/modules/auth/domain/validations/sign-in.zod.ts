// Importa la biblioteca zod para la validación de esquemas
import z from "zod";

// Define un esquema de validación para el inicio de sesión
export const signInSchema = z.object({
	// Campo de correo electrónico que debe ser una cadena con formato de correo electrónico
	email: z.string().email(),
	// Campo de contraseña que debe ser una cadena
	password: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.max(20, "Password must be at most 20 characters"),
});

// Define un tipo TypeScript basado en el esquema de validación
export type SignInType = z.infer<typeof signInSchema>;

// Valores iniciales para el formulario de inicio de sesión
export const SignInInitValue: SignInType = {
	// Valor inicial del correo electrónico vacío
	email: "",
	// Valor inicial de la contraseña vacía
	password: "",
};

export const SignInData = [
	{ name: "email", label: "Email", type: "text", placeholder: "Email" },
	{ name: "password", label: "Password", type: "password", placeholder: "Password" },
];

export type SignInDataType = typeof SignInData;
