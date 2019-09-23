import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AwsComponent } from './components/vm/aws/aws.component';
import { GcpComponent } from './components/vm/gcp/gcp.component';
import { AzureComponent } from './components/vm/azure/azure.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes:Routes =[
    {
        path:'', 
        pathMatch:'full',
        redirectTo:'login'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'home/aws',
        component:AwsComponent
    },
    {
        path:'home/azure',
        component:AzureComponent
    },
    {
        path:'home/gcp',
        component:GcpComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }

