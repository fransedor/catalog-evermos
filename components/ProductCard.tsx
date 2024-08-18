import { Product } from "@/types/Product";
import formatPrice from "@/utils/helpers/formatPrice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ id, title, images, price }: Product) => {
  return (
    <Link
      href={`/${id}`}
      key={id}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 relative z-40 fade-in"
    >
      {/* Intentionally not using next/image Image because the source of the ima */}
      <img
        src={images[0]}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.currentTarget.src = "/img-placeholder.svg";
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">${formatPrice(price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
