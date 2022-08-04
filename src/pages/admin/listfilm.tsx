import NavAdmin from '@/components/Admin/sideBarAdmin'
import LayoutAdmin from '@/components/Layouts/admin'
import { NextPageWithLayout } from '@/models/layouts'
import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layouts'
type Props = {}

const ListFilm = (props: NextPageWithLayout) => {
  return (
    <div>
            
<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
      <th scope="col" className="py-3 px-6">
          STT
        </th>
        <th scope="col" className="py-3 px-6">
          Product Film
        </th>
        <th scope="col" className="py-3 px-6">
          EnName
        </th>
        <th scope="col" className="py-3 px-6">
        Poster
        </th>
        <th scope="col" className="py-3 px-6">
        Desc
        </th>
        <th scope="col" className="py-3 px-6">
        backgroundImg
        </th>
        <th scope="col" className="py-3 px-6">
        video
        </th>
        <th scope="col" className="py-3 px-6">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         1
        </th>
        <td className="py-4 px-6">
          Sliver
        </td>
        <td className="py-4 px-6">
          Sliver
        </td>
        <td className="py-4 px-6">
          Laptop
        </td>
        <td className="py-4 px-6">
          $2999
        </td>
        <td className="py-4 px-6">
          Laptop
        </td>
        <td className="py-4 px-6">
          $2999
        </td>
        <td className="py-4 px-6 ">
          <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4">Edit</Link>
          <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
        </td>
      </tr>
     
    </tbody>
  </table>
</div>


    </div>
  )
}
ListFilm.Layout = LayoutAdmin

export default ListFilm