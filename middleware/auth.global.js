export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path.includes("game") || to.path.includes("my-account")) {
        const user = useSupabaseUser();
        if(!user.value) {
            return navigateTo("/profile/login");
        }
    }
})
