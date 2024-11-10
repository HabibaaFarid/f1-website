import React, { useState } from 'react'
import { Button } from 'antd'
import { GridIcon, ListIcon } from '../../../utils/icons'
import RacesListView from './RacesListView'
import RacesCardView from './RacesCardView'

function SeasonRacesView({ races }) {
    const [viewMode, setViewMode] = useState('list')

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
                    viewMode === 'list' ? <RacesListView races={races} /> : <RacesCardView races={races} />
                }
            </div>
        </div>
    )
}

export default SeasonRacesView