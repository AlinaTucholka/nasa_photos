import { useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

type SearchingInputProps = {
    onInputChange: (value: string) => void;
    onSubmit: () => void;
};

export function SearchingInput({
    onInputChange,
    onSubmit,
}: SearchingInputProps) {
    const { t } = useTranslation();

    const handleTextFieldChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onInputChange(event.target.value);
        },
        [onInputChange]
    );

    const handleOnSubmit = useCallback(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <>
            <TextField
                id="standard-basic"
                label={t('search')}
                variant="standard"
                onChange={handleTextFieldChange}
            />
            <IconButton
                color="primary"
                aria-label="search"
                onClick={handleOnSubmit}
            >
                <SearchIcon />
            </IconButton>
        </>
    );
}
