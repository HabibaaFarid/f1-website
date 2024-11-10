import React, { useState } from 'react'
import useSeasonRaces from '../modules/races/hooks/useSeasonRaces';
import { Pagination } from 'antd';
import { useParams } from 'react-router-dom';
import SeasonRacesView from '../modules/races/components/SeasonRacesView';
import Loader from '../modules/shared/Loader';
import BackButton from '../modules/shared/BackButton';

function SeasonRacesPage() {
    const { seasonId } = useParams()

    const [params, setParams] = useState({ page: 1, limit: 10 });

    const offset = (params.page - 1) * params.limit;

    const { data, isLoading } = useSeasonRaces({
        season: seasonId,
        limit: params.limit,
        offset,
    });

    const handlePageChange = (page, pageSize) => {
        setParams((prev) => ({ ...prev, page, limit: pageSize }));
    };

    if (isLoading) {
        return (
            <Loader />
        );
    }

    return (
        <div className='py-5 px-3 space-y-3'>
            <div className='flex gap-2'>
                <BackButton />
                <p className='text-[20px] font-semibold'>{seasonId} Races</p>
            </div>

            <SeasonRacesView races={data?.RaceTable?.Races} />

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