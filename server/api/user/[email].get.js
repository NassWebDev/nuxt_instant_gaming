import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler((event) => {
    const {email} = event.context.params;

    console.log(email);

    const user = prisma.user.findUnique({
        where:{
            email: email
        }
    });

    if (!user) {
        throw createError({
          statusCode: error.value.statusCode,
          message: error.value.statusMessage,
        });
    }

    return user;
})