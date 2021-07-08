import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormContactComponent } from './dynamic-form-contact.component';

@NgModule({
	imports: [ BrowserModule, ReactiveFormsModule ],
	declarations: [ AppComponent, DynamicFormComponent, DynamicFormContactComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	constructor() {
	}
}
