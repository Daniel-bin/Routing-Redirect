import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RentalListComponent } from './rental-list/rental-list.component';

import { WatchListComponent } from './watch-list/watch-list.component';
import { FlopListComponent } from './flop-list/flop-list.component';
import { routingTable } from './routes';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, HttpClientModule,
    RouterModule.forRoot(routingTable)
     ],
  declarations: [ 
    AppComponent, 
    WatchListComponent, 
    RentalListComponent,
    FlopListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
