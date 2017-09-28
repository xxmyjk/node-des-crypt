const crypt = require('./index');
const assert = require('assert');

// encrypt test
let encrypt_params = {
    type: 'des-cbc',
    key: '12345678',
    iv: '12345678',
    str: `{ username: 'admin', password: '111aaa' }`,
    autoPadding: true,
    charset: 'utf8',
    format: 'base64'
};
console.log(crypt.encrypt(encrypt_params));


// decrypt test

let decrypt_params = {
    type: 'des-cbc',
    key: '12345678',
    iv: '12345678',
    str: `bIfUsfQ7+Nx4bsWR6WIyPpVSLpiU52FNmCNR/zl9/QZGw5jllpXQNioafZPn/4v7`,
    autoPadding: true,
    charset: 'base64',
    format: 'utf8'
};

console.log(crypt.decrypt(decrypt_params));
