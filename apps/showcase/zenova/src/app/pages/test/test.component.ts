import { Component } from '@angular/core';
import { ButtonComponent } from 'zenova/components';

@Component({
  selector: 'z-test',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export default class TestComponent {}
