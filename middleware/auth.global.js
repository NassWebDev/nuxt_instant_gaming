export default defineNuxtRouteMiddleware((to, from) => {
    if(!to.path.includes("login") && !to.path.includes("register")) {
      const user = useSupabaseUser();
      if(!user.value) {
        return navigateTo("/login");
      }
    }
  })