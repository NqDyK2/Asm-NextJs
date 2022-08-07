import { paginate } from '@/api/film'
import useFilms from '@/hooks/use-film'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './detail.module.css'
type Props = {}

const AllFilm = (props: Props) => {

  // const { data: films, error } = useFilms();
  // if (error) return <div>failed to load...</div>
  // if (!films) return <div> loading...</div>
  const [films, setFilms] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [totalP, setTotalP] = useState(3)
  useEffect(() => {
    const getPagiFilms = async () => {
      const data = await paginate(page);
      // console.log(data);
      setFilms(data);
      // console.log(data);
    }
    getPagiFilms()
  }, [page])
  const onChangePage = (index:any) => {
    setPage(index)
    console.log("Page",index);
  }


  return (
    <>
      <div className='grid grid-cols-4 gap-5 max-w-screen-lg	mx-auto my-5 p-auto'>
        {films?.map((item: any, index: any) => {
          // eslint-disable-next-line react/jsx-key
          return <Link href={`/film/${item.id}`} key={item.id}>
            <div className='w-56 cursor-pointer	'>
              <div className='p-auto'><img src={item.poster_path} alt="" width={"215px"} /></div>
              <div>
                <h6 className='text-teal-500 font-medium text-sm truncate py-2 hover:text-yellow-500'>{item.name}</h6>
                <p className='text-white truncate text-xs'>{item.title}</p>
              </div>
            </div>
          </Link>
        })}
      </div>
      <div className="max-w-8xl mx-auto container ">
        <ul className="flex justify-center items-center">
          {/* <li>
            <span className="p-1 flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 focus:outline-none mr-1 sm:mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </span>
          </li> */}
          {[...Array(totalP).keys()].map((item: any, index: any) => {
            return <li> <span onClick={() => onChangePage(index)} className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">{item +1}</span> </li>
          })}
          {/* <li>
            <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">2</span>
          </li> */}
          {/* <li>
            <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white rounded transition duration-150 ease-in-out text-base leading-tight font-bold shadow px-3 py-2 focus:outline-none">...</span>
          </li> */}
          {/* <li>
            <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">6</span>
          </li>
          <li>
            <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">7</span>
          </li> */}
          {/* <li>
            <span className="flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 p-1 focus:outline-none ml-1 sm:ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default AllFilm