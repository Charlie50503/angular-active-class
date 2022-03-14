import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-class-component',
  templateUrl: './active-class-component.component.html',
  styleUrls: ['./active-class-component.component.css']
})

export class ActiveClassComponentComponent {
  title = 'active-class';


  isActive = false;
  isColorKey = 'primary';
  status = 1
  str = 'd-none';
  myNewStr = ''

  constructor(protected _ngZone: NgZone) {

  }

  ngOnInit() {
    console.log('ActiveClassComponentComponent ngOnInit');
    this.myNewStr = this.str
  }

  changeStr() {
    // this._ngZone.runOutsideAngular(() => {
    this.str = ""
    // })
  }

  isShow() {
    this.isActive = !this.isActive
  }
  isChangeColorPrimary() {
    this.isColorKey = 'primary';
  }
  isChangeColorSecondary() {
    this.isColorKey = 'secondary';
  }
  isRemoveColor() {
    this.isColorKey = '';
  }

  returnIsActive() {
    console.log("returnIsActive")
    return this.isActive
  }
  returnIsStr() {
    return this.str
  }

  returnActiveColorByString() {
    if (this.isColorKey === 'primary') return 'text-primary'
    if (this.isColorKey === 'secondary') return 'text-secondary'
    return ''
  }
  returnActiveColorByArray() {
    if (this.isColorKey === 'primary') return ['text-primary']
    if (this.isColorKey === 'secondary') return ['text-secondary']
    return ['']
  }
  returnActiveColorByObject() {
    if (this.isColorKey === 'primary') return { 'text-primary': true }
    if (this.isColorKey === 'secondary') return { 'text-secondary': true }
    return {}
  }

  // 測試監聽

  setStatus1() {
    this.status = 1
  }
  setStatus2() {
    this.status = 2
  }

  //也就是說如果我用模板語法來寫，會讓
  activeReturnNewStr() {
    console.log("testOutAngular RUNNING")
    const oldStr = this.returnIsStr()
    const newStr = JSON.parse(JSON.stringify(oldStr));
    this._ngZone.runOutsideAngular(() => {
      return newStr
    })
  }


}