import { Component, Input, OnInit } from '@angular/core';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() isSidebarOpen: boolean = false;

  faUser = faUser;
  faUserPlus = faUserPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
