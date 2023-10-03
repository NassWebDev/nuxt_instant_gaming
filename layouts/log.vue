<template>
    <div class="login-container">
        <NuxtLink class="logo" to="/" />
        <slot />
        <img src="../assets/images/instant-gaming-connexion.jpg" alt="">
    </div>
</template>
  
<style lang="scss">
.login-container {
    width: 100%;
    height: 100vh;
    background-color: #323232;
    display: flex;

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