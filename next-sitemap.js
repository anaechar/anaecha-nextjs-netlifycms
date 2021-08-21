module.exports = {
    siteUrl: process.env.SITE_BASE_URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', disallow: '/admin' },
            { userAgent: '*', disallow: '/blog/category/*' },
            { userAgent: '*', allow: '/' }
        ]
    },
    exclude: ['/admin','/blog/category/*']
};