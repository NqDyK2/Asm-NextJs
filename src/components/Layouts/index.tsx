import React from 'react'
import { LayoutProps } from '../../models/layouts'
import Footer from '../footer'
import Header from '../Header'


type Props = {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='bg-black' >
      <Header />
      <div className='mt-40'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout