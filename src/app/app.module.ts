import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { FormsModule } from '@angular/forms';
import { ChainingDialogComponent } from './chaining-dialog/chaining-dialog.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChainingDialogComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MaterialImportsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
