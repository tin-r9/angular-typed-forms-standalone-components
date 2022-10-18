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
    email: new FormControl<string | null>('example@mail.com', {nonNullable: true}),
    age: new FormControl<number | null>(null),
  });

  /*form = new UntypedFormGroup({
    email: new UntypedFormControl(null),
    age: new UntypedFormControl(null),
  });*/

  onSubmit() {
    if (this.form.value.email) {
      console.log(this.form.value.email.length);
    }
    //console.log(this.form.value.age + 1);
    this.form.reset();
    console.log(this.form.value.age), 'Edad';
    console.log(this.form.value.email, 'Email'); //Al no agregar la property {nonNullable: true} por mas que nuestro form control tenga tipo, el mismo puede ser null
    this.setValues();
  }

  setValues() {
    this.form.setValue({
      email: 'angular@mail.com', 
      age: 12 // si en este caso eliminamos el tipo especifico veremos como se desarrolla un error al ser null
    });
  }

}
