export default defineNuxtRouteMiddleware((to, from) => {
    if(!to.path.includes("login") && !to.path.includes("register") && !to.path.includes("forgot-password") && !to.path.includes("update-password")) {
      const user = useSupabaseUser();
      if(!user.value) {
        return navigateTo("/login");
      }
    }
  })