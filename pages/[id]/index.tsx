// pages/products/[id].js
import ImageCarousel from "@/components/ImageCarousel";
import { Product } from "@/types/Product";
import formatPrice from "@/utils/helpers/formatPrice";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div className="container mx-auto px-4 py-8">
			<Head>
				<title>{product.title}</title>
			</Head>
      <div className="flex gap-6 flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col gap-4">
          <ImageCarousel images={product.images} title={product.title} />
          <div className="flex gap-2 justify-center">
            {product.images.map((image) => (
              <img
                key={image}
                src={image}
                alt={product.title}
                className="w-24 h-24 object-contain rounded-lg "
                onError={(e) => {
                  e.currentTarget.src = "/img-placeholder.svg";
                }}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-xl text-gray-600 mb-4">${formatPrice(product.price)}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="mt-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg  hover:bg-blue-600 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export default ProductDetail;
