import { useHomeContext } from 'pages/Home/homeContext/useHomeContext';
import { useGetImages } from './api/useGetImages';
import ImagesList from './components/ImagesList.component';
import { useMemo } from 'react';

export default function SearchingResults() {
    const { query } = useHomeContext();

    const { data, error, isLoading } = useGetImages(
        { query },
        { enabled: !!query }
    );
    const images = data.collection.items;

    console.log(data);

    const getSingleImages = useMemo(() => {
        return images.map(
            ({ href, title, location, photographer, nasa_id }: Image) => {
                return (
                    <SingleImage
                        href={href}
                        title={title}
                        location={location}
                        photographer={photographer}
                        key={nasa_id}
                    />
                );
            }
        );
    }, [images]);

    if (isLoading) {
        return <>Loading...</>;
    }

    if (error) {
        return <>Error...</>;
    }

    return <ImagesList>{getSingleImages}</ImagesList>;
}
