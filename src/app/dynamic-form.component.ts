import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from './form-base';
import { ContactControlService } from './contact-control.service';
import * as FileSaver from "file-saver";

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	providers: [ ContactControlService ]
})
export class DynamicFormComponent implements OnInit {

	@Input() fields: FormBase<string>[] | null = [];
	form!: FormGroup;
	payLoad = '';

	constructor(private qcs: ContactControlService) {}

	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.fields as FormBase<string>[]);
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.getRawValue());

		let file = new File([this.payLoad], "inscrits.json", {type: "text/json;charset=utf-8"});
		FileSaver.saveAs(file);
	}
}
