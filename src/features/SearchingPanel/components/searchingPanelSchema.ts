import * as yup from 'yup';

export const minChars = 3;
export const maxChars = 250;

export const schema = yup.object({
    query: yup
        .string()
        .required('formValidation.required')
        .min(minChars, 'formValidation.tooShort')
        .max(maxChars, 'formValidation.tooLong'),
    startDate: yup
        .date()
        .max(yup.ref('endDate'), 'formValidation.startDateAfterEndDate'),
    endDate: yup
        .date()
        .min(yup.ref('start'), 'formValidation.endDateBeforeStartDate'),
});
