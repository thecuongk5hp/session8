import React from 'react'
import Breadcrumb from '@/components/Breadcrumb';
export default function Bai3() {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Laptops', href: '/products/laptops' },
        { label: 'Gaming Laptop', href: '/products/laptops/gaming' },
      ];
  return (
    <div className="p-4">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-2xl font-bold mt-4">Gaming Laptop</h1>
    </div>
  )
}
