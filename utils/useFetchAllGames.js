export default async function useFetchAllGames(page, filters){
    const { data, pending } = await useFetch("https://api.rawg.io/api/games", {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "token": `Token ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
        params:{
            key: import.meta.env.VITE_API_KEY,
            page: page,
            ...filters
        },
        watch:[page]
    })
    return {data, pending}
}