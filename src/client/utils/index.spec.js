import * as utils from './index';
import { expect } from 'chai';

describe('Test utils functions', () => {

  describe('#decodeJwtToken', () => {
    const sampleToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YWEwZGVkYWUzZmEwMTQ2MWNhMmRlMDYiLCJuYW1lIjoiQWlib2wiLCJpYXQiOjE1MjI1Mjk2MjB9.xKHkQcNDNmltpAtPsjBsyI5NGN2OMnW9stiUoRUbJsk';
    const decodeJwtToken = utils.decodeJwtToken;
    const CookieHelper = {};

    beforeAll(() => {
      CookieHelper.createCookie = jest.fn();
    });

    it('should return object with "id" and "name" property', () => {
      const payload = decodeJwtToken(sampleToken);
      expect(payload).to.have.property('id');
      expect(payload).to.have.property('name');
    });

    it('should not call CookieHelper.createCookie', () => {
      const payload = decodeJwtToken(sampleToken);
      expect(CookieHelper.createCookie.mock.calls.length).to.equal(0);
    });

  });

});
