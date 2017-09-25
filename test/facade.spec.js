'use strict';
const expect = require('chai').expect;
const assert = require('chai').assert;
//const should = require('chai').should;
import Library from '../src/index';

describe('Facade', () => {

       it('It should be possible to create lib instance without any params ', () => {
           expect(function() {
               new Library();
           }).to.not.throw();
       });

       it('Should implements EventEmmiter interface ', () => {
            const EventEmitter = require('events');
            let lib = new Library();
            assert.instanceOf(lib, EventEmitter);
       });

       it('should export version string', () => {
           expect(Library.getVersion).to.be.a('function');
           expect(Library.getVersion()).to.be.a('string');
           expect(Library.getVersion()).to.match(/\d+\.\d+\.\d+/i);
           assert.ok(Library.getVersion() == "1.0.0");
       });

       describe('Parse func', () => {
          let lib = new Library();
          it('should throw an Error in when non-uri parameter passed as param', () => {

              expect(function () {
                  lib.parse(Math.PI);
              }).to.throw();
              expect(function () {
                  lib.parse();
              }).to.throw();
          });
          var instance = null;

          it ('should allow to read file from stdin and accept file:// scheme', () => {
              expect(function() {
                  lib.parse('file://proc/self/fd/1');
              }).to.not.throw();
          });

          var instance = lib.parse(process.stdin);
          assert.instanceOf(instance,Library, "instance created after lib/parse should be an instance of lib");

          it('should accept Stream as param', () => {
              expect(function() {
                  lib.parse(process.stdin);
              }).to.not.throw();
          });

       });

});

