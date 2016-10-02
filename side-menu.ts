import {Component}	from '@angular/core';
import {appRoutes}	from 'app/app.routing';

@Component({
	selector:			'side-menu',
	template:			'<p *ngFor="let item of menu"><a [routerLink]="[item.path]">{{item.data.label}}</a></p>',
	styles:       [
		'a {color: white}'
	]
})

export class SideMenu {
	constructor() {
		this.menu = appRoutes.filter((x) => {return x.data.label});
	}
}