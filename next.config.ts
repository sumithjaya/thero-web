import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "blog.wealfy.com.au",
      pathname: "/uploads/**",
    },
    {
      protocol: "http",
      hostname: "blog.wealfy.com.au",
      port: "1337",
      pathname: "/uploads/**",
    }
  ],
},

};

export default nextConfig;
