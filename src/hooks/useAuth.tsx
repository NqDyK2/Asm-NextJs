import useSWR from "swr";
import {SignUp, Signin} from '../api/auth'

const useFilms = () => {
    const { data, error } = useSWR("/films")
    return{
        data,
        error
    }
}

export default useFilms