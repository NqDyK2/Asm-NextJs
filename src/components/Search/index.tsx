import { searchFilms } from '@/api/film';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './search.module.css'
type Props = {}


const Search = (props: Props) => {
    const [search, setSearch] = useState("");
    const [filmsSearch, setFilmsSearch] = useState<any>();
    const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const searchStr = e.target.value;
        setSearch(searchStr);

        const products = await searchFilms(searchStr);
        setFilmsSearch(products);
        // Router.push("/film")
    };
    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


    };
    return (
        <>

            <form className='-ml-72 static' onSubmit={handleSearchSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <div className="rounded bg-white shadow-md my-2 relative pin-t pin-l">
                        <ul className='list-reset'>
                            <li>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                                <input onChange={handleSearchChange} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                            </li>
                            {filmsSearch?.map((item: any, index: any) => (
                                <li className='' key={index}>
                                    <Link href={`/film/${item.id}`}>
                                        <div className='grid grid-cols-2 gap-10 cursor-pointer text-black dark:text-gray-400 text-sm dark:hover:bg-gray-600 hover:text-black leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal'>
                                            <p className="my-auto ml-5 w-96">{item.title}</p>
                                            <img src={item.poster_path} className="w-10 h-10 ml-56 object-cover rounded-full bg-[#f7f7f7]" alt="" layout="fill" />
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

        </>



    )
}
export default Search