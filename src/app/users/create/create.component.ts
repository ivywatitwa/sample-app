import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

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
  constructor(private createService: CreateService, private router: Router) { }

  ngOnInit(): void {}

  onSubmit() {
      this.createService.createUser(this.user).subscribe(
        (response) => {
          console.log('User created successfully!', response);
  
          this.router.navigate(['users/list']);
        },
        (error) => {
          console.log('Error creating user:', error);
        }
    );

  }
}
