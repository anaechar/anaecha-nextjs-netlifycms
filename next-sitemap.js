module.exports = {
    siteUrl: process.env.SITE_BASE_URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/', disallow: ['/admin'] }
        ]
    },
    exclude: ['/admin'],
    transform: async(config,path) => {
        console.log(path);
        return {
            loc: path,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined
        }
    }
};