import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Providers from "@/redux/Providers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const APP_NAME = "Emris";
const APP_DEFAULT_TITLE = "Emris";
const APP_TITLE_TEMPLATE = "%s - Emris";
const APP_DESCRIPTION = "Electronic Medical Record Information System";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" data-theme="nord">
        <head>
          <link rel="icon" href="/EMRIS.png" sizes="any" />
        </head>
        <body>
          {children}
          <ToastContainer />
        </body>
      </html>
    </Providers>
  );
}
