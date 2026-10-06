import webpack from "webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  webpack: (config) => {
    const env = {};

    for (const [key, value] of Object.entries(process.env)) {
      env[key] = value;
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        __ALL_ENV__: JSON.stringify(env),
      })
    );

    return config;
  },
};

export default nextConfig;
