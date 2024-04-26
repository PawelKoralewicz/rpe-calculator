import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RPEFormType } from './home';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  
  constructor(private fb: FormBuilder) { }
  
  createForm(): FormGroup<RPEFormType> {
    return this.fb.nonNullable.group<RPEFormType>({
      lift: this.fb.nonNullable.control(null, Validators.required),
      weight: this.fb.nonNullable.control(null, Validators.required),
      reps: this.fb.nonNullable.control(null, Validators.required),
      rpe: this.fb.nonNullable.control(null, Validators.required)
    })
  }
}
