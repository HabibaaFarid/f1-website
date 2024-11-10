import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ViewRacesButton({ season }) {
    const navigate = useNavigate()
    return (
        <Button
            size='large'
            onClick={() => navigate(`/season/${season}`)}
            className='bg-red-500 text-white font-semibold'
        >
            View Races
        </Button>
    )
}

export default ViewRacesButton