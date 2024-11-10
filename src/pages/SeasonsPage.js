import React from 'react';
import useSeasons from '../modules/seasons/hooks/useSeasons';
import { Pagination } from 'antd';
import SeasonsView from '../modules/seasons/components/SeasonsView';
import Loader from '../modules/shared/Loader';
import { useSearchParams } from 'react-router-dom';

function SeasonsPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(searchParams.get('page')) || 1;
    const limit = Number(searchParams.get('limit')) || 10;

    const offset = (page - 1) * limit;

    const { data, isLoading } = useSeasons({
        limit,
        offset,
    });

    const handlePageChange = (page, pageSize) => {
        setSearchParams({ page, limit: pageSize });
    };

    if (isLoading) {
        return (
            <Loader />
        );
    }

    return (
        <div className='py-5 px-3 space-y-3'>
            <p className='text-[24px] font-semibold' data-testid='title'>All Seasons</p>

            <SeasonsView seasons={data?.SeasonTable?.Season} />

            <div className='flex justify-end'>
                <Pagination
                    size='large'
                    current={page}
                    pageSize={limit}
                    total={Number(data?.total)}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                />
            </div>
        </div>
    );
}

export default SeasonsPage;
