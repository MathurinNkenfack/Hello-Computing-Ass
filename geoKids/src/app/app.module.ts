import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TitleComponent } from './components/title/title.component';
import { CalculatorComponent } from './components/calculator/calculator.component';  
import { HttpErrorsInterceptor } from './interceptors/http-error.interceptor';
import {SquareObjectComponent} from './components/square-object/square-object.component';
import { RectangleObjectComponent } from './components/rectangle-object/rectangle-object.component';
import { CircleObjectComponent } from './components/circle-object/circle-object.component';
import { TrapeziumObjectComponent } from './components/trapezium-object/trapezium-object.component';
import { RaTriangleObjectComponent } from './components/ra-triangle-object/ra-triangle-object.component';
import { EquiTriangleObjectComponent } from './components/equi-triangle-object/equi-triangle-object.component';
import { IsoTriangleObjectComponent } from './components/iso-triangle-object/iso-triangle-object.component';
import { ScaTriangleObjectComponent } from './components/sca-triangle-object/sca-triangle-object.component';
import { DisplayResultComponent } from './components/display-result/display-result.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CalculatorComponent,
    SquareObjectComponent,
    RectangleObjectComponent,
    CircleObjectComponent,
    TrapeziumObjectComponent,
    RaTriangleObjectComponent,
    EquiTriangleObjectComponent,
    IsoTriangleObjectComponent,
    ScaTriangleObjectComponent,
    DisplayResultComponent,
    InputFieldComponent,
    SelectFieldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
