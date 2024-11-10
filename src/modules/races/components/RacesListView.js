import React from 'react'
import ViewRaceDetailsButton from './ViewRaceDetailsButton'
import { convertDate } from '../../../utils/utils'

function RacesListView({ races, pinnedRaces, setPinnedRaces }) {

    return (
        <div className='flex flex-col gap-3 p-5' >
            {
                races?.map(race => {
                    const date = convertDate(race.date)
                    const isPinned = pinnedRaces.includes(race.raceName)
                    return (
                        <div className='flex justify-between items-center border-2 p-5 rounded-xl shadow-sm shadow-red-200'>
                            <div>
                                <p className='text-[18px] font-semibold'>Race: <span className='text-gray-700'>{race.raceName}</span></p>
                                <p className='text-[18px] font-semibold'>Circuit: <span className='text-gray-700'>{race.Circuit.circuitName}</span></p>
                                <p className='text-[18px] font-semibold'>Date: <space className='text-gray-700'>{date}</space></p>
                            </div>
                            <ViewRaceDetailsButton season={race.season} round={race.round} name={race.raceName} pinned={isPinned} setPinnedRaces={setPinnedRaces} />
                        </div>
                    )
                })
            }
        </div>

    )
}

export default RacesListView