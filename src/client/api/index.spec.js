import * as api from './index';
import 'isomorphic-fetch';
import { expect } from 'chai';
import fetch from 'jest-fetch-mock';

global.fetch = fetch;

describe('Testing API methods', () => {

  describe('#fetchPosts', () => {
    const fetchPostsAjax = api.fetchPostsAjax;

    beforeEach(() => {
      fetch.resetMocks();
    });

    it('should return object with items property', (done) => {
      fetch.mockResponseOnce(JSON.stringify({ items: [] }));
      fetchPostsAjax().then(res => {

        expect(res).to.have.property('items');
        expect(res.items).to.be.an('array');

        done();
      });
    });


  });

  describe('#createPostAjax', () => {
    const createPostAjax = api.createPostAjax;
    const sampleToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YWEwZGVkYWUzZmEwMTQ2MWNhMmRlMDYiLCJuYW1lIjoiQWlib2wiLCJpYXQiOjE1MjI1Mjk2MjB9.xKHkQcNDNmltpAtPsjBsyI5NGN2OMnW9stiUoRUbJsk';
    const samplePost = {
      author: '5aa38d28603bc27156727f49',
      text: 'Sample text'
    };
    const sampleResponse = {
      "createdAt": "2018-03-31T21:30:08.150Z",
      "updatedAt": "2018-03-31T21:30:08.150Z",
      "_id": "5abffde025221e0918bb46e1",
      "author": {
        "createdAt": "2018-03-10T07:45:44.906Z",
        "_id": "5aa38d28603bc27156727f49",
        "name": "User 0",
        "username": "user0",
        "password": "user0",
        "__v": 0
      },
      "text": "Sample text",
      "__v": 0
    };

    beforeEach(() => {
      fetch.resetMocks();
    });

    it('should have samplePost in body of fetch', (done) => {
      fetch.mockResponseOnce(JSON.stringify(sampleResponse));
      createPostAjax(samplePost).then(res => {
        expect(JSON.parse(fetch.mock.calls[0][1].body)).to.deep.equal(samplePost);
        done();
      });
    });


  });

});
