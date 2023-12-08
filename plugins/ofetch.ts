export default defineNuxtPlugin(({$config}) => {
    const fetchInstanse = $fetch.create({
        baseURL: `${$config.public.baseUrl}`
    });

    return {
        provide:{
            fetch: fetchInstanse
        }
    }
})