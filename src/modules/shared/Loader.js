import { Spin } from 'antd'
import React from 'react'

function Loader() {
  return (
      <div className='flex justify-center items-center h-[300px]'>
          <Spin />
      </div>
  )
}

export default Loader