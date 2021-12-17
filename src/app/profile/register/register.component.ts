import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { registerUser, User } from 'src/app/model/models';
import { Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  clicked: boolean = false;
  registeredUser: registerUser = {
    name: '',
    lastName: '',
    age: 0,
    description: '',
    photo: '',
    mail: '',
    password: '',
    confirmPassword: '',
  };

  validateUsers: FormGroup = new FormGroup({});

  @Output() confirmedUser: EventEmitter<registerUser> = new EventEmitter();

  constructor() {
    this.validateUsers = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      age: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      photo: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required /* Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')*/,
      ]),
      confirmPassword: new FormControl('', [
        Validators.required /*Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')*/,
      ]),
    });
  }

  ngOnInit(): void {
    this.clicked = false;
  }

  registerUsers(): void {
    this.registeredUser = {
      name: this.validateUsers.get('name')?.value,
      lastName: this.validateUsers.get('lastName')?.value,
      age: this.validateUsers.get('age')?.value,
      description: this.validateUsers.get('description')?.value,
      photo: this.validateUsers.get('photo')?.value,
      mail: this.validateUsers.get('mail')?.value,
      password: this.validateUsers.get('password')?.value,
      confirmPassword: this.validateUsers.get('confirmPassword')?.value,
    };
    if (this.registeredUser.password === this.registeredUser.confirmPassword) {
      this.confirmedUser.emit(this.registeredUser);
      this.registeredUser = {
        name: '',
        lastName: '',
        age: 0,
        description: '',
        photo: '',
        mail: '',
        password: '',
        confirmPassword: '',
      };
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La contraseña no parece correcta',
      });
    }
  }

  changeClicked(): void {
    this.clicked = true;
  }

  uploadFile(event: any) {
    //fer que es mostri la imatge al pujar-la
    console.log(this.validateUsers);
    this.registeredUser.photo =
      'data:' +
      event.target.files[0].type +
      ';base64,' +
      btoa(event.target.files[0].name);
  }
}
