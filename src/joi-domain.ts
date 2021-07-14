"use strict";

import DomainAdapter from "domain-adapter";

module.exports = (joi) => ({
    base: joi.string(),
    type: "domain",
    validate: function (value, helpers) {
        let d = new DomainAdapter(value);

        if (!d.valid) {
            return { value, errors: helpers.error('domain') }
        }

        return { value: d.hostname, errors: [] };
    },
    messages: {
        ['domain']: '{{#label}} needs to be a valid domain'
    }
});

module.exports.default = module.exports;
