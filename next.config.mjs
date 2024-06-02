/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["mks-sistemas.nyc3.digitaloceanspaces.com"],
  },
};

export default nextConfig;
