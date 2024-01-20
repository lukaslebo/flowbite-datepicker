import {Options} from "./options/Options";

export default class DateRangePicker {
    constructor(element: Element);
    constructor(element: Element, options: Partial<Options>);

    get dates(): Date[];

    setOptions(options: Partial<Options>): void;

    destroy(): void;

    getDates(): Date[];
    getDates(format: string): string[];

    setDates(rangeStart: Date | string | number, rangeEnd: Date | string | number): void;
}
