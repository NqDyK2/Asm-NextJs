import useSWR from "swr";
import {addFilm, deleteFilm} from '../api/film'

const useFilms = () => {
    const { data, error, mutate } = useSWR("/films")
    const create = async (item:any) => {
        const film = await addFilm(item);
        mutate([...data, film]);
    };
    // update
    // delete
    const remove = async (id:number) => {
        await deleteFilm(id);
        const newProducts = data.filter((item:any) => item.id != id);
        mutate(newProducts);
    };
    return{
        data,
        error,
        create,
        remove
    }
}

export default useFilms