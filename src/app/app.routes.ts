import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home';
import { ProductsComponent } from './components/products/products';
import { ProductDetailsComponent } from './components/product-details/product-details';
import { CartComponent } from './components/cart/cart';
import { LoginComponent } from './components/login/login';
import { SignupComponent } from './components/signup/signup';

export const routes: Routes = [

  // First page when website opens
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'signup', component: SignupComponent },

  { path: 'home', component: HomeComponent },

  { path: 'products', component: ProductsComponent },

  { path: 'product/:id', component: ProductDetailsComponent },

  { path: 'cart', component: CartComponent },

  { path: '**', redirectTo: 'login' }
];