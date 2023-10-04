import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const {gameSlug} = event.context.params;

  console.log(gameSlug);

  const comment = await prisma.comment.findMany({
    where: {
      gameSlug: gameSlug,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })

  if (!comment) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.statusMessage,
    });
}

  return comment;
});