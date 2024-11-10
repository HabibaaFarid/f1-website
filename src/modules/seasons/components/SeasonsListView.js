import React from 'react'
import ViewRacesButton from './ViewRacesButton'

function SeasonsListView({ seasons }) {
  return (
    <div className='flex flex-col gap-3 p-5' >
      {
        seasons?.map(season => {
          const year = season['#text']
          return (
            <div className='flex justify-between items-center border-2 p-5 rounded-xl shadow-sm shadow-red-200'>
              <p className='text-[18px] font-semibold'>Season {year}</p>
              <ViewRacesButton season={year} />
            </div>
          )
        })
      }
    </div>

  )
}

export default SeasonsListView