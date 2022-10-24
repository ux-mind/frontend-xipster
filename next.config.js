const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'development' ? '' : '/app',
    // Source map config is here
    // productionBrowserSourceMaps: true
};

module.exports = nextConfig;
