import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

  constructor() { }

  validateAllFormFields(formGroup: UntypedFormGroup | UntypedFormArray) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof UntypedFormControl) {
        control.markAsTouched({onlySelf: true}); // break recursive
      } else if (control instanceof UntypedFormGroup) {
        control.markAsTouched({onlySelf: true});
        this.validateAllFormFields(control);
      }
    });
  }

  private formatFieldName(controlName: string): string {
    return controlName.charAt(0).toUpperCase() + controlName.slice(1);
  }

  getErrorMessage(formGroup: UntypedFormGroup, controlName: string): string {
    const controlField = formGroup.get(controlName) as UntypedFormControl;
    return this.getErrorMessageFromField(controlField, controlName);
  }

  getErrorMessageFromField(controlField: UntypedFormControl, controlName: string): string {
    if (controlField?.hasError('required')) {
      return `${this.formatFieldName(controlName)} é obrigatório`;
    }
    if (controlField?.hasError('minlength')) {
      const minLength = controlField.getError('minlength').requiredLength;
      return `${this.formatFieldName(controlName)} deve ter pelo menos ${minLength} caracteres`;
    }
    if (controlField?.hasError('maxlength')) {
      const maxLength = controlField.getError('maxlength').requiredLength;
      return `${this.formatFieldName(controlName)} não pode ter mais de ${maxLength} caracteres`;
    }
    return 'Campo inválido';
  }

  getFormArrayFieldErrorMessage(
      formGroup: UntypedFormGroup,
      formArrayName: string,
      fieldName: string,
      index:number) {
    const formArray = formGroup.get(formArrayName) as UntypedFormArray;
    const field = formArray.controls[index].get(fieldName) as UntypedFormControl;
    return this.getErrorMessageFromField(field, fieldName);
  }

  ifFormArrayRequired(form: UntypedFormGroup, formArrayName: string) {
    const formArray = form.get(formArrayName) as UntypedFormArray;
    return !formArray.valid && formArray.hasError('required') && !formArray.touched;
  }

}
