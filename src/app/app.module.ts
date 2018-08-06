import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import AppComponent from './app.component';
import {NAME} from './app.component';
import { MyNestedComponent } from './my-nested/my-nested.component';
import { MyNested2Component } from './my-nested2/my-nested2.component';
import { MyNested3Component } from './my-nested/my-nested3/my-nested3.component';
import { MyPropertyBindingComponent } from './my-property-binding/my-property-binding.component';
import { MyEventBindingComponent } from './my-event-binding/my-event-binding.component';
import { MyMixedBindingComponent } from './my-mixed-binding/my-mixed-binding.component';
import { MyTwoWayBindingComponent } from './my-two-way-binding/my-two-way-binding.component';
import { MyEventBinding2Component } from './my-event-binding2/my-event-binding2.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNestedComponent,
    MyNested2Component,
    MyNested3Component,
    MyPropertyBindingComponent,
    MyEventBindingComponent,
    MyMixedBindingComponent,
    MyTwoWayBindingComponent,
    MyEventBinding2Component,
    NgIfExampleComponent,
    NgForExampleComponent,
    NgSwitchExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- This is what adds ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
