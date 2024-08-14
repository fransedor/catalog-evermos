import React from "react";

const Catalog = () => {
  const products = [
    { id: 1, name: "Product 1", description: "Description for product 1", image: "/product1.jpg" },
    { id: 2, name: "Product 2", description: "Description for product 2", image: "/product2.jpg" },
    { id: 3, name: "Product 3", description: "Description for product 3", image: "/product3.jpg" },
    { id: 4, name: "Product 4", description: "Description for product 4", image: "/product4.jpg" },
    { id: 5, name: "Product 5", description: "Description for product 5", image: "/product5.jpg" },
    { id: 6, name: "Product 6", description: "Description for product 6", image: "/product6.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Product Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
