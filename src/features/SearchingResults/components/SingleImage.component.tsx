import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

interface SingleImageProps {
    href: string;
    title: string;
    location: string;
    photographer: string;
}

export default function SingleImage({
    href,
    title,
    location,
    photographer,
}: SingleImageProps) {
    return (
        <ImageListItem>
            <img src={href} srcSet={href} alt={title} loading="lazy" />
            <ImageListItemBar
                title={title}
                subtitle={
                    <>
                        <p>{photographer}</p>
                        <small>{location}</small>
                    </>
                }
                actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={location}
                    >
                        <InfoIcon />
                    </IconButton>
                }
            />
        </ImageListItem>
    );
}
