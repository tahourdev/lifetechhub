import { Inter, Outfit, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import clsx from "clsx";
import Categories from "@/components/header/Categories";
import NextTopLoader from "nextjs-toploader";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const ibmplexsans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  metadataBase: new URL("https://lifetechhub.vercel.app"),
  title: {
    default: "Life Tech Hubs",
    template: `%s  | Life Tech Hubs`,
  },
  description:
    "Your ultimate destination for tech updates, health insights, travel adventures, how-to guides, and cultural highlights. Explore a hub of diverse content that enriches your life with knowledge and entertainment.",
  keywords: "technology, health, travel, guides, culture, lifestyle",
  author: "Life Tech Hubs",
  siteUrl: "https://lifetechhub.vercel.app/",
  // image: "https://www.lifetechhubs.com/cover-image.jpg",
  verification: {
    google: "google-site-verification=123123123",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:image" content={metadata.image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LifeTechHubs" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:alt" content="About life tech hub" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body
        className={clsx(
          ibmplexsans.className,
          // inter.className,
          // outfit.className,
          "w-full overflow-hidden bg-primary selection:bg-secondary selection:text-primary",
        )}
      >
        <NextTopLoader
          showSpinner={true}
          height={5}
          color="#27AE60"
          easing="cubic-bezier(0.53,0.21,0,1)"
        />
        <Header />

        <Categories />
        {children}
        <Footer />
        <SpeedInsights />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
