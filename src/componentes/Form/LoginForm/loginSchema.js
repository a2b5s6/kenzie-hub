import { z } from "zod";
export const loginSchema = z.object({

    email: z.string().nonempty("Email é obrigatório").email("Forneça um Email válido"),
    password: z
        .string()
        .nonempty("Senha é obrigatória"),
});

