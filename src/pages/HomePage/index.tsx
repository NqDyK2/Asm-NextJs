import React from 'react'
import Banner from '../../components/banner'
import List10Film from '../../components/list10film'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Banner/>
      <List10Film/>
    </div>
  )
}

export default HomePage