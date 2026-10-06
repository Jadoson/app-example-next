import webpack from "webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __ALL_ENV__: JSON.stringify(process.env),
      })
    );

    return config;
  },
};

export default nextConfig;
