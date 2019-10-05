import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { VirtualmachinesComponent } from './components/vm/virtualmachines/virtualmachines.component';
import { AwsComponent } from './components/vm/aws/aws.component';
import { AzureComponent } from './components/vm/azure/azure.component';
import { GcpComponent } from './components/vm/gcp/gcp.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component'
import { AuthInterceptor } from './components/auth/auth.interceptor';
import { PricetableComponent } from './components/tables/pricetable/pricetable.component';
import { ChartsComponent } from './components/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    VirtualmachinesComponent,
    AwsComponent,
    AzureComponent,
    GcpComponent,
    DashboardComponent,
    HeaderComponent,
    PricetableComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
