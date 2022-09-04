import NavAdmin from '@/components/Admin/sideBarAdmin'
import LayoutAdmin from '@/components/Layouts/admin'
import { NextPageWithLayout } from '@/models/layouts'
import React from 'react'

type Props = {}

const AdminHome: NextPageWithLayout = () => {
  return (
    <div className='bg-white h-full'>
      <div>
        <h1>ádasdasd</h1>
      </div>
    </div>
  )
}
AdminHome.Layout = LayoutAdmin

export default AdminHome