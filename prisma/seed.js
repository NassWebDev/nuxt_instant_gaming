import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
    const user = await prisma.user.create({
        data:{
            userName: 'Doe',
            email: '7VcD4@example.com',
            dateOfBirth: '2000-01-01',
            favorites:[
                'red-dead-redemption-2',
                'elden-ring'
            ],
            comments:{
                create:[                 
                    {
                        text: 'This game is great!',
                        gameSlug: 'red-dead-redemption-2',
                    },
                    {
                        text: 'This game is nice!',
                        gameSlug: 'elden-ring',
                    }
                ]
            }
        }
    })
}

seed()
.then(async()=>{
    await prisma.$disconnect()
})
.catch(async (e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})