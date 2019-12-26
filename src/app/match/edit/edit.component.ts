import { Component, OnInit, Input } from '@angular/core';
import { match } from '../shared/match';
import { matchService } from '../shared/match.service';
import { matchDataService } from '../shared/match-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  match: match
  key: string = '';

  constructor(private matchService: matchService, private matchDataService: matchDataService) { }

  ngOnInit() {
    this.match = new match();
    this.matchDataService.currentmatch.subscribe(data => {
      if (data.match && data.key) {
        this.match = new match();
        this.match.state = data.match.state;
        this.match.championship = data.match.championship;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if (this.key) {
      this.matchService.update(this.match, this.key);
    } else {
      this.matchService.insert(this.match);
    }

    this.match = new match();
  }
}
