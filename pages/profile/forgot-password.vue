<template>
    <div class="forgot-password">
            <div class="form">
                <h1>
                    Forgot Password
                </h1>
                <form @submit.prevent>
                    <input type="text" placeholder="Email" v-model="email"/>
                    <button @click="sendEmail">
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

const email = ref('');

const supabase = useSupabaseClient();

const sendEmail = (async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email.value)
    if(error){
        console.log(error) 
    }
})
</script>

<style lang="scss">
::-webkit-calendar-picker-indicator{
    filter: invert(0.5);
}

.forgot-password {
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

                &:hover{
                    transform: scale(1.05);
                    cursor: pointer;
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