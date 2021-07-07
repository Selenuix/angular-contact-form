import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	lastname: string | undefined;
	firstName: string | undefined;
	birthDate: any;
	amount: any;
	address: string | undefined;
	postCode: number | undefined;
	city: string | undefined;


	constructor() {
	}

	ngOnInit(): void {
	}

	processForm() {
		const allInfo = `My name is ${this.lastname}`;
		alert(allInfo);
	}
}
