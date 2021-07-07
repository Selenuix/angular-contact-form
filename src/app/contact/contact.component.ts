import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	lastname: string;
	firstName: string;
	birthDate: any;
	amount: any;
	address: string;
	postCode: number;
	city: string;
	

  constructor() { }

  ngOnInit(): void {
  }

}
