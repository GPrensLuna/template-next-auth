// Importa la biblioteca zod para la validación de esquemas
import z from "zod";

//* Define un esquema de validación para el inicio de sesión
export const signInSchema = z.object({
	//? Campo de correo electrónico que debe ser una cadena con formato de correo electrónico
	email: z.string().email(),
	//? Campo de contraseña que debe ser una cadena
	password: z.string(),
});

//* Define un tipo TypeScript basado en el esquema de validación
export type SignInType = z.infer<typeof signInSchema>;

//* Valores iniciales para el formulario de inicio de sesión
export const SignInInitValue = {
	//? Valor inicial del correo electrónico vacío
	email: "",
	//? Valor inicial de la contraseña vacía
	password: "",
};
