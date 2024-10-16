import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartsComponent } from './carts/carts.component';
import { SelectComponent } from './select/select.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { Product1Component } from './product1/product1.component';

import { JeweleryComponent } from './jewelery/jewelery.component';
import { MenscolthesComponent } from './menscolthes/menscolthes.component';
import { WomanclothesComponent } from './womanclothes/womanclothes.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpSpinnerService } from './interceptors/http-spinner.service';
import { ProductsComponent } from './admin/products/products.component';
import { CartsadminComponent } from './admin/cartsadmin/cartsadmin.component';
import { USDtoEGPPipe } from './pipes/usdto-egp.pipe';
import { authGuard } from './auth.guard';





 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllproductsComponent,
    ProductdetailsComponent,
    CartsComponent,
    SelectComponent,
    HomeComponent,
    LoadingComponent,
    Product1Component,
  
    JeweleryComponent,
    MenscolthesComponent,
    WomanclothesComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    CartsadminComponent,
    USDtoEGPPipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'line-scale-party' }),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BrowserAnimationsModule, // Required for toastr animations
    ToastrModule.forRoot({    // ToastrModule with global configuration
      timeOut: 3000,
      positionClass: 'toast-top-right',  // Positioning the toast
      preventDuplicates: true,
    }),
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass:HttpSpinnerService ,
      multi: true
    },
  

  ],
   
  bootstrap: [AppComponent]
})
export class AppModule { }
