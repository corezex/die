import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { SiteStructuredData } from "@/app/components/SiteStructuredData";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const siteUrl = "https://dietfiniti.com";

export const viewport: Viewport = { themeColor: "#0f766e", colorScheme: "light" };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "DietFiniti | Personalised Dietitian & Nutrition Plans", template: "%s | DietFiniti" },
  description:
    "Personalised nutrition consultations and practical Indian meal plans from DietFiniti. Visit our Mumbai clinic or book an online consultation anywhere in India.",
  applicationName: "DietFiniti",
  authors: [{ name: "Dietitian Tejal" }],
  creator: "DietFiniti",
  publisher: "DietFiniti",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "DietFiniti",
    title: "DietFiniti | Personalised Dietitian & Nutrition Plans",
    description: "Personalised nutrition consultations and practical Indian meal plans in Mumbai, Thane and online across India.",
    images: [{ url: "/image/homeimage.jpg", alt: "DietFiniti personalised nutrition consultation" }],
  },
  twitter: { card: "summary_large_image", title: "DietFiniti | Personalised Dietitian & Nutrition Plans", description: "Practical, personalised nutrition support from Dietitian Tejal.", images: ["/image/homeimage.jpg"] },
  category: "Health",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className={inter.className}>
        <SiteStructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
        <a href="https://wa.me/919321057899" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat with DietFiniti on WhatsApp">
          <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" /></svg>
        </a>
        <Script id="tawk-to" strategy="afterInteractive">{`var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/693c44c3e0ccea197d8fdeea/1jc9mp7sd';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();`}</Script>
      </body>
    </html>
  );
}
