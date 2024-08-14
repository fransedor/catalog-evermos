import Image from "next/image";
import { Inter } from "next/font/google";
import SearchBar from "@/components/Searchbar";
import Catalog from "@/components/Catalog";
import { GetServerSideProps } from "next";
import { Product } from "@/types/Product";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }: { products: Product[] }) {
  return (
    <main className={`flex min-h-screen flex-col items-center sm:p-24 p-6 ${inter.className}`}>
      <h1 className="font-3xl">Evermos Catalog</h1>
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              // The returned image field will be a stringified 1 item array of link
              // ex: "['https://google.com']"
              src={JSON.parse(product.images[0])[0]}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { search = "", page = "1" } = context.query;
  const pageAsNumber = parseInt(page as string);
  const itemsPerPage = 10;
  const offsetParam = (pageAsNumber - 1) * itemsPerPage;

  const endpointUrl = new URL("https://api.escuelajs.co/api/v1/products");
  endpointUrl.searchParams.append("title", search as string);
  endpointUrl.searchParams.append("limit", itemsPerPage.toString());
  endpointUrl.searchParams.append("offset", offsetParam.toString());

  // Fetch all products from the API
  const res = await fetch(endpointUrl);
  const allProducts: Product[] = await res.json();

  console.log(allProducts[0].images.flatMap((image) => JSON.parse(image)));

  return {
    props: {
      products: allProducts,
    },
  };
};
