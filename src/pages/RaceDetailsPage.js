
import React from 'react'
import { Pagination } from 'antd';
import useRaceDetails from '../modules/race-details/hooks/useRaceDetails';
import { useParams, useSearchParams } from 'react-router-dom';
import RaceDetailsView from '../modules/race-details/components/RaceDetailsView';
import Loader from '../modules/shared/Loader';
import BackButton from '../modules/shared/BackButton';

function RaceDetailsPage() {
    const { seasonId, roundId } = useParams()

    const [searchParams, setSearchParams] = useSearchParams()

    const page = Number(searchParams.get('page')) || 1
    const limit = Number(searchParams.get('limit')) || 10

    const offset = (page - 1) * limit;

    const { data, isLoading } = useRaceDetails({
        season: seasonId,
        round: roundId,
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
            <div className='flex gap-2'>
                <BackButton />
                <p className='text-[20px] font-semibold'>Race Details</p>
            </div>

            <RaceDetailsView details={data?.RaceTable?.Races[0]?.Results} />

            <div className='flex justify-end'>
                <Pagination
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

export default RaceDetailsPage