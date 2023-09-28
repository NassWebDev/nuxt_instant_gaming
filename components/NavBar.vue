<template>
    <header>
        <NuxtLink class="logo" to="/" />
        <div class="nav-middle">
            <ul>
                <NuxtLink to="/populaires"> 
                    Popular
                </NuxtLink>
                <NuxtLink to="/next-release">
                    Next Releases
                </NuxtLink>
            </ul>
            <input type="text">
        </div>
        <div class="icons">
            <Icon name="solar:cart-large-4-outline" size="1.8em"/>
            <NuxtLink to="/login" v-if="!isLoggedIn">
                <Icon name="mdi-light:account" size="2em" />
            </NuxtLink>
            <Icon name="tabler:logout" size="2em" v-else @click="logout"/>
        </div>
    </header>
</template>

<script setup>
const isLoggedIn = useSupabaseUser();

const supabase = useSupabaseClient();

const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.log(error);
    }
    return navigateTo("/");
}
</script>

<style lang="scss">
    header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        align-items: center;
        padding: 10px 20px;
        transition: all 0.150s ease;

        @media screen and (max-width: 850px) {
            padding: 10px;
        }

        .logo{
            z-index: 999;
            width: 150px;
            height: 40px;
            background-image: url("../assets/images/logo-horizontal.svg");
            background-size: 100%;
            background-repeat: no-repeat;
            transition: all 0.150s ease;

            @media screen and (max-width: 1000px) {
                width: 95px;
                height: 24px;
            }
        }

        .nav-middle{
            width: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: 15px;

            @media screen and (max-width: 1000px) {
                width: 40%;
            }

            ul{
                display: flex;
                column-gap: 50px;

                @media screen and (max-width: 1000px) {
                    display: none;
                }

                a{
                    color: #e8e8e8;
                    text-decoration: none;
                    z-index: 1;
                }
            }

            input{
                width: 100%;
                height: 40px;
                border-radius: 10px;
                border: solid 1px black;
                z-index: 1;

                @media screen and (max-width: 1000px) {
                    width: 80%;
                }

                @media screen and (max-width: 500px) {
                    width: 60%;
                }
            }
        }

        .icons{
            width: 200px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            will-change: transform;
            color: #e8e8e8;
            z-index: 1;
            column-gap: 30px;

            @media screen and (max-width: 1000px) {
                width: 95px;
            }
        }
    }
</style>