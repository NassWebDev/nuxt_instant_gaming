<template>
    <div class="login-container">
        <div class="login">
            <NuxtLink class="logo" to="/" />
            <div class="form">
                <h1>
                    Sign Up
                </h1>
                <form @submit.prevent>
                    <div class="inputs">
                        <input type="text" placeholder="Email" v-model="email"/>
                        <input type="password" placeholder="Password" v-model="password"/>
                        <input type="text" placeholder="First Name" v-model="first_name"/>
                        <input type="text" placeholder="Last Name" v-model="last_name"/>
                        <input type="text" placeholder="Date of Birth" v-model="date"/>
                    </div>
                    <button @click="signUp">
                        Send
                    </button>
                    <div class="no-account-forgot">
                        <NuxtLink to="/login">
                            Back
                        </NuxtLink>
                    </div>
                </form>
            </div>
        </div>
        <img src="../assets/images/instant-gaming-connexion.jpg" alt="">
    </div>
</template>

<script setup>
definePageMeta({
    layout: false,
});

const email = ref('');
const password = ref('');
const first_name = ref('');
const last_name = ref('');
const date = ref('');

watch(date, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        const regex = /[^0-9]/g;
        let formattedDate = date.value.replace(regex, '');

      if (formattedDate.length >= 3) {
        formattedDate = formattedDate.replace(/(\d{2})(\d)/, '$1/$2');
      }
      if (formattedDate.length >= 6) {
        formattedDate = formattedDate.replace(/(\d{2})(\d)/, '$1/$2');
      }

      if (formattedDate.length > 10) {
        formattedDate = formattedDate.slice(0, 10);
        }

      date.value = formattedDate;
    }
})

const supabase = useSupabaseClient();

const signUp = (async () => {
    const { error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
    })
    if (error) {
        console.log(error);
    }
    else{
        return navigateTo("/");
    }
})
</script>

<style lang="scss">
.login-container {
    width: 100%;
    height: 100vh;
    background-color: #323232;
    display: flex;

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

            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 20px;

                .inputs{
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;

                    input{
                        width: calc(50% - 10px);
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

                .no-account-forgot{
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

    img{
        width: 50%;
        object-fit: cover;
        transition: all 0.3s ease;

        @media screen and (max-width: 1000px) {
            display: none;
        }
    }
}
</style>