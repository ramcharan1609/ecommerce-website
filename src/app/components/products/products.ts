import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  searchText = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;

    const search = this.router.parseUrl(
      this.router.url
    ).queryParams['search'];

    if (search) {
      this.searchText = search;
      this.searchProducts();
    }
  }

  searchProducts(): void {

    const search = this.searchText
      .trim()
      .toLowerCase();

    if (!search) {
      this.filteredProducts = this.products;
      return;
    }

    this.filteredProducts = this.products.filter(
      product =>
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)
    );
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(product.name + ' added to cart!');
  }
}