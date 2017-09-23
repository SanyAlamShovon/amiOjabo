const testController = require('../controllers/test');
const TEST = {
    method: 'GET',
    path: '/',
    config: {
      description: 'This Route Is For Test Purpose',
      handler: testController.TEST
    }
}
module.exports = {
    TEST
};