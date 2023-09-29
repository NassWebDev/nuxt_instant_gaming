import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
    const user = await prisma.user.create({
        data:{
            firstName: 'John',
            lastName: 'Doe',
            email: '7VcD4@example.com',
            dateOfBirth: '2000-01-01',
            favorites:{
                create:[
                    {
                        gameSlug: 'red-dead-redemption-2',
                        gameTitle: 'Red Dead Redemption 2',
                        gameImage: 'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg'
                    },
                    {
                        gameSlug: 'elden-ring',
                        gameTitle: 'Elden Ring',
                        gameImage: 'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg'
                    },
                ]
            },
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
    console.log(user)
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