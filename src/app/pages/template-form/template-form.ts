import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { Registration } from '../../models/registration';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    JsonPipe,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  countries = [
    { label: 'France', value: 'France' },
    { label: 'Belgique', value: 'Belgique' },
    { label: 'Suisse', value: 'Suisse' },
    { label: 'Canada', value: 'Canada' },
  ];

  registration: Registration = {
    fullname: '',
    email: '',
    age: null,
    country: '',
  };

  submittedData: Registration | null = null;

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.submittedData = { ...this.registration };

    console.log('Inscription réussie !');
    console.log(this.submittedData);
  }
}
