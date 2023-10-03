<template>
    <div class="login-container">
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