import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FormBase} from './form-base';

@Component({
	selector: 'app-question',
	templateUrl: './dynamic-form-contact.component.html'
})
export class DynamicFormContactComponent {
	@Input() field!: FormBase<string>;
	@Input() form!: FormGroup;

	get isValid() {
		return this.form.controls[this.field.key].valid;
	}
}
