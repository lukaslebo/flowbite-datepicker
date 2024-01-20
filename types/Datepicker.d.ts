import {Options} from "./options/Options";
import DateRangePicker from "./DateRangePicker";
import {Locale} from "./i18n/Locale";

export default class Datepicker {
    constructor(element: Element);
    constructor(element: Element, options: Partial<Options>);
    constructor(
        element: Element,
        options: Partial<Options>,
        rangepicker: DateRangePicker,
    );

    static formatDate(date: Date, format: string, lang: string): string;

    static parseDate(dateStr: string, format: string, lang: string): number | undefined;

    static get locales(): Record<string, Locale>;

    get active(): boolean;

    get pickerElement(): HTMLDivElement;

    setOptions(options: Partial<Options>): void;

    show(): void;

    hide(): void;

    destroy(): Datepicker;

    getDate(): Date;
    getDate(format: string): string;

    setDate(...args: (Date | string | number)[]): void;
    setDate(
        ...args: [
            ...(Date | string | number)[],
            { clear: boolean; render: boolean; autohide: boolean },
        ]
    ): void;

    update(): void;
    update(options: { autohide: boolean }): void;

    refresh(): void;
    refresh(target: 'picker' | 'input'): void;
    refresh(target: 'picker' | 'input', forceRender: boolean): void;

    enterEditMode(): void;

    exitEditMode(): void;
    exitEditMode(options: { update: boolean }): void;
}
