"use strict";

import {expect} from "chai";
import * as joiDomainValidator from "../src/joi-domain";
const Joi = require('@hapi/joi').extend(joiDomainValidator);

describe('joiDomainValidator (joi-domain.spec.ts)', () => {

    it('should validate existent domain', async () => {
        let d = Joi.domain();
        let {error, value} = d.validate('example.com');

        expect(value).to.equal('example.com');
        expect(error).to.be.undefined;

    });

    it('should validate domain with umlaut', async () => {
        let d = Joi.domain();
        let {error} = d.validate('cr-umzüge-transporte.de')

        expect(error).to.be.undefined;

    });

    it('should return punnycode value for domain with umlaut', async () => {
        let d = Joi.domain();
        let {error, value} = d.validate('cr-umzüge-transporte.de')

        expect(error).to.be.undefined;
        expect(value).to.equal('xn--cr-umzge-transporte-bbc.de');

    });

    it('should not validate domain with nonexistent tld', async () => {
        let d = Joi.domain();
        let {error} = d.validate('example.nonexistent');

        expect(error).to.not.be.undefined;
        expect(error.message).to.be.a('string').that.includes('needs to be a valid domain');

    });

    it('should allow empty string', async () => {
        let d = Joi.domain().allow('');
        let {error} = d.validate('');

        expect(error).to.be.undefined;

    });

    it('should allow optional', async () => {
        let d = Joi.domain().optional();
        let {error} = d.validate();

        expect(error).to.be.undefined;

    });

});
