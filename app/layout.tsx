import "./globals.css";
import { onset } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Gradiiii - Generate your own gradient wallpapers",
  description:
    "A simple gradient genrator for your walls. Add your own colors or use one of our presets. Text are also supported.",
  metadataBase: new URL("https://gradiiii.vercel.app/"),
  keywords: [
    "gradient",
    "wallpaper",
    "generator",
    "design",
    "background",
    "colors",
  ],
  authors: [{ name: "Mohit Raj", url: "https://mohitraj.xyz" }],
  creator: "Mohit Raj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gradiiii.vercel.app/",
    title: "Gradiiii - Generate your own gradient wallpapers",
    description:
      "A simple gradient generator for your wallpaper. Add your own colors or use one of our presets. Texts are also supported.",
    siteName: "Gradiiii",
    images: [
      {
        url: "https://ibb.co/GfwSZyn7",
        width: 1200,
        height: 630,
        alt: "Gradiiii Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gradiiii - Generate your own gradient wallpapers",
    description:
      "A simple gradient generator for your wallpaper. Add your own colors or use one of our presets. Texts are also supported.",
    creator: "@MohitRaj",
    images: ["https://ibb.co/GfwSZyn7"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-schema: dark)", color: "black" },
  ]
};

export const links = [
  {
    rel: "preload",
    href: "/logo.svg",
    as: "image",
    type: "image/svg+xml",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${onset.variable} antialiased min-h-screen bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          {/** <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}