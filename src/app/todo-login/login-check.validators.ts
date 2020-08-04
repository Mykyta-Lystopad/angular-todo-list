import {FormControl} from "@angular/forms";

export class LoginCheckValidators {

  static allowEmail(control: FormControl):{[key: string]: boolean}  {
    if (!["testuser@todo.com"].includes(control.value)) {
      return  {allowEmail: true}
    }
    return null
  }

  static allowPassword(control: FormControl):{[key: string]: boolean}  {
    if (!["12345678"].includes(control.value)) {
      return  {allowPassword: true}
    }
    return null
  }

}
