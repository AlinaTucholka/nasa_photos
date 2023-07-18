import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useTranslation } from 'react-i18next';
import { Control, Controller, FieldErrors } from 'react-hook-form';

interface SearchingPanelDateRangeProps {
    control: Control<{
        endDate?: Date | undefined;
        startDate?: Date | undefined;
        query: string;
    }>;
    errors: FieldErrors;
}

export function SearchingPanelDateRange({
    control,
    errors,
}: SearchingPanelDateRangeProps) {
    const { t } = useTranslation();

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
                name="startDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <DatePicker
                        label={t('date.start')}
                        value={value ?? ''}
                        onChange={onChange}
                        disableFuture
                        slotProps={{
                            textField: {
                                helperText: errors.startDate?.message
                                    ? t('formValidation.startDateAfterEndDate')
                                    : '',
                                error: !!errors.startDate?.message,
                            },
                        }}
                    />
                )}
            />
            <Controller
                name="endDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <DatePicker
                        label={t('date.end')}
                        value={value ?? ''}
                        onChange={onChange}
                        disableFuture
                        slotProps={{
                            textField: {
                                helperText: errors.endDate?.message
                                    ? t('formValidation.endDateBeforeStartDate')
                                    : '',
                                error: !!errors.endDate?.message,
                            },
                        }}
                    />
                )}
            />
        </LocalizationProvider>
    );
}
