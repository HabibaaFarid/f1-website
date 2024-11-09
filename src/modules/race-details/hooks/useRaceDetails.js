import { useQuery } from "@tanstack/react-query";
import { notification } from "antd";
import axios from "axios";
const fetchRaces = async ({ season, round, limit, offset }) => {
    try {
        const res = await axios.get(`https://ergast.com/api/f1/${season}/${round}/results.json?limit=${limit}&offset=${offset}`);
        return res?.data?.MRData
    } catch (error) {
        notification.error({
            message: 'There was error in fetching the seasons.'
        })
    }
};

const queryKey = ({ season, round, limit, offset }) => ['season-races', season, round, limit, offset];

function useRaceDetails({ season, round, limit, offset, options = {} }) {
    return useQuery({
        queryKey: ({ season, round, limit, offset }),
        queryFn: () => fetchRaces({ season, round, limit, offset }),
        ...options
    });
}

useRaceDetails.queryFn = fetchRaces;
useRaceDetails.queryKey = queryKey;

export default useRaceDetails;
