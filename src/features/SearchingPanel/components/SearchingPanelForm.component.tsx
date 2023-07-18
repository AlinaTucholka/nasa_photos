import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SearchingData } from 'pages/Home/homeContext/homeContextReducer';
import { useHomeContext } from 'pages/Home/homeContext/useHomeContext';
import { schema } from './searchingPanelSchema';
import { SearchingPanelDateRange } from './SearchingPanelDateRange.component';
import { SearchingPanelTextField } from './SearchingPanelTextField.component';

interface SearchingPanelFormProps {
    onSubmit: (data: SearchingData) => void;
}

type FormData = yup.InferType<typeof schema>;

export default function SearchingPanelForm({
    onSubmit,
}: SearchingPanelFormProps) {
    const { t } = useTranslation();
    const { query, startDate, endDate } = useHomeContext();

    const {
        handleSubmit,
        control,
        formState: { errors },
        formState,
        reset,
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            query,
            startDate,
            endDate,
        },
    });

    console.log(formState);

    return (
        <form>
            <SearchingPanelTextField control={control} errors={errors} />
            <SearchingPanelDateRange control={control} errors={errors} />
            <Button onClick={handleSubmit(onSubmit)}>{t('submit')}</Button>
            <Button
                onClick={() =>
                    reset({
                        query: '',
                        startDate: undefined,
                        endDate: undefined,
                    })
                }
            >
                Clear
            </Button>
        </form>
    );
}
