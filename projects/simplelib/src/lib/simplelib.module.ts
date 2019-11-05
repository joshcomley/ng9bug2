import { NgModule } from '@angular/core';
import { SimplelibComponent } from './simplelib.component';
import { Label1Component } from './label1/label1.component';



@NgModule({
  declarations: [SimplelibComponent, Label1Component],
  imports: [
  ],
  exports: [SimplelibComponent, Label1Component]
})
export class SimplelibModule { }
