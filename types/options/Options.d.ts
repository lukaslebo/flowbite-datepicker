export interface Options {
    autohide: boolean;
    beforeShowDay: BeforeHook | null;
    beforeShowDecade: BeforeHook | null;
    beforeShowMonth: BeforeHook | null;
    beforeShowYear: BeforeHook | null;
    calendarWeeks: boolean;
    clearBtn: boolean;
    dateDelimiter: string;
    datesDisabled: Date[];
    daysOfWeekDisabled: number[];
    daysOfWeekHighlighted: number[];
    defaultViewDate: Date | undefined;
    disableTouchKeyboard: boolean;
    format: string;
    language: string;
    maxDate: Date | null;
    maxNumberOfDates: number;
    maxView: number;
    minDate: Date | null;
    nextArrow: string;
    orientation: Orientation;
    pickLevel: number;
    prevArrow: string;
    showDaysOfWeek: boolean;
    showOnClick: boolean;
    showOnFocus: boolean;
    startView: number;
    title: string;
    todayBtn: boolean;
    todayBtnMode: number;
    todayHighlight: boolean;
    updateOnBlur: boolean;
    weekStart: number;
}

export type BeforeHook = (date: Date) => boolean | string | undefined;
export type Orientation =
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'auto'
    | `${'left' | 'right' | 'auto'} ${'top' | 'bottom' | 'auto'}`;
