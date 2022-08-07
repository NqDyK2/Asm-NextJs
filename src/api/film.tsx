import instance from "./instance";
export const listFilm = () => {
    const url = `/films`
    return instance.get(url)
}
export const addFilm = (film:any) => {
    const url = `/films`
    return instance.post(url, film)
}
export const deleteFilm = (id:any) => {
    const url = `/films/${id}`
    return instance.delete(url)
}
export const updateFilm = (film:any) => {
    const url = `/films/${film.id}`
    return instance.put(url, film)
}
export const paginate = (page:any) => {
    const url = `/films?_page=${page}&_limit=8`
    return instance.get(url) 
}