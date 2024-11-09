
import React, { useState } from 'react'
import { Pagination, Spin } from 'antd';
import useRaceDetails from '../modules/race-details/hooks/useRaceDetails';
import { useParams } from 'react-router-dom';

function RaceDetailsPage() {
    const { seasonId, roundId } = useParams()

    const [params, setParams] = useState({ page: 1, limit: 10 });

    const offset = (params.page - 1) * params.limit;

    const { data, isLoading } = useRaceDetails({
        season: seasonId,
        round: roundId,
        limit: params.limit,
        offset,
    });

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
            <p className='text-[20px] font-semibold'>Race Details</p>

            <div className='flex flex-col gap-3 p-5'>
                {
                    data?.RaceTable?.Races[0]?.Results?.map(round => {
                        return (
                            <div className='flex justify-between'>
                                <p>Driver: {round.Driver.givenName} {round.Driver.familyName}</p>

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

export default RaceDetailsPage