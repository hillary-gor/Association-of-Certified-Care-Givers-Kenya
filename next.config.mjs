/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rzprmsavgqeghpnmparg.supabase.co",
        pathname: "/storage/v1/object/public/staticimages/**",
      },
      {
        protocol: "https",
        hostname: "rzprmsavgqeghpnmparg.supabase.co",
        pathname: "/storage/v1/object/public/institution-logos/**",
      },
      {
        protocol: "https",
        hostname: "rzprmsavgqeghpnmparg.supabase.co",
        pathname: "/storage/v1/object/public/assets/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  },
};

export default nextConfig;
