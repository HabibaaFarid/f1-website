import React from 'react'
import ViewRacesButton from './ViewRacesButton'

function SeasonsCardView({ seasons }) {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-5' >
      {
        seasons?.map(season => {
          const year = season['#text']
          return (
            <div className='flex flex-col col-span-1 justify-center space-y-3 items-center border-2 p-5 rounded-xl shadow-sm shadow-red-200 h-[200px]'>
              <p className='text-[18px] font-semibold'>Season {year}</p>
              <ViewRacesButton season={year} />
            </div>
          )
        })
      }
    </div>

  )

}

export default SeasonsCardView