import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
    //standalone: true,
    //imports: [ReactiveFormsModule],
    selector: 'app-party',
    templateUrl: './partyex.html',
    styleUrls: []
})
export class PartyexComponent {

    public partyForm = new FormGroup({
        address: new FormGroup({
            house: new FormControl(1234),
            street: new FormControl('Main St'),
        }),
        formal: new FormControl(false),
        foodOptions: new FormControl(['pizza', 'tacos']),
    });


    partyFunction() {
        this.partyForm.controls.address.setValue({
            house: 1,
            street: 'Millan St',
        });
        this.partyForm.controls.address.patchValue({
            street: 'Millan St',
        });
    }

    /*whoClaimed() {
        let house = this.partyForm.get('address.street')!.value;
        let neighborhood = house - 2;
    }

    reSetControls() {
        const car = new FormControl('Ford');
        const thisCar = car.value; // 'Ford'
        car.reset();
        const whichCar = car.value; // null

        car.value.substring(1); // Error: Cannot read property 'substring' of null
    }*/
}