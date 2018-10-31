import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() value = '';
  @Input() type = 'text';
  @Input() icon = '';
  @Input() placeholder = '';
  constructor() { }

  ngOnInit() {
  }

}
