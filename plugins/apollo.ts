export default defineNuxtPlugin((nuxtApp) => {
  const { githubToken } = useRuntimeConfig()
  nuxtApp.hook('apollo:auth', ({ token }) => {
    token.value = githubToken
  })
})
