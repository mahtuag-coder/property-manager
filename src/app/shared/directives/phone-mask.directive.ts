import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appPhoneMask]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneMaskDirective),
      multi: true
    }
  ]
})
export class PhoneMaskDirective implements ControlValueAccessor {

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    const input = this.el.nativeElement;
    let value = input.value.replace(/\D/g, ''); // remove non-digits

    if (value.length > 10) {
      value = value.substring(0, 10);
    }

    let formattedValue = value;
    if (value.length > 6) {
      formattedValue = `${value.substring(0, 3)}-${value.substring(3, 6)}-${value.substring(6)}`;
    } else if (value.length > 3) {
      formattedValue = `${value.substring(0, 3)}-${value.substring(3)}`;
    }
    input.value = formattedValue;

    if (this.onChange) {
      this.onChange(value); // ✅ only raw digits go into FormControl
    }
  }

  writeValue(value: string): void {
    if (!value) {
      this.el.nativeElement.value = '';
      return;
    }
    let formattedValue = value;
    if (value.length === 10) {
      formattedValue = `${value.substring(0, 3)}-${value.substring(3, 6)}-${value.substring(6)}`;
    }
    this.el.nativeElement.value = formattedValue;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;  // ✅ FIXED
  }

  setDisabledState(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }
}
