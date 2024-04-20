import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  countries = ['US', 'BR', 'ES'];
  user = new User('User 1', 'user@example.com', this.countries[1]);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required]),
      country: new FormControl(null),
    });

    // Precisa preencher todos os campos do form control
    this.form.setValue({
      username: this.user.username,
      email: this.user.email,
      country: this.user.country,
    });

    // Preencher somente os que quiser do form control
    // this.form.patchValue({
    //   username: this.user.username,
    //   // email: this.user.email,
    //   country: this.user.country
    // })
  }

  get username() {
    return this.form.get('username');
  }

  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }
}
