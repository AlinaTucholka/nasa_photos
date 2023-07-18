import { ImagesResponse, Item, ItemData } from './Images';

export interface Image {
    href: string;
    title: string;
    location: string;
    photographer: string;
    nasa_id: string;
}

export const imagesMapper = (images: ImagesResponse): Image[] => {
    const allImages = images.collection.items
        .map(({ data, links }: Item) => ({
            href: links[0].href,
            // TODO: check other table values
            ...data[0],
        }))
        .flat();

    return allImages.map(
        ({
            href,
            title,
            photographer,
            location,
            nasa_id,
        }: ItemData & { href: string }) => ({
            href,
            title,
            photographer,
            location,
            nasa_id,
        })
    );
};
