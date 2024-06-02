"use client";

import { Montserrat as MontserratFont } from "next/font/google";
import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/footer";
import { CartProvider } from "./context/cart";

const montserrat = MontserratFont({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <QueryClientProvider client={new QueryClient()}>
          <CartProvider>
            {children}
            <Footer />
          </CartProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
