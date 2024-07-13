import { Component, input, output, ViewEncapsulation } from '@angular/core';
import {
  ButtonSize,
  ButtonWidth,
  IconPosition,
  Severity,
} from './models/button.types';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'z-button',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  // input properties
  ariaLabel = input<string | undefined>();
  autofocus = input<boolean | undefined>();
  badge = input<string | undefined>();
  badgeClass = input<string | undefined>();
  disabled = input<boolean | undefined>();
  icon = input<string | undefined>();
  iconPos = input<IconPosition>('left');
  label = input<string | undefined>();
  link = input<boolean>(false);
  loading = input<boolean | undefined>();
  loadingIcon = input<boolean | undefined>();
  outlined = input<boolean>(false);
  plain = input<boolean>(false);
  raised = input<boolean>(false);
  rounded = input<boolean>(false);
  severity = input<Severity>();
  size = input<ButtonSize>('md');
  style = input<{ [klass: string]: any } | null | undefined>();
  styleClass = input<string | undefined>();
  tabindex = input<number | undefined>();
  text = input<boolean>(false);
  type = input<string>('button');
  width = input<ButtonWidth>();

  // output emitters
  onBlur = output<FocusEvent>();
  onClick = output<MouseEvent>();
  onFocus = output<FocusEvent>();

  getStyle() {
    return {
      ...this.style(),
      width: this.width() ? this.width() : undefined,
    };
  }

  get buttonClass() {
    return {
      'z-button z-component': true,
      'z-button-icon-only':
        (this.icon() || this.loadingIcon()) && !this.label(),
      'z-button-vertical':
        (this.iconPos() === 'top' || this.iconPos() === 'bottom') &&
        this.label(),
      'z-disabled': this.disabled() || this.loading(),
      'z-button-loading': this.loading(),
      'z-button-loading-label-only':
        this.loading() &&
        !this.icon() &&
        this.label() &&
        !this.loadingIcon() &&
        this.iconPos() === 'left',
      'z-button-link': this.link(),
      [`z-button-${this.severity()}`]: this.severity(),
      'z-button-raised': this.raised(),
      'z-button-rounded': this.rounded(),
      'z-button-text': this.text(),
      'z-button-outlined': this.outlined(),
      [`z-button-${this.size()}`]: this.size(),
      'z-button-plain': this.plain(),
      [`${this.styleClass()}`]: this.styleClass(),
    };
  }

  badgeStyleClass() {
    return {
      'z-badge z-component': true,
      'z-badge-no-gutter': this.badge() && String(this.badge()).length === 1,
    };
  }
}
