import axios from 'axios';
import { apiBaseUrl } from 'utils/api.utils';
import { ImagesResponse } from './Images';

export interface GetImagesSearchData {
    endDate?: Date | undefined;
    startDate?: Date | undefined;
    query: string;
}

export const getImagesRequest = (
    data: GetImagesSearchData
): Promise<ImagesResponse> => {
    const searchParams = new URLSearchParams({
        media_type: 'image',
        q: data.query,
        page: '1',
        page_size: '25',
    });

    if (data.startDate) {
        searchParams.append('year_start', data.startDate.toDateString());
    }

    if (data.endDate) {
        searchParams.append('year_end', data.endDate.toDateString());
    }

    return axios
        .get(`${apiBaseUrl}/search?${searchParams.toString()}`)
        .then((res) => res.data);
};
