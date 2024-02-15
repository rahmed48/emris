/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  sw: "service-worker.js",
  register: true,
  disable: process.env.NODE_ENV === "development",
  // disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
  // register: true,
  // skipWaiting: true,
  // sw: "service-worker.js",
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "daisyui.com",
        port: "",
        pathname: "/images/stock/**",
      },
    ],
  },
  // output: "export",
};

export default withPWA(nextConfig);
