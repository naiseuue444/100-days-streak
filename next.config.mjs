/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoName = "100-days-streak";
const basePath = isProd ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: isProd ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
