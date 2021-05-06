import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../../../core/core.module';
import {
	MatProgressSpinnerModule,
	MatProgressBarModule
} from '@angular/material';
import { PortletComponent } from './portlet.component';
import { PortletBodyComponent } from './portlet-body/portlet-body.component';

@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		MatProgressSpinnerModule,
		MatProgressBarModule
	],
	declarations: [PortletComponent, PortletBodyComponent],
	exports: [PortletComponent,PortletBodyComponent]
})
export class PortletModule {}
