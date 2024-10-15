import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartsComponent } from './carts/carts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SelectComponent } from './select/select.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { LoadingComponent } from './loading/loading.component';
import { HeaderComponent } from './header/header.component';
import { ElectronicesComponent } from './electronices/electronices.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './admin/products/products.component';
import { CartsadminComponent } from './admin/cartsadmin/cartsadmin.component';
import { authGuard } from './auth.guard';



const routes: Routes = [
  
  { path: 'home', component: HomeComponent },

      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'allproducts',component:AllproductsComponent, children: [
        { path: 'loading', component: LoadingComponent }
      ]},
      { path: 'carts', component: CartsComponent, canActivate :[authGuard]  },
        
      { path: 'productdetails/:id', component: ProductdetailsComponent },
      { path: 'select', component: SelectComponent },
      { path: 'electronices', component: ElectronicesComponent },
      { path: 'jewelery', component: JeweleryComponent },
      {path:'orders',component:ProductsComponent},
      {path:'cartsadmin',component:CartsadminComponent},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
