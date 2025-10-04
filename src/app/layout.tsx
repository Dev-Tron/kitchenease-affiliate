import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "KitchenEase",
  description: "Fresh, practical home & kitchen picks",
  openGraph: { type: "website", title: "KitchenEase", description: "..." }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased bg-background text-foreground`}>
        <Header />
        <main className="container mx-auto px-4 pt-24 md:pt-32 pb-12 space-y-16">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
