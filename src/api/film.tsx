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
    const url = `/film/${film.id}`
    return instance.put(url, film)
}