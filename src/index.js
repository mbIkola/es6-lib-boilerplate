'use strict';

const Stream = require('stream');
const EventEmitter = require('events');

const VERSION = require('../package.json').version;

/**
 * some description
 */
export default class Library extends EventEmitter {
    /**
     *
     */
    constructor() {
        super();
    }

    /**
     * Intro point to lib.;
     * @param  {string|Stream} fileUriOrStream The input file.
     * @return {PackingListParser|null} an parser instance
     * @throws {Error} in case of invalid url, unreadable stream, missing params, etc..
     */
    parse( fileUriOrStream ) {
        if ( typeof fileUriOrStream !== 'string' && !(fileUriOrStream instanceof Stream) ) {
             throw new Error('FileURI parameter is missing or unsuuported: has to be an URI or ReadableStream');
        }

        return new Library();
    }


    /**
     * Retrieve library version.
     * @return {string} a version string in format $major.$minor.$build
     */
    static getVersion() {
        return VERSION; // @todo: replace with templatevar
    }
}

