<template>
    <div class="account">
        <h1>My Account</h1>
        <div class="infos">
            <table>
                <tr>
                    <th>Username</th>
                    <td>{{ userInfo.userName }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ userInfo.email }}</td>
                </tr>
                <tr>
                    <th>Date of birth</th>
                    <td>{{ userInfo.dateOfBirth }}</td>
                </tr>
            </table>
            <div class="favorites">
                <p>Favorite Games</p>
                <ul v-if="allInfo.favorites" class="list-games">
                    <li v-for="game in allInfo.favorites" :key="game.id" class="game">
                        <Icon class="heart" name="ph:heart-fill" size="1.5em" @click="removeFavorite(game.slug)"/>
                        <NuxtLink :to="`/game/${game.slug}`">
                            <img :src="game.image" alt="">
                        </NuxtLink>
                        <div class="gameInfos">
                            <p>{{game.name}}</p>
                            <ul>
                                <li v-for="developer in game.developers" :key="developer.id">
                                    <p>
                                        {{ developer.name }}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const user = useSupabaseUser();
const userEmail = user.value.email;

const {data: userInfo} = await useFetch(`/api/user/${userEmail}`);

const allInfo = reactive({
    userName: userInfo.value.userName,
    email: userInfo.value.email,
    dateOfBirth: userInfo.value.dateOfBirth,
    favorites: []
})

for(let i = 0; i < userInfo.value?.favorites.length; i++){
    const {data: game} = await useFetchGameDetails(userInfo.value?.favorites[i]);
    const gameInfo = reactive({
        name: toRaw(game.value?.name),
        slug: toRaw(game.value?.slug),
        developers: toRaw(game.value?.developers),
        image: toRaw(game.value?.background_image),
    });
    allInfo.favorites.push(gameInfo);
}

const id = userInfo.value.id;
const idString = id.toString();

const removeFavorite = (async(slug) => {
    await useFetch(`/api/${idString}/favorites/${slug}/favorite`, ({
        method: 'PATCH',
        body: {
          favorites: slug,
        },
    }))

    allInfo.favorites = allInfo.favorites.filter((game) => {
        return game.slug !== slug;
    });
})
</script>

<style lang="scss">
.account{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
    margin-top: 150px;
    margin-bottom: 20px;
    color: #fff;

    .infos{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
        font-size: 18px;

        th{
            padding: 10px 0;
            padding-right: 50px;
        }

        .favorites{
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 20px;

            @media screen and (max-width: 650px) {
                width: 90%;
            }

            .list-games{
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 20px;

                .game{
                    width: 100%;
                    display: flex;
                    column-gap: 30px;
                    list-style: none;
                    background-color: #10101066;
                    padding: 10px;
                    border: 2px solid #3d3d3d;
                    border-radius: 5px;
                    position: relative;

                    @media screen and (max-width: 400px) {
                        flex-direction: column;
                        align-items: center;
                    }

                    svg{
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        color: #ff6000;
                        cursor: pointer;
                        transition: all 0.150s ease;

                        &:hover{
                            transform: scale(1.1);
                        }
                    }

                    img{
                        width: 200px;
                        aspect-ratio: 16/9;
                    }

                    .gameInfos{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;

                        ul{
                            display: flex;
                            column-gap: 10px;
                            flex-wrap: wrap;

                            li{
                                list-style: none;
                                font-size: 16px;
                                color: #999;
                            }
                        }

                        @media screen and (max-width: 400px) {
                            align-items: center;
                        }
                    }
                }
            }
        }
    }
}
</style>