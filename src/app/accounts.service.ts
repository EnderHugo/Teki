import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }

  registerAccount(_name, _email, _password, _number): void{}
  authAccount(_name, _password): void{}
}
