import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {registerAction} from "../../store/actions/register.action";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = this.fb.group({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  constructor(private fb: FormBuilder,
              private store: Store) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
    this.store.dispatch(registerAction(this.form.value));
  }
}
