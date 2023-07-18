const formValidation = {
    required: 'Field is required',
    tooShort: 'Value is too short',
    tooLong: 'Value is too long',
    minimumCharsInfo: 'minimum {{minChars}} characters',
    maximumCharsInfo: 'maximum {{maxChars}} characters',
    startDateAfterEndDate: 'Start date must be before end date',
    endDateBeforeStartDate: 'End date must be after start date',
};

const date = {
    start: 'Start date',
    end: 'End date',
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const en_EN = {
    translation: {
        search: 'Search',
        loading: 'Loading',
        error: 'Error',
        submit: 'Submit',
        date,
        formValidation,
    },
};
