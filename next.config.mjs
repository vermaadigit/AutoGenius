/** @type {import('next').NextConfig} */
const nextConfig = {
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
