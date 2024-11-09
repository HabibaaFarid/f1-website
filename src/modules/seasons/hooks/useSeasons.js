import { useQuery } from "@tanstack/react-query";
import { notification } from "antd";
import axios from "axios";
import { convertXMLtoJSON } from "../../../utils/utils";

const fetchSeasons = async ({ limit, offset }) => {
    try {
        const res = await axios.get(`https://ergast.com/api/f1/seasons?limit=${limit}&offset=${offset}`);
        const jsonResp = convertXMLtoJSON(res?.data)
        return jsonResp
    } catch (error) {
        notification.error({
            message: 'There was error in fetching the seasons.'
        })
    }
};

const queryKey = ({ limit, offset }) => ['seasons', limit, offset];

function useSeasons({ limit, offset, options = {} }) {
    return useQuery({
        queryKey: ({ limit, offset }),
        queryFn: () => fetchSeasons({ limit, offset }),
        ...options
    });
}

useSeasons.queryFn = fetchSeasons;
useSeasons.queryKey = queryKey;

export default useSeasons;
