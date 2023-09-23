<template>
  <div class="error-container">
    <h1 class="error-status">
      {{ error.statusCode }}
    </h1>
    <p class="error-message">
      {{ error.message }}
    </p>
    <button @click="handleError">
      Go Back
    </button>
  </div>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<style lang="scss">
.error-container{
  height: 100vh;
  background-color: #272727;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;

  .error-status{
    font-size: 150px;
    color: #fff;
  }

  .error-message{
    font-size: 30px;
    color: #fff;
  }

  button{
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 8px;
    font-size: 25px;
    background-color: #ff6000;
    color: #fff;
    cursor: pointer;
    transition: all 0.150s ease;

    &:hover{
      transform: scale(1.1);
    }
  }
}
</style>