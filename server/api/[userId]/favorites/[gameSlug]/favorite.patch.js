import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const {gameSlug, userId} = event.context.params;

    if(error){
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }

    const favorite = await prisma.user.update({
        where: {
            userId
        },
        data: {
            favorites: {
                push: gameSlug
            }
        }
    })
    return favorite;
})