const chai = require('chai');
const expect = chai.expect;

import { LogParser } from '../src/log-parser';
import {LineJson} from '../src/interfaces';
import {ValidationError} from '../src/app.modules';

describe('log-parser', () => {
  before(async function () {
     this.inputFilePath = './app.log';
     this.outputFilePath = './errors.json';
     this.parser = new LogParser(this.inputFilePath, this.outputFilePath);
     this.acceptedStringFormat = '2021-08-09T02:12:51.259Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}'
     this.unacceptedStringFormat = '2021-08-09T02:12:51.259Z '
  })
  describe('validateLogLine()', function(){
    it('should return true for accepted line format string', function(){  
      expect(this.parser.validateLogLine(this.acceptedStringFormat)).to.be.true
    });

    it('should return false for unaccepted line format', function(){
      expect(this.parser.validateLogLine(this.unacceptedStringFormat)).to.be.false
    });
  });

  describe('parseLine()', function(){
    it('should return object of type lineJson when fully parsed ', function(){  
      expect(this.parser.parseLine(this.acceptedStringFormat)).to.be.an('object');
    });
  });

});
