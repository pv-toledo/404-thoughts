import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import {Roboto} from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // pesos que quiser
  variable: '--font-roboto', // opcional, para usar variáveis CSS
  fallback: ['sans-serif'],  // fallback se Roboto não carregar
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="pt-BR" suppressHydrationWarning>
        <head />

        <body className={`${roboto.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
