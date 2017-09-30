const HapiAsync = require('hapi-async-handler');
const Good = require('good');

const options = {
    ops: {
        interval: 1000
    },
    reporters: {
        console: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{log: '*', response: '*'}]
        }, {
            module: 'good-console'
        }, 'stdout'],
        file: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ops: '*'}]
        }, {
            module: 'good-squeeze',
            name: 'SafeJson'
        }]
    }
};

module.exports = [
    {
        register: HapiAsync
    }
    // {
    //     register: Good,
    //     options: options
    // }
];