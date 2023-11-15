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

  dtOptions: DataTables.Settings = {
    paging: true,
    ordering: false,
    info: false,
    search: false
  };

  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.dtTrigger.next(true);
      },
      (error) => {
        console.log('Error fetching data:', error);
      }
    );
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(true);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
