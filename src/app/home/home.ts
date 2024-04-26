import { FormControl } from "@angular/forms"

export type RPEFormType = {
    lift: FormControl<string | null>,
    weight: FormControl<number | null>,
    reps: FormControl<number | null>,
    rpe: FormControl<number | null>
}