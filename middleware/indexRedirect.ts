export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser();

  if (!user.value) {
    return navigateTo("/login");
  } else {
    return navigateTo("/dashboard/overview");
  }
});
