import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {LoginCheckValidators} from "./login-check.validators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-login',
  templateUrl: './todo-login.component.html',
  styleUrls: ['./todo-login.component.scss']
})
export class TodologinComponent implements OnInit {

  form: FormGroup;

  @Output() rout = new EventEmitter();

  loginStorage = localStorage.getItem('Checked');
  routing: string ='';

  constructor(private router: Router) {
    if(this.loginStorage) {
      this.router.navigate(['/todo-mainblock']);
    }
  }

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
        LoginCheckValidators.allowEmail,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        LoginCheckValidators.allowPassword,
      ]),
      checkbox: new FormControl(true)
    });

  }

  submit() {
    const checkbox = this.form.get('checkbox').value;
    console.log(checkbox)
    if (checkbox === true) {
      localStorage.setItem('Checked', JSON.stringify(checkbox));
    }
    this.router.navigate(['/todo-mainblock']);
  }

}
