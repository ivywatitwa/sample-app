import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  constructor(private authService: AuthService){

  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

  logOut(){
    this.authService.logout();
  }
}
