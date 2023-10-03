import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const {gameSlug, userId} = event.context.params;

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(userId),
        },
    });

    if (!user) {
        throw createError({
          statusCode: error.value.statusCode,
          message: error.value.statusMessage,
        });
    }
    
    let updatedFavorites;

    if (user.favorites.includes(gameSlug)) {
        updatedFavorites = user.favorites.filter((slug) => slug !== gameSlug);
    }
    else {
        updatedFavorites = [...user.favorites, gameSlug];
    }

    const favorite = await prisma.user.update({
        where: {
            id: parseInt(userId),
        },
        data: {
            favorites: updatedFavorites
        }
    })

    console.log(user.favorites);
    return favorite;
})