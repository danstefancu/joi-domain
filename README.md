# joi-domain

## Usage

```js
const Joi = require('@hapi/joi').extend(require('joi-domain'));

let validator = Joi.domain();
let {error, value} = validator.validate('münchen.de')

// error = undefined
// value = 'xn--mnchen-3ya.de'
```
