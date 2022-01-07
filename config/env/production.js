module.exports = {
    app: {
        title: 'Production Environment',
        timeout: 3000
    },
    server: {
        port: process.env.serverport || 8080,
        hostname: process.env.serverhost || 'localhost'
    }
}