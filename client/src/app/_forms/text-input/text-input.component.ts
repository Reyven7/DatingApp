import { NgIf } from '@angular/common';
import { Component, input, Self } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
})
export class TextInputComponent implements ControlValueAccessor {
  label = input<string>('');
  type = input<string>('text');

  constructor(@Self() public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  writeValue(obj: any): void {
    /* document why this method 'writeValue' is empty */
  }

  registerOnChange(fn: any): void {
    /* document why this method 'registerOnChange' is empty */
  }

  registerOnTouched(fn: any): void {
    /* document why this method 'registerOnTouched' is empty */
  }

  setDisabledState?(isDisabled: boolean): void {
    /*  document why this method 'setDisabledState' is empty */
  }

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }
}
