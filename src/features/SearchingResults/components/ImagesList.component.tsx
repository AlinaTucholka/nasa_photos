import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import { ReactNode } from 'react';

interface ImagesListProps {
    children: ReactNode;
}

export default function ImagesList({ children }: ImagesListProps) {
    return (
        <ImageList>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">Results</ListSubheader>
            </ImageListItem>
            {children}
        </ImageList>
    );
}
