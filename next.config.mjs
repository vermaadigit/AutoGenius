/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xakzfyjyirjdfecvnfps.supabase.co",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "content-security-policy",
            value: "frame-src 'self' https://autogenius.created.app",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
