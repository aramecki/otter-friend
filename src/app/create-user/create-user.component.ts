import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { cards } from 'src/assets/data/data';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  message: string;

  user: User = { firstName: '', surName: '', birth: '', cardType: 'red', email: '', password: '' };

  constructor(private userService: UserService, private router: Router) {}

  isPassDiff = false;

  ngOnInit(): void {

  }

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
    let passConfirm = document.getElementById('passConfirm') as HTMLInputElement;

    if (this.user.password !== passConfirm.value) {
      this.isPassDiff = true;
      console.log('La password non corrisponde');
      return;
    }
    if (this.user.firstName.length <= 0 && this.user.surName.length <= 0 && this.user.email.length <= 0 && this.user.password.length <= 0) {
      console.log('Compilare tutti gli input');
      return;
    }
    console.log('Dati utente prima dell\'invio:', this.user);
    this.saveUser();
  }

/*   onCardTypeChange() {
    console.log("Opzione selezionata:", this.user.cardType);
    if (this.user.cardType === 'red') {
      this.message = cards[0].text;
      return;
    } else if (this.user.cardType === 'yellow') {
      this.message = cards[1].text;
      return;
    } else {
      this.message = cards[2].text;
      return;
    }
  } */

}
