import React, { useState } from 'react'
import useSeasonRaces from '../modules/races/hooks/useSeasonRaces';
import { Button, Pagination, Spin } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

function SeasonRacesPage() {
    const navigate = useNavigate()

    const { seasonId } = useParams()

    const [params, setParams] = useState({ page: 1, limit: 10 });

    const offset = (params.page - 1) * params.limit;

    const { data, isLoading } = useSeasonRaces({
        season: seasonId,
        limit: params.limit,
        offset,
    });
    console.log(data, 'aaaa')

    const handlePageChange = (page, pageSize) => {
        setParams((prev) => ({ ...prev, page, limit: pageSize }));
    };

    if (isLoading) {
        return (
            <div className='flex justify-center align-center h-[300px]'>
                <Spin />
            </div>
        );
    }

    return (
        <div>
            <p className='text-[20px] font-semibold'>{seasonId} Races</p>

            <div className='flex flex-col gap-3 p-5'>
                {
                    data?.RaceTable?.Races?.map(race => {
                        return (
                            <div className='flex justify-between'>
                                <p>Round {race.round}</p>
                                <Button onClick={() => navigate(`/season/${race.season}/${race.round}`)}>View Race Details</Button>
                            </div>
                        )
                    })
                }
            </div>

            <div className='flex justify-end'>
                <Pagination
                    current={params.page}
                    pageSize={params.limit}
                    total={Number(data?.total)}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                />
            </div>
        </div>
    );
}

export default SeasonRacesPage