import React, { useState } from 'react';
import useSeasons from '../modules/seasons/hooks/useSeasons';
import { Button, Pagination, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';

function SeasonsPage() {
    const navigate = useNavigate()
    const [params, setParams] = useState({ page: 1, limit: 10 });

    const offset = (params.page - 1) * params.limit;

    const { data, isLoading } = useSeasons({
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
            <p className='text-[20px] font-semibold'>All Seasons</p>

            <div className='flex flex-col gap-3 p-5' >
                {
                    data?.SeasonTable?.Season.map(season => {
                        const year = season['#text']
                        return (
                            <div className='flex justify-between'>
                                <p>Season {year}</p>
                                <Button
                                    onClick={() => navigate(`/season/${year}`)}
                                >
                                    Show Races
                                </Button>
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

export default SeasonsPage;
