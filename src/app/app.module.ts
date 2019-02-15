import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FetchComponent } from './fetch/fetch.component';
import { HomeComponent } from './home/home.component';
import { SendService } from './send.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FetchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component:FetchComponent},
     {path:'home/:title' , component:HomeComponent}
    ])
  ],
  providers: [SendService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
