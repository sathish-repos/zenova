import {
  Component,
  input,
  output,
  model,
  forwardRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Variant } from './models/input.types';

@Component({
  selector: 'z-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent implements ControlValueAccessor {
  submitAttempt = input<boolean>(true);
  errorMessages = input<{ [key: string]: string }>({});
  readonly = input<boolean>(false);
  variant = input<Variant>('outlined');
  label = input<string>('label');

  errorMessage = model<string>('');
  disabled = model<boolean>(false);

  changeEvent = output<Event>();
  focusEvent = output<Event>();
  blurEvent = output<Event>();

  onChange!: (value: any) => void;
  onTouched!: () => void;

  value: any;

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
