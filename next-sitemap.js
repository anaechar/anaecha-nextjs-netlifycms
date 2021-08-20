module.exports = {
    siteUrl: process.env.SITE_BASE_URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', disallow: '/admin' },
            { userAgent: '*', allow: '/' }
        ]
    },
    exclude: ['/admin']
};