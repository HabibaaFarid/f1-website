import React, { useState } from 'react';
import useSeasons from '../modules/seasons/hooks/useSeasons';
import { Pagination } from 'antd';
import SeasonsView from '../modules/seasons/components/SeasonsView';
import Loader from '../modules/shared/Loader';

function SeasonsPage() {
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
            <Loader />
        );
    }

    return (
        <div className='py-5 px-3 space-y-3'>
            <p className='text-[24px] font-semibold'>All Seasons</p>

            <SeasonsView seasons={data?.SeasonTable?.Season} />

            <div className='flex justify-end'>
                <Pagination
                    size='large'
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
