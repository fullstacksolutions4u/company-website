import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // /about -> /about/index.html, works natively on S3 + CloudFront
  images: { unoptimized: true }, // no image optimizer server in a static export
};

export default nextConfig;
