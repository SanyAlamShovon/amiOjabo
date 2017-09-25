const secretkey = '*Config.%^secretkey*';

module.exports = {
    appConfig: {
        host: process.env.APP_HOST,
        port: process.env.APP_PORT,
        routes: {
            cors: true
        }
    },
    secretkey,
    publicFolder: './public',
    uploadFolder: '/resources',
    MixFolder: './public/resources',
    MixInsideFolder: './public/resources/',
    mongo: {
        username: 'amiojabo',
        password: 'PROSENghosh28',
        url: 'ds147974.mlab.com:47974',
        database: 'amiojabo'
    }
};