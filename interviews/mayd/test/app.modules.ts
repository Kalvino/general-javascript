const chai = require('chai');
const expect = chai.expect;

import {convertISOToEpoch} from '../src/app.modules';

describe('log-parser', () => {
  before(async function () {
     this.acceptedStringFormat = '2021-08-09T02:12:51.259Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}'
     this.isoDate = '2021-08-09T02:12:51.259Z';
  })
  describe('convertISOToEpoch()', function(){
    it('should return Epoch time if valid date is used', function(){  
      expect(convertISOToEpoch(this.isoDate)).to.equal(1628475171259);
    });
  });
});
