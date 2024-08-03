import { CartProvider } from "@/contexts/cart-context";
import Header from "@/components/header";
import { ReactNode } from "react";

type StoreProps = {
  children: ReactNode;
};

const StoreLayout = ({ children }: StoreProps) => {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  );
};

export default StoreLayout;
