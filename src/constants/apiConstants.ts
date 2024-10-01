const apiConstants = {
    baseUrl: import.meta.env.VITE_URL,
    apiKey: import.meta.env.VITE_MOVIES_KEY,
}

export const apiEndPoints = {
    getMovies: "/movies",
}

export default apiConstants