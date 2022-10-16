import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  //standalone: true,
  //imports: [ReactiveFormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form = new FormGroup({
    email: new FormControl<string | null>(null),
    age: new FormControl<number | null>(null),
  });

  /*form = new UntypedFormGroup({
    email: new UntypedFormControl(null),
    age: new UntypedFormControl(null),
  });*/

  onSumbit() {
    if (this.form.value.email)
    console.log(this.form.value.email.length);
  }
}
