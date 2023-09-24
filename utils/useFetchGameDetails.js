export default async function useFetchGameDetails(slug){
    const { data } = await useFetch(`https://api.rawg.io/api/games/${slug}`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "token": `Token ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
        params:{
            key: import.meta.env.VITE_API_KEY
        }
    })
    return {data}
}