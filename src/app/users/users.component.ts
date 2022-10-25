import { Component, OnInit} from '@angular/core';
import { User } from '../user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  user: User = {
    id: 0,
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone'
  };

  constructor() { }

  ngOnInit(): void {}

}
