"use server";

import z from "zod";
// import { useThrowIfAuthenticated } from "../throw-if-authenticated";
import { actionClient } from "./safe-action";
import { prisma } from "../prisma";
import { hashPassword } from "@/utils/functions/hashPassword";

const EmailSignupSchema = z.object({
    firstName: z.string().min(2, "Name must be at least 2 characters long"),
    lastName: z.string().optional(),
    email: z.email(),
    password: z.string().min(6, "Password must be longer thn 5 characters").max(100, "Hold on!! this ain't nuclear code"),
    // type: z.enum(['EMAIL_VERIFICATION', 'PASSWORD_RESET'])
})

export const createUserAction = actionClient.inputSchema(EmailSignupSchema).action( async ({ parsedInput }) => {
    const { email, firstName, lastName, password } = parsedInput;
    //TODO: Add otp mechanism -> 1.generate otp and save it to database 2.generate expiry time and also store it 3.expire the code if timeline is exceeded

    const name = firstName + (lastName ?? "");
    const hashedPassword = hashPassword(password);
    const newUser = await prisma.user.create({
        data: {
            email: email,
            name: name,
            password: {
                create: {
                    hash: hashedPassword
                }
            },            
        }
    })

    if(!newUser) throw new Error("failed to create new User")

        return newUser
})