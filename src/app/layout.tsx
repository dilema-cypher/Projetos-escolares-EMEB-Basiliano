import type { Metadata } from "next";
import "./globals.css";
import { meuMetadata } from "@/metadata";
import Header from "@/components/main/header/page";
import Footer from "@/components/footer/footer";
import Delay from "@/components/delay/delay";

export const metadata: Metadata = meuMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <div className="bg-linear-to-r from-[#ffffff] via-[#e0f7fa] to-[#b1eaf2] overflow-x-hidden pt-[220px]">
          {/* Banner */}
          <div>
            <div className="shadow-[0_12px_25px_rgba(0,0,0,0.25)] relative z-50">
              <Header></Header>
            </div>

            <Delay>{children}</Delay>
            <div>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
