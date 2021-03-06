import { Component, OnInit } from '@angular/core';
import { RiversService } from '../rivers.service';
@Component({
  selector: 'app-rivers',
  templateUrl: './rivers.component.html',
  styleUrls: ['./rivers.component.css']
})
export class RiversComponent implements OnInit {
  rivers;
  samples;

  constructor(private service: RiversService) { }

  ngOnInit() {
    this.rivers = this.service.getRivers();
    this.samples = this.service.getSamples();
  }

}
