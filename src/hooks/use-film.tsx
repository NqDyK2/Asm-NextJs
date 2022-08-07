import useSWR from "swr";
import {addFilm, deleteFilm} from '../api/film'

const useFilms = () => {
    const { data, error } = useSWR("/films")
    const create = async (item) => {
        const product = await add(item);
        mutate([...data, product]);
    };
    // update
    // delete
    const remove = async (id) => {
        await removeItem(id);
        const newProducts = data.filter((item) => item.id != id);
        mutate(newProducts);
    };
    return{
        data,
        error
    }
}

export default useFilms