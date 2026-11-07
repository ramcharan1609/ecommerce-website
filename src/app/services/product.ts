import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Apple iPhone 15 with advanced camera and powerful performance.',
      price: 69999,
      image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500',
      category: 'Mobiles',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Samsung Galaxy S24 with AMOLED display and powerful processor.',
      price: 74999,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500',
      category: 'Mobiles',
      rating: 4.4
    },
    {
      id: 3,
      name: 'HP Laptop',
      description: 'HP laptop suitable for students, coding and everyday work.',
      price: 54999,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
      category: 'Laptops',
      rating: 4.3
    },
    {
      id: 4,
      name: 'Sony Headphones',
      description: 'Wireless headphones with high-quality sound and noise cancellation.',
      price: 8999,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      category: 'Electronics',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Smart Watch',
      description: 'Smart watch with fitness tracking and multiple useful features.',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      category: 'Accessories',
      rating: 4.2
    },
    {
      id: 6,
      name: 'Nike Running Shoes',
      description: 'Comfortable running shoes designed for sports and everyday use.',
      price: 3999,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      category: 'Fashion',
      rating: 4.5
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}