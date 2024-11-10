import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PinIcon } from '../../../utils/icons'

function ViewRaceDetailsButton({ season, round }) {
    const navigate = useNavigate()

    const handlePinRace = () => {

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
            <Button
                size='large'
                icon={<PinIcon />}
                onClick={handlePinRace}
            />
        </div>
    )
}

export default ViewRaceDetailsButton