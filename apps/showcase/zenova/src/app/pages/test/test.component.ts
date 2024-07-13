import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'zenova/components';

@Component({
  selector: 'z-test',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export default class TestComponent {}
