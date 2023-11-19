import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  users: Array<any> = [];

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.dtOptions={
      pagingType: 'full_numbers'
    }
    this.listService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.dtTrigger.next(null);
      },
      (error) => {
        console.log('Error fetching data:', error);
      }
    );
  }
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}

