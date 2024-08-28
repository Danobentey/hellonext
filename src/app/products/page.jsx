// src/app/products/page.jsx

import Image from 'next/image';
import wooCommerce from '../../lib/woocommerce';
import { SignedIn, UserButton } from '@clerk/nextjs';

export default async function ProductsPage() {
  let products = [];

  try {
    const response = await wooCommerce.get('products');
    products = response.data;
    // console.log(products)
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <div key={product.id} className="shadow-md rounded-lg overflow-hidden">
            <div className="relative pb-3/4">
              {product.images.length > 0 ? (
                <Image
                  src={product.images[0].src}
                  alt={product.name}
                  width={300}
                  height={300}
                  // layout="fill"
                  // fill
                  // objectFit="cover"
                  className="mx-auto inset-0"
                />
              ) : (
                <div className="bg-gray-200 h-full flex items-center justify-center">
                  <p className="text-gray-500">No image available</p>
                </div>
              )}
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
