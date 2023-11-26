// vendor dependencies
const chai = require('chai')
const expect = require('chai').expect
const chaiHttp = require('chai-http')

// project dependencies
const api = require('../api')

const should = chai.should()

chai.use(chaiHttp)

describe('/files', () => {
  describe('get /list', () => {
    it('it should get the files list from the toolbox api', (done) => {
      chai.request(api)
        .get('/files/list')
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.a('object')
          expect(res.body).to.have.property('files')
          for (const element of res.body.files) {
            expect(element).to.be.a('string')
          }
          done()
        })
    })
  })

  describe('get /data', () => {
    it('it should get the data in files list from the toolbox api', (done) => {
      chai.request(api)
        .get('/files/data')
        .end((err, res) => {
          res.should.have.status(200)
          res.should.be.an('object')
          expect(res.body).to.be.an('array')
          for (const element of res.body) {
            expect(element).to.have.property('file')
            expect(element).to.have.property('lines')
            for (const line of element.lines) {
              expect(line).to.have.property('text')
              expect(line.text).to.be.a('string')
              expect(line).to.have.property('number')
              expect(line.number).to.be.a('number')
              expect(line).to.have.property('hex')
              expect(line.hex).to.be.a('string')
            }
          }
          done()
        })
    })
  })
})
