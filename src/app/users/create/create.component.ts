import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import { User } from '../user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  user: User = {
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    password: ''};
  constructor(private createService: CreateService) { }

  ngOnInit(): void {}

  onSubmit() {
    this.createService.createUser(this.user).subscribe(
      (response) => {
        console.log('User created successfully!', response);
      },
      (error) => {
        console.log('Error creating user:', error);
      }
    );
  }
}
