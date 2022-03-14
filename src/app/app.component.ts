import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements OnInit { --不加為什麼沒影響
export class AppComponent {
  title = 'active-class';


  ngOnInit() {
    console.log('APP ngOnInit');
  }

  ngAfterViewInit() {
    console.log('APP ngAfterViewInit');
  }
}