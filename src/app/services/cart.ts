import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = [];

  private cartSubject = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartSubject.asObservable();

  addToCart(product: Product): void {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    this.cartSubject.next(this.cartItems);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  getCartCount(): number {
    return this.cartItems.length;
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (total, product) => total + product.price,
      0
    );
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }
}