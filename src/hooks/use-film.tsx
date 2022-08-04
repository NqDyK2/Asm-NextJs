import useSWR from "swr";
import {addFilm, deleteFilm} from '../api/film'

const useFilms = () => {
    const { data, error } = useSWR("/films")
    return{
        data,
        error
    }
}
export default useFilms