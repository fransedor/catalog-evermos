import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ id, title, images, price }: Product) => {
  return (
    <Link href={`/${id}`} key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
			{/* Intentionally not using next/image Image because the source of the ima */}
      <img
        // The returned image field will be a stringified 1 item array of link
        // ex: "['https://google.com']"
        src={images[0]}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
