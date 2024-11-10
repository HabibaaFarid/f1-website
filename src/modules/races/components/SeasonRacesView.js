import React, { useMemo, useState } from 'react'
import { Button } from 'antd'
import { GridIcon, ListIcon } from '../../../utils/icons'
import RacesListView from './RacesListView'
import RacesCardView from './RacesCardView'
import PinnedRaces from '../PinnedRaces'
import { sortRaces } from '../../../utils/utils'
import { useParams } from 'react-router-dom'

function SeasonRacesView({ races }) {
    const [viewMode, setViewMode] = useState('list')
    const { seasonId } = useParams()

    const pin = new PinnedRaces()

    const [pinnedRaces, setPinnedRaces] = useState(pin.getRaces(seasonId))

    const sortedRaces = useMemo(() => { return sortRaces(races, pinnedRaces) }, [pinnedRaces, races])

    return (
        <div>
            <div className='flex justify-end gap-1'>
                <Button
                    icon={<ListIcon />}
                    onClick={() => setViewMode('list')}
                />
                <Button
                    icon={<GridIcon />}
                    onClick={() => setViewMode('card')}
                />
            </div>
            <div>
                {
                    viewMode === 'list' ?
                        <RacesListView races={sortedRaces} pinnedRaces={pinnedRaces} setPinnedRaces={setPinnedRaces} /> :
                        <RacesCardView races={sortedRaces} pinnedRaces={pinnedRaces} setPinnedRaces={setPinnedRaces} />
                }
            </div>
        </div>
    )
}

export default SeasonRacesView