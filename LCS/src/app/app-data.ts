import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductCategory } from './product-categories/product-category';
import { ProductCategoryData } from './product-categories/product-category-data';
import { Product } from './products/product';
import { ProductData } from './products/product-data';
import { Supplier } from './suppliers/supplier';
import { SupplierData } from './suppliers/supplier-data';

export class AppData implements InMemoryDbService {
  createDb(): {
    products: Product[];
    productCategories: ProductCategory[];
    suppliers: Supplier[];
  } {
    const products = ProductData.products;
    const productCategories = ProductCategoryData.categories;
    const suppliers = SupplierData.suppliers;
    return { products, productCategories, suppliers };
  }
}
