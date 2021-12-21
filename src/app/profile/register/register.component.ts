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
    photo: '../../../assets/placeholder-image.png',
    mail: '',
    password: '',
    confirmPassword: '',
  };
  imgBase64Path: string = '';
  isImageSaved: boolean = false;
  cardImageBase64: string = '';

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
      photo: this.cardImageBase64,
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




  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          this.imgBase64Path = e.target.result;
          this.cardImageBase64 = this.imgBase64Path;
          this.isImageSaved = true;
          this.registeredUser.photo = this.cardImageBase64;
          console.log(this.registeredUser)
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}
