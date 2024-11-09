import { useQuery } from "@tanstack/react-query";
import { notification } from "antd";
import axios from "axios";
const fetchRaces = async ({ season, limit, offset }) => {
    try {
        const res = await axios.get(`https://ergast.com/api/f1/${season}/races.json?limit=${limit}&offset=${offset}`);
        return res?.data?.MRData
    } catch (error) {
        notification.error({
            message: 'There was error in fetching the seasons.'
        })
    }
};

const queryKey = ({ season, limit, offset }) => ['season-races', season, limit, offset];

function useSeasonRaces({ season, limit, offset, options = {} }) {
    return useQuery({
        queryKey: ({ season, limit, offset }),
        queryFn: () => fetchRaces({ season, limit, offset }),
        ...options
    });
}

useSeasonRaces.queryFn = fetchRaces;
useSeasonRaces.queryKey = queryKey;

export default useSeasonRaces;
