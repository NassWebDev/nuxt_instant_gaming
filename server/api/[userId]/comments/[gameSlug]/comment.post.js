import Joi from "joi";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const schema = Joi.object({
    text: Joi.string().required(),
    userName: Joi.string().required(),
})

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const {error} = schema.validate(body);

    const {gameSlug, userId} = event.context.params;

    console.log(userId);

    if(error){
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }

    const { 
        text,
        userName
    } = body;

    const comment = await prisma.comment.create({
        data: {
            text,
            userName,
            gameSlug,
            userId : parseInt(userId)
        }
    })
    return comment;
})