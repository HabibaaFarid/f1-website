import React from 'react'
import { Button } from 'antd'
import { BackIcon } from '../../utils/icons'
import { useNavigate } from 'react-router-dom'

function BackButton() {
    const navigate = useNavigate()

    return (
        <Button
            icon={<BackIcon />}
            onClick={() => navigate(-1)}
        />
    )
}

export default BackButton