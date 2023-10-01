import Joi from "joi";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const schema = Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().required(),
    dateOfBirth: Joi.date().max('now')
})

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const {error} = schema.validate(body);

    if(error){
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }

    const {
        userName,
        email,
        dateOfBirth
    } = body;

    const user = await prisma.user.create({
        data: {
            userName,
            email,
            dateOfBirth
        }
    })

    return user;
})