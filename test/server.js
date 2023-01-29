/**
 * @description jest server
 * @author 玉
 */

const request = require('supertest')
const server = require('../src/app').callback()


module.exports = request(server)