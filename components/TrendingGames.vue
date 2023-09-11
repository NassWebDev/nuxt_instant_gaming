<template>
    <div class="imageTrending">
    </div>
</template>

<style lang="scss">
    .imageTrending{
        height: 80vh;
        background-image: url("@/assets/images/rdr.jpg");
        background-size: cover;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);


        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 20%;
            background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.8));
            pointer-events: none;
        }
    }
</style>