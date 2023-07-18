import { useTranslation } from 'react-i18next';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { minChars } from './searchingPanelSchema';

interface SearchingPanelTextFieldProps {
    control: Control<{
        endDate?: Date | undefined;
        startDate?: Date | undefined;
        query: string;
    }>;
    errors: FieldErrors;
}

export function SearchingPanelTextField({
    control,
    errors,
}: SearchingPanelTextFieldProps) {
    const { t } = useTranslation();

    return (
        <Controller
            name="query"
            control={control}
            render={({ field: { onChange, value } }) => (
                <TextField
                    onChange={onChange}
                    value={value}
                    label={t('search')}
                    variant="standard"
                    required
                    error={!!errors.query?.message}
                    helperText={
                        typeof errors.query?.message === 'string'
                            ? t(errors.query.message)
                            : t('formValidation.minimumCharsInfo', {
                                  minChars,
                              })
                    }
                />
            )}
        />
    );
}
