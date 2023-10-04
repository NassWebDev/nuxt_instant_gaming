<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
const user = useSupabaseUser();

if(user) {
  const userEmail = user.value?.email;
  const userName = user.value?.user_metadata?.full_name;

  const {error, data} = await useFetch(`/api/user/${userEmail}`);

  if(error.value) {
    console.log(error.value)
  }

  if(!data.value) {
    const {errorFetch} = await useFetch('/api/user/user', {
      method: 'POST',
      body: {
        email: userEmail,
        userName: userName,
        dateOfBirth: new Date().toISOString().split('T')[0]
      }
    })
    if (errorFetch) {
      console.log(errorFetch);
    }
  }
}
</script>