/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
          {
            source: "/discord",
            destination: "https://discord.gg/AFFYnNVXpZ",
            permanent: false,
            basePath: false,
          },
          {
            source: "/sponsorship",
            destination: "/documents/sponsorship-prospectus.pdf",
            permanent: false,
            basePath: false,
          },
        ];
    },
    async rewrites() {
        return [
            {
                source: "/sitemap.xml",
                destination: "/api/sitemap",
            },
        ]
    },
    swcMinify: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

module.exports = nextConfig;
