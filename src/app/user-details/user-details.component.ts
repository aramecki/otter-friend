import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: number
  user: User
  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.user = new User();
      this.userService.getUserById(this.id).subscribe(data => {
        this.user = data;
      });
  }
}
