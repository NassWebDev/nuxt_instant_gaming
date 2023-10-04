export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path.includes("game")) {
        const user = useSupabaseUser();
        if(!user.value) {
            return navigateTo("/profile/login");
        }
    }
})