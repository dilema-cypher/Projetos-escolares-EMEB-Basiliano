import type {Metadata} from"next"
import "./globals.css";
import {meuMetadata} from"@/metadata";

export const metadata: Metadata=meuMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        
        {children} 
      </body>
    </html>
  );
}
