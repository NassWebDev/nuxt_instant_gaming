<template>
    <header>
        <NuxtLink class="logo" to="/" />
        <ul>
            <NuxtLink to="/popular"> 
                Popular
            </NuxtLink>
            <NuxtLink to="/next-release">
                Next Releases
            </NuxtLink>
        </ul>
        <div class="icons" v-if="!isLoggedIn">
            <NuxtLink to="/profile/login">
                <Icon name="mdi-light:account" size="2.4em" />
            </NuxtLink>
        </div>
        <div class="icons" v-else>
            <NuxtLink to="/profile/my-account">
                <Icon name="mdi-light:account" size="2.4em" />
            </NuxtLink>
            <Icon name="streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right" size="1.5em" @click="logout"/>
        </div>
    </header>
</template>

<script setup>
import { useRoute } from '#vue-router';
const route = useRoute();

const isLoggedIn = useSupabaseUser();

const supabase = useSupabaseClient();

const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.log(error);
    }
    if(route.fullPath === '/profile/my-account'){
        navigateTo('/profile/login');
    }
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

        ul{
            display: flex;
            column-gap: 50px;

            @media screen and (max-width: 1000px) {
                display: none;
            }

            a{
                font-size: 20px;
                color: #e8e8e8;
                text-decoration: none;
                z-index: 1;
            }
        }

        .icons{
            width: 150px;
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

            a{
                color: #fff;
            }
        }
    }
</style>