import {Injectable} from '@angular/core';
import {FormBase} from './form-base';
import {TextboxField} from './contact-textbox';
import {of} from 'rxjs';

@Injectable()
export class ContactService {

	getQuestions() {

		const fields: FormBase<string>[] = [

			new TextboxField({
				key: 'lastName',
				label: 'Nom :',
				required: true,
				order: 1
			}),

			new TextboxField({
				key: 'firstName',
				label: 'Prénom :',
				required: true,
				order: 2
			}),

			new TextboxField({
				key: 'birthDate',
				label: 'Date de naissance :',
				type: 'date',
				required: true,
				order: 3
			}),

			new TextboxField({
				key: 'amount',
				label: 'Montant :',
				type: 'number',
				required: true,
				order: 4
			}),

			new TextboxField({
				key: 'address',
				label: 'Adresse :',
				required: true,
				order: 5
			}),

			new TextboxField({
				key: 'postCode',
				label: 'Code postal :',
				type: 'number',
				required: true,
				order: 6
			}),

			new TextboxField({
				key: 'city',
				label: 'Ville :',
				required: true,
				order: 7
			})
		];

		return of(fields.sort((a, b) => a.order - b.order));
	}
}
