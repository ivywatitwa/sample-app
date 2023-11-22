import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  constructor(private authService: AuthService,private toastr: ToastrService){

  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

  logOut(){
    this.authService.logout();
    this.toastr.success('Success', 'You logged out successfully.')
  }
}
