const secretkey = '*Config.%^secretkey*';

module.exports = {
    appConfig: {
        host: 'localhost',
        port: 3000,
        labels : ['api'],
        routes: {
            cors: true
        }
    },
    socketConfig : {
        host : 'localhost',
        port : 3001,
        labels : ['realtime']
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