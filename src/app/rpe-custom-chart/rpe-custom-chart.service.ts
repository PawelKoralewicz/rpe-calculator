import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomChartsType, CustomChartsTypeSecond } from "./rpe-customchart";

@Injectable()
export class RpeCustomChartService {

    constructor(private fb: FormBuilder) { }

    createForm(): FormGroup<CustomChartsType> {
        return this.fb.nonNullable.group<CustomChartsType>({
            method: this.fb.control('firstMethod', Validators.required),
            lift: this.fb.control('squat', Validators.required),
            oneRm: this.fb.control(null, Validators.required),
            fourRm: this.fb.control(null, Validators.required),
            eightRm: this.fb.control(null, Validators.required),
        })
    }

    createSecondForm(): FormGroup<CustomChartsTypeSecond> {
        return this.fb.nonNullable.group<CustomChartsTypeSecond>({
            seventyPercent: this.fb.control(null, Validators.required),
            eightyFivePercent: this.fb.control(null, Validators.required)
        })
    }

    firstCustomMethod(oneRm: number, fourRm: number, eightRm: number, dummyTable: number[][]) {

        const fourPercentage = fourRm / oneRm;
        const eightPercentage = eightRm / oneRm;
        const x = (1 - fourPercentage) / 3;
        const y = (fourPercentage - eightPercentage) / 4;

        dummyTable[0][3] = fourPercentage;
        dummyTable[0][7] = eightPercentage;

        for (let i = 1; i < 15; i++) {
            if (i >= 1 && i < 3) {
                dummyTable[0][i] = parseFloat((dummyTable[0][i - 1] - x).toFixed(4));
            } else if (i > 3 && i < 7) {
                dummyTable[0][i] = parseFloat((fourPercentage - y * (i - 3)).toFixed(4));
            } else if (i > 7) {
                dummyTable[0][i] = parseFloat((eightPercentage - y * (i - 7)).toFixed(4));
            }
        }

        for (let i = 1; i <= 10; i++) {
            for (let j = 0; j < 15; j++) {
                dummyTable[i][j] = parseFloat((dummyTable[i - 1][j] - (j >= 0 && j < 3 ? x : y) / 2).toFixed(4));
            }
        }
        return dummyTable;
    }

    secondCustomMethod(seventy: number, eighty: number, dummyTable: number[][]) {
        dummyTable[0][eighty - 1] = 0.85;
        dummyTable[0][seventy - 1] = 0.7;
        const x = 0.15 / (eighty - 1);
        const y = 0.15 / (seventy - eighty);

        for (let i = 1; i < 15; i++) {
            if (i >= 1 && i < eighty - 1) {
                dummyTable[0][i] = parseFloat((dummyTable[0][i - 1] - x).toFixed(4));
            } else if (i > (eighty - 1) && i < (seventy - 1)) {
                dummyTable[0][i] = parseFloat((0.85 - y * (i - (eighty - 1))).toFixed(4));
            } else if (i > (seventy - 1)) {
                dummyTable[0][i] = parseFloat((0.7 - y * (i - (seventy - 1))).toFixed(4));
            }
        }

        for (let i = 1; i <= 10; i++) {
            for (let j = 0; j < 15; j++) {
                dummyTable[i][j] = parseFloat((dummyTable[i - 1][j] - (j >= 0 && j < (eighty - 1) ? x : y) / 2).toFixed(4));
            }
        }
        return dummyTable;
    }
}