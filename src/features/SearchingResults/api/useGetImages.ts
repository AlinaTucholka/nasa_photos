import { useQuery, UseQueryOptions } from 'react-query';
import { getImagesRequest, GetImagesSearchData } from './getImages.api';
import { ImagesResponse } from './Images';

export const useGetImages = (
    data: GetImagesSearchData,
    options: UseQueryOptions<
        ImagesResponse,
        unknown,
        string,
        (string | GetImagesSearchData)[]
    > = {}
) => {
    return useQuery(['getImagesKey', data], () => getImagesRequest(data), {
        onError: (error) => {
            console.log(error);
        },
        ...options,
    });
};
