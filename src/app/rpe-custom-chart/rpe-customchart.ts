import { FormControl } from "@angular/forms"

export type CustomChartsType = {
    method: FormControl<String | null>;
    lift: FormControl<String | null>;
    oneRm: FormControl<number | null>;
    fourRm: FormControl<number | null>;
    eightRm: FormControl<number | null>;
}

export type CustomChartsTypeSecond = {
    seventyPercent: FormControl<number | null>;
    eightyFivePercent: FormControl<number | null>;
}