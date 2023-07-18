export interface Metadata {
    total_hits: number;
}

export interface ItemData {
    album: string[];
    center: string;
    date_created: string;
    description: string;
    keywords: string[];
    location: string;
    media_type: string;
    nasa_id: string;
    photographer: string;
    title: string;
}

export interface Item {
    data: ItemData[];
    href: string;
    links: ItemLink[];
}

export interface ItemLink {
    href: string;
    rel: string;
    render: string;
}

export interface CollectionLink {
    href: string;
    rel: string;
    prompt: string;
}

export interface Collection {
    href: string;
    items: Item[];
    links?: CollectionLink[];
    metadata: Metadata;
    version: string;
}

export interface ImagesResponse {
    collection: Collection;
}
