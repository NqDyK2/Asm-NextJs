import Link from 'next/link'
import React from 'react'

type Props = {}

const NavAdmin = (props: Props) => {
  return (
    <div className='h-full bg-cyan-900'>
      <nav>
        <ul>
          <li className='inline-block pl-10 py-5'><a className='text-white' href="">Website</a></li>
          <li className='inline-block pl-10 py-5'><a className='text-white' href="">Phim</a></li>
          <li className='inline-block pl-10 py-5'><a className='text-white' href="">Category</a></li>
          <li className='inline-block pl-10 py-5'><a className='text-white' href="">logout</a></li>
        </ul>
      </nav>

    </div>
  )
}

export default NavAdmin