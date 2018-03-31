import * as api from './index';
import 'isomorphic-fetch';
import { expect } from 'chai';

describe('Testing API methods', () => {

  describe('#fetchPosts', () => {
    const fetchPostsAjax = api.fetchPostsAjax;

    it('should return object with items property', (done) => {
      fetchPostsAjax().then(res => {

        expect(res).to.have.property('items');
        expect(res.items).to.be.an('array');

        done();
      });
    });

    
  });

});
