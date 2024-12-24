/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // تمكين التصدير الثابت
  images: {
    unoptimized: true, // لتعطيل تحسين الصور إذا كنت تستخدم Netlify
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
