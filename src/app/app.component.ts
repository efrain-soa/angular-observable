import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private users$: Observable<any[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
    this.userService.loadDummyData();
  }

  createUser(user) {
    this.userService.createNewUser(user);
  }

  approveAll() {
    this.userService.approveAll();
  }
}
