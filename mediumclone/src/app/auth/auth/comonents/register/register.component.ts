import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {registerAction} from "../../store/actions/register.action";
import {Observable} from "rxjs";
import {isSubmittingSelector} from "../../store/selectors";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isSubmitting$!: Observable<boolean>

  form = this.fb.group({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  constructor(private fb: FormBuilder,
              private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  onSubmit() {
    console.log(this.form.value);
    this.store.dispatch(registerAction(this.form.value));
  }

  private initializeValues(): void {
    // @ts-ignore
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    console.log(this.isSubmitting$)
  }
}
