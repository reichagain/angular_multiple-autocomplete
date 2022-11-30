import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
    MatAutocompleteModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  } from '@angular/material';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    MatAutocompleteModule, 
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
