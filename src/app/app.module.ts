import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { ActiveClassComponentComponent } from './active-class-component/active-class-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    ActiveClassComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
