import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { PlayerService } from '../player.service';
import { map } from 'rxjs/operators';

export interface UserData {
  key: string;
  Email: string;
  userName: string;
  points: number;
  fullName: string;
  country: string;
  lost: number;
  won: number;
  Position: number;
  permision: number;
}

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.scss']
})

export class TableResultComponent implements OnInit {
  displayedColumns: string[] = ['Position', 'userName', 'won', 'lost','points'];
  dataSource:MatTableDataSource<UserData>;
  players: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private playerService: PlayerService) {
    // Create 100 users
    // const players = getCustomersList();

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.players);
  }

  ngOnInit() {
    this.getCustomersList();
  }

  getCustomersList() {
    this.playerService.getPlayersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(players => {
      this.players = players;
      console.log(this.players);
      this.dataSource = new MatTableDataSource(this.players);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

  applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

