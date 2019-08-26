import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ViewComponent } from './view/view.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NameComponent } from './name/name.component';
import { HeaderComponent } from './header/header.component';
import { AddpComponent } from './addp/addp.component';
import { EditpComponent } from './editp/editp.component';
import { DeletepComponent } from './deletep/deletep.component';
import { ViewpComponent } from './viewp/viewp.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Data2Component } from './data2/data2.component';
import {CalcService} from './calc.service';
import {HttpClientModule} from'@angular/common/http';
import {MsgService} from './msg.service'
const approutes:Routes=[
  {path:"new",component:AddpComponent},
  {path:"edit",component:EditpComponent},
  {path:"delete",component:DeletepComponent},
  {path:"view",component:ViewComponent},
  {path:"about",component:AboutusComponent},
  {path:"contact",component:ContactusComponent},
  {path:"service",component:Data2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ViewComponent,
    DataComponent,
    LoginComponent,
    SignupComponent,
    CalculatorComponent,
    NameComponent,
    HeaderComponent,
    AddpComponent,
    EditpComponent,
    DeletepComponent,
    ViewpComponent,
    AboutusComponent,
    ContactusComponent,
    Data2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approutes),
    HttpClientModule
  ],
  providers: [CalcService,MsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
