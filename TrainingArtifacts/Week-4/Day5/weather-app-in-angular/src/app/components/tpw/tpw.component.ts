import { Component, OnInit, Input } from '@angular/core';
import { Itpw } from '../../models/tpw';

@Component({
  selector: 'app-tpw',
  templateUrl: './tpw.component.html',
  styleUrls: ['./tpw.component.css']
})
export class TpwComponent implements OnInit {

  @Input() tpwInfo: Itpw;
  constructor() { }

  ngOnInit() {
  }

}
