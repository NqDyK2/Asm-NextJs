import React from 'react'
import { LayoutProps } from '../../models/layouts'
import Footer from '../footer'
import Header from '../header'


type Props = {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout