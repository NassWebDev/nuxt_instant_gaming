<template>
    <div class="login">
        <div class="form">
            <h1>
                Log In
            </h1>
            <div class="login-buttons">
                <button v-for="provider in providers" :key="provider.provider" @click="loginSocial(provider.provider)" :style="{ backgroundColor: provider?.bgcolor, color: provider?.color }">
                    <Icon :name="provider.icon" size="1.5em" :color="provider?.color" />
                </button>
            </div>
            <div class="separator">
                <p>
                    or
                </p>
            </div>
            <form @submit.prevent>
                <input type="text" placeholder="Email" v-model="email"/>
                <input type="password" placeholder="Password" v-model="password"/>
                <button @click="loginEmail">
                    Send
                </button>
                <div class="no-account-forgot">
                    <NuxtLink to="/profile/register">
                        No account ?
                    </NuxtLink>
                    <NuxtLink to="/profile/forgot-password">
                        Lost password ?
                    </NuxtLink>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "log",
});

useHead({
    title: "Login",
});

const providers = ref([
    {
        provider: 'facebook',
        name: 'Facebook',
        icon: 'logos:facebook',
        bgcolor: '#1877f2'
    },
    {
        provider: 'google',
        name: 'Google',
        icon: 'devicon:google',
    },
    {
        provider: 'discord',
        name: 'Discord',
        icon: 'ic:baseline-discord',
        bgcolor: '#5865f2',
        color: '#ffffff'
    }
]);

const email = ref('');
const password = ref('');

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const router = useRouter();
const route = useRoute();

const navigateBack = () => {
  router.go(-1)
}
console.log(router);

const loginEmail = (async () => {
    const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    if (error) {
        console.log(error);
    }
    navigateBack();         
})

const loginSocial = (async (provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider
    })
    if(!error){
        const {errorFetch} = await useFetch('/api/user/user', {
            method: 'POST',
            body: {
                email: 'no-email',
                userName: 'no-username',
                dateOfBirth: '00-00-0000'
            }
        })
        if (errorFetch) {
        console.log(errorFetch);
        }
    }
    console.log(data);
}); 
</script>

<style lang="scss">
.login {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;

        .logo {
            width: 150px;
            height: 40px;
            background-image: url("../assets/images/logo-horizontal.svg");
            background-size: 100%;
            background-repeat: no-repeat;
            position: absolute;
            top: 20px;
            left: 20px;
        }

        .form{
            width: 80%;
            display: flex;
            flex-direction: column;
            row-gap: 40px;

            h1{
                color: #fff;
            }

            .login-buttons{
                display: flex;
                justify-content: center;
                column-gap: 20px;

                button{
                    min-width: calc(33.3% - 20px);
                    height: 50px;
                    border-radius: 5px;
                    border: transparent;
                    background-color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    &:hover{
                        border: 3px solid #ff6000;
                        cursor: pointer;
                    }
                }
            }

            .separator{
                display: flex;
                justify-content: center;
                position: relative;

                p{
                    color: #fff;
                    font-size: 20px;

                    &::after{
                        content: "";
                        position: absolute;
                        width: 46%;
                        height: 1px;
                        background-color: #3d3d3d;
                        left: 0;
                        margin: 15px 0;
                    }

                    &::before{
                        content: "";
                        position: absolute;
                        width: 46%;
                        height: 1px;
                        background-color: #3d3d3d;
                        right: 0;
                        margin: 15px 0;
                    }
                }
            }

            form{
                display: flex;
                flex-direction: column;
                row-gap: 20px;

                input{
                    width: 100%;
                    height: 50px;
                    background-color: #10101066;
                    border: 2px solid #3d3d3d;
                    border-radius: 5px;
                    padding: 10px;
                    color: #fff;
                    font-size: 16px;
                    
                    &:hover{
                        border: 2px solid #ff6000;
                    }

                    &::placeholder{
                        font-size: 16px;
                    }
                }

                button{
                    height: 50px;
                    background-color: #ff6000;
                    border: transparent;
                    border-radius: 5px;
                    color: #fff;
                    font-size: 18px;
                    font-weight: 600;
                    transition: all 0.3s ease;

                    &:hover{
                        transform: scale(1.05);
                        cursor: pointer;
                    }
                }

                .no-account-forgot{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;

                    a{
                        text-decoration: none;
                        color: #fff;

                        &:hover{
                            color: #ff6000;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
}
</style>