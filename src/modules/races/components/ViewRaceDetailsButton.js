import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PinIcon, UnpinIcon } from '../../../utils/icons'
import PinnedRaces from '../PinnedRaces'

function ViewRaceDetailsButton({ season, round, name, pinned, setPinnedRaces }) {
    const navigate = useNavigate()

    const pin = new PinnedRaces()

    const handlePinRace = () => {
        pin.addRace(season, name)
        setPinnedRaces(prevState => [...prevState, name]);
    }

    const handleUnpinRace = () => {
        pin.removeRace(season, name)
        setPinnedRaces(prevState => prevState.filter(race => race !== name));
    }

    return (
        <div className='flex gap-1'>
            <Button
                size='large'
                onClick={() => navigate(`/season/${season}/${round}`)}
                className='bg-red-500 text-white font-semibold'
            >
                View Details
            </Button>
            {pinned ?
                <Button
                    size='large'
                    icon={<UnpinIcon />}
                    onClick={handleUnpinRace}
                /> :
                <Button
                    size='large'
                    icon={<PinIcon />}
                    onClick={handlePinRace}
                />
            }
        </div>
    )
}

export default ViewRaceDetailsButton