import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

try {
  const rootDir = __dirname;
  const equipDir = path.join(rootDir, "public", "equipment");

  // Clean up temporary script files
  ["copy_images.js", "cleanup.js"].forEach((file) => {
    const p = path.join(rootDir, file);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  });

  // Clean up old replaced .jpg files from public/equipment
  const oldJpgFiles = [
    "base-plates.jpg",
    "centring-props.jpg",
    "couplers.jpg",
    "h-frames.jpg",
    "ms-plates.jpg",
    "scaffold-frames.jpg",
    "scaffold-tubes.jpg",
    "vertical-hoist.jpg",
  ];
  oldJpgFiles.forEach((file) => {
    const p = path.join(equipDir, file);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  });
} catch (e) {
  // Silent cleanup
}

const nextConfig: NextConfig = {
  images: {
    formats:     ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    qualities:   [75, 80, 85],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
