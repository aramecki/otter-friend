import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  

  message: string;

  user: User = { firstName: '', lastName: '', birth: '', cardType: 'red', email: '', password: '', secPassword: '' };

  constructor(private userService: UserService, private router: Router) {}

  isPassDiff = false;

  ngOnInit(): void { }

  saveUser() {
    this.userService.createUser(this.user).subscribe({
      next: data => {
      console.log(data);
      this.goToUserList();
    },
      error: error => console.log(error)
    });
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    let secPassword = document.getElementById('secPassword') as HTMLInputElement;

    if (!this.user.firstName.length || !this.user.lastName.length || !this.user.email.length || !this.user.password.length) {
      console.log('Compilare tutti i campi');
      return;
    }
    if (this.user.password !== secPassword.value) {
      this.isPassDiff = true;
      console.log('La password non corrisponde');
      return;
    }
    console.log('Dati utente prima dell\'invio:', this.user);
    this.saveUser();
  }

  isFormValid(): boolean {
    const birthReg = /^\d{4}-\d{2}-\d{2}$/;

    return this.user.firstName.length > 0 
      && this.user.lastName.length > 0
      && birthReg.test(this.user.birth)
      && this.user.email.includes("@")
      && this.user.password.length > 0
      && this.user.secPassword.length > 0;
  }

}
