import { Button } from 'antd'
import React, { useState } from 'react'
import { GridIcon, ListIcon } from '../../../utils/icons'
import SeasonsListView from './SeasonsListView'
import SeasonsCardView from './SeasonsCardView'

function SeasonsView({ seasons }) {

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
                    viewMode === 'list' ? <SeasonsListView seasons={seasons} /> : <SeasonsCardView seasons={seasons} />
                }
            </div>
        </div>
    )
}

export default SeasonsView