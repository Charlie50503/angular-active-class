import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  str = 'd-none';
  myNewStr = ''
  constructor() { }

  ngOnInit() {
    console.log('dummy ngOnInit');
    this.myNewStr = this.str
  }
  returnIsStr() {
    return this.str
  }

  changeStr() {
    this.str = ""
  }

  dummyCopyStrReturn() {
    console.log("dummyCopyStrReturn RUNNING")
    const oldStr = this.returnIsStr()
    const newStr = JSON.parse(JSON.stringify(oldStr));
    return newStr
  }
}
