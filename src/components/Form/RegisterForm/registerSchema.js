import { z } from "zod";
export const registerSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().nonempty("Email é obrigatório").email("Forneça um Email válido"),
    password: z
        .string()
        .nonempty("Senha é obrigatória")
        .min(8, "É necessário pelo menos oito caracteres.")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
    confirmPassword: z.string().nonempty("É necessário confirmar a senha"),
    bio: z.string().nonempty("Bio é obrigatório"),
    contact: z.string().nonempty("Contato é obrigatório"),
    course_module: z.string().nonempty("Modulo é obrigatório"),
}).refine(({password,confirmPassword}) => confirmPassword === password, {
    message: "A confirmação de senha deve ser igual à senha",
    path: ["confirmPassword"],
});


