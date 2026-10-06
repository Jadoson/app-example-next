/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  env: {
    ...process.env,
  },
};

export default nextConfig;
