# joi-domain
Full domain validation with punny code conversion and icann tld validation

## Usage

```js
const Joi = require('joi').extend(require('joi-domain'));

let validator = Joi.domain();
let {error, value} = validator.validate('münchen.de');
// error = undefined
// value = 'xn--mnchen-3ya.de'


let {error1, value1} = validator.validate('example.nonexistent');
// error1 = { message: "value needs to be a valid domain", ... }
// value1 = 'example.nonexistent'


let validator2 = Joi.domain().optional();
let {error2, value2} = validator.validate();
// error2 = undefined
// value2 = undefined


let validator3 = Joi.domain().allow('');
let {error3, value3} = validator.validate('');
// error3 = undefined
// value3 = ''

```
