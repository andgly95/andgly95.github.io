import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm-portlet-body',
  templateUrl: './portlet-body.component.html',
  styleUrls: ['./portlet-body.component.css']
})
export class PortletBodyComponent implements OnInit {
@Input() cssAnimation:string;

  constructor() { }

  ngOnInit() {
  }

}
