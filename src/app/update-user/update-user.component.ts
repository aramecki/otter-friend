import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  id: number;
  user: User = new User();
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.userService.getUserById(this.id).subscribe({
        next: (data) => {
        this.user = data;
      },
      error: (error) => console.log(error),
    });
    }

    onSubmit() {
      this.userService.updateUser(this.id, this.user).subscribe({
        next: (data) => {
        this.goToUserList();
      },
    error: (error) => console.log(error),
  });
    }

    goToUserList() {
      this.router.navigate(['/users']);
    }
}
