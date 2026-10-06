import fs from "fs";
import path from "path";

const envFile = path.join(process.cwd(), "src", "generated-env.js");

fs.writeFileSync(
  envFile,
  `export const ALL_ENV = ${JSON.stringify(process.env)};\n`
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

export default nextConfig;
