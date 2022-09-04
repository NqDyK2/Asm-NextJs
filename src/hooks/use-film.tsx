import useSWR from "swr";
import {addFilm, deleteFilm, get1, updateFilm} from '../api/film'

const useFilms = () => {
    const { data, error, mutate } = useSWR("/films")
    const create = async (item:any) => {
        const film = await addFilm(item);
        mutate([...data, film]);
    };
    const getOne = async(item:any) => {
        const film = await get1(item)
        mutate([...data,film])
    }
    // update
    const update = async ( films:any)=>{
        await updateFilm(films)
        mutate (data.map((item:{id: any , name: string}) => item.id === films.id ? films : item))
    }
    // delete
    const removeFilms = async (id:number) => {
        await deleteFilm(id);
        const newFilms = data.filter((item:any) => item.id != id);
        mutate(newFilms);
    };
    return{
        data,
        error,
        getOne,
        update,
        create,
        removeFilms
    }
}

export default useFilms