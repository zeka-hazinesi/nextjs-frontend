import Pricing from "@/components/Pricing";
import { getActiveProductsWithPrices } from "@/utils/supabase-server";

export default async function Home() {
  const products = await getActiveProductsWithPrices();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <Pricing products={products}/>
      </main>
    </>
  );
}
