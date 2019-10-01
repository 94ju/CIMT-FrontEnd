import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AwsComponent } from './components/vm/aws/aws.component';
import { GcpComponent } from './components/vm/gcp/gcp.component';
import { AzureComponent } from './components/vm/azure/azure.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { PricetableComponent } from './components/tables/pricetable/pricetable.component';
import { AuthGuard } from './components/auth/auth.guard';
import { AuthService } from './components/auth/auth.service';

const routes:Routes =[
    {
        path:'', 
        pathMatch:'full',
        redirectTo:'header'
    },
    {
        path:'header',
        component:HeaderComponent,
        children:[
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'register',
                component:RegisterComponent
            }
        ]
    },
    {
        path:'home',
        component:HomeComponent,
        canActivate:[
            AuthGuard
        ],
        children:[
            {
                path:'aws',
                component:AwsComponent
            },
            {
                path:'azure',
                component:AzureComponent
            },
            {
                path:'gcp',
                component:GcpComponent
            },
        ]
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'pricetable',
        component:PricetableComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers:[AuthGuard]
  })
  
  export class AppRoutingModule { }

