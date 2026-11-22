import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { Registration } from '../../models/registration';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    JsonPipe,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  countries = [
    { label: 'France', value: 'France' },
    { label: 'Belgique', value: 'Belgique' },
    { label: 'Suisse', value: 'Suisse' },
    { label: 'Canada', value: 'Canada' },
  ];

  registrationForm = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(3)]),

    email: new FormControl('', [Validators.required, Validators.email]),

    age: new FormControl<number | null>(null, [Validators.required, Validators.min(18)]),

    country: new FormControl('', [Validators.required]),
  });

  submittedData: Registration | null = null;

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.submittedData = {
      fullname: this.registrationForm.controls.fullname.value,
      email: this.registrationForm.controls.email.value,
      age: this.registrationForm.controls.age.value,
      country: this.registrationForm.controls.country.value,
    } as Registration;

    console.log('Inscription réussie !');
    console.log(this.submittedData);
  }

  resetForm(): void {
    this.registrationForm.reset();
    this.submittedData = null;
  }
}
