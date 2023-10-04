<template>
    <div class="update-password">
        <div class="form">
            <h1>
                Update Password
            </h1>
            <form @submit.prevent>
                <input type="password" placeholder="Write your new password" v-model="password1" @input="checkPasswords"/>
                <input type="password" placeholder="Confirm your password" v-model="password2" @input="checkPasswords"/>
                <button :disabled="!passwordMatch" @click="sendEmail">
                    Send
                </button>
                <div class="back">
                    <NuxtLink to="/profile/login">
                        Back
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
    title: 'Register',
    htmlAttrs: {
        lang: 'en'
    }
})

const password1 = ref('');
const password2 = ref('');
const passwordMatch = ref(false)


const checkPasswords = (() => {
    if (password1.value === password2.value) {
        passwordMatch.value = true
    }
    else {
        passwordMatch.value = false
    }
    return passwordMatch.value;
})

const supabase = useSupabaseClient();

const sendEmail = (async () => {
    const { error } = await supabase.auth.updateUser({
        password: password1.value
    });
    if(error){
        console.log(error);
    }
    navigateTo('/profile/login');
})
</script>

<style lang="scss">
.update-password {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    .form{
        width: 80%;
        display: flex;
        flex-direction: column;
        row-gap: 40px;

        h1{
            color: #fff;
        }

        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 20px;

            input{
                width: calc(100% - 10px);
                height: 50px;
                background-color: #10101066;
                border: 2px solid #3d3d3d;
                border-radius: 5px;
                padding: 10px;
                color: #999;
                font-size: 16px;
                        
                &:hover{
                    border: 2px solid #ff6000;
                }

                &::placeholder{
                    font-size: 16px;
                }
            }

            button{
                width: 100%;
                height: 50px;
                background-color: #ff6000;
                border: transparent;
                border-radius: 5px;
                color: #fff;
                font-size: 18px;
                font-weight: 600;
                transition: all 0.3s ease;

                &:hover:not(:disabled){
                    transform: scale(1.05);
                    cursor: pointer;
                }

                &:disabled{
                    opacity: 0.2;
                }
            }

            .back{

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