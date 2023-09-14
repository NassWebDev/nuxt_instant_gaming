<template>
    <div class="main-container">
        <NavBar />
        <slot />
    </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<style>
    .main-container{
        background-color: #272727;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }
</style>