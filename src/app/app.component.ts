import { Component } from '@angular/core';

import { ContactService } from './contact.service';
import { FormBase } from './form-base';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	template: `
    <div>
      <h2>Contact</h2>
      <app-dynamic-form [fields]="fields$ | async"></app-dynamic-form>
    </div>
  `,
	providers:  [ContactService]
})
export class AppComponent {
	fields$: Observable<FormBase<any>[]>;
	title: 'angular-contact-form' | undefined;

	constructor(service: ContactService) {
		this.fields$ = service.getQuestions();
	}
}
