import Joi from "joi";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    dateOfBirth: Joi.date(),
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
        firstName,
        lastName,
        email,
        dateOfBirth
    } = body;

    const user = await prisma.user.create({
        data: {
            firstName: firstName.toUpperCase(),
            lastName: lastName.toUpperCase(),
            email,
            dateOfBirth
        }
    })

    return user;
})