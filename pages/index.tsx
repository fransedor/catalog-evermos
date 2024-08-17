import { Inter } from "next/font/google";
import SearchBar from "@/components/Searchbar";
import { GetServerSideProps } from "next";
import { Product } from "@/types/Product";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import useInView from "@/utils/hooks/useInView";
import { useRouter } from "next/router";
import fetcherWithSearchParams from "@/services/fetcherWithSearchParams";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const PRODUCTS_PER_PAGE = 12;

const PRODUCT_URL = "https://api.escuelajs.co/api/v1/products";

export default function Home({ products }: { products: Product[] }) {
  const router = useRouter();
  const { search } = router.query;
  const [productList, setProductList] = useState<Product[]>(products);
  const [hasNextPage, setHasNextPage] = useState(products.length === 12);

  const handleFetchNextPage = () => {
    // Only fetch next page when the returned products from API endpoint
    // is the amount of products per page
    // (if less than products per page, that means that we've reached the last page)
    const queryParams = {
      title: (search as string) || "",
      // The API need limit and offset to be set together
      limit: PRODUCTS_PER_PAGE.toString(),
      offset: productList.length.toString(),
    };
    fetcherWithSearchParams(PRODUCT_URL, queryParams).then((res) => {
      if (res.length < 12) {
        setHasNextPage(false);
      }
      setProductList((prev) => [...prev, ...res]);
    });
  };

  const observedElementRef = useInView(handleFetchNextPage, {});

  useEffect(() => {
    if (search !== undefined) {
      setProductList(products);
      setHasNextPage(products.length === 12);
    }
  }, [products, search]);

  return (
    <>
      <Head>
        <title>Catalog</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center sm:px-24 sm:py-12 p-6 gap-6 ${inter.className}`}
      >
        <h1 className="text-3xl font-bold">Browse Our Products</h1>
        <SearchBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-h-[700px] max-w-[1000px] overflow-x-visible overflow-y-auto hide-scrollbar">
          {productList.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          {hasNextPage && (
            <p
              ref={observedElementRef}
              className="sm:col-span-2 md:col-span-3 lg:col-span-4 text-center"
            >
              <span className="loading-spinner"></span>
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { search = "" } = context.query;

  const queryParams = {
    title: search as string,
    // The API need limit and offset to be set together
    limit: PRODUCTS_PER_PAGE.toString(),
    offset: "0",
  };

  try {
    const allProducts = await fetcherWithSearchParams(PRODUCT_URL, queryParams);
    return {
      props: {
        products: allProducts,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        products: [],
      },
    };
  }
};
