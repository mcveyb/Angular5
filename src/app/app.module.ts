import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { RatingComponent } from './rating/rating.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';

//Custom Pipes
import {TruncatePipe} from './custompipes/truncate.pipe';
import { LoginService } from './service/login.service';


@NgModule({
  declarations: [
    AppComponent, 
    ProductsComponent, 
    RatingComponent, 
    ProductComponent,
    TruncatePipe,
    JumbotronComponent,
    UserFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    ReactiveFormsModule   
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
